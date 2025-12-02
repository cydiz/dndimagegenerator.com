import type { Metadata } from "next";
import { generateToolMetadata } from "@/lib/metadata";

export const metadata: Metadata = generateToolMetadata({
  title: "AI Writing - Elevate writing with AI",
  description:
    "Brainstorm ideas, polish copy, and generate content for blogs, products, and books. Use AI to enhance your writing workflow.",
  keywords: [
    "AI writing",
    "AI content generator",
    "AI copywriting",
    "content brainstorming",
    "AI writing assistant",
    "text generator",
    "AI blog writer",
  ],
  path: "/ai-writing",
});

export default function AiWritingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

