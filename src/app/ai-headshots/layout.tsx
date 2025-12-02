import type { Metadata } from "next";
import { generateToolMetadata } from "@/lib/metadata";

export const metadata: Metadata = generateToolMetadata({
  title: "AI Headshots - Professional Portrait Generator",
  description:
    "Create professional headshots for LinkedIn, resumes, social media, and more. AI-powered portrait generator in any style. Free AI headshot generator.",
  keywords: [
    "AI headshot generator",
    "professional headshot",
    "AI portrait generator",
    "LinkedIn headshot",
    "corporate headshot",
    "AI avatar",
    "profile picture generator",
    "headshot generator",
  ],
  path: "/ai-headshots",
});

export default function AiHeadshotsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

