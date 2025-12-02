import type { Metadata } from "next";
import { generateToolMetadata } from "@/lib/metadata";

export const metadata: Metadata = generateToolMetadata({
  title: "AI DnD Generator - Design epic DnD scenes",
  description:
    "Design epic DnD scenes with AI prompts. Choose your world, scene type, and art style. Build rich prompts for Stable Diffusion, DALL·E, and other image models.",
  keywords: [
    "DnD generator",
    "D&D scene generator",
    "Dungeons and Dragons",
    "AI DnD",
    "fantasy scene generator",
    "RPG scene generator",
    "DnD art generator",
  ],
  path: "/dnd-generator",
});

export default function DndGeneratorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

