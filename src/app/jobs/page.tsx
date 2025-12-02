"use client";

import { ToolPageLayout } from "@/components/ToolPageLayout";

export default function JobsPage() {
  return (
    <ToolPageLayout title="Jobs" description="Join our team.">
      <div className="rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm shadow-slate-100 sm:p-8">
        <p className="text-sm text-slate-600">Job listings coming soon.</p>
      </div>
    </ToolPageLayout>
  );
}

