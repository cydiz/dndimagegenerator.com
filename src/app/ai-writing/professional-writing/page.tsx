"use client";

import { ToolPageLayout } from "@/components/ToolPageLayout";
import { useLanguage } from "@/contexts/LanguageContext";

export default function ProfessionalWritingPage() {
  const { t } = useLanguage();
  return (
    <ToolPageLayout
      title="Professional Writing"
      subtitle="AI Writing Assistant"
      description="Create professional documents, emails, and reports. Write clear, concise, and professional content for business."
      badge="AI Writing"
    >
      <div className="rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm shadow-slate-100 sm:p-8">
        <p className="text-sm text-slate-600">
          Professional writing tool coming soon. Generate business documents, emails, and reports with AI.
        </p>
      </div>
    </ToolPageLayout>
  );
}

