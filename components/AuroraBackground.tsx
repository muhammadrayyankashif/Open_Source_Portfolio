"use client";

import { motion } from "framer-motion";

export default function AuroraBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none opacity-40 mix-blend-screen">
      {/* Animated Blobs - Optimized with Radial Gradients (No Blur Filter) */}
      <motion.div
        className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vh] rounded-full will-change-transform"
        style={{
          background:
            "radial-gradient(circle, rgba(147, 51, 234, 1) 0%, rgba(147, 51, 234, 0) 70%)",
        }}
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute top-[20%] right-[-10%] w-[40vw] h-[40vh] rounded-full will-change-transform"
        style={{
          background:
            "radial-gradient(circle, rgba(37, 99, 235, 1) 0%, rgba(37, 99, 235, 0) 70%)",
        }}
        animate={{
          x: [0, -50, 0],
          y: [0, 100, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute bottom-[-10%] left-[20%] w-[60vw] h-[50vh] rounded-full will-change-transform"
        style={{
          background:
            "radial-gradient(circle, rgba(79, 70, 229, 1) 0%, rgba(79, 70, 229, 0) 70%)",
        }}
        animate={{
          x: [0, 50, 0],
          y: [0, -50, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
}
