"use client";

import MagneticButton from "@/components/MagneticButton";
import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="w-full h-screen bg-black flex flex-col items-center justify-center relative overflow-hidden">
      {/* Glitch Effect Background Text */}
      <h1 className="absolute text-[30vw] font-bold text-white/5 select-none pointer-events-none tracking-tighter mix-blend-difference">
        404
      </h1>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="z-10 flex flex-col items-center text-center gap-6 p-4"
      >
        <span className="text-white/50 uppercase tracking-[0.5em] text-sm md:text-base">
          System Failure
        </span>

        <h2 className="text-4xl md:text-7xl font-bold uppercase text-white max-w-2xl leading-[0.9]">
          Coordinates <br /> Not Found
        </h2>

        <p className="text-white/50 max-w-md text-sm md:text-lg">
          The requested signal has been lost in the void. Returning to base is
          the only logical option.
        </p>

        <div className="mt-10">
          <MagneticButton>
            <Link
              href="/"
              className="px-10 py-5 bg-white text-black text-xl font-medium rounded-full hover:scale-105 transition-transform inline-block"
            >
              Return to Base
            </Link>
          </MagneticButton>
        </div>
      </motion.div>
    </div>
  );
}
