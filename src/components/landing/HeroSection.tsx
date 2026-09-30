"use client";

import { useState } from "react";
import Link from "next/link";
import { COMPANY_LOGOS } from "@/constants/data";
import { Sparkles, ArrowRight, Play, CheckCircle2, Copy, Check, Terminal, Cpu, Shield, Zap } from "lucide-react";

export default function HeroSection() {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<"terminal" | "metrics">("terminal");

  const copyCommand = () => {
    navigator.clipboard.writeText("npx bytespace init my-workspace");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-32 bg-neutral-950">
      {/* Background Gradients & Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-indigo-600/30 via-purple-600/20 to-pink-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-10 left-10 w-72 h-72 bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-8">
          {/* Announcement Pill */}
          <div className="inline-flex items-center gap-2 rounded-full bg-neutral-900/90 border border-indigo-500/30 px-4 py-1.5 text-xs sm:text-sm font-medium text-indigo-300 shadow-inner">
            <Sparkles className="h-4 w-4 text-indigo-400 animate-pulse" />
            <span>Announcing ByteSpace 2.0</span>
            <span className="h-3 w-[1px] bg-neutral-700 mx-1" />
            <span className="text-neutral-400 flex items-center gap-1 hover:text-white cursor-pointer">
              Explore what&apos;s new <ArrowRight className="h-3.5 w-3.5" />
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1]">
            Build & Scale Cloud Workspaces at{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Light Speed
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-neutral-400 max-w-2xl font-normal leading-relaxed">
            ByteSpace empowers engineering teams with instant high-performance virtual environments, built-in AI intelligence, and enterprise-grade security.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto pt-2">
            <Link
              href="/signup"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-indigo-600/30 hover:shadow-indigo-500/45 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Get Started Free</span>
              <ArrowRight className="h-4 w-4" />
            </Link>

            <button
              type="button"
              onClick={copyCommand}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-neutral-900 border border-neutral-800 px-5 py-3.5 text-sm font-mono text-neutral-300 hover:text-white hover:border-neutral-700 transition-all hover:bg-neutral-850"
            >
              <Terminal className="h-4 w-4 text-indigo-400" />
              <span>npx bytespace init</span>
              {copied ? (
                <Check className="h-4 w-4 text-emerald-400 ml-1" />
              ) : (
                <Copy className="h-4 w-4 text-neutral-500 ml-1" />
              )}
            </button>
          </div>

          {/* Key Value Props Bar */}
          <div className="flex flex-wrap items-center justify-center gap-6 pt-4 text-xs sm:text-sm text-neutral-400">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-400" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-400" />
              <span>3-second environment boot</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-400" />
              <span>SOC2 Type II certified</span>
            </div>
          </div>
        </div>

        {/* Dashboard Mockup Card */}
        <div className="mt-14 lg:mt-20 max-w-5xl mx-auto rounded-2xl border border-neutral-800 bg-neutral-900/70 p-2 sm:p-4 shadow-2xl backdrop-blur-xl shadow-indigo-950/40">
          <div className="rounded-xl border border-neutral-800/80 bg-neutral-950 overflow-hidden shadow-inner">
            {/* Top Bar of Window */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-neutral-800 bg-neutral-900/60">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-rose-500/80 inline-block" />
                <span className="h-3 w-3 rounded-full bg-amber-500/80 inline-block" />
                <span className="h-3 w-3 rounded-full bg-emerald-500/80 inline-block" />
                <span className="ml-3 text-xs font-mono text-neutral-400 hidden sm:inline">bytespace-workspace-prod.internal</span>
              </div>

              {/* Window Tabs */}
              <div className="flex items-center gap-1 bg-neutral-900 p-1 rounded-lg border border-neutral-800">
                <button
                  type="button"
                  onClick={() => setActiveTab("terminal")}
                  className={`px-3 py-1 text-xs font-medium rounded-md transition-colors ${
                    activeTab === "terminal" ? "bg-indigo-600 text-white" : "text-neutral-400 hover:text-white"
                  }`}
                >
                  Live Terminal
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("metrics")}
                  className={`px-3 py-1 text-xs font-medium rounded-md transition-colors ${
                    activeTab === "metrics" ? "bg-indigo-600 text-white" : "text-neutral-400 hover:text-white"
                  }`}
                >
                  Resource Metrics
                </button>
              </div>
            </div>

            {/* Window Content Body */}
            <div className="p-4 sm:p-6 min-h-[300px] font-mono text-xs sm:text-sm text-left">
              {activeTab === "terminal" ? (
                <div className="space-y-3 text-neutral-300">
                  <div className="flex items-center gap-2 text-neutral-500">
                    <span>$</span>
                    <span className="text-indigo-400">bytespace</span>
                    <span className="text-neutral-300">deploy --env production --region us-east</span>
                  </div>
                  <div className="text-emerald-400 font-medium">
                    ✔ Provisioning cloud container (8 vCPU, 16GB RAM NVMe)... [1.2s]
                  </div>
                  <div className="text-emerald-400 font-medium">
                    ✔ Mounting PostgreSQL & Redis cluster dependencies... [0.8s]
                  </div>
                  <div className="text-indigo-300">
                    ℹ AI Copilot initialized. 0 vulnerabilities found across 380 packages.
                  </div>
                  <div className="p-3 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-400 text-xs">
                    <span className="text-emerald-400 font-bold">LIVE URL:</span>{" "}
                    <span className="text-indigo-300 underline">https://bytespace-app-prod.internal.dev</span>
                    <span className="ml-3 text-neutral-500">(Latency: 8ms)</span>
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="p-4 rounded-xl bg-neutral-900 border border-neutral-800 space-y-2">
                    <div className="flex items-center justify-between text-neutral-400 text-xs">
                      <span>CPU Utilization</span>
                      <Cpu className="h-4 w-4 text-indigo-400" />
                    </div>
                    <div className="text-2xl font-bold text-white">12.4%</div>
                    <div className="h-1.5 w-full bg-neutral-800 rounded-full overflow-hidden">
                      <div className="h-full bg-indigo-500 w-[12%]" />
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-neutral-900 border border-neutral-800 space-y-2">
                    <div className="flex items-center justify-between text-neutral-400 text-xs">
                      <span>Memory (RAM)</span>
                      <Zap className="h-4 w-4 text-purple-400" />
                    </div>
                    <div className="text-2xl font-bold text-white">3.2 / 16 GB</div>
                    <div className="h-1.5 w-full bg-neutral-800 rounded-full overflow-hidden">
                      <div className="h-full bg-purple-500 w-[20%]" />
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-neutral-900 border border-neutral-800 space-y-2">
                    <div className="flex items-center justify-between text-neutral-400 text-xs">
                      <span>Security Audit</span>
                      <Shield className="h-4 w-4 text-emerald-400" />
                    </div>
                    <div className="text-2xl font-bold text-emerald-400">SOC2 Verified</div>
                    <div className="text-xs text-neutral-500">Encrypted in transit & at rest</div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Company Logos */}
        <div className="mt-16 sm:mt-24 pt-8 border-t border-neutral-900">
          <p className="text-center text-xs font-semibold uppercase tracking-widest text-neutral-500 mb-8">
            Trusted by developers at leading technology platforms
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 opacity-75">
            {COMPANY_LOGOS.map((logo) => (
              <span
                key={logo.name}
                className="text-base sm:text-xl font-bold tracking-widest text-neutral-500 hover:text-neutral-300 transition-colors cursor-default"
              >
                {logo.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
