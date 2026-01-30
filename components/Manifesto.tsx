"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Manifesto() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const x1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const x2 = useTransform(scrollYProgress, [0, 1], [0, 200]);

  return (
    <section
      ref={ref}
      className="py-32 bg-[#ededed] text-black overflow-hidden flex flex-col justify-center gap-4 relative z-10"
    >
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full pointer-events-none mix-blend-multiply will-change-transform"
        style={{
          background:
            "radial-gradient(circle, rgba(168, 85, 247, 0.1) 0%, rgba(59, 130, 246, 0.1) 50%, rgba(255, 255, 255, 0) 70%)",
        }}
      />

      <h2 className="text-center text-sm font-bold uppercase tracking-[0.3em] mb-12 opacity-60">
        The Vision
      </h2>

      <motion.div
        style={{ x: x1 }}
        className="whitespace-nowrap flex justify-center"
      >
        <h3 className="text-[12vw] leading-[0.85] font-black uppercase tracking-tighter opacity-90">
          Redefining
        </h3>
      </motion.div>

      <motion.div
        style={{ x: x2 }}
        className="whitespace-nowrap flex justify-center"
      >
        <h3
          className="text-[12vw] leading-[0.85] font-black uppercase tracking-tighter text-stroke-black text-transparent"
          style={{ WebkitTextStroke: "2px black", opacity: 0.8 }}
        >
          Digital
        </h3>
      </motion.div>

      <motion.div
        style={{ x: x1 }}
        className="whitespace-nowrap flex justify-center"
      >
        <h3 className="text-[12vw] leading-[0.85] font-black uppercase tracking-tighter opacity-90">
          Excellence
        </h3>
      </motion.div>

      <div className="max-w-3xl mx-auto text-center mt-12 px-6 flex flex-col gap-8">
        <p className="text-xl md:text-2xl font-medium leading-relaxed">
          The discipline required to memorize the{" "}
          <span className="font-bold">Holy Quran</span> is the same discipline I
          bring to every line of code. Unwavering attention to detail, and a
          commitment to perfection.
        </p>
        <p className="text-lg md:text-xl font-light opacity-80">
          I don&apos;t just build software; I engineer experiences. Where logic
          meets creativity, that is where I thrive. Precision. Performance.
          Perfection.
        </p>

        <div className="mt-10 opacity-0 hover:opacity-100 transition-opacity duration-700 cursor-crosshair">
          <p className="text-sm font-mono tracking-widest uppercase text-black/40">
            &quot;Protect what matters! Because nothing else does.&quot;
          </p>
        </div>
      </div>
    </section>
  );
}
