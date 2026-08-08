"use client";

import { useEffect, useState } from "react";
import MagneticButton from "@/components/MagneticButton";

export default function Footer() {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      setTime(
        new Date().toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
        })
      );
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer
      className="relative h-[80vh]"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="fixed bottom-0 h-[80vh] w-full bg-[#0a0a0a] flex flex-col justify-between p-10 outline outline-1 outline-white/10 -z-10">
        <div className="flex justify-between items-start">
          <h3 className="text-xl uppercase font-light tracking-widest text-white/50">
            Contact
          </h3>
          <div className="flex gap-4">
            {/* Direct contact channels */}
          </div>
        </div>

        <div className="flex flex-col items-center justify-center flex-1">
          <div className="relative">
            <h2 className="text-[10vw] font-bold text-[#ededed] uppercase leading-none tracking-tighter text-center">
              Muhammad
            </h2>
            <h2 className="text-[10vw] font-bold text-[#ededed] uppercase leading-none tracking-tighter text-center italic opacity-30">
              Rayyan
            </h2>
          </div>
          <div className="mt-10 flex flex-col items-center gap-4">
            <MagneticButton>
              <a
                href="mailto:muhammadrayyan08@outlook.com"
                className="bg-white text-black text-xl md:text-2xl font-medium px-10 py-5 rounded-full hover:scale-105 transition-transform block"
              >
                muhammadrayyan08@outlook.com
              </a>
            </MagneticButton>
            <a
              href="mailto:muhammadrayyandev08@gmail.com"
              className="text-white/30 hover:text-white transition-colors text-sm"
            >
              Dev: muhammadrayyandev08@gmail.com
            </a>
          </div>
        </div>

        <div className="flex justify-between items-end">
          <p className="text-white/30 text-sm">© {new Date().getFullYear()} MUHAMMAD RAYYAN</p>
          <p className="text-white/30 text-sm" suppressHydrationWarning>
            LOCAL TIME: {time || "--:--"}
          </p>
        </div>
      </div>
    </footer>
  );
}
