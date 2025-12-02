"use client";

import { ToolPageLayout } from "@/components/ToolPageLayout";
import { useLanguage } from "@/contexts/LanguageContext";

export default function ColorGeneratorPage() {
  const { t } = useLanguage();
  return (
    <ToolPageLayout
      title="Color Generator"
      subtitle="AI Color Palette"
      description="Generate beautiful color palettes with AI. Perfect for design projects, branding, and creative work."
      badge="AI Editing"
    >
      <div className="rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm shadow-slate-100 sm:p-8">
        <p className="text-sm text-slate-600">
          Color generator functionality coming soon. Generate harmonious color palettes for your projects.
        </p>
      </div>
    </ToolPageLayout>
  );
}

