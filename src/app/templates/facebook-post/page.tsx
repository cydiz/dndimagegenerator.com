"use client";

import { ToolPageLayout } from "@/components/ToolPageLayout";

export default function FacebookPostPage() {
  return (
    <ToolPageLayout
      title="Facebook Post Template"
      subtitle="Create Facebook posts"
      description="Design Facebook posts and covers with our templates. Perfect for social media marketing."
      badge="Templates"
    >
      <div className="rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm shadow-slate-100 sm:p-8">
        <p className="text-sm text-slate-600">
          Facebook post template editor coming soon.
        </p>
      </div>
    </ToolPageLayout>
  );
}

