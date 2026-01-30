"use client";

import MagneticButton from "./MagneticButton";
import { MessageCircle } from "lucide-react";

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

          window.location.href = `mailto:muhammadrayyandev08@gmail.com?subject=Project Inquiry from ${name}&body=Name: ${name}%0D%0A%0D%0AMessage:%0D%0A${message}`;
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
                  window.location.href = `mailto:muhammadrayyan08@outlook.com?subject=Project Inquiry from ${name}&body=Name: ${name}%0D%0A%0D%0AMessage:%0D%0A${message}`;

                  // 2. Fallback check (Simple heuristic)
                  // If the user doesn't leave the window within 500ms, assume no mail app
                  setTimeout(() => {
                    if (document.hasFocus()) {
                      const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=muhammadrayyan08@outlook.com&su=Project Inquiry from ${name}&body=Name: ${name}%0D%0AMessage:%0D%0A${message}`;
                      window.open(gmailLink, "_blank");
                    }
                  }, 500);
                } else {
                  form?.reportValidity();
                }
              }}
              className="text-xl px-12 py-6"
            >
              Send Proposal
            </button>
          </MagneticButton>
        </div>
      </form>

      <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-10 border-t border-white/10 pt-10">
        <div>
          <h4 className="text-sm text-white/40 uppercase mb-4">
            Contact Details
          </h4>
          <p className="text-lg text-white">muhammadrayyan08@outlook.com</p>
          <p className="text-lg text-white">+92 306 0503704</p>
        </div>
        <div>
          <h4 className="text-sm text-white/40 uppercase mb-4">Socials</h4>
          <div className="flex flex-col gap-2">
            <a
              href="https://wa.me/923060503704"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg text-white hover:text-white/60 transition-colors flex items-center gap-2"
            >
              <MessageCircle size={24} />
              WhatsApp
            </a>
          </div>
        </div>
        <div>
          <h4 className="text-sm text-white/40 uppercase mb-4">Location</h4>
          <p className="text-lg text-white">Malir Cantt, Karachi</p>
          <p className="text-lg text-white">Pakistan</p>
        </div>
      </div>
    </div>
  );
}
