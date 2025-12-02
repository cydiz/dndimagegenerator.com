import type { Metadata } from "next";
import { generateToolMetadata } from "@/lib/metadata";

export const metadata: Metadata = generateToolMetadata({
  title: "AI Game Tools - Generate game assets with AI",
  description:
    "Design game characters, backgrounds, and assets. Perfect for DnD, mobile games, and prototypes. Free AI game asset generator.",
  keywords: [
    "AI game tools",
    "game asset generator",
    "DnD generator",
    "game character generator",
    "game background generator",
    "free game assets",
    "AI game assets",
  ],
  path: "/game-tools",
});

export default function GameToolsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

