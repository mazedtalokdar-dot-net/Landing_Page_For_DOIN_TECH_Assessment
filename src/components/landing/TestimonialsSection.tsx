import Image from "next/image";
import { TESTIMONIALS } from "@/constants/data";
import { Star, Quote } from "lucide-react";

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-slate-50 border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#0F52FF] bg-blue-100 px-3.5 py-1.5 rounded-full border border-blue-200">
            Student Reviews
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            What Our Students Say About Us
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between rounded-2xl bg-white p-8 border border-slate-200 shadow-sm hover:shadow-xl transition-shadow relative"
            >
              <div className="space-y-4">
                <Quote className="h-8 w-8 text-[#0F52FF]/30" />
                <div className="flex gap-1 text-amber-400">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400" />
                  ))}
                </div>
                <p className="text-sm text-slate-700 italic leading-relaxed font-medium">
                  &quot;{t.quote}&quot;
                </p>
              </div>

              <div className="flex items-center gap-3.5 pt-6 mt-6 border-t border-slate-100">
                <Image
                  src={t.avatar}
                  alt={t.author}
                  width={44}
                  height={44}
                  unoptimized
                  className="rounded-full object-cover border border-slate-200"
                />
                <div>
                  <h3 className="text-sm font-extrabold text-slate-900">{t.author}</h3>
                  <p className="text-xs text-slate-500 font-medium">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
