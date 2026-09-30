import { STATS } from "@/constants/data";

export default function StatsSection() {
  return (
    <section className="bg-white border-b border-slate-200 py-10 shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          {STATS.map((stat, idx) => (
            <div key={idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-1">
              <div className="text-3xl sm:text-4xl font-black text-[#0F52FF] tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-bold text-slate-600 uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
