"use client";

import { ToolPageLayout } from "@/components/ToolPageLayout";
import { ImageUploadTool } from "@/components/ImageUploadTool";

export default function AppMarketingPackPage() {
  return (
    <ToolPageLayout
      title="App Marketing Pack"
      subtitle="Create app graphics"
      description="Generate app store screenshots, icons, and marketing materials for iOS and Android apps."
      badge="App Content"
    >
      <ImageUploadTool
        title="Upload your app assets"
        description="Generate a complete marketing pack for your app including screenshots, icons, banners, and promotional materials for both iOS and Android."
        processingText="Generating marketing pack..."
        features={[
          "Complete app store assets",
          "iOS and Android formats",
          "Multiple device sizes",
          "Icons and screenshots",
          "Promotional banners",
          "Marketing materials",
        ]}
        tips={[
          "Upload high-quality app screenshots",
          "Include branding elements",
          "Show key app features",
          "Use consistent design style",
        ]}
      />
    </ToolPageLayout>
  );
}

