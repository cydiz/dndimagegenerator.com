"use client";

import { ToolPageLayout } from "@/components/ToolPageLayout";
import { useLanguage } from "@/contexts/LanguageContext";

export default function SparkwriterPage() {
  const { t } = useLanguage();
  return (
    <ToolPageLayout
      title="AI Game Copywriter"
      subtitle="Sparkwriter"
      description="Create compelling game copy with AI. Generate descriptions, dialogue, and marketing content for your games."
      badge="AI Game"
    >
      <div className="rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm shadow-slate-100 sm:p-8">
        <p className="text-sm text-slate-600">
          Sparkwriter functionality coming soon. Generate game copy, descriptions, and marketing content with AI.
        </p>
      </div>
    </ToolPageLayout>
  );
}

