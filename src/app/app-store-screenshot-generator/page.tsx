"use client";

import { ToolPageLayout } from "@/components/ToolPageLayout";

export default function AppStoreScreenshotGeneratorPage() {
  return (
    <ToolPageLayout
      title="App Store Screenshot Generator"
      subtitle="Create app screenshots"
      description="Generate professional app store screenshots for iOS and Android. Perfect for app marketing."
      badge="App Content"
    >
      <div className="rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm shadow-slate-100 sm:p-8">
        <p className="text-sm text-slate-600">
          App store screenshot generator coming soon.
        </p>
      </div>
    </ToolPageLayout>
  );
}

