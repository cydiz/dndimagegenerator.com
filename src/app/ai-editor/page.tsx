"use client";

import { ToolPageLayout } from "@/components/ToolPageLayout";
import { useLanguage } from "@/contexts/LanguageContext";

export default function AiEditorPage() {
  const { t } = useLanguage();
  return (
    <ToolPageLayout
      title="Art Generator"
      subtitle="Power Editor"
      description="Advanced AI art generator with powerful editing capabilities. Create and refine your artwork with professional tools."
      badge="AI Image"
    >
      <div className="rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm shadow-slate-100 sm:p-8">
        <p className="text-sm text-slate-600">
          Power Editor functionality coming soon. This will include advanced editing features for AI-generated artwork.
        </p>
      </div>
    </ToolPageLayout>
  );
}

