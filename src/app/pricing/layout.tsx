import type { Metadata } from "next";
import { generateToolMetadata } from "@/lib/metadata";

export const metadata: Metadata = generateToolMetadata({
  title: "Pricing - Free DnD Image Generator & AI Tools",
  description:
    "Create for free, then pay only when you export high-resolution designs or commercial assets. Volume discounts available for teams and businesses. Free DnD image generator included.",
  keywords: [
    "pricing",
    "AI tools pricing",
    "free AI image generator",
    "DnD generator pricing",
    "subscription plans",
    "AI art generator pricing",
  ],
  path: "/pricing",
});

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

