"use client";

import { motion, useMotionValue } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import MagneticButton from "./MagneticButton";

interface Item {
  id: number;
  title: string;
  category: string;
  col: string;
  bg: string;
}

const items: Item[] = [
  {
    id: 1,
    title: "Neon Marketplace",
    category: "Next.js / WebGL",
    col: "md:col-span-2",
    bg: "bg-[#111]",
  },
  {
    id: 2,
    title: "Fin-Tech Dashboard",
    category: "UI/UX Design",
    col: "md:col-span-1",
    bg: "bg-[#161616]",
  },
  {
    id: 3,
    title: "AI Analytics",
    category: "React / Python",
    col: "md:col-span-1",
    bg: "bg-[#161616]",
  },
  {
    id: 4,
    title: "Agency Landing",
    category: "Framer Motion",
    col: "md:col-span-2",
    bg: "bg-[#111]",
  },
];

const ParallaxImage = ({ className }: { className: string }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();
    const relativeX = (e.clientX - left) / width - 0.5;
    const relativeY = (e.clientY - top) / height - 0.5;

    x.set(relativeX * 20); // 20px movement range
    y.set(relativeY * 20);
  };

  return (
    <motion.div
      className="absolute inset-0 w-full h-full z-0"
      onMouseMove={handleMouseMove}
      style={{ x, y, scale: 1.1 }}
    >
      <div
        className={className}
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #222 25%, transparent 25%, transparent 75%, #222 75%, #222), repeating-linear-gradient(45deg, #222 25%, #111 25%, #111 75%, #222 75%, #222)",
          backgroundPosition: "0 0, 10px 10px",
          backgroundSize: "20px 20px",
        }}
      />
    </motion.div>
  );
};

export default function BentoGrid() {
  return (
    <section className="min-h-screen px-4 md:px-10 py-20 bg-black">
      <div className="mb-12">
        <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tight">
          Selected Works
        </h2>
        <div className="h-[1px] w-full bg-white/20 mt-6" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[400px]">
        {items.map((item, i) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
            className={`group relative ${item.col} ${item.bg} rounded-3xl overflow-hidden border border-white/5 hover:border-white/20 transition-colors duration-500`}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10 pointer-events-none" />

            {/* Hover visual (pseudo image placeholder) */}
            <div
              className={`absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-1 pointer-events-none`}
            />

            <ParallaxImage className="absolute w-full h-full object-cover opacity-50 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out" />

            <div className="absolute bottom-0 left-0 p-8 z-20 w-full flex justify-between items-end pointer-events-none">
              <div>
                <p className="text-sm font-light text-white/60 mb-2 uppercase tracking-widest">
                  {item.category}
                </p>
                <h3 className="text-3xl font-bold group-hover:text-white transition-colors duration-300">
                  {item.title}
                </h3>
              </div>
              <div className="pointer-events-auto">
                <MagneticButton>
                  <div className="bg-white text-black p-3 rounded-full opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    <ArrowUpRight size={24} />
                  </div>
                </MagneticButton>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
