"use client";

import { motion } from "framer-motion";
import { achievements } from "@/data/achievements";

export default function AchievementsList() {
  return (
    <section className="relative z-10 bg-black px-4 md:px-10 py-20 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-[10vw] md:text-[5vw] font-bold uppercase text-white mb-20 leading-none opacity-20">
          The Archive
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-20">
          {achievements.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="border-t border-white/20 pt-6 group"
            >
              <div className="flex justify-between items-start mb-4">
                <span className="font-mono text-sm text-white/40">
                  0{index + 1}
                </span>
                <span className="font-mono text-sm text-white/40">
                  {item.year}
                </span>
              </div>

              <h3 className="text-3xl md:text-5xl font-bold uppercase text-white mb-4 group-hover:text-purple-400 transition-colors duration-300">
                {item.title}
              </h3>

              <div className="flex justify-between items-end">
                <div>
                  <p className="text-white/60 uppercase tracking-widest text-sm mb-1">
                    {item.organization}
                  </p>
                  <p className="text-white/40 text-sm">{item.category}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
