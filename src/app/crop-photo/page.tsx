"use client";

import { ToolPageLayout } from "@/components/ToolPageLayout";
import { useLanguage } from "@/contexts/LanguageContext";
import { ImageUploadTool } from "@/components/ImageUploadTool";

export default function CropPhotoPage() {
  const { t } = useLanguage();
  return (
    <ToolPageLayout
      title="Auto Crop"
      subtitle="Smart Photo Cropping"
      description="Automatically crop photos with AI. Perfect for social media, profiles, and any aspect ratio you need."
      badge="AI Editing"
    >
      <ImageUploadTool
        title="Upload your photo"
        description="Upload your photos and let AI automatically crop them to the perfect size and composition."
        processingText="Analyzing and cropping..."
        features={[
          "Automatic composition detection",
          "Smart aspect ratio selection",
          "Face detection and centering",
          "Rule of thirds alignment",
          "Multiple crop presets",
        ]}
        tips={[
          "Use high-resolution images for best results",
          "Ensure main subject is clearly visible",
          "AI will detect faces and important elements",
          "Choose from preset aspect ratios",
        ]}
      />
    </ToolPageLayout>
  );
}

