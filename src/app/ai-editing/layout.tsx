import type { Metadata } from "next";
import { generateToolMetadata } from "@/lib/metadata";

export const metadata: Metadata = generateToolMetadata({
  title: "AI Editing - Automate photo editing with AI",
  description:
    "Remove backgrounds, upscale photos, restore old pictures, and automate photo editing with powerful AI tools. Free AI photo editor.",
  keywords: [
    "AI photo editor",
    "background remover",
    "photo upscaler",
    "object remover",
    "photo colorizer",
    "photo restorer",
    "AI editing",
    "photo enhancer",
  ],
  path: "/ai-editing",
});

export default function AiEditingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

