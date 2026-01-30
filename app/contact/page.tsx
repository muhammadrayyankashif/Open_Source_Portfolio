"use client";

import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <main className="w-full bg-black min-h-screen">
      <div className="pt-40 pb-10 px-4 md:px-10 max-w-7xl mx-auto text-center md:text-left">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-white/40 uppercase tracking-widest text-sm"
        >
          Start the conversation
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mt-4 text-5xl md:text-[8rem] font-bold uppercase text-white leading-[0.9] tracking-tighter"
        >
          Let&apos;s Build <br /> The Future
        </motion.h1>
      </div>

      <ContactForm />
      <Footer />
    </main>
  );
}
