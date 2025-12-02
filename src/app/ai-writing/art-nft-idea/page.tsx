"use client";

import { ToolPageLayout } from "@/components/ToolPageLayout";
import { useLanguage } from "@/contexts/LanguageContext";
import { AIWritingTool } from "@/components/AIWritingTool";

export default function ArtNftIdeaPage() {
  const { t } = useLanguage();
  return (
    <ToolPageLayout
      title="Art & NFT Idea"
      subtitle="AI Writing Assistant"
      description="Generate creative ideas for art projects and NFT concepts. Get inspiration for your next creative work."
      badge="AI Writing"
    >
      <AIWritingTool
        goalOptions={[
          "Art Idea",
          "NFT Collection Idea",
          "NFT Collection Description",
          "Art Project Concept",
          "Creative Brief",
          "Art Style Description",
        ]}
        defaultGoal="Art Idea"
        placeholder="Enter a theme, style, or concept (e.g., 'cyberpunk', 'nature', 'abstract') or leave blank for random ideas..."
        tips={[
          "Specify art style preferences",
          "Include color palette ideas",
          "Mention target audience",
          "Describe mood or emotion",
        ]}
      />
    </ToolPageLayout>
  );
}

