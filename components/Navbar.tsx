"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Home, FolderOpen, Trophy, Mail, Menu, X } from "lucide-react";

const navItems = [
  { name: "Home", icon: <Home size={20} />, href: "/" },
  { name: "Projects", icon: <FolderOpen size={20} />, href: "/projects" },
  { name: "Achievements", icon: <Trophy size={20} />, href: "/achievements" },
  { name: "Contact", icon: <Mail size={20} />, href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav aria-label="Main Navigation" className="fixed top-8 inset-x-0 flex justify-center z-50 pointer-events-none">
      <motion.div
        layout
        className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full pointer-events-auto overflow-hidden text-white"
        initial={{ width: 60, height: 60 }}
        animate={{
          width: isOpen ? 300 : 60,
          height: 60,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        onClick={() => setIsOpen(!isOpen)}
        onHoverStart={() => setIsOpen(true)}
        onHoverEnd={() => setIsOpen(false)}
      >
        <div className="h-full flex items-center px-4 relative">
          <motion.div layout="position" className="absolute left-4">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.div>

          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="flex items-center gap-6 ml-10 w-full justify-center"
              >
                {navItems.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className="hover:text-white/50 transition-colors flex items-center justify-center p-2 rounded-full hover:bg-white/10"
                    title={item.name}
                    aria-label={item.name}
                  >
                    {item.icon}
                  </Link>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </nav>
  );
}
