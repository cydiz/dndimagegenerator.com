"use client";

import { ToolPageLayout } from "@/components/ToolPageLayout";
import { useLanguage } from "@/contexts/LanguageContext";
import { AIWritingTool } from "@/components/AIWritingTool";

export default function SongWritingPage() {
  const { t } = useLanguage();
  return (
    <ToolPageLayout
      title="Song Writing"
      subtitle="AI Writing Assistant"
      description="Write lyrics and compose songs with AI assistance. Get help with rhymes, melodies, and song structure."
      badge="AI Writing"
    >
      <AIWritingTool
        goalOptions={[
          "Song Lyric",
          "Song Idea",
          "Chorus",
          "Verse",
          "Bridge",
          "Hook",
          "Album Summary",
        ]}
        defaultGoal="Song Lyric"
        placeholder="Enter a theme, emotion, or story (e.g., 'love', 'heartbreak', 'adventure') or leave blank for random ideas..."
        tips={[
          "Specify genre (pop, rock, country, etc.)",
          "Include emotional tone",
          "Mention song structure preferences",
          "Describe the story or message",
        ]}
      />
    </ToolPageLayout>
  );
}

