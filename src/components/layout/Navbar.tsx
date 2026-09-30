"use client";

import { useState } from "react";
import Link from "next/link";
import { NAV_LINKS } from "@/constants/data";
import { BookOpen, Menu, X, ArrowRight } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-[#0F52FF] text-white border-b border-blue-600/30 shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 h-20">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#CAFF00] text-[#0F52FF] shadow-lg transition-transform group-hover:scale-105">
            <BookOpen className="h-6 w-6 font-bold stroke-[2.5]" />
          </div>
          <span className="text-2xl font-black tracking-tight text-white">
            Byte<span className="text-[#CAFF00]">Space</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-semibold text-blue-100 hover:text-[#CAFF00] transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-4">
          <Link
            href="/login"
            className="text-sm font-bold text-white hover:text-[#CAFF00] transition-colors px-4 py-2"
          >
            Sign In
          </Link>
          <Link
            href="/signup"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#CAFF00] px-5 py-2.5 text-sm font-extrabold text-[#0F52FF] hover:bg-[#bbf000] shadow-md transition-all hover:scale-105"
          >
            <span>Sign Up</span>
            <ArrowRight className="h-4 w-4 stroke-[3]" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-white hover:bg-blue-600/50 transition-colors"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-blue-600/40 bg-[#0F52FF] px-4 pt-2 pb-6 space-y-4">
          <div className="flex flex-col space-y-3 pt-2">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-semibold text-white hover:text-[#CAFF00] px-3 py-2 rounded-md hover:bg-blue-600/40"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="pt-4 border-t border-blue-600/40 flex flex-col gap-2.5">
            <Link
              href="/login"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center text-sm font-bold text-white py-2.5 rounded-xl border border-white/30 hover:bg-blue-600/40"
            >
              Sign In
            </Link>
            <Link
              href="/signup"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 text-sm font-extrabold text-[#0F52FF] py-2.5 rounded-xl bg-[#CAFF00] hover:bg-[#bbf000] shadow-md"
            >
              <span>Sign Up</span>
              <ArrowRight className="h-4 w-4 stroke-[3]" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
