"use client";

import { ToolPageLayout } from "@/components/ToolPageLayout";

export default function YouTubeBannerPage() {
  return (
    <ToolPageLayout
      title="YouTube Banner Template"
      subtitle="Create YouTube banners"
      description="Design YouTube channel banners with our templates."
      badge="Templates"
    >
      <div className="rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm shadow-slate-100 sm:p-8">
        <p className="text-sm text-slate-600">
          YouTube banner template editor coming soon.
        </p>
      </div>
    </ToolPageLayout>
  );
}

