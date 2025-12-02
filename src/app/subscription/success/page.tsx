"use client";

import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { ToolPageLayout } from "@/components/ToolPageLayout";
import Link from "next/link";

function SubscriptionSuccessContent() {
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const sessionId = searchParams.get("session_id");
    if (sessionId) {
      // Verify subscription was created successfully
      // In production, you might want to verify with Creem API
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    } else {
      setError("No session ID provided");
      setLoading(false);
    }
  }, [searchParams]);

  if (loading) {
    return (
      <ToolPageLayout title="Processing..." description="Setting up your subscription...">
        <div className="flex items-center justify-center p-8">
          <div className="text-sm text-slate-600">Please wait...</div>
        </div>
      </ToolPageLayout>
    );
  }

  if (error) {
    return (
      <ToolPageLayout title="Error" description="Something went wrong">
        <div className="rounded-3xl border border-red-200 bg-red-50 p-6 text-center">
          <p className="text-sm text-red-600">{error}</p>
          <Link
            href="/pricing"
            className="mt-4 inline-block rounded-full bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-500 px-5 py-2 text-sm font-semibold text-white"
          >
            Back to Pricing
          </Link>
        </div>
      </ToolPageLayout>
    );
  }

  return (
    <ToolPageLayout
      title="Subscription Activated!"
      description="Your subscription has been successfully activated."
    >
      <div className="mx-auto max-w-2xl">
        <div className="rounded-3xl border border-green-200 bg-green-50 p-8 text-center">
          <div className="mb-4 text-4xl">✅</div>
          <h2 className="mb-2 text-lg font-semibold text-slate-900">
            Welcome to Pro!
          </h2>
          <p className="mb-6 text-sm text-slate-600">
            Your subscription has been activated. You now have access to all Pro
            features.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Link
              href="/account"
              className="rounded-full bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-500 px-5 py-2 text-sm font-semibold text-white shadow-sm shadow-sky-200 transition hover:brightness-110"
            >
              Go to Account
            </Link>
            <Link
              href="/art-generator"
              className="rounded-full border border-slate-300 bg-white px-5 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-50"
            >
              Start Creating
            </Link>
          </div>
        </div>
      </div>
    </ToolPageLayout>
  );
}

export default function SubscriptionSuccessPage() {
  return (
    <Suspense
      fallback={
        <ToolPageLayout title="Processing..." description="Setting up your subscription...">
          <div className="flex items-center justify-center p-8">
            <div className="text-sm text-slate-600">Loading...</div>
          </div>
        </ToolPageLayout>
      }
    >
      <SubscriptionSuccessContent />
    </Suspense>
  );
}

