import { STATS } from "@/constants/data";

export default function StatsSection() {
  return (
    <section className="border-y border-neutral-800/80 bg-neutral-900/40 py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {STATS.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center space-y-2 p-4">
              <span className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight bg-gradient-to-r from-white via-neutral-200 to-neutral-400 bg-clip-text text-transparent">
                {stat.value}
              </span>
              <span className="text-xs sm:text-sm font-medium text-neutral-400">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
