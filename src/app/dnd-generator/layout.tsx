import type { Metadata } from "next";
import { generateToolMetadata } from "@/lib/metadata";

export const metadata: Metadata = generateToolMetadata({
  title: "DnD Image Generator - Free AI D&D Scene & Character Creator",
  description:
    "Free DnD image generator powered by AI. Create epic Dungeons & Dragons scenes, characters, battle maps, and fantasy art. Generate D&D images for your campaigns with AI prompts. Perfect for tabletop RPGs, D&D tokens, and campaign visuals.",
  keywords: [
    "dnd image generator",
    "dnd image creator",
    "dnd art generator",
    "dnd scene generator",
    "dnd character generator",
    "dungeons and dragons image generator",
    "d&d image generator",
    "fantasy dnd image generator",
    "ai dnd image generator",
    "free dnd image generator",
    "dnd battle scene generator",
    "dnd map generator",
    "dnd token generator",
    "tabletop rpg image generator",
    "rpg image generator",
    "dnd visualizer",
    "dnd scene creator",
    "d&d art generator",
    "dnd character art generator",
    "dnd campaign images",
    "fantasy rpg image generator",
    "dnd battle map creator",
    "dungeons dragons art",
    "dnd image maker",
    "ai fantasy image generator",
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

