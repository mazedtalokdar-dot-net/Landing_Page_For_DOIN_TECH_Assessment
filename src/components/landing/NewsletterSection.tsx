"use client";

import { useState } from "react";
import { Mail, Send } from "lucide-react";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      alert(`Subscribed successfully with ${email}`);
      setEmail("");
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-[#0F52FF] to-blue-700 p-8 sm:p-14 text-white shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 text-center md:text-left max-w-xl">
            <h2 className="text-2xl sm:text-4xl font-black tracking-tight leading-tight">
              Subscribe To Our Newsletter For Updates
            </h2>
            <p className="text-sm sm:text-base text-blue-100 font-medium">
              Get weekly course discounts, free ebook guides, and industry news delivered right to your inbox.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="w-full md:w-auto min-w-[320px] sm:min-w-[420px]">
            <div className="flex flex-col sm:flex-row items-center gap-2 rounded-2xl bg-white p-2 shadow-xl">
              <div className="flex items-center gap-3 pl-3 w-full text-slate-400">
                <Mail className="h-5 w-5 text-[#0F52FF] shrink-0" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address..."
                  required
                  className="w-full bg-transparent py-2.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none font-medium"
                />
              </div>
              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-[#CAFF00] px-6 py-3 text-sm font-extrabold text-[#0F52FF] hover:bg-[#bbf000] transition-all shrink-0 shadow"
              >
                <span>Subscribe</span>
                <Send className="h-4 w-4" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
