"use client";

import { useState } from "react";
import Image from "next/image";
import { Search, Sparkles, Star, Users, CheckCircle2 } from "lucide-react";

export default function HeroSection() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      alert(`Searching for: ${searchQuery}`);
    }
  };

  return (
    <section className="relative overflow-hidden bg-[#0F52FF] text-white pt-10 pb-16 lg:pt-16 lg:pb-24">
      {/* Decorative Geometric Patterns */}
      <div className="absolute top-10 left-10 w-24 h-24 rounded-full border-4 border-[#CAFF00]/30 pointer-events-none" />
      <div className="absolute top-1/2 right-6 w-16 h-16 bg-[#CAFF00]/20 rounded-2xl rotate-12 pointer-events-none" />
      <div className="absolute bottom-10 left-1/3 w-32 h-32 bg-blue-500/30 rounded-full blur-2xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text & Search */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-2 rounded-full bg-[#CAFF00]/20 border border-[#CAFF00]/40 px-4 py-1.5 text-xs sm:text-sm font-extrabold text-[#CAFF00]">
              <Sparkles className="h-4 w-4" />
              <span>Over 500+ Courses Available Now</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.15]">
              Get Access to{" "}
              <span className="text-[#CAFF00] underline decoration-[#CAFF00]/50 underline-offset-8">
                Hundreds
              </span>{" "}
              of Courses Available
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-blue-100 max-w-2xl font-medium leading-relaxed mx-auto lg:mx-0">
              Learn from top industry experts, master real-world skills, and accelerate your career with ByteSpace&apos;s interactive learning platform.
            </p>

            {/* Search Bar Input */}
            <form onSubmit={handleSearch} className="max-w-xl mx-auto lg:mx-0 pt-2">
              <div className="flex flex-col sm:flex-row items-center gap-2 rounded-2xl bg-white p-2 shadow-2xl">
                <div className="flex items-center gap-3 pl-4 w-full text-slate-400">
                  <Search className="h-5 w-5 text-[#0F52FF] shrink-0" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search your favorite course here..."
                    className="w-full bg-transparent py-3 text-sm text-slate-800 placeholder-slate-400 focus:outline-none font-medium"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-[#CAFF00] px-7 py-3.5 text-sm font-black text-[#0F52FF] hover:bg-[#bbf000] shadow-md transition-all shrink-0"
                >
                  <span>Search</span>
                </button>
              </div>
            </form>

            {/* Bullet Highlights */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 pt-2 text-xs sm:text-sm text-blue-100 font-semibold">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#CAFF00]" />
                <span>Lifetime Access</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#CAFF00]" />
                <span>Expert Instructors</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#CAFF00]" />
                <span>Verified Certificates</span>
              </div>
            </div>
          </div>

          {/* Right Hero Visual Image & Floating Badges */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            {/* Lime Yellow Background Circle */}
            <div className="absolute w-[300px] h-[300px] sm:w-[380px] sm:h-[380px] rounded-full bg-[#CAFF00] -z-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-2xl" />

            {/* Main Student Image */}
            <div className="relative z-10 w-[280px] h-[340px] sm:w-[340px] sm:h-[400px] rounded-3xl overflow-hidden border-4 border-white shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800"
                alt="Student learning online"
                fill
                unoptimized
                className="object-cover"
                priority
              />
            </div>

            {/* Floating Badge 1: Students */}
            <div className="absolute -bottom-4 -left-4 sm:left-0 z-20 flex items-center gap-3 rounded-2xl bg-white p-3.5 shadow-2xl text-slate-800 border border-slate-100">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-[#0F52FF]">
                <Users className="h-5 w-5" />
              </div>
              <div>
                <div className="text-base font-black text-slate-900">50K+ Students</div>
                <div className="text-xs text-slate-500 font-medium">Joined this month</div>
              </div>
            </div>

            {/* Floating Badge 2: Rating */}
            <div className="absolute -top-4 -right-4 sm:right-0 z-20 flex items-center gap-2 rounded-2xl bg-white px-4 py-2.5 shadow-2xl text-slate-800 border border-slate-100">
              <Star className="h-5 w-5 text-amber-400 fill-amber-400" />
              <div className="text-sm font-black text-slate-900">4.9/5.0 Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
