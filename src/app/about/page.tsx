"use client";

import { ToolPageLayout } from "@/components/ToolPageLayout";

export default function AboutPage() {
  return (
    <ToolPageLayout title="About" description="Learn more about Hotpot AI.">
      <div className="rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm shadow-slate-100 sm:p-8">
        <p className="text-sm text-slate-600">
          Hotpot AI is a platform for creating amazing images, graphics, and
          content with AI. This is a demo clone inspired by Hotpot.ai.
        </p>
      </div>
    </ToolPageLayout>
  );
}

