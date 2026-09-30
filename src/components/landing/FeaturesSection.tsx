import { FEATURES } from "@/constants/data";
import { Zap, Bot, Users, ShieldCheck, GitBranch, BarChart3 } from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  Zap,
  Bot,
  Users,
  ShieldCheck,
  GitBranch,
  BarChart3,
};

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 lg:py-28 bg-neutral-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <h2 className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-indigo-400">
            Engineered for Modern Software Teams
          </h2>
          <p className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Everything you need to ship products at scale
          </p>
          <p className="text-base sm:text-lg text-neutral-400">
            ByteSpace integrates cloud infrastructure, AI pairs, and security controls into a unified workspace.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURES.map((feature, idx) => {
            const IconComponent = iconMap[feature.icon] || Zap;
            return (
              <div
                key={idx}
                className="group relative rounded-2xl border border-neutral-800 bg-neutral-900/50 p-6 sm:p-8 hover:border-neutral-700 hover:bg-neutral-900 transition-all duration-300 shadow-lg"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 text-indigo-400 group-hover:scale-110 group-hover:from-indigo-500 group-hover:to-purple-500 group-hover:text-white transition-all">
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-neutral-800 text-neutral-300 border border-neutral-700">
                    {feature.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-300 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
