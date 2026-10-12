import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

import { siteConfig } from "@/data/portfolioConfig";

export const metadata: Metadata = {
  title: "Contact & Collaboration",
  description:
    `Get in touch with ${siteConfig.developerName} for software architecture, engineering inquiries, and high-impact web development proposals.`,
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: `Contact & Collaboration | ${siteConfig.name}`,
    description:
      `Get in touch with ${siteConfig.developerName} for software architecture, engineering inquiries, and high-impact web development proposals.`,
    url: `${siteConfig.baseUrl}/contact`,
  },
};

export default function ContactPage() {
  return (
    <main className="w-full bg-black min-h-screen">
      <div className="pt-36 pb-10 px-4 md:px-10 max-w-7xl mx-auto text-center md:text-left">
        <span className="text-white/40 uppercase tracking-widest text-xs md:text-sm font-mono block mb-3">
          Start the conversation
        </span>
        <h1 className="text-5xl md:text-[8rem] font-bold uppercase text-white leading-[0.9] tracking-tighter">
          Let&apos;s Build <br /> The Future
        </h1>
      </div>

      <ContactForm />
      <Footer />
    </main>
  );
}

