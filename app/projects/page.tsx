"use client";

import ProjectGallery from "@/components/ProjectGallery";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function ProjectsPage() {
  return (
    <main className="w-full bg-black min-h-screen">
      <div className="pt-40 pb-20 px-4 md:px-10 max-w-7xl mx-auto">
        <div className="pt-40 px-4 md:px-10 max-w-7xl mx-auto" />
      </div>

      <ProjectGallery />
      <Footer />
    </main>
  );
}
