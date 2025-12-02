"use client";

import { ToolPageLayout } from "@/components/ToolPageLayout";
import { useLanguage } from "@/contexts/LanguageContext";

export default function XmasHeadshotPage() {
  const { t } = useLanguage();
  return (
    <ToolPageLayout
      title="Christmas"
      subtitle="Headshot Generator"
      description="Create festive Christmas headshots with AI. Perfect for holiday cards, social media, and seasonal profiles."
      badge="AI Headshot"
    >
      <div className="rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm shadow-slate-100 sm:p-8">
        <p className="text-sm text-slate-600">
          Christmas headshot generator coming soon. Upload your photos to create festive holiday headshots.
        </p>
      </div>
    </ToolPageLayout>
  );
}

