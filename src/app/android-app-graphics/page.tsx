"use client";

import { ToolPageLayout } from "@/components/ToolPageLayout";

export default function AndroidAppGraphicsPage() {
  return (
    <ToolPageLayout
      title="Android App Graphics"
      subtitle="Create Android graphics"
      description="Generate screenshots and graphics for Android apps. Perfect for Google Play listings."
      badge="App Content"
    >
      <div className="rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm shadow-slate-100 sm:p-8">
        <p className="text-sm text-slate-600">
          Android app graphics tools coming soon.
        </p>
      </div>
    </ToolPageLayout>
  );
}

