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

export const metadata: Metadata = {
  metadataBase: new URL("https://muhammadrayyan.me"),
  title: {
    default: "Muhammad Rayyan | Full Stack Engineer & Software Architect",
    template: "%s | Muhammad Rayyan",
  },
  description:
    "Official portfolio of Muhammad Rayyan Kashif — Full Stack Engineer based in Karachi, PK. Engineering high-performance web systems, scalable architectures, and interactive digital experiences.",
  keywords: [
    "Muhammad Rayyan",
    "Muhammad Rayyan Kashif",
    "Full Stack Engineer",
    "Software Engineer",
    "Web Developer Karachi",
    "Next.js Portfolio",
    "React Developer",
    "Frontend Specialist",
  ],
  authors: [{ name: "Muhammad Rayyan", url: "https://muhammadrayyan.me" }],
  creator: "Muhammad Rayyan",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://muhammadrayyan.me",
    siteName: "Muhammad Rayyan Portfolio",
    title: "Muhammad Rayyan | Full Stack Engineer & Software Architect",
    description:
      "Engineering high-performance web systems, scalable architectures, and interactive digital experiences.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Rayyan | Full Stack Engineer & Software Architect",
    description:
      "Engineering high-performance web systems, scalable architectures, and interactive digital experiences.",
    creator: "@MuhammadRayyan",
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
  name: "Muhammad Rayyan Kashif",
  alternateName: "Muhammad Rayyan",
  jobTitle: "Full Stack Engineer",
  url: "https://muhammadrayyan.me",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Karachi",
    addressCountry: "PK",
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
