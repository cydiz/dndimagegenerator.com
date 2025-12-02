"use client";

import { ToolPageLayout } from "@/components/ToolPageLayout";
import { useLanguage } from "@/contexts/LanguageContext";
import { AIWritingTool } from "@/components/AIWritingTool";

export default function ProfessionalWritingPage() {
  const { t } = useLanguage();
  return (
    <ToolPageLayout
      title="Professional Writing"
      subtitle="AI Writing Assistant"
      description="Create professional documents, emails, and reports. Write clear, concise, and professional content for business."
      badge="AI Writing"
    >
      <AIWritingTool
        goalOptions={[
          "Business Email",
          "Report Summary",
          "Meeting Notes",
          "Proposal",
          "Cover Letter",
          "Resume Summary",
          "Professional Letter",
          "Executive Summary",
        ]}
        defaultGoal="Business Email"
        placeholder="Enter purpose, recipient, or key points (e.g., 'follow-up meeting', 'project update', 'introduction')..."
        tips={[
          "Specify document type and purpose",
          "Include recipient information",
          "Mention key points to cover",
          "Indicate desired tone (formal, friendly, etc.)",
        ]}
      />
    </ToolPageLayout>
  );
}

