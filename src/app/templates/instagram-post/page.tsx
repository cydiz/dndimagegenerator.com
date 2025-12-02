"use client";

import { ToolPageLayout } from "@/components/ToolPageLayout";

export default function InstagramPostPage() {
  return (
    <ToolPageLayout
      title="Instagram Post Template"
      subtitle="Create Instagram posts"
      description="Design beautiful Instagram posts with our easy-to-use templates. Perfect for social media marketing."
      badge="Templates"
    >
      <div className="rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm shadow-slate-100 sm:p-8">
        <p className="text-sm text-slate-600">
          Instagram post template editor coming soon. Create stunning posts for
          your Instagram feed.
        </p>
      </div>
    </ToolPageLayout>
  );
}

