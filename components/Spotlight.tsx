"use client";

import { useRef } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";

export default function Spotlight() {
  const divRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;

    const rect = divRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  // Create template strings that update directly via Framer Motion without React renders
  const revealGradient = useMotionTemplate`radial-gradient(circle 250px at ${mouseX}px ${mouseY}px, rgba(255,255,255,0.15), transparent 80%)`;
  const maskGradient = useMotionTemplate`radial-gradient(circle 200px at ${mouseX}px ${mouseY}px, black 30%, transparent 70%)`;

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      className="relative w-full h-[60vh] bg-black overflow-hidden flex items-center justify-center cursor-none group"
    >
      {/* Background Grid - Barely visible */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />

      {/* The content that is "Always there" but dim */}
      <div className="relative z-10 text-center pointer-events-none opacity-20 group-hover:opacity-10 transition-opacity duration-500">
        <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-widest text-[#333]">
          Secret
        </h2>
      </div>

      {/* The Reveal Mask Layer */}
      <motion.div
        className="absolute inset-0 z-20 pointer-events-none flex items-center justify-center will-change-[background]"
        style={{
          background: revealGradient,
        }}
      />

      {/* The "Truth" layer - White text masked by cursor */}
      <motion.div
        className="absolute inset-0 z-30 flex items-center justify-center pointer-events-none will-change-[mask-image]"
        style={{
          maskImage: maskGradient,
          WebkitMaskImage: maskGradient,
        }}
      >
        <div className="text-center">
          <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tight text-white mb-4">
            Hidden Potential
          </h2>
          <p className="text-xl text-white/80 max-w-xl mx-auto font-light">
            Great design lies in the shadows until you shed light on it. We
            uncover the masterpiece within.
          </p>
        </div>
      </motion.div>

      <div className="absolute bottom-10 left-0 w-full text-center text-white/20 text-xs">
        MOOC THE LIGHT
      </div>
    </div>
  );
}
