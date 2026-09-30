"use client";

import { useState } from "react";
import Link from "next/link";
import { NAV_LINKS } from "@/constants/data";
import { Terminal, Menu, X, ArrowRight, Sparkles } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-800/80 bg-neutral-950/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 h-16 sm:h-20">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-0.5 shadow-lg shadow-indigo-500/20 transition-transform group-hover:scale-105">
            <div className="flex h-full w-full items-center justify-center rounded-[10px] bg-neutral-950">
              <Terminal className="h-4 sm:h-5 w-4 sm:w-5 text-indigo-400" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold tracking-tight text-white flex items-center gap-1">
              ByteSpace <span className="text-xs px-1.5 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 font-medium">NEW</span>
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-neutral-400 hover:text-white transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-4">
          <Link
            href="/login"
            className="text-sm font-medium text-neutral-300 hover:text-white transition-colors px-3 py-2"
          >
            Log In
          </Link>
          <Link
            href="/signup"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 px-4 py-2.5 text-sm font-semibold text-white shadow-md shadow-indigo-600/25 transition-all hover:from-indigo-500 hover:to-purple-500 hover:shadow-indigo-500/35 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <Sparkles className="h-4 w-4" />
            <span>Get Started</span>
            <ArrowRight className="h-4 w-4 opacity-70" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-900 transition-colors"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-neutral-800 bg-neutral-950 px-4 pt-2 pb-6 space-y-4">
          <div className="flex flex-col space-y-3 pt-2">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-neutral-300 hover:text-white px-2 py-1.5 rounded-md hover:bg-neutral-900"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="pt-4 border-t border-neutral-800 flex flex-col gap-2.5">
            <Link
              href="/login"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center text-sm font-medium text-neutral-200 py-2.5 rounded-lg bg-neutral-900 border border-neutral-800 hover:bg-neutral-800"
            >
              Log In
            </Link>
            <Link
              href="/signup"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 text-sm font-semibold text-white py-2.5 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 shadow-md"
            >
              <span>Get Started</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
