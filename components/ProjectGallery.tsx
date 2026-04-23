"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    id: 1,
    title: "Respire II",
    org: "University of Edinburgh",
    category: "LMS & Social System",
    img: "/Projects/Respire.webp",
    link: "https://respiredigitalhub.org",
  },
  {
    id: 2,
    title: "Throne Of Valor",
    org: "Personal Project",
    category: "Indie Game",
    img: "/Projects/ThroneOfValor.webp",
    link: "https://muhammadrayyan.itch.io/throneofvalor",
  },
  {
    id: 3,
    title: "PSN App",
    org: "Pakistan Society Of Neurology",
    category: "Info & Social Portal",
    img: "/Projects/PSN.webp",
    link: "https://play.google.com/store/apps/details?id=com.PSN.PsnApp",
  },
  {
    id: 4,
    title: "Dasteyaar",
    org: "CCL Pharma",
    category: "Patient Management App",
    img: "/Projects/Dasteyaar.webp",
    link: "https://play.google.com/store/apps/details?id=com.ccl.dasteyaar",
  },
  {
    id: 5,
    title: "Scinnova",
    org: "Cedar College",
    category: "Event Showcase Website",
    img: "/Projects/Scinnova.webp",
    link: "https://scinnova.cedar.edu.pk/",
  },
  {
    id: 6,
    title: "KnightED",
    org: "Cedar College",
    category: "Premium LMS System",
    img: "/Projects/KnightED.webp",
    link: "https://knightedx.vercel.app/",
  },
  {
    id: 7,
    title: "Lab Management System",
    org: "HealthInn Lab",
    category: "Lab Management System",
    img: "/Projects/HealthInn.webp",
    link: "https://healthinnlab.vercel.app/",
  },
  {
    id: 8,
    title: "Health Hands Website",
    org: "Health Hands Pharmacy",
    category: "E-Commerce",
    img: "/Projects/HealthHandsWebsite.webp",
    link: "https://www.healthhandspharmacy.com/",
  },
];

const ProjectItem = ({
  project,
  index,
}: {
  project: {
    id: number;
    title: string;
    org: string;
    category: string;
    img: string;
    link: string;
  };
  index: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Parallax effect for image
  const y = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0]);

  return (
    <div
      className={`group relative w-full flex flex-col ${
        index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
      } gap-10 md:gap-20 items-center justify-center min-h-[50vh] md:min-h-[70vh] py-10 md:py-20`}
    >
      {/* Image Container */}
      <div className="relative w-full md:w-1/2 aspect-[4/3] overflow-hidden rounded-2xl border border-white/10">
        <motion.div
          style={{
            y:
              typeof window !== "undefined" && window.innerWidth >= 768 ? y : 0,
          }}
          className="w-full h-[120%] absolute top-[-10%]"
        >
          <Image
            src={project.img}
            alt={project.title}
            fill
            className="object-cover md:filter md:grayscale md:group-hover:grayscale-0 transition-all duration-700 ease-out"
          />
        </motion.div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/20 md:group-hover:bg-transparent transition-colors duration-500" />
      </div>

      {/* Info Container */}
      <div className="w-full md:w-1/3 flex flex-col justify-center text-center md:text-left z-10 mix-blend-difference">
        <span className="text-sm font-mono text-white/50 mb-4 uppercase tracking-widest">
          {project.org}
        </span>
        <h2 className="text-4xl md:text-6xl font-bold uppercase text-white mb-2 leading-[0.9]">
          {project.title}
        </h2>
        <p className="text-white/60 mb-8">{project.category}</p>

        <Link
          href={project.link}
          target={project.link !== "#" ? "_blank" : "_self"}
          className="inline-block border border-white/30 rounded-full px-8 py-3 text-white hover:bg-white hover:text-black transition-all duration-300 w-fit mx-auto md:mx-0"
        >
          {project.link !== "#" ? "View Live Site" : "Case Study"}
        </Link>
      </div>
    </div>
  );
};

export default function ProjectGallery() {
  return (
    <div className="w-full relative px-4 md:px-10 max-w-[1920px] mx-auto pb-40">
      {projects.map((project, index) => (
        <ProjectItem key={project.id} project={project} index={index} />
      ))}
    </div>
  );
}
