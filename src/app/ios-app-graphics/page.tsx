"use client";

import { ToolPageLayout } from "@/components/ToolPageLayout";

export default function IosAppGraphicsPage() {
  return (
    <ToolPageLayout
      title="iOS App Graphics"
      subtitle="Create iOS graphics"
      description="Generate screenshots and graphics for iOS apps. Perfect for App Store listings."
      badge="App Content"
    >
      <div className="rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm shadow-slate-100 sm:p-8">
        <p className="text-sm text-slate-600">
          iOS app graphics tools coming soon.
        </p>
      </div>
    </ToolPageLayout>
  );
}

