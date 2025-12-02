"use client";

import { ToolPageLayout } from "@/components/ToolPageLayout";
import { useLanguage } from "@/contexts/LanguageContext";

export default function BookWritingPage() {
  const { t } = useLanguage();
  return (
    <ToolPageLayout
      title="Book Writing"
      subtitle="AI Writing Assistant"
      description="Assist with book writing, chapters, and storytelling. Get help with plot development, character creation, and narrative structure."
      badge="AI Writing"
    >
      <div className="rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm shadow-slate-100 sm:p-8">
        <p className="text-sm text-slate-600">
          Book writing assistant coming soon. Get help with chapters, plot development, and storytelling.
        </p>
      </div>
    </ToolPageLayout>
  );
}

