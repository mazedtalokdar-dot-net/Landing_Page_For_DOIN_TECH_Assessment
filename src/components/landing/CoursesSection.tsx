"use client";

import { useState } from "react";
import Image from "next/image";
import { CATEGORIES, COURSES } from "@/constants/data";
import { Star, Clock, BookOpen, ArrowRight } from "lucide-react";

export default function CoursesSection() {
  const [activeCategory, setActiveCategory] = useState("All Courses");

  const filteredCourses = activeCategory === "All Courses"
    ? COURSES
    : COURSES.filter((c) => c.category === activeCategory);

  return (
    <section id="courses" className="py-20 lg:py-28 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#0F52FF] bg-blue-100 px-3.5 py-1.5 rounded-full border border-blue-200">
            Top Rated Curriculum
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Explore Our Popular Courses
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-medium">
            Choose from hundreds of online video courses with new additions published every week.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-14">
          {CATEGORIES.map((cat) => (
            <button
              type="button"
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-xl text-sm font-extrabold transition-all ${
                activeCategory === cat
                  ? "bg-[#0F52FF] text-white shadow-lg shadow-blue-500/25 scale-105"
                  : "bg-white text-slate-700 border border-slate-200 hover:border-blue-300 hover:text-[#0F52FF]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="group flex flex-col justify-between rounded-2xl bg-white border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              {/* Image & Badges */}
              <div className="relative h-52 w-full overflow-hidden bg-slate-100">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3 bg-[#0F52FF] text-white text-xs font-extrabold px-3 py-1 rounded-lg shadow">
                  {course.category}
                </div>
                <div className="absolute top-3 right-3 bg-[#CAFF00] text-[#0F52FF] text-xs font-black px-3 py-1 rounded-lg shadow">
                  {course.badge}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-3">
                  {/* Rating & Lessons */}
                  <div className="flex items-center justify-between text-xs font-bold text-slate-500">
                    <div className="flex items-center gap-1 text-amber-500">
                      <Star className="h-4 w-4 fill-amber-400" />
                      <span className="text-slate-900 font-extrabold">{course.rating}</span>
                      <span className="text-slate-400">({course.reviews})</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5 text-slate-400" /> {course.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <BookOpen className="h-3.5 w-3.5 text-slate-400" /> {course.lessons}
                      </span>
                    </div>
                  </div>

                  {/* Course Title */}
                  <h3 className="text-lg font-extrabold text-slate-900 leading-snug group-hover:text-[#0F52FF] transition-colors">
                    {course.title}
                  </h3>
                </div>

                {/* Instructor & Price Footer */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between mt-auto">
                  <div className="flex items-center gap-2.5">
                    <Image
                      src={course.avatar}
                      alt={course.instructor}
                      width={36}
                      height={36}
                      className="rounded-full object-cover border border-slate-200"
                    />
                    <span className="text-xs font-bold text-slate-700">{course.instructor}</span>
                  </div>

                  <div className="text-right">
                    <span className="text-lg font-black text-[#0F52FF]">{course.price}</span>
                    <span className="text-xs text-slate-400 line-through ml-1.5">{course.oldPrice}</span>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="px-6 pb-6 pt-2">
                <button
                  type="button"
                  onClick={() => alert(`Enrolling in: ${course.title}`)}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-blue-50 text-[#0F52FF] py-3 text-sm font-extrabold group-hover:bg-[#0F52FF] group-hover:text-white transition-colors shadow-inner"
                >
                  <span>Enroll Now</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
