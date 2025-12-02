"use client";

import { ToolPageLayout } from "@/components/ToolPageLayout";
import { TemplateEditor } from "@/components/TemplateEditor";

export default function FacebookPostPage() {
  return (
    <ToolPageLayout
      title="Facebook Post Template"
      subtitle="Create Facebook posts"
      description="Design Facebook posts and covers with our templates. Perfect for social media marketing."
      badge="Templates"
    >
      <TemplateEditor
        templateName="Facebook Post"
        dimensions={{ width: 1200, height: 630 }}
        description="Create engaging Facebook posts with customizable templates. Perfect for social media marketing."
        tips={[
          "Use eye-catching headlines",
          "Include clear call-to-action",
          "Keep text concise and readable",
          "Use high-quality images",
        ]}
      />
    </ToolPageLayout>
  );
}

