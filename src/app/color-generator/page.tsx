"use client";

import { ToolPageLayout } from "@/components/ToolPageLayout";
import { useLanguage } from "@/contexts/LanguageContext";
import { ColorGeneratorTool } from "@/components/ColorGeneratorTool";

export default function ColorGeneratorPage() {
  const { t } = useLanguage();
  return (
    <ToolPageLayout
      title="Color Generator"
      subtitle="AI Color Palette"
      description="Generate beautiful color palettes with AI. Perfect for design projects, branding, and creative work."
      badge="AI Editing"
    >
      <ColorGeneratorTool />
    </ToolPageLayout>
  );
}

