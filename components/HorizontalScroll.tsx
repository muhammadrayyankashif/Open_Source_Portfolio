"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Protect What Matters",
    desc: "In a world of noise, identify what truly has value—your faith, your family, your integrity—and guard it with everything from the chaos.",
  },
  {
    num: "02",
    title: "Patience is Power",
    desc: "The ability to wait is the ability to win. Immediate gratification is the enemy of greatness. Build slowly, build correctly, and the result will outlast you.",
  },
  {
    num: "03",
    title: "Brain & Tongue",
    desc: "Who has a sharp mind can succeed. Who has a silver tongue can succeed. But who has both? He is unstoppable. Master the art of thought and the art of speech.",
  },
  {
    num: "04",
    title: "Excellence is Habit",
    desc: "We are what we repeatedly do. I don't settle for 'good enough' in life or code. If it can be done better, it must be done better.",
  },
];

export default function HorizontalScroll() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-75%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-[#0a0a0a]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-10 pl-10 md:pl-20">
          <div className="min-w-[50vw] md:min-w-[40vw] flex flex-col justify-center">
            <h2 className="text-6xl md:text-8xl font-bold uppercase leading-none mb-8 text-[#ededed]">
              My <br /> Philosophy
            </h2>
            <p className="text-xl md:text-2xl font-light text-[#ededed]/60 max-w-md">
              I don&apos;t just build websites; I craft digital experiences that
              leave a lasting impression.
            </p>
          </div>

          {services.map((service) => (
            <div
              key={service.num}
              className="group relative h-[60vh] w-[80vw] md:w-[40vw] bg-[#161616] border border-white/10 p-8 md:p-12 flex flex-col justify-between transition-colors hover:bg-[#ededed] hover:text-black rounded-3xl"
            >
              <div className="text-4xl md:text-6xl font-light opacity-50 font-mono group-hover:opacity-100 transition-opacity">
                {service.num}
              </div>
              <div>
                <h3 className="text-3xl md:text-5xl font-bold mb-4 uppercase">
                  {service.title}
                </h3>
                <p className="text-lg md:text-xl font-light opacity-70 group-hover:opacity-100">
                  {service.desc}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
