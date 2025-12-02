import type { Metadata } from "next";
import { generateToolMetadata } from "@/lib/metadata";

export const metadata: Metadata = generateToolMetadata({
  title: "AI Background Generator - Create Custom Backgrounds",
  description:
    "Create custom backgrounds for any scene or product. Generate unique, high-quality backgrounds with AI. Perfect for game backgrounds, DnD scenes, and design projects.",
  keywords: [
    "AI background generator",
    "background generator",
    "custom background creator",
    "game background generator",
    "DnD background",
    "AI wallpaper generator",
  ],
  path: "/background-generator",
});

export default function BackgroundGeneratorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

