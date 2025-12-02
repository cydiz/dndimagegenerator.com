import type { Metadata } from "next";
import { generateToolMetadata } from "@/lib/metadata";

export const metadata: Metadata = generateToolMetadata({
  title: "Art Generator - Power Editor - Advanced AI Image Editor",
  description:
    "Advanced AI image editor with power editing features. Upload images, generate prompts, and create stunning artwork. Professional AI art generator with editing tools.",
  keywords: [
    "AI art editor",
    "power editor",
    "AI image editor",
    "art generator editor",
    "advanced AI editor",
    "image editing AI",
  ],
  path: "/ai-editor",
});

export default function AiEditorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

