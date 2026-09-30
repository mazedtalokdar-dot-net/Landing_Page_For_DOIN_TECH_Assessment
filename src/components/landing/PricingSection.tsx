"use client";

import { useState } from "react";
import Link from "next/link";
import { PRICING_PLANS } from "@/constants/data";
import { Check, Sparkles } from "lucide-react";

export default function PricingSection() {
  const [annualBilling, setAnnualBilling] = useState(true);

  return (
    <section id="pricing" className="py-20 lg:py-28 bg-neutral-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <h2 className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-indigo-400">
            Simple & Transparent Pricing
          </h2>
          <p className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Predictable plans for teams of any size
          </p>
          <p className="text-base sm:text-lg text-neutral-400">
            Start for free, scale seamlessly as your compute requirements grow.
          </p>

          {/* Billing Switcher */}
          <div className="pt-6 flex items-center justify-center gap-4">
            <span className={`text-sm font-medium ${!annualBilling ? "text-white" : "text-neutral-400"}`}>
              Monthly Billing
            </span>

            <button
              type="button"
              onClick={() => setAnnualBilling(!annualBilling)}
              className="relative inline-flex h-7 w-14 items-center rounded-full bg-neutral-800 p-1 transition-colors focus:outline-none"
              aria-label="Toggle Billing Interval"
            >
              <span
                className={`inline-block h-5 w-5 rounded-full bg-indigo-500 transition-transform ${
                  annualBilling ? "translate-x-7" : "translate-x-0"
                }`}
              />
            </button>

            <span className={`text-sm font-medium flex items-center gap-1.5 ${annualBilling ? "text-white" : "text-neutral-400"}`}>
              <span>Annual Billing</span>
              <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold border border-emerald-500/30">
                Save 20%
              </span>
            </span>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PRICING_PLANS.map((plan, idx) => {
            const price = typeof plan.monthlyPrice === "number"
              ? (annualBilling ? plan.annualPrice : plan.monthlyPrice)
              : plan.monthlyPrice;

            return (
              <div
                key={idx}
                className={`relative flex flex-col justify-between rounded-2xl p-8 transition-all ${
                  plan.popular
                    ? "bg-gradient-to-b from-neutral-900 via-neutral-900 to-indigo-950/40 border-2 border-indigo-500 shadow-2xl shadow-indigo-950/50 scale-[1.02]"
                    : "bg-neutral-900/50 border border-neutral-800 hover:border-neutral-700"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 rounded-full bg-indigo-600 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white shadow-md">
                    <Sparkles className="h-3.5 w-3.5" />
                    <span>Most Popular</span>
                  </div>
                )}

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-sm text-neutral-400 min-h-[40px]">{plan.description}</p>
                  </div>

                  {/* Price display */}
                  <div className="flex items-baseline gap-1">
                    {typeof price === "number" ? (
                      <>
                        <span className="text-4xl sm:text-5xl font-extrabold text-white">\${price}</span>
                        <span className="text-sm text-neutral-400 font-medium">/ month per dev</span>
                      </>
                    ) : (
                      <span className="text-4xl font-extrabold text-white">{price}</span>
                    )}
                  </div>

                  <hr className="border-neutral-800" />

                  {/* Feature list */}
                  <ul className="space-y-3 text-sm">
                    {plan.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-3 text-neutral-300">
                        <Check className="h-5 w-5 text-indigo-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <div className="pt-8">
                  <Link
                    href={plan.ctaHref}
                    className={`w-full inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold transition-all ${
                      plan.popular
                        ? "bg-indigo-600 text-white hover:bg-indigo-500 shadow-lg shadow-indigo-600/30"
                        : "bg-neutral-800 text-white hover:bg-neutral-700 border border-neutral-700"
                    }`}
                  >
                    {plan.ctaText}
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
