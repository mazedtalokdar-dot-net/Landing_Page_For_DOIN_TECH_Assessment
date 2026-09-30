import Image from "next/image";
import { TESTIMONIALS } from "@/constants/data";
import { Star, Quote } from "lucide-react";

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-neutral-900/40 border-t border-neutral-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <h2 className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-indigo-400">
            Loved By Developers
          </h2>
          <p className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            See what engineering leaders say about ByteSpace
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between rounded-2xl border border-neutral-800 bg-neutral-950 p-8 shadow-lg relative group hover:border-neutral-700 transition-colors"
            >
              <div className="space-y-4">
                <Quote className="h-8 w-8 text-indigo-500/40" />

                <div className="flex gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400" />
                  ))}
                </div>

                <p className="text-sm sm:text-base text-neutral-300 italic leading-relaxed">
                  &quot;{t.quote}&quot;
                </p>
              </div>

              <div className="flex items-center gap-4 pt-6 mt-6 border-t border-neutral-900">
                <Image
                  src={t.avatar}
                  alt={t.author}
                  width={48}
                  height={48}
                  className="rounded-full object-cover border border-indigo-500/30"
                />
                <div>
                  <h3 className="text-sm font-bold text-white">{t.author}</h3>
                  <p className="text-xs text-neutral-400">
                    {t.role}, <span className="text-indigo-400">{t.company}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
