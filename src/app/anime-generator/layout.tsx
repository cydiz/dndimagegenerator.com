import type { Metadata } from "next";
import { generateToolMetadata } from "@/lib/metadata";

export const metadata: Metadata = generateToolMetadata({
  title: "AI Anime Generator - Turn Ideas into Anime Art",
  description:
    "Think in anime. Turn your ideas into stylized anime characters and scenes. Generate anime-style artwork with AI. Perfect for anime art, manga illustrations, and character design.",
  keywords: [
    "AI anime generator",
    "anime art generator",
    "anime character generator",
    "manga generator",
    "anime style AI",
    "anime image generator",
  ],
  path: "/anime-generator",
});

export default function AnimeGeneratorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

