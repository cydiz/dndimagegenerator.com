"use client";

import { ToolPageLayout } from "@/components/ToolPageLayout";
import { useLanguage } from "@/contexts/LanguageContext";

export default function ArtNftIdeaPage() {
  const { t } = useLanguage();
  return (
    <ToolPageLayout
      title="Art & NFT Idea"
      subtitle="AI Writing Assistant"
      description="Generate creative ideas for art projects and NFT concepts. Get inspiration for your next creative work."
      badge="AI Writing"
    >
      <div className="rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm shadow-slate-100 sm:p-8">
        <p className="text-sm text-slate-600">
          Art & NFT idea generator coming soon. Generate creative concepts and descriptions for your art projects.
        </p>
      </div>
    </ToolPageLayout>
  );
}

