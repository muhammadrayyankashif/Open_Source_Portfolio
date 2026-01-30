"use client";

import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValue,
} from "framer-motion";
import TextReveal from "./TextReveal";
import { useEffect } from "react";

export default function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);

  // Mouse tracking for spotlight and tilt
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for the spotlight movement
  const springConfig = { damping: 25, stiffness: 150 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Tilt effect for the text
  // Initialize with fixed values to avoid SSR window error
  const tiltX = useTransform(smoothY, [0, 1080], [5, -5]);
  const tiltY = useTransform(smoothX, [0, 1920], [-5, 5]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section className="h-screen w-full flex flex-col justify-center items-center relative overflow-hidden bg-black perspective-1000">
      {/* Dynamic Spotlight Background */}
      <motion.div
        className="absolute w-[800px] h-[800px] rounded-full pointer-events-none -z-10 mix-blend-screen opacity-40 will-change-transform"
        style={{
          top: -400,
          left: -400,
          x: smoothX,
          y: smoothY,
          background:
            "radial-gradient(circle, rgba(99, 102, 241, 0.4) 0%, rgba(168, 85, 247, 0.2) 40%, rgba(0,0,0,0) 70%)",
        }}
      />

      {/* Kinetic Typography */}
      <motion.div
        className="z-10 flex flex-col items-center justify-center will-change-transform"
        style={{ rotateX: tiltX, rotateY: tiltY, perspective: 1000 }}
      >
        <div className="overflow-hidden relative">
          <TextReveal className="text-[15vw] leading-[0.8] font-black uppercase tracking-tighter mix-blend-difference text-white">
            Elite
          </TextReveal>
          {/* Subtle reflection/glow only on text */}
          <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent mix-blend-overlay pointer-events-none" />
        </div>

        <div className="flex items-center gap-4 md:gap-12 my-2 md:my-6 overflow-hidden">
          <motion.div
            style={{ width: useTransform(scrollY, [0, 300], [50, 200]) }}
            className="h-[2px] bg-white mix-blend-difference"
          />
          <span className="text-sm md:text-xl font-mono uppercase tracking-[0.5em] text-white/50 mix-blend-difference">
            Portfolio 2026
          </span>
          <motion.div
            style={{ width: useTransform(scrollY, [0, 300], [50, 200]) }}
            className="h-[2px] bg-white mix-blend-difference"
          />
        </div>

        <div className="overflow-hidden relative">
          <TextReveal className="text-[15vw] leading-[0.8] font-black uppercase tracking-tighter mix-blend-difference text-white pl-4 md:pl-12">
            Engineer
          </TextReveal>
        </div>
      </motion.div>

      {/* Footer Info */}
      <motion.div
        style={{
          y: useTransform(scrollY, [0, 200], [0, 50]),
          opacity: useTransform(scrollY, [0, 200], [1, 0]),
        }}
        className="absolute bottom-12 w-full flex justify-between px-6 md:px-12 text-xs md:text-sm font-mono text-white/30 uppercase tracking-widest mix-blend-difference"
      >
        <div>
          <p>Muhammad Rayyan</p>
        </div>
        <div className="text-right">
          <p>Based in Karachi</p>
          <p>Available for Select Work</p>
        </div>
      </motion.div>
    </section>
  );
}
