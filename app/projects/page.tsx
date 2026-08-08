import type { Metadata } from "next";
import ProjectGallery from "@/components/ProjectGallery";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Projects & Architecture",
  description:
    "Curated portfolio of production web applications, LMS portals, and high-performance software systems engineered by Muhammad Rayyan.",
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    title: "Projects & Architecture | Muhammad Rayyan",
    description:
      "Curated portfolio of production web applications, LMS portals, and high-performance software systems engineered by Muhammad Rayyan.",
    url: "https://muhammadrayyan.me/projects",
  },
};

export default function ProjectsPage() {
  return (
    <main className="w-full bg-black min-h-screen">
      <section className="pt-36 pb-8 px-4 md:px-10 max-w-7xl mx-auto">
        <span className="text-xs md:text-sm font-mono text-white/40 uppercase tracking-[0.3em] block mb-3">
          Selected Works & Systems
        </span>
        <h1 className="text-5xl md:text-8xl font-black uppercase text-white tracking-tighter leading-none">
          Featured <br />
          <span className="text-white/30 italic">Projects</span>
        </h1>
      </section>

      <ProjectGallery />
      <Footer />
    </main>
  );
}

