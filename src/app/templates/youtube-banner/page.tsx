"use client";

import { ToolPageLayout } from "@/components/ToolPageLayout";
import { TemplateEditor } from "@/components/TemplateEditor";

export default function YouTubeBannerPage() {
  return (
    <ToolPageLayout
      title="YouTube Banner Template"
      subtitle="Create YouTube banners"
      description="Design YouTube channel banners with our templates."
      badge="Templates"
    >
      <TemplateEditor
        templateName="YouTube Banner"
        dimensions={{ width: 2560, height: 1440 }}
        description="Design YouTube channel banners with our templates. Perfect for branding your channel."
        tips={[
          "Use high-resolution images",
          "Keep important content centered",
          "Avoid placing text in corners",
          "Use channel branding colors",
        ]}
      />
    </ToolPageLayout>
  );
}

