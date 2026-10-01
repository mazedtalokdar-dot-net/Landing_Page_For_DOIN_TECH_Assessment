import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";

export default function PromoBanner() {
  return (
    <section className="py-20 lg:py-28 bg-[#0F52FF] text-white overflow-hidden relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Student Image */}
          <div className="lg:col-span-6 relative flex items-center justify-center">
            <div className="w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] rounded-full bg-[#CAFF00] absolute -z-0" />
            <div className="relative z-10 w-[280px] h-[340px] sm:w-[360px] sm:h-[420px] rounded-3xl overflow-hidden border-4 border-white shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800"
                alt="Student learning"
                fill
                unoptimized
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Text */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#CAFF00] bg-blue-600/40 px-3.5 py-1.5 rounded-full border border-blue-400/30">
              Upgrade Your Skills
            </span>

            <h2 className="text-3xl sm:text-5xl font-black text-white leading-tight">
              Find The Best Online Course & Upgrade Your Skills Today
            </h2>

            <p className="text-base sm:text-lg text-blue-100 font-medium leading-relaxed">
              Join thousands of learners worldwide who are building rewarding careers through our expert-led, project-focused online courses.
            </p>

            <ul className="space-y-3 pt-2 text-sm sm:text-base font-bold text-white max-w-md mx-auto lg:mx-0">
              <li className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-[#CAFF00] shrink-0" />
                <span>Access to 1,200+ top-rated courses</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-[#CAFF00] shrink-0" />
                <span>Hands-on real-world projects & quizzes</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-[#CAFF00] shrink-0" />
                <span>Shareable verified digital certificates</span>
              </li>
            </ul>

            <div className="pt-4">
              <Link
                href="/signup"
                className="inline-flex items-center justify-center gap-2.5 rounded-2xl bg-[#CAFF00] px-8 py-4 text-base font-black text-[#0F52FF] hover:bg-[#bbf000] shadow-xl transition-all hover:scale-105"
              >
                <span>Get Started Today</span>
                <ArrowRight className="h-5 w-5 stroke-[3]" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
