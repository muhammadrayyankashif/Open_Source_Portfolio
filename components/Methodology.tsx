"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const steps = [
  {
    title: "The Narrative",
    description:
      "Code is just the medium; the story is the product. I focus on telling a compelling story through interaction, rather than just selling a service. It's about how the user feels, not just what they see.",
  },
  {
    title: "Simplicity > Awards",
    description:
      "Award-winning designs are cool, but simplicity is timeless. I cut through the noise to deliver experiences that are intuitive, powerful, and undeniably effective. Complexity is easy; simplicity is elite.",
  },
  {
    title: "Elite Execution",
    description:
      "I don't ship 'good enough'. I ship perfection. From the fluid physics of a scroll to the micro-timing of a reveal, every detail is engineered to assert dominance in the digital space.",
  },
  {
    title: "The Legacy",
    description:
      "Building systems that last. My code is clean, scalable, and built to withstand the test of time. Protect what matters—your digital presence.",
  },
];

export default function Methodology() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 px-4 md:px-10 bg-[#0a0a0a] text-[#ededed]">
      <div className="flex flex-col md:flex-row gap-12 md:gap-24">
        <div className="md:w-1/3">
          <h2 className="text-sm font-light uppercase tracking-widest mb-4 opacity-70">
            Our Process
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold uppercase leading-tight">
            Method to the Madness
          </h3>
        </div>

        <div className="md:w-2/3">
          {steps.map((step, index) => (
            <div
              key={index}
              className="border-t border-white/20 py-8 cursor-pointer group"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <div className="flex justify-between items-center">
                <h4 className="text-2xl md:text-3xl font-bold uppercase transition-colors group-hover:text-white/80">
                  {step.title}
                </h4>
                <div className="bg-white/10 p-2 rounded-full text-white transition-colors group-hover:bg-white/20">
                  {openIndex === index ? (
                    <Minus size={20} />
                  ) : (
                    <Plus size={20} />
                  )}
                </div>
              </div>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="pt-6 text-lg font-light text-white/60 max-w-2xl leading-relaxed">
                      {step.description}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
          <div className="border-t border-white/20" />
        </div>
      </div>
    </section>
  );
}
