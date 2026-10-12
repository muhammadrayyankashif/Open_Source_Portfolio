"use client";

import Image from "next/image";

const pictures = [
  {
    src: "/projects/project-1.webp",
    title: "Event Stream Engine",
  },
  {
    src: "/projects/project-2.webp",
    title: "K8s Orchestrator",
  },
  {
    src: "/projects/project-3.webp",
    title: "Realtime Canvas",
  },
  {
    src: "/projects/project-4.webp",
    title: "ZK Identity",
  },
];

export default function MobileDepth() {
  return (
    <section className="bg-black py-20 px-4 md:hidden">
      <div className="flex flex-col gap-10">
        <h2 className="text-[15vw] font-bold uppercase tracking-tight text-white leading-none mb-10 text-center">
          Depth
        </h2>

        {pictures.map((project, i) => (
          <div
            key={i}
            className="relative w-full aspect-video rounded-xl overflow-hidden border border-white/10 group"
          >
            <Image
              src={project.src}
              fill
              alt={project.title}
              className="object-cover opacity-80 group-hover:opacity-100 transition-opacity"
            />
            <div className="absolute bottom-4 left-4 font-bold text-white text-xl z-10">
              {project.title}
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
          </div>
        ))}
      </div>
    </section>
  );
}
