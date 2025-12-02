import type { Metadata } from "next";
import { generateToolMetadata } from "@/lib/metadata";

export const metadata: Metadata = generateToolMetadata({
  title: "AI Images - All your AI image tools in one place",
  description:
    "Visualize any idea with the AI Art Generator, create logos, backgrounds, and stock photos, or explore anime styles. Start from simple text and get beautiful visuals in seconds.",
  keywords: [
    "AI images",
    "AI image generator",
    "AI art generator",
    "logo generator",
    "AI stock photos",
    "AI backgrounds",
    "AI anime",
    "image generator",
  ],
  path: "/ai-images",
});

export default function AiImagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

