"use client";

import { ToolPageLayout } from "@/components/ToolPageLayout";
import { useLanguage } from "@/contexts/LanguageContext";

export default function AiCosplayPage() {
  const { t } = useLanguage();
  return (
    <ToolPageLayout
      title="Cosplay"
      subtitle="Headshot Generator"
      description="Transform yourself into your favorite characters with AI cosplay headshots. Perfect for conventions and creative projects."
      badge="AI Headshot"
    >
      <div className="rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm shadow-slate-100 sm:p-8">
        <p className="text-sm text-slate-600">
          Cosplay headshot generator coming soon. Upload your photos to transform into any character.
        </p>
      </div>
    </ToolPageLayout>
  );
}

