"use client";

import { ToolPageLayout } from "@/components/ToolPageLayout";

export default function FacebookCoverPage() {
  return (
    <ToolPageLayout
      title="Facebook Cover Template"
      subtitle="Create Facebook covers"
      description="Design Facebook cover images with our templates."
      badge="Templates"
    >
      <div className="rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm shadow-slate-100 sm:p-8">
        <p className="text-sm text-slate-600">
          Facebook cover template editor coming soon.
        </p>
      </div>
    </ToolPageLayout>
  );
}

