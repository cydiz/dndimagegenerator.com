"use client";

import { ToolPageLayout } from "@/components/ToolPageLayout";
import { TemplateEditor } from "@/components/TemplateEditor";

export default function YouTubeThumbnailPage() {
  return (
    <ToolPageLayout
      title="YouTube Thumbnail Template"
      subtitle="Create YouTube thumbnails"
      description="Design eye-catching YouTube thumbnails with our templates. Increase your click-through rate."
      badge="Templates"
    >
      <TemplateEditor
        templateName="YouTube Thumbnail"
        dimensions={{ width: 1280, height: 720 }}
        description="Design eye-catching YouTube thumbnails with our templates. Increase your click-through rate."
        tips={[
          "Use bold, readable text",
          "Include faces or emotions",
          "Use high contrast colors",
          "Keep design simple and clear",
        ]}
      />
    </ToolPageLayout>
  );
}

