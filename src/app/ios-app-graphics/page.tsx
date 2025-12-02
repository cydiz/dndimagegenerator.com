"use client";

import { ToolPageLayout } from "@/components/ToolPageLayout";
import { ImageUploadTool } from "@/components/ImageUploadTool";

export default function IosAppGraphicsPage() {
  return (
    <ToolPageLayout
      title="iOS App Graphics"
      subtitle="Create iOS graphics"
      description="Generate screenshots and graphics for iOS apps. Perfect for App Store listings."
      badge="App Content"
    >
      <ImageUploadTool
        title="Upload your app screenshots"
        description="Generate professional iOS app graphics for App Store. Create screenshots, icons, and promotional materials."
        processingText="Generating iOS graphics..."
        features={[
          "App Store formats",
          "iPhone and iPad sizes",
          "App icon generation",
          "App preview videos",
          "Promotional graphics",
        ]}
        tips={[
          "Upload high-quality app screenshots",
          "Include iPhone and iPad sizes",
          "Show key app features",
          "Use consistent branding",
        ]}
      />
    </ToolPageLayout>
  );
}

