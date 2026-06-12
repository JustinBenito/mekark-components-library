"use client";

import { motion } from "motion/react";
import Image from "next/image";
import FadeInView from "@/components/multi-storey-steel-building-mekark/FadeInView";

const PROJECTS = [
  {
    tag: "Multi Storey",
    title: "G+5 Commercial Steel Complex",
    location: "Chennai",
    area: "42,000 sq.ft",
    duration: "8 Months",
    image: "/multi-storey-steel-building-mekark/bundle/Our%20Completed%20Projects/DJI_20240925133237_0011_D%20copy.webp",
  },
  {
    tag: "Industrial",
    title: "Heavy Manufacturing Plant",
    location: "Coimbatore",
    area: "80,000 sq.ft",
    duration: "14 Months",
    image: "/multi-storey-steel-building-mekark/bundle/Our%20Completed%20Projects/DJI_20240930120803_0048_D%20copy.webp",
  },
  {
    tag: "PEB Warehouse",
    title: "3-Level Logistics Distribution Hub",
    location: "Hosur",
    area: "1,20,000 sq.ft",
    duration: "6 Months",
    image: "/multi-storey-steel-building-mekark/bundle/Our%20Completed%20Projects/DJI_20241004133100_0172_D%20copy.webp",
  },
  {
    tag: "Commercial",
    title: "G+7 IT Park Steel Frame",
    location: "Bengaluru",
    area: "95,000 sq.ft",
    duration: "18 Months",
    image: "/multi-storey-steel-building-mekark/bundle/Our%20Completed%20Projects/DJI_20250103131743_0097_D%20copy.webp",
  },
  {
    tag: "Industrial",
    title: "Steel Structure Factory Complex",
    location: "Tamil Nadu",
    area: "60,000 sq.ft",
    duration: "10 Months",
    image: "/multi-storey-steel-building-mekark/bundle/Our%20Completed%20Projects/DJI_20250301123134_0007_D%20copy.webp",
  },
  {
    tag: "Commercial",
    title: "Multi-Storey Commercial Building",
    location: "Chennai",
    area: "55,000 sq.ft",
    duration: "12 Months",
    image: "/multi-storey-steel-building-mekark/bundle/Our%20Completed%20Projects/solopaints%20copy.webp",
  },
];

const META_ICONS = {
  location: (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
    </svg>
  ),
  area: (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M9 21V9" />
    </svg>
  ),
  duration: (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
    </svg>
  ),
};

export default function Projects() {
  return (
    <section id="projects" className="relative py-20 md:py-28 bg-[#C4161C] overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            radial-gradient(circle, rgba(255,255,255,0.2) 1.5px, transparent 1.5px),
            linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px, 80px 80px, 80px 80px",
        }}
      />

      {/* Vignette */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/20 to-transparent pointer-events-none z-[2]" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/15 to-transparent pointer-events-none z-[2]" />
      {/* Structural frame watermark */}
      <div className="absolute right-0 top-0 bottom-0 w-[40%] pointer-events-none overflow-hidden opacity-[0.07]">
        <svg viewBox="0 0 280 680" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="0" y1="0" x2="0" y2="680" />
          <line x1="140" y1="0" x2="140" y2="680" />
          <line x1="280" y1="0" x2="280" y2="680" />
          <line x1="0" y1="0" x2="280" y2="0" /><line x1="0" y1="100" x2="280" y2="100" />
          <line x1="0" y1="200" x2="280" y2="200" /><line x1="0" y1="300" x2="280" y2="300" />
          <line x1="0" y1="400" x2="280" y2="400" /><line x1="0" y1="500" x2="280" y2="500" />
          <line x1="0" y1="600" x2="280" y2="600" /><line x1="0" y1="680" x2="280" y2="680" />
          <line x1="0" y1="0" x2="140" y2="100" /><line x1="140" y1="0" x2="0" y2="100" />
          <line x1="0" y1="200" x2="140" y2="300" /><line x1="140" y1="200" x2="0" y2="300" />
          <line x1="0" y1="400" x2="140" y2="500" /><line x1="140" y1="400" x2="0" y2="500" />
          <line x1="0" y1="600" x2="140" y2="680" /><line x1="140" y1="600" x2="0" y2="680" />
          <line x1="140" y1="100" x2="280" y2="200" /><line x1="280" y1="100" x2="140" y2="200" />
          <line x1="140" y1="300" x2="280" y2="400" /><line x1="280" y1="300" x2="140" y2="400" />
          <line x1="140" y1="500" x2="280" y2="600" /><line x1="280" y1="500" x2="140" y2="600" />
          {[0, 100, 200, 300, 400, 500, 600, 680].flatMap(y =>
            [0, 140, 280].map(x => (
              <circle key={`${x}-${y}`} cx={x} cy={y} r="6" fill="white" stroke="none" />
            ))
          )}
        </svg>
      </div>

      <div className="relative z-10 max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
        <FadeInView>
          <p className="text-[0.72rem] font-extrabold uppercase tracking-[0.25em] text-white/70 mb-3">
            Completed Projects
          </p>
        </FadeInView>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <FadeInView delay={80}>
            <h2 className="text-[2.2rem] sm:text-[2.7rem] font-extrabold text-white leading-[1.1] tracking-[-0.025em] max-w-[480px]">
              Our Work<br />
              <span className="text-white">Speaks Structure</span>
            </h2>
          </FadeInView>
          <FadeInView delay={160}>
            <p className="text-white/55 text-[1rem] leading-relaxed max-w-[380px]">
              500+ steel structures delivered. Each one engineered to exact specifications.
              None of them generic.
            </p>
          </FadeInView>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((p, i) => (
            <FadeInView key={p.title} delay={i * 80}>
              <motion.div
                className="group rounded-2xl overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,0.15)] hover:shadow-[0_8px_28px_rgba(0,0,0,0.25)] transition-shadow duration-200"
                whileHover={{ y: -6 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
              >
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="object-cover transition-transform duration-300 ease-out group-hover:scale-[1.04] outline outline-1 -outline-offset-1 outline-white/10"
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <span className="absolute top-3 left-3 text-[0.65rem] font-bold uppercase tracking-[0.15em] text-[#C4161C] bg-white px-2.5 py-1 rounded-full">
                    {p.tag}
                  </span>
                </div>
                <div className="bg-white border-t border-black/[0.07] p-5">
                  <h3 className="font-bold text-black text-[1rem] mb-3 leading-snug">{p.title}</h3>
                  <div className="flex flex-wrap gap-x-4 gap-y-2">
                    <div className="flex items-center gap-1.5 text-black/50 text-[0.8rem]">
                      {META_ICONS.location}
                      <span>{p.location}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-black/50 text-[0.8rem]">
                      {META_ICONS.area}
                      <span className="tabular-nums">{p.area}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-black/50 text-[0.8rem]">
                      {META_ICONS.duration}
                      <span>{p.duration}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </FadeInView>
          ))}
        </div>
      </div>
    </section>
  );
}
