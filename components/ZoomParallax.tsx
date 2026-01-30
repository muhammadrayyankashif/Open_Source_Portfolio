"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function ZoomParallax() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
  const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
  const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

  const pictures = [
    {
      scale: scale4,
      className: "w-[25vw] h-[25vh] top-0 shadow-2xl z-20",
      src: "/Projects/KnightED.webp",
    },
    {
      scale: scale5,
      className: "top-[-30vh] left-[5vw] w-[35vw] h-[30vh]",
      src: "/Projects/Respire.webp",
    },
    {
      scale: scale6,
      className: "top-[-10vh] left-[-25vw] w-[20vw] h-[45vh]",
      src: "/Projects/HealthHandsWebsite.webp",
    },
    {
      scale: scale5,
      className: "top-[0vh] left-[27.5vw] w-[25vw] h-[25vh]",
      src: "/Projects/Dasteyaar.webp",
    },
    {
      scale: scale6,
      className: "top-[27.5vh] left-[5vw] w-[20vw] h-[25vh]",
      src: "/Projects/PSN.webp",
    },
    {
      scale: scale8,
      className: "top-[22.5vh] left-[-22.5vw] w-[30vw] h-[25vh]",
      src: "/Projects/HealthHandsPharmacy.webp",
    },
    {
      scale: scale9,
      className: "top-[22.5vh] left-[25vw] w-[15vw] h-[15vh]",
      src: "/Projects/Scinnova.webp",
    },
  ];

  return (
    <div ref={container} className="h-[300vh] relative hidden md:block">
      <div className="sticky top-0 h-screen overflow-hidden bg-black">
        {pictures.map(({ scale, className, src }, index) => (
          <motion.div
            key={index}
            style={{ scale }}
            className="absolute w-full h-full top-0 flex items-center justify-center p-10 will-change-transform"
          >
            <div
              className={`relative ${className} bg-[#1a1a1a] rounded-xl overflow-hidden border border-white/5`}
            >
              <Image
                src={src}
                fill
                alt="project"
                className="object-cover opacity-80 hover:opacity-100 transition-opacity duration-500"
              />
            </div>
          </motion.div>
        ))}

        {/* Central Overlay Text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-50 mix-blend-difference">
          <h2 className="text-[10vw] font-bold uppercase tracking-tight text-white leading-none">
            Depth
          </h2>
        </div>
      </div>
    </div>
  );
}
