import type { Metadata } from "next";
import { Syne } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import GrainOverlay from "@/components/GrainOverlay";
import Preloader from "@/components/Preloader";
import Navbar from "@/components/Navbar";
import ScrollSkew from "@/components/ScrollSkew";
import AuroraBackground from "@/components/AuroraBackground";

const syne = Syne({ subsets: ["latin"], variable: "--font-syne" });

export const metadata: Metadata = {
  title: "Muhammad Rayyan | Elite Engineer",
  description:
    "Portfolio of Muhammad Rayyan Kashif - Elite Engineer based in Karachi, PK. Engineering Superiority.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${syne.variable} antialiased bg-black text-white`}>
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
