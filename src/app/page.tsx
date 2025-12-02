import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { CategorySection } from "@/components/CategorySection";
import { PricingSection } from "@/components/PricingSection";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Hotpot AI - Create stunning images with AI",
  description:
    "Create stunning images, graphics, and content with AI. Visualize ideas with AI Image Generator, reimagine yourself with AI Headshots, or automate editing with powerful AI photo tools. Free or $1 per graphic.",
  keywords: [
    "AI image generator",
    "AI art generator",
    "AI headshot generator",
    "AI photo editor",
    "free AI tools",
    "image generator",
    "logo generator",
    "background remover",
    "photo upscaler",
  ],
  openGraph: {
    title: "Hotpot AI - Create stunning images with AI",
    description:
      "Create stunning images, graphics, and content with AI. Free or $1 per graphic.",
    url: "https://dndimagegenerator.com",
    siteName: "Hotpot AI",
    images: [
      {
        url: "/images/logos/brandmark.svg",
        width: 1200,
        height: 630,
        alt: "Hotpot AI",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hotpot AI - Create stunning images with AI",
    description:
      "Create stunning images, graphics, and content with AI. Free or $1 per graphic.",
  },
};

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Hotpot AI",
    description:
      "Create stunning images, graphics, and content with AI. Visualize ideas with AI Image Generator, reimagine yourself with AI Headshots, or automate editing with powerful AI photo tools.",
    url: "https://dndimagegenerator.com",
    applicationCategory: "DesignApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      ratingCount: "1000",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen bg-slate-50 text-slate-900">
        <main>
          <div className="flex flex-col">
            <Header />
            <Hero />
            <CategorySection />
            <PricingSection />
            <Footer />
          </div>
        </main>
      </div>
    </>
  );
}
