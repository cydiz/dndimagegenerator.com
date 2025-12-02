import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { AuthProvider } from "@/contexts/AuthContext";

// Using system fonts to avoid Turbopack font loading issues with Google Fonts
// TODO: Re-enable Google Fonts (Geist, Geist Mono) when Turbopack issue is resolved

export const metadata: Metadata = {
  title: "Hotpot AI - Create stunning images with AI",
  description: "Visualize ideas with AI Image Generator, reimagine yourself with AI Headshots, or automate editing with powerful AI photo tools.",
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
