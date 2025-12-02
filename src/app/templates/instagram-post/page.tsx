"use client";

import { ToolPageLayout } from "@/components/ToolPageLayout";
import { TemplateEditor } from "@/components/TemplateEditor";

export default function InstagramPostPage() {
  return (
    <ToolPageLayout
      title="Instagram Post Template"
      subtitle="Create Instagram posts"
      description="Design beautiful Instagram posts with our easy-to-use templates. Perfect for social media marketing."
      badge="Templates"
    >
      <TemplateEditor
        templateName="Instagram Post"
        dimensions={{ width: 1080, height: 1080 }}
        description="Design beautiful Instagram posts with our easy-to-use templates. Perfect for social media marketing."
        tips={[
          "Use square format (1:1)",
          "Keep text minimal and readable",
          "Use vibrant colors",
          "Include engaging visuals",
        ]}
      />
    </ToolPageLayout>
  );
}

