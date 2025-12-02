"use client";

import { ToolPageLayout } from "@/components/ToolPageLayout";
import { useLanguage } from "@/contexts/LanguageContext";

export default function LunarNewYearHeadshotPage() {
  const { t } = useLanguage();
  return (
    <ToolPageLayout
      title="Lunar New Year"
      subtitle="Headshot Generator"
      description="Create festive Lunar New Year headshots with AI. Perfect for celebrating the new year with professional portraits."
      badge="AI Headshot"
    >
      <div className="rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm shadow-slate-100 sm:p-8">
        <p className="text-sm text-slate-600">
          Lunar New Year headshot generator coming soon. Upload your photos to create festive headshots.
        </p>
      </div>
    </ToolPageLayout>
  );
}

