import type { Metadata } from "next";
import { generateToolMetadata } from "@/lib/metadata";

export const metadata: Metadata = generateToolMetadata({
  title: "AI Character Generator - Create Game Characters with AI",
  description:
    "Generate unique game characters with AI. Perfect for RPGs, mobile games, and game prototypes. Create DnD characters, fantasy heroes, and game avatars.",
  keywords: [
    "AI character generator",
    "game character generator",
    "DnD character generator",
    "RPG character creator",
    "fantasy character generator",
    "game avatar generator",
  ],
  path: "/ai-character-generator",
});

export default function AiCharacterGeneratorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

