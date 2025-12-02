"use client";

import { ToolPageLayout } from "@/components/ToolPageLayout";

export default function HelpPage() {
  return (
    <ToolPageLayout title="Help" description="Get help with using Hotpot AI tools.">
      <div className="rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm shadow-slate-100 sm:p-8">
        <p className="text-sm text-slate-600">Help documentation coming soon.</p>
      </div>
    </ToolPageLayout>
  );
}

