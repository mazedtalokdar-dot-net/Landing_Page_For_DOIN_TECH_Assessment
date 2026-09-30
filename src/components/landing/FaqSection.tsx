"use client";

import { useState } from "react";
import { FAQS } from "@/constants/data";
import { ChevronDown } from "lucide-react";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 lg:py-28 bg-neutral-950">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-14">
          <h2 className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-indigo-400">
            Got Questions?
          </h2>
          <p className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Frequently Asked Questions
          </p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-neutral-800 bg-neutral-900/50 overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                >
                  <span className="text-base sm:text-lg font-bold text-white pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 text-indigo-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-sm text-neutral-300 leading-relaxed border-t border-neutral-800/50 pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
