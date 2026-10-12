"use client";

import MagneticButton from "./MagneticButton";
import { Github, Linkedin, Mail } from "lucide-react";
import { siteConfig } from "@/data/portfolioConfig";

export default function ContactForm() {
  return (
    <div className="w-full max-w-4xl mx-auto py-20 px-4">
      <form
        className="flex flex-col gap-10"
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.currentTarget);
          const name = formData.get("name");
          const message = formData.get("message");

          window.location.href = `mailto:${siteConfig.email}?subject=Project Inquiry from ${name}&body=Name: ${name}%0D%0A%0D%0AMessage:%0D%0A${message}`;
        }}
      >
        <div className="flex flex-col md:flex-row gap-10">
          <div className="flex-1 group">
            <label className="block text-sm text-white/50 mb-2 uppercase tracking-wide group-focus-within:text-white transition-colors">
              Name
            </label>
            <input
              name="name"
              type="text"
              required
              placeholder="John Doe"
              className="w-full bg-transparent border-b border-white/20 py-4 text-2xl text-white focus:outline-none focus:border-white transition-colors placeholder:text-white/10"
            />
          </div>
        </div>

        <div className="group">
          <label className="block text-sm text-white/50 mb-2 uppercase tracking-wide group-focus-within:text-white transition-colors">
            Message
          </label>
          <textarea
            name="message"
            rows={4}
            required
            placeholder="Tell us about your project..."
            className="w-full bg-transparent border-b border-white/20 py-4 text-2xl text-white focus:outline-none focus:border-white transition-colors placeholder:text-white/10 resize-none"
          />
        </div>

        <div className="mt-10 flex flex-col md:flex-row items-center gap-6 justify-end">
          <p className="text-white/30 text-sm hidden md:block">
            Using a default mail app?
          </p>
          <MagneticButton>
            <button
              onClick={(e) => {
                e.preventDefault();
                const form = e.currentTarget.closest("form");
                if (form && form.checkValidity()) {
                  const formData = new FormData(form);
                  const name = formData.get("name") as string;
                  const message = formData.get("message") as string;

                  // 1. Try Mailto
                  window.location.href = `mailto:${siteConfig.email}?subject=Project Inquiry from ${name}&body=Name: ${name}%0D%0A%0D%0AMessage:%0D%0A${message}`;

                  // 2. Fallback check (Simple heuristic)
                  // If the user doesn't leave the window within 500ms, assume no mail app
                  setTimeout(() => {
                    if (document.hasFocus()) {
                      const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${siteConfig.email}&su=Project Inquiry from ${name}&body=Name: ${name}%0D%0AMessage:%0D%0A${message}`;
                      window.open(gmailLink, "_blank");
                    }
                  }, 500);
                } else {
                  form?.reportValidity();
                }
              }}
              className="text-xl px-12 py-6"
            >
              Send Message
            </button>
          </MagneticButton>
        </div>
      </form>

      <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-10 border-t border-white/10 pt-10 font-mono">
        <div>
          <h4 className="text-sm text-white/40 uppercase mb-4">
            Contact Details
          </h4>
          <p className="text-lg text-white font-sans font-bold">{siteConfig.developerName}</p>
          <p className="text-base text-white/80 mt-1">{siteConfig.email}</p>
          <p className="text-sm text-white/60 mt-1">{siteConfig.phone}</p>
        </div>
        <div>
          <h4 className="text-sm text-white/40 uppercase mb-4">Socials</h4>
          <div className="flex flex-col gap-3">
            <a
              href={siteConfig.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-base text-white hover:text-white/60 transition-colors flex items-center gap-2"
            >
              <Github size={18} />
              GitHub
            </a>
            <a
              href={siteConfig.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-base text-white hover:text-white/60 transition-colors flex items-center gap-2"
            >
              <Linkedin size={18} />
              LinkedIn
            </a>
          </div>
        </div>
        <div>
          <h4 className="text-sm text-white/40 uppercase mb-4">Location</h4>
          <p className="text-lg text-white">{siteConfig.location}</p>
          <p className="text-sm text-white/50 mt-1">Remote &middot; Global</p>
        </div>
      </div>
    </div>
  );
}
