"use client";

import { ToolPageLayout } from "@/components/ToolPageLayout";

export default function YouTubeThumbnailPage() {
  return (
    <ToolPageLayout
      title="YouTube Thumbnail Template"
      subtitle="Create YouTube thumbnails"
      description="Design eye-catching YouTube thumbnails with our templates. Increase your click-through rate."
      badge="Templates"
    >
      <div className="rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm shadow-slate-100 sm:p-8">
        <p className="text-sm text-slate-600">
          YouTube thumbnail template editor coming soon.
        </p>
      </div>
    </ToolPageLayout>
  );
}

