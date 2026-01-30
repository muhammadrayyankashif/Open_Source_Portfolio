"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function TextReveal({
  children,
  className,
}: {
  children: string;
  className?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <div ref={ref} className={className}>
      <span className="sr-only">{children}</span>
      <motion.span
        aria-hidden
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{ staggerChildren: 0.05 }}
      >
        {children.split("").map((char, index) => (
          <motion.span
            key={index}
            variants={{
              hidden: { y: "100%" },
              visible: { y: 0 },
            }}
            transition={{ duration: 0.5, ease: [0.33, 1, 0.68, 1] }}
            className="inline-block overflow-hidden align-top" // align-top for line-height consistency
          >
            {/* span wrapper for the translation check */}
            <span className="block">{char === " " ? "\u00A0" : char}</span>
          </motion.span>
        ))}
      </motion.span>
    </div>
  );
}
