"use client";

import { ToolPageLayout } from "@/components/ToolPageLayout";
import { useLanguage } from "@/contexts/LanguageContext";
import { ImageUploadTool } from "@/components/ImageUploadTool";

export default function LunarNewYearHeadshotPage() {
  const { t } = useLanguage();
  return (
    <ToolPageLayout
      title="Lunar New Year"
      subtitle="Headshot Generator"
      description="Create festive Lunar New Year headshots with AI. Perfect for celebrating the new year with professional portraits."
      badge="AI Headshot"
    >
      <ImageUploadTool
        title="Upload your photo"
        description="Create festive Lunar New Year headshots with AI. Perfect for celebrating the new year with professional portraits."
        processingText="Generating Lunar New Year headshot..."
        features={[
          "Festive Lunar New Year themes",
          "Traditional and modern styles",
          "Professional quality",
          "Multiple background options",
          "Customizable elements",
        ]}
        tips={[
          "Upload clear, front-facing photos",
          "Good lighting works best",
          "Face should be clearly visible",
          "Multiple photos improve results",
        ]}
      />
    </ToolPageLayout>
  );
}

