"use client";

import { ToolPageLayout } from "@/components/ToolPageLayout";

export default function AppMarketingPackPage() {
  return (
    <ToolPageLayout
      title="App Marketing Pack"
      subtitle="Create app graphics"
      description="Generate app store screenshots, icons, and marketing materials for iOS and Android apps."
      badge="App Content"
    >
      <div className="rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm shadow-slate-100 sm:p-8">
        <p className="text-sm text-slate-600">
          App marketing pack tools coming soon. Create screenshots and graphics
          for your app store listings.
        </p>
      </div>
    </ToolPageLayout>
  );
}

