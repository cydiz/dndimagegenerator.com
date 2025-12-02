"use client";

import { ToolPageLayout } from "@/components/ToolPageLayout";

const faqs = [
  {
    question: "How do I generate images?",
    answer:
      "Simply enter a text description of what you want to create, select your preferred style, and click Generate. Our AI will create stunning images based on your prompt.",
  },
  {
    question: "What image formats are supported?",
    answer:
      "We support JPG, PNG, and other common image formats. You can upload images up to 10MB in size.",
  },
  {
    question: "How long does image generation take?",
    answer:
      "Image generation typically takes 10-30 seconds depending on the complexity of your prompt and current server load.",
  },
  {
    question: "Can I use generated images commercially?",
    answer:
      "Yes, you can use generated images for commercial purposes. However, please review our terms of service for specific guidelines.",
  },
  {
    question: "How do I edit existing images?",
    answer:
      "Upload your image using any of our editing tools (upscale, remove background, etc.) and follow the on-screen instructions.",
  },
];

export default function HelpPage() {
  return (
    <ToolPageLayout
      title="Help"
      description="Get help with using Hotpot AI tools."
    >
      <div className="mx-auto max-w-3xl space-y-6">
        <div className="rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm shadow-slate-100 sm:p-8">
          <h2 className="mb-6 text-lg font-semibold tracking-tight text-slate-900">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border-b border-slate-200 pb-4 last:border-0"
              >
                <h3 className="mb-2 text-sm font-semibold text-slate-900">
                  {faq.question}
                </h3>
                <p className="text-sm text-slate-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm shadow-slate-100 sm:p-8">
          <h2 className="mb-4 text-lg font-semibold tracking-tight text-slate-900">
            Need more help?
          </h2>
          <p className="mb-4 text-sm text-slate-600">
            If you can't find what you're looking for, please contact our
            support team.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center rounded-full bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-500 px-5 py-2 text-sm font-semibold text-white shadow-sm shadow-sky-200 transition hover:brightness-110"
          >
            Contact Support
          </a>
        </div>
      </div>
    </ToolPageLayout>
  );
}
