"use client";

import { ToolPageLayout } from "@/components/ToolPageLayout";
import { useLanguage } from "@/contexts/LanguageContext";

export default function ContentBrainstormingPage() {
  const { t } = useLanguage();
  return (
    <ToolPageLayout
      title="Content Brainstorming"
      subtitle="AI Writing Assistant"
      description="Generate ideas and brainstorm content for blogs, articles, and social media. Overcome writer's block with AI-powered suggestions."
      badge="AI Writing"
    >
      <div className="rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm shadow-slate-100 sm:p-8">
        <p className="text-sm text-slate-600">
          Content brainstorming tool coming soon. Generate creative ideas and content suggestions with AI.
        </p>
      </div>
    </ToolPageLayout>
  );
}

