import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { AuthProvider } from "@/contexts/AuthContext";

// Using system fonts to avoid Turbopack font loading issues with Google Fonts
// TODO: Re-enable Google Fonts (Geist, Geist Mono) when Turbopack issue is resolved

export const metadata: Metadata = {
  metadataBase: new URL("https://dndimagegenerator.com"),
  title: {
    default: "Hotpot AI - Create stunning images with AI",
    template: "%s | Hotpot AI",
  },
  description:
    "Visualize ideas with AI Image Generator, reimagine yourself with AI Headshots, or automate editing with powerful AI photo tools. Free AI image generation, logo creation, and photo editing.",
  keywords: [
    "AI image generator",
    "AI art generator",
    "AI headshot generator",
    "AI photo editor",
    "image generator",
    "logo generator",
    "background remover",
    "photo upscaler",
    "DnD generator",
    "AI writing",
    "free AI tools",
  ],
  authors: [{ name: "Hotpot AI" }],
  creator: "Hotpot AI",
  publisher: "Hotpot AI",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://dndimagegenerator.com",
    siteName: "Hotpot AI",
    title: "Hotpot AI - Create stunning images with AI",
    description:
      "Visualize ideas with AI Image Generator, reimagine yourself with AI Headshots, or automate editing with powerful AI photo tools.",
    images: [
      {
        url: "/images/logos/brandmark.svg",
        width: 1200,
        height: 630,
        alt: "Hotpot AI - AI Image Generator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hotpot AI - Create stunning images with AI",
    description:
      "Visualize ideas with AI Image Generator, reimagine yourself with AI Headshots, or automate editing with powerful AI photo tools.",
    images: ["/images/logos/brandmark.svg"],
    creator: "@hotpotai",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "G-PHH1XXSW03",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-PHH1XXSW03"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-PHH1XXSW03');
          `}
        </Script>
        <LanguageProvider>
          <AuthProvider>{children}</AuthProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
