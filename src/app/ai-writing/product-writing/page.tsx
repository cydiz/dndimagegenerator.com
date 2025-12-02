"use client";

import { ToolPageLayout } from "@/components/ToolPageLayout";
import { useLanguage } from "@/contexts/LanguageContext";

export default function ProductWritingPage() {
  const { t } = useLanguage();
  return (
    <ToolPageLayout
      title="Product Writing"
      subtitle="AI Writing Assistant"
      description="Write product descriptions, features, and marketing copy. Create compelling content that sells your products."
      badge="AI Writing"
    >
      <div className="rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm shadow-slate-100 sm:p-8">
        <p className="text-sm text-slate-600">
          Product writing tool coming soon. Generate product descriptions and marketing copy with AI.
        </p>
      </div>
    </ToolPageLayout>
  );
}

