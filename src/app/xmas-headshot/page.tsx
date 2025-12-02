"use client";

import { ToolPageLayout } from "@/components/ToolPageLayout";
import { useLanguage } from "@/contexts/LanguageContext";
import { ImageUploadTool } from "@/components/ImageUploadTool";

export default function XmasHeadshotPage() {
  const { t } = useLanguage();
  return (
    <ToolPageLayout
      title="Christmas"
      subtitle="Headshot Generator"
      description="Create festive Christmas headshots with AI. Perfect for holiday cards, social media, and seasonal profiles."
      badge="AI Headshot"
    >
      <ImageUploadTool
        title="Upload your photo"
        description="Create festive Christmas headshots with AI. Perfect for holiday cards, social media, and seasonal profiles."
        processingText="Generating Christmas headshot..."
        features={[
          "Festive Christmas themes",
          "Holiday backgrounds and props",
          "Professional quality",
          "Multiple style options",
          "Customizable holiday elements",
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

