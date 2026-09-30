import { FEATURES } from "@/constants/data";
import { GraduationCap, Clock, Award, Users } from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  GraduationCap,
  Clock,
  Award,
  Users,
};

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-20 lg:py-28 bg-white border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#0F52FF] bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-100">
            Platform Benefits
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Why Choose ByteSpace E-Learning?
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-medium">
            We provide world-class education tools designed to help you master modern skills with confidence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURES.map((feat, idx) => {
            const IconComp = iconMap[feat.icon] || GraduationCap;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-slate-50 border border-slate-200 p-8 space-y-4 hover:border-blue-400 hover:shadow-lg transition-all"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#CAFF00] text-[#0F52FF] shadow-md">
                  <IconComp className="h-7 w-7 stroke-[2.5]" />
                </div>
                <h3 className="text-xl font-extrabold text-slate-900">{feat.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed font-medium">
                  {feat.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
