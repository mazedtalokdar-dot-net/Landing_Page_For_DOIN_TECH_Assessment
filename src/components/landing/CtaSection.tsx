import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export default function CtaSection() {
  return (
    <section className="relative overflow-hidden py-20 lg:py-28 bg-neutral-950 border-t border-neutral-800">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-gradient-to-r from-indigo-600/30 to-purple-600/30 blur-[140px] rounded-full pointer-events-none" />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center space-y-8 rounded-3xl border border-indigo-500/30 bg-gradient-to-b from-neutral-900/90 to-indigo-950/40 p-10 sm:p-16 shadow-2xl backdrop-blur-md">
        <div className="inline-flex items-center gap-2 rounded-full bg-indigo-500/10 border border-indigo-500/30 px-3.5 py-1 text-xs font-semibold text-indigo-300">
          <Sparkles className="h-3.5 w-3.5" />
          <span>Ready to Supercharge Your Workflow?</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
          Join over 85,000+ developers building faster with ByteSpace
        </h2>

        <p className="text-base sm:text-lg text-neutral-300 max-w-2xl mx-auto">
          Spin up your first cloud workspace in under 3 seconds. No credit card required.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link
            href="/signup"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-4 text-base font-bold text-white shadow-xl shadow-indigo-600/30 hover:scale-[1.02] transition-all"
          >
            <span>Start Free 14-Day Trial</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
          <Link
            href="#pricing"
            className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl bg-neutral-900 border border-neutral-700 px-8 py-4 text-base font-semibold text-neutral-200 hover:text-white hover:bg-neutral-800 transition-all"
          >
            View All Plans
          </Link>
        </div>
      </div>
    </section>
  );
}
