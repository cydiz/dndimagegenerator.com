"use client";

import { ToolPageLayout } from "@/components/ToolPageLayout";
import { useLanguage } from "@/contexts/LanguageContext";
import { AIWritingTool } from "@/components/AIWritingTool";

export default function BookWritingPage() {
  const { t } = useLanguage();
  return (
    <ToolPageLayout
      title="Book Writing"
      subtitle="AI Writing Assistant"
      description="Assist with book writing, chapters, and storytelling. Get help with plot development, character creation, and narrative structure."
      badge="AI Writing"
    >
      <AIWritingTool
        goalOptions={[
          "Book Idea",
          "Short Story",
          "Chapter Outline",
          "Character Description",
          "Plot Summary",
          "Writing Sample",
          "Scene Description",
        ]}
        defaultGoal="Book Idea"
        placeholder="Enter genre, theme, or story concept (e.g., 'sci-fi thriller', 'romance', 'mystery') or leave blank for random ideas..."
        tips={[
          "Specify genre and target audience",
          "Include key themes or messages",
          "Mention preferred writing style",
          "Describe main characters or setting",
        ]}
      />
    </ToolPageLayout>
  );
}

