"use client";

import { ToolPageLayout } from "@/components/ToolPageLayout";
import { useLanguage } from "@/contexts/LanguageContext";
import { AIWritingTool } from "@/components/AIWritingTool";

export default function SparkwriterPage() {
  const { t } = useLanguage();
  return (
    <ToolPageLayout
      title="AI Game Copywriter"
      subtitle="Sparkwriter"
      description="Create compelling game copy with AI. Generate descriptions, dialogue, and marketing content for your games."
      badge="AI Game"
    >
      <AIWritingTool
        goalOptions={[
          "Art Idea",
          "Short Story",
          "NFT Collection Idea",
          "NFT Collection Description",
          "Song Lyric",
          "Song Idea",
          "Writing Sample",
          "Movie Idea",
          "Book Idea",
          "Album Summary",
          "Graphic Idea",
          "Tagline/Headline",
          "Product Name",
          "Product Summary",
          "Product Description",
          "Facebook Post",
          "Instagram Post",
        ]}
        defaultGoal="Art Idea"
        placeholder="Leave blank for random ideas, or enter a topic to guide suggestions"
        tips={[
          "Leave topic blank for creative random ideas",
          "Enter a topic to focus the generation",
          "Try different goals for varied content",
          "Refine generated content to fit your needs",
        ]}
      />
    </ToolPageLayout>
  );
}

