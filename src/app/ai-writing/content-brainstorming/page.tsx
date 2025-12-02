"use client";

import { ToolPageLayout } from "@/components/ToolPageLayout";
import { useLanguage } from "@/contexts/LanguageContext";
import { AIWritingTool } from "@/components/AIWritingTool";

export default function ContentBrainstormingPage() {
  const { t } = useLanguage();
  return (
    <ToolPageLayout
      title="Content Brainstorming"
      subtitle="AI Writing Assistant"
      description="Generate ideas and brainstorm content for blogs, articles, and social media. Overcome writer's block with AI-powered suggestions."
      badge="AI Writing"
    >
      <AIWritingTool
        goalOptions={[
          "Blog Post Ideas",
          "Article Topics",
          "Social Media Posts",
          "Video Script Ideas",
          "Podcast Topics",
          "Newsletter Content",
          "Content Calendar Ideas",
        ]}
        defaultGoal="Blog Post Ideas"
        placeholder="Enter a topic or niche (e.g., 'technology', 'health', 'travel') or leave blank for random ideas..."
        tips={[
          "Be specific about your niche or industry",
          "Include target audience details",
          "Mention content format preferences",
          "Specify tone (professional, casual, etc.)",
        ]}
      />
    </ToolPageLayout>
  );
}

