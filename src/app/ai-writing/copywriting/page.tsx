"use client";

import { ToolPageLayout } from "@/components/ToolPageLayout";
import { useLanguage } from "@/contexts/LanguageContext";

export default function CopywritingPage() {
  const { t } = useLanguage();
  return (
    <ToolPageLayout
      title="Copywriting"
      subtitle="AI Writing Assistant"
      description="Create compelling copy for marketing, ads, and product descriptions. Write persuasive content that converts."
      badge="AI Writing"
    >
      <div className="rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm shadow-slate-100 sm:p-8">
        <p className="text-sm text-slate-600">
          Copywriting tool coming soon. Generate persuasive marketing copy and ad content with AI.
        </p>
      </div>
    </ToolPageLayout>
  );
}

