"use client";

import { ToolPageLayout } from "@/components/ToolPageLayout";
import { ImageUploadTool } from "@/components/ImageUploadTool";

export default function AppStoreScreenshotGeneratorPage() {
  return (
    <ToolPageLayout
      title="App Store Screenshot Generator"
      subtitle="Create app screenshots"
      description="Generate professional app store screenshots for iOS and Android. Perfect for app marketing."
      badge="App Content"
    >
      <ImageUploadTool
        title="Upload your app screenshots"
        description="Generate professional app store screenshots optimized for iOS App Store and Google Play Store. Create eye-catching screenshots that convert."
        processingText="Generating app store screenshots..."
        features={[
          "App Store optimized formats",
          "Google Play formats",
          "Multiple device sizes",
          "Professional templates",
          "Text overlay options",
          "Branding integration",
        ]}
        tips={[
          "Upload high-resolution screenshots",
          "Show key app features clearly",
          "Use consistent branding",
          "Include compelling text overlays",
          "Test different layouts",
        ]}
      />
    </ToolPageLayout>
  );
}

