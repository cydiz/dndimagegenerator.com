"use client";

import { ToolPageLayout } from "@/components/ToolPageLayout";

export default function InstagramStoryPage() {
  return (
    <ToolPageLayout
      title="Instagram Story Template"
      subtitle="Create Instagram stories"
      description="Design engaging Instagram stories with our templates. Perfect for daily content and promotions."
      badge="Templates"
    >
      <div className="rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm shadow-slate-100 sm:p-8">
        <p className="text-sm text-slate-600">
          Instagram story template editor coming soon.
        </p>
      </div>
    </ToolPageLayout>
  );
}

