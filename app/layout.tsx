import type { Metadata, Viewport } from "next";
import { Syne, Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import GrainOverlay from "@/components/GrainOverlay";
import Preloader from "@/components/Preloader";
import Navbar from "@/components/Navbar";
import ScrollSkew from "@/components/ScrollSkew";
import AuroraBackground from "@/components/AuroraBackground";

const syne = Syne({ subsets: ["latin"], variable: "--font-syne", display: "swap" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

export const viewport: Viewport = {
  themeColor: "#000000",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

import { siteConfig } from "@/data/portfolioConfig";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.baseUrl),
  title: {
    default: `${siteConfig.title} | Developer Portfolio Template`,
    template: `%s | ${siteConfig.name}`,
  },
  description:
    "Modern, high-performance 4-page open-source developer portfolio template engineered with Next.js 16, React 19, Tailwind CSS v4, and Framer Motion.",
  keywords: [
    "Developer Portfolio",
    "Open Source Portfolio",
    "Next.js Portfolio Template",
    "React 19",
    "Tailwind CSS v4",
    "Framer Motion",
    "Software Engineer Portfolio",
  ],
  authors: [{ name: siteConfig.developerName, url: siteConfig.baseUrl }],
  creator: siteConfig.developerName,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.baseUrl,
    siteName: siteConfig.name,
    title: `${siteConfig.title} | Developer Portfolio Template`,
    description:
      "Modern, high-performance 4-page open-source developer portfolio template.",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.title} | Developer Portfolio Template`,
    description:
      "Modern, high-performance 4-page open-source developer portfolio template.",
    creator: "@developer",
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
  alternates: {
    canonical: "/",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteConfig.developerName,
  jobTitle: siteConfig.title,
  url: siteConfig.baseUrl,
  address: {
    "@type": "PostalAddress",
    addressLocality: siteConfig.location,
  },
  knowsAbout: [
    "Full Stack Development",
    "Software Architecture",
    "Next.js",
    "React",
    "TypeScript",
    "UI/UX Engineering",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${syne.variable} ${inter.variable} antialiased bg-black text-white font-sans`}>
        <Preloader />
        <div className="hidden md:block">
          <CustomCursor />
        </div>
        <Navbar />
        <AuroraBackground />
        <GrainOverlay />
        <SmoothScroll>
          <ScrollSkew>{children}</ScrollSkew>
        </SmoothScroll>
      </body>
    </html>
  );
}
