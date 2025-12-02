"use client";

import { ToolPageLayout } from "@/components/ToolPageLayout";
import { useLanguage } from "@/contexts/LanguageContext";

export default function CropPhotoPage() {
  const { t } = useLanguage();
  return (
    <ToolPageLayout
      title="Auto Crop"
      subtitle="Smart Photo Cropping"
      description="Automatically crop photos with AI. Perfect for social media, profiles, and any aspect ratio you need."
      badge="AI Editing"
    >
      <div className="rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm shadow-slate-100 sm:p-8">
        <p className="text-sm text-slate-600">
          Auto crop functionality coming soon. Upload your photos and let AI automatically crop them to the perfect size.
        </p>
      </div>
    </ToolPageLayout>
  );
}

