"use client";

import { useState } from "react";
import { SOLUTIONS } from "@/constants/data";
import { Terminal, CheckCircle } from "lucide-react";

export default function SolutionsSection() {
  const [activeTabId, setActiveTabId] = useState(SOLUTIONS[0].id);

  const activeSolution = SOLUTIONS.find((s) => s.id === activeTabId) || SOLUTIONS[0];

  return (
    <section id="solutions" className="py-20 lg:py-28 bg-neutral-900/40 border-t border-neutral-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <h2 className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-indigo-400">
            Tailored Workflows
          </h2>
          <p className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Built for every role in your software organization
          </p>
        </div>

        {/* Tab Selection */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {SOLUTIONS.map((sol) => (
            <button
              type="button"
              key={sol.id}
              onClick={() => setActiveTabId(sol.id)}
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                activeTabId === sol.id
                  ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/30"
                  : "bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white hover:bg-neutral-850"
              }`}
            >
              {sol.title}
            </button>
          ))}
        </div>

        {/* Tab Content Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-neutral-950 rounded-2xl border border-neutral-800 p-6 sm:p-10 shadow-2xl">
          {/* Left Text */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
              {activeSolution.heading}
            </h3>
            <p className="text-base text-neutral-400 leading-relaxed">
              {activeSolution.description}
            </p>

            <ul className="space-y-3 pt-2">
              <li className="flex items-center gap-3 text-sm text-neutral-300">
                <CheckCircle className="h-5 w-5 text-indigo-400 shrink-0" />
                <span>Zero configuration environment spin-up</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-neutral-300">
                <CheckCircle className="h-5 w-5 text-indigo-400 shrink-0" />
                <span>Instant sharing & pair-programming links</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-neutral-300">
                <CheckCircle className="h-5 w-5 text-indigo-400 shrink-0" />
                <span>Production telemetry & logging integration</span>
              </li>
            </ul>
          </div>

          {/* Right Code View Window */}
          <div className="lg:col-span-7 rounded-xl border border-neutral-800 bg-neutral-900 overflow-hidden shadow-inner font-mono text-xs sm:text-sm">
            <div className="flex items-center justify-between px-4 py-3 border-b border-neutral-800 bg-neutral-950">
              <div className="flex items-center gap-2">
                <Terminal className="h-4 w-4 text-indigo-400" />
                <span className="text-neutral-400 font-medium">bytespace-config.{activeSolution.id}.ts</span>
              </div>
              <span className="text-xs text-neutral-500">Read-only preview</span>
            </div>

            <pre className="p-5 text-indigo-200 overflow-x-auto leading-relaxed">
              <code>{activeSolution.codeSnippet}</code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
