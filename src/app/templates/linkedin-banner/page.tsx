"use client";

import { ToolPageLayout } from "@/components/ToolPageLayout";
import { TemplateEditor } from "@/components/TemplateEditor";

export default function LinkedInBannerPage() {
  return (
    <ToolPageLayout
      title="LinkedIn Banner Template"
      subtitle="Create LinkedIn banners"
      description="Design professional LinkedIn banners and covers with our templates."
      badge="Templates"
    >
      <TemplateEditor
        templateName="LinkedIn Banner"
        dimensions={{ width: 1584, height: 396 }}
        description="Design professional LinkedIn banners and covers with our templates. Perfect for business profiles."
        tips={[
          "Keep design professional",
          "Include your brand elements",
          "Use high-quality images",
          "Keep text minimal",
        ]}
      />
    </ToolPageLayout>
  );
}

