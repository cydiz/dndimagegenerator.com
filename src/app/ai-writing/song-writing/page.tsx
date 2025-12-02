"use client";

import { ToolPageLayout } from "@/components/ToolPageLayout";
import { useLanguage } from "@/contexts/LanguageContext";

export default function SongWritingPage() {
  const { t } = useLanguage();
  return (
    <ToolPageLayout
      title="Song Writing"
      subtitle="AI Writing Assistant"
      description="Write lyrics and compose songs with AI assistance. Get help with rhymes, melodies, and song structure."
      badge="AI Writing"
    >
      <div className="rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm shadow-slate-100 sm:p-8">
        <p className="text-sm text-slate-600">
          Song writing tool coming soon. Generate lyrics and get creative assistance for your songs.
        </p>
      </div>
    </ToolPageLayout>
  );
}

