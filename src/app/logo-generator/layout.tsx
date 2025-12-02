import type { Metadata } from "next";
import { generateToolMetadata } from "@/lib/metadata";

export const metadata: Metadata = generateToolMetadata({
  title: "AI Logo Generator - Create Amazing Logos with AI",
  description:
    "Create amazing logo ideas with AI text-to-image technology. Generate professional logos in various styles including flat, detailed, minimalist, and more. Free AI logo generator.",
  keywords: [
    "AI logo generator",
    "logo generator",
    "AI logo maker",
    "free logo generator",
    "logo design AI",
    "text to logo",
  ],
  path: "/logo-generator",
});

export default function LogoGeneratorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

