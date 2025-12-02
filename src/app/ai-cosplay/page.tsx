"use client";

import { ToolPageLayout } from "@/components/ToolPageLayout";
import { useLanguage } from "@/contexts/LanguageContext";
import { ImageUploadTool } from "@/components/ImageUploadTool";

export default function AiCosplayPage() {
  const { t } = useLanguage();
  return (
    <ToolPageLayout
      title="Cosplay"
      subtitle="Headshot Generator"
      description="Transform yourself into your favorite characters with AI cosplay headshots. Perfect for conventions and creative projects."
      badge="AI Headshot"
    >
      <ImageUploadTool
        title="Upload your photo"
        description="Transform yourself into your favorite characters with AI cosplay headshots. Perfect for conventions and creative projects."
        processingText="Generating cosplay headshot..."
        features={[
          "Transform into any character",
          "Anime, manga, and game styles",
          "Professional cosplay quality",
          "Multiple character options",
          "Customizable costumes and props",
        ]}
        tips={[
          "Upload clear face photos",
          "Specify character name for best results",
          "Good lighting enhances quality",
          "Multiple angles improve accuracy",
        ]}
      />
    </ToolPageLayout>
  );
}

