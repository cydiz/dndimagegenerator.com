"use client";

import { ToolPageLayout } from "@/components/ToolPageLayout";
import { TemplateEditor } from "@/components/TemplateEditor";

export default function InstagramStoryPage() {
  return (
    <ToolPageLayout
      title="Instagram Story Template"
      subtitle="Create Instagram stories"
      description="Design engaging Instagram stories with our templates. Perfect for daily content and promotions."
      badge="Templates"
    >
      <TemplateEditor
        templateName="Instagram Story"
        dimensions={{ width: 1080, height: 1920 }}
        description="Design engaging Instagram stories with our templates. Perfect for daily content and promotions."
        tips={[
          "Use vertical format (9:16)",
          "Keep text in safe area",
          "Use bold, readable fonts",
          "Create eye-catching visuals",
        ]}
      />
    </ToolPageLayout>
  );
}

