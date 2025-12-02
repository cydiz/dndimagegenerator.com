"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { ToolPageLayout } from "@/components/ToolPageLayout";
import { useAuth } from "@/contexts/AuthContext";

export default function AccountPage() {
  const router = useRouter();
  const { user, loading } = useAuth();

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login");
    }
  }, [user, loading, router]);

  if (loading) {
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
      <div className="rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm shadow-slate-100 sm:p-8">
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
    </ToolPageLayout>
  );
}

