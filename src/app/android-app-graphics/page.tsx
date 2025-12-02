"use client";

import { ToolPageLayout } from "@/components/ToolPageLayout";
import { ImageUploadTool } from "@/components/ImageUploadTool";

export default function AndroidAppGraphicsPage() {
  return (
    <ToolPageLayout
      title="Android App Graphics"
      subtitle="Create Android graphics"
      description="Generate screenshots and graphics for Android apps. Perfect for Google Play listings."
      badge="App Content"
    >
      <ImageUploadTool
        title="Upload your app screenshots"
        description="Generate professional Android app graphics for Google Play Store. Create screenshots, icons, and promotional materials."
        processingText="Generating Android graphics..."
        features={[
          "Google Play Store formats",
          "Multiple screenshot sizes",
          "App icon generation",
          "Feature graphics",
          "Promotional banners",
        ]}
        tips={[
          "Upload high-quality app screenshots",
          "Include multiple device sizes",
          "Show key app features",
          "Use consistent branding",
        ]}
      />
    </ToolPageLayout>
  );
}

