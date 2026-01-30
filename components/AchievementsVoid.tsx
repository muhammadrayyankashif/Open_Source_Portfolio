"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { achievements } from "@/data/achievements";

// Helper to generate deterministic random positions based on index
const getPos = (i: number) => {
  const x = (i % 2 === 0 ? 1 : -1) * (Math.random() * 25 + 10);
  const y = (Math.random() - 0.5) * 25; // Decreased spread to avoid off-screen bouncing
  return { x, y };
};

export default function AchievementsVoid() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <div ref={containerRef} className="h-[400vh] relative hidden md:block">
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-black flex items-center justify-center perspective-[1000px]">
        {/* Central Guides - More subtle */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-10">
          <div className="w-[1px] h-full bg-gradient-to-b from-transparent via-white to-transparent" />
          <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white to-transparent absolute" />
        </div>

        {achievements.map((award, i) => {
          // Staggered Z depth.
          const zOffset = i * -600;

          // eslint-disable-next-line react-hooks/rules-of-hooks
          const z = useTransform(
            scrollYProgress,
            [0, 1],
            [zOffset, zOffset + 5000] // Faster travel
          );

          // eslint-disable-next-line react-hooks/rules-of-hooks
          const opacity = useTransform(z, [-1000, 0, 800], [0, 1, 0]);

          // Add scale effect based on z
          // eslint-disable-next-line react-hooks/rules-of-hooks
          const scale = useTransform(z, [-1000, 0, 1000], [0.5, 1, 1.5]);

          const pos = getPos(i);

          return (
            <motion.div
              key={i}
              style={{
                z,
                opacity,
                scale,
                x: `${pos.x}vw`,
                y: `${pos.y}vh`,
              }}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center text-center w-[300px] md:w-[600px] pointer-events-none"
            >
              <div className="border border-white/10 bg-black/40 backdrop-blur-md p-6 md:p-10 rounded-2xl shadow-2xl relative overflow-hidden group">
                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <span className="text-xs md:text-sm font-mono text-white/40 mb-3 block tracking-widest uppercase">
                  {award.year} — {award.organization}
                </span>
                <h2 className="text-3xl md:text-5xl font-bold uppercase text-white mb-2 leading-none">
                  {award.title}
                </h2>
                <p className="text-sm md:text-base text-white/70 uppercase tracking-widest mt-2">
                  {award.category}
                </p>
              </div>
            </motion.div>
          );
        })}

        {/* Final Message */}
        <motion.div
          style={{
            opacity: useTransform(scrollYProgress, [0.85, 1], [0, 1]),
            scale: useTransform(scrollYProgress, [0.85, 1], [0.8, 1]),
          }}
          className="absolute bottom-10 md:bottom-20 text-center z-50 mix-blend-difference"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 uppercase tracking-tighter">
            Manifesting
            <br />
            Greatness
          </h2>
        </motion.div>
      </div>
    </div>
  );
}
