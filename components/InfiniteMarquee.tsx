"use client";

import { motion } from "framer-motion";

export default function InfiniteMarquee() {
  return (
    <div className="w-full py-24 overflow-hidden bg-[#ededed] text-black">
      <div className="flex whitespace-nowrap">
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 20,
          }}
          className="flex flex-shrink-0 will-change-transform"
        >
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="flex items-center gap-24 pr-24">
              <span className="text-[10vw] font-bold uppercase leading-none tracking-tighter">
                Software Engineer
              </span>
              <span
                className="text-[10vw] font-bold uppercase leading-none tracking-tighter text-stroke-black text-transparent"
                style={{ WebkitTextStroke: "2px black" }}
              >
                Engineering Excellence
              </span>
            </div>
          ))}
        </motion.div>

        {/* Seamless Loop Duplicate */}
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 20,
          }}
          className="flex flex-shrink-0"
        >
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="flex items-center gap-24 pr-24">
              <span className="text-[10vw] font-bold uppercase leading-none tracking-tighter">
                Software Engineer
              </span>
              <span
                className="text-[10vw] font-bold uppercase leading-none tracking-tighter text-stroke-black text-transparent"
                style={{ WebkitTextStroke: "2px black" }}
              >
                Engineering Excellence
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
