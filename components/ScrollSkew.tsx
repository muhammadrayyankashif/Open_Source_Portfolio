"use client";

import { ReactNode, useEffect } from "react";
import { useLenis } from "./SmoothScroll";
import { motion, useSpring, useTransform } from "framer-motion";

export default function ScrollSkew({ children }: { children: ReactNode }) {
  const lenis = useLenis();
  // We use spring to smooth out the velocity changes so the skew isn't jittery
  const velocity = useSpring(0, { stiffness: 400, damping: 90 });
  const skewY = useTransform(velocity, [-20, 20], [-2, 2]);
  // Map velocity range to skew degrees. Small subtle effect.

  useEffect(() => {
    if (!lenis) return;

    const handleScroll = (e: { velocity: number }) => {
      // Disable skew on mobile via JS check to avoid hydration mismatch/duplication
      if (window.innerWidth < 768) {
        velocity.set(0);
        return;
      }
      velocity.set(e.velocity);
    };

    lenis.on("scroll", handleScroll);

    return () => {
      lenis.off("scroll", handleScroll);
    };
  }, [lenis, velocity]);

  return (
    <motion.div
      style={{ skewY }}
      className="w-full relative z-10 origin-center"
    >
      {children}
    </motion.div>
  );
}
