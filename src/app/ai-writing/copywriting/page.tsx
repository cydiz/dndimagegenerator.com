"use client";

import { ToolPageLayout } from "@/components/ToolPageLayout";
import { useLanguage } from "@/contexts/LanguageContext";
import { AIWritingTool } from "@/components/AIWritingTool";

export default function CopywritingPage() {
  const { t } = useLanguage();
  return (
    <ToolPageLayout
      title="Copywriting"
      subtitle="AI Writing Assistant"
      description="Create compelling copy for marketing, ads, and product descriptions. Write persuasive content that converts."
      badge="AI Writing"
    >
      <AIWritingTool
        goalOptions={[
          "Tagline/Headline",
          "Product Description",
          "Facebook Post",
          "Instagram Post",
          "Ad Copy",
          "Email Subject Line",
          "Call-to-Action",
          "Marketing Copy",
        ]}
        defaultGoal="Tagline/Headline"
        placeholder="Enter product/service name, key features, or marketing message..."
        tips={[
          "Be clear about your value proposition",
          "Include target audience information",
          "Specify tone (professional, friendly, etc.)",
          "Mention key benefits or features",
        ]}
      />
    </ToolPageLayout>
  );
}

