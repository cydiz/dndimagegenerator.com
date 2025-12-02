"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import { ToolPageLayout } from "@/components/ToolPageLayout";
import { useAuth } from "@/contexts/AuthContext";

type SubscriptionStatus = {
  hasSubscription: boolean;
  status: string;
  currentPeriodEnd?: number;
  cancelAtPeriodEnd?: boolean;
};

export default function AccountPage() {
  const router = useRouter();
  const { user, loading } = useAuth();
  const [subscription, setSubscription] = useState<SubscriptionStatus | null>(null);
  const [subLoading, setSubLoading] = useState(true);
  const [cancelling, setCancelling] = useState(false);

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login");
    }
  }, [user, loading, router]);

  useEffect(() => {
    if (user) {
      fetch("/api/subscription/status", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("auth_token")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setSubscription(data);
          setSubLoading(false);
        })
        .catch(() => {
          setSubLoading(false);
        });
    }
  }, [user]);

  async function handleCancelSubscription() {
    if (!confirm("Are you sure you want to cancel your subscription?")) {
      return;
    }

    setCancelling(true);
    try {
      const response = await fetch("/api/subscription/cancel", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("auth_token")}`,
        },
        body: JSON.stringify({ cancelAtPeriodEnd: true }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to cancel subscription");
      }

      // Refresh subscription status
      const statusRes = await fetch("/api/subscription/status", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("auth_token")}`,
        },
      });
      const statusData = await statusRes.json();
      setSubscription(statusData);
      alert("Subscription will be cancelled at the end of the billing period.");
    } catch (error: any) {
      alert(error.message || "Failed to cancel subscription");
    } finally {
      setCancelling(false);
    }
  }

  if (loading || subLoading) {
    return (
      <ToolPageLayout title="Account">
        <div className="rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm shadow-slate-100 sm:p-8">
          <p className="text-sm text-slate-600">Loading...</p>
        </div>
      </ToolPageLayout>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <ToolPageLayout title="Account" description="Manage your account settings.">
      <div className="space-y-6">
        <div className="rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm shadow-slate-100 sm:p-8">
          <h2 className="mb-4 text-lg font-semibold tracking-tight text-slate-900">
            Account Information
          </h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700">Email</label>
              <p className="mt-1 text-sm text-slate-900">{user.email}</p>
            </div>
            {user.name && (
              <div>
                <label className="block text-sm font-medium text-slate-700">Name</label>
                <p className="mt-1 text-sm text-slate-900">{user.name}</p>
              </div>
            )}
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm shadow-slate-100 sm:p-8">
          <h2 className="mb-4 text-lg font-semibold tracking-tight text-slate-900">
            Subscription
          </h2>
          {subscription?.hasSubscription ? (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700">Status</label>
                <p className="mt-1 text-sm text-slate-900 capitalize">
                  {subscription.status === "active" ? (
                    <span className="inline-flex items-center rounded-full bg-green-100 px-2 py-1 text-xs font-semibold text-green-800">
                      Active
                    </span>
                  ) : (
                    subscription.status
                  )}
                </p>
              </div>
              {subscription.currentPeriodEnd && (
                <div>
                  <label className="block text-sm font-medium text-slate-700">
                    Next Billing Date
                  </label>
                  <p className="mt-1 text-sm text-slate-900">
                    {new Date(subscription.currentPeriodEnd * 1000).toLocaleDateString()}
                  </p>
                </div>
              )}
              {subscription.cancelAtPeriodEnd && (
                <div className="rounded-xl border border-amber-200 bg-amber-50 p-3">
                  <p className="text-xs text-amber-800">
                    Your subscription will be cancelled at the end of the billing period.
                  </p>
                </div>
              )}
              <div className="flex gap-3">
                {subscription.status === "active" && !subscription.cancelAtPeriodEnd && (
                  <button
                    onClick={handleCancelSubscription}
                    disabled={cancelling}
                    className="rounded-full border border-red-300 bg-white px-4 py-2 text-sm font-semibold text-red-600 hover:bg-red-50 disabled:opacity-50"
                  >
                    {cancelling ? "Cancelling..." : "Cancel Subscription"}
                  </button>
                )}
                <Link
                  href="/pricing"
                  className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-50"
                >
                  Change Plan
                </Link>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <p className="text-sm text-slate-600">
                You don't have an active subscription.
              </p>
              <Link
                href="/pricing"
                className="inline-block rounded-full bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-500 px-5 py-2 text-sm font-semibold text-white shadow-sm shadow-sky-200 transition hover:brightness-110"
              >
                View Plans
              </Link>
            </div>
          )}
        </div>
      </div>
    </ToolPageLayout>
  );
}

