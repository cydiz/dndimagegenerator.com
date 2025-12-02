"use client";

import { ToolPageLayout } from "@/components/ToolPageLayout";
import { useLanguage } from "@/contexts/LanguageContext";
import { AIWritingTool } from "@/components/AIWritingTool";

export default function ProductWritingPage() {
  const { t } = useLanguage();
  return (
    <ToolPageLayout
      title="Product Writing"
      subtitle="AI Writing Assistant"
      description="Write product descriptions, features, and marketing copy. Create compelling content that sells your products."
      badge="AI Writing"
    >
      <AIWritingTool
        goalOptions={[
          "Product Name",
          "Product Summary",
          "Product Description",
          "Feature List",
          "Product Benefits",
          "Product Review",
          "Product Comparison",
        ]}
        defaultGoal="Product Description"
        placeholder="Enter product name, category, key features, or target audience..."
        tips={[
          "Include product name and category",
          "List key features and benefits",
          "Specify target audience",
          "Mention unique selling points",
        ]}
      />
    </ToolPageLayout>
  );
}

