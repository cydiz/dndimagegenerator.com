"use client";

import { ToolPageLayout } from "@/components/ToolPageLayout";
import { TemplateEditor } from "@/components/TemplateEditor";

export default function FacebookCoverPage() {
  return (
    <ToolPageLayout
      title="Facebook Cover Template"
      subtitle="Create Facebook covers"
      description="Design Facebook cover images with our templates."
      badge="Templates"
    >
      <TemplateEditor
        templateName="Facebook Cover"
        dimensions={{ width: 1640, height: 859 }}
        description="Design Facebook cover images with our templates. Perfect for business pages and profiles."
        tips={[
          "Use high-resolution images",
          "Keep important content centered",
          "Avoid placing text in corners",
          "Use brand colors consistently",
        ]}
      />
    </ToolPageLayout>
  );
}

