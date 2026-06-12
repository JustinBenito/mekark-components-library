"use client";

import { motion } from "motion/react";
import FadeInView from "@/components/multi-storey-steel-building-mekark/FadeInView";

const REASONS = [
  {
    heading: "Erection Speed That Compresses Timelines",
    body: "Prefabricated steel components bolt together on-site at 3× the pace of conventional construction — cutting your project timeline and holding costs drastically.",
    stat: "40% Faster",
    statLabel: "vs RCC builds",
    icon: (
      /* Tower crane — symbol of steel erection speed */
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C4161C" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <line x1="5" y1="22" x2="5" y2="3" />
        <line x1="5" y1="6" x2="18" y2="6" />
        <line x1="5" y1="3" x2="18" y2="6" />
        <line x1="14" y1="6" x2="14" y2="12" />
        <path d="M12 12h4v2.5h-4z" />
        <line x1="14" y1="14.5" x2="14" y2="19" />
        <line x1="2" y1="22" x2="22" y2="22" />
        <rect x="3.5" y="15" width="3" height="7" />
        <line x1="19" y1="8.5" x2="22" y2="8.5" />
        <line x1="19.5" y1="11" x2="22" y2="11" />
      </svg>
    ),
  },
  {
    heading: "Structural Integrity Across Decades",
    body: "Steel structures carry higher live and dead loads with smaller member sections. Multi-level steel buildings resist seismic activity, wind loads, and thermal cycling far better than alternatives.",
    stat: "100+ Year",
    statLabel: "Design life",
    icon: (
      /* Shield with I-beam cross-section inside — structural strength */
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C4161C" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <line x1="8.5" y1="9" x2="15.5" y2="9" />
        <line x1="8.5" y1="16" x2="15.5" y2="16" />
        <line x1="12" y1="9" x2="12" y2="16" />
      </svg>
    ),
  },
  {
    heading: "Lower Lifecycle Cost",
    body: "The total cost of ownership — including maintenance, expansion, and insurance — makes structural steel far more economical over a 20-year horizon despite higher upfront material cost.",
    stat: "30% Savings",
    statLabel: "Lifecycle cost",
    icon: (
      /* Descending bar chart — cost savings over time */
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C4161C" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <line x1="3" y1="3" x2="3" y2="20" />
        <line x1="3" y1="20" x2="21" y2="20" />
        <rect x="5" y="8" width="4" height="12" rx="0.5" />
        <rect x="11" y="12" width="4" height="8" rx="0.5" />
        <rect x="17" y="15" width="4" height="5" rx="0.5" />
        <path d="M7 7 L13 11 L19 14" strokeDasharray="2 1.5" />
      </svg>
    ),
  },
  {
    heading: "Future-Proof Flexibility",
    body: "Steel frames are inherently reconfigurable. Add floors, expand bays, or repurpose entire wings without demolishing existing structure — unmatched design adaptability.",
    stat: "Expandable",
    statLabel: "By design",
    icon: (
      /* Building with outward expand arrows — scalability */
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C4161C" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <rect x="7" y="9" width="10" height="13" />
        <line x1="7" y1="13" x2="17" y2="13" />
        <line x1="7" y1="17" x2="17" y2="17" />
        <path d="M7 9 L4 6 M4 6h3M4 6v3" />
        <path d="M17 9 L20 6 M20 6h-3M20 6v3" />
        <path d="M12 9 L12 5 M10 7l2-2 2 2" />
      </svg>
    ),
  },
  {
    heading: "Sustainable & Recyclable Material",
    body: "Structural steel is 93% recyclable. LEED-aligned projects benefit from lower embodied carbon compared to equivalent concrete structures, supporting India's green building goals.",
    stat: "93%",
    statLabel: "Recyclable content",
    icon: (
      /* Leaf with circular recycling arrows — sustainability */
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C4161C" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 22c4-4 8-12 18-20C20 2 22 14 14 20 8 24 2 22 2 22z" />
        <path d="M2 22 L13 11" />
        <path d="M17 17 a4 4 0 1 1-4-4" />
        <polyline points="17 13 17 17 13 17" />
      </svg>
    ),
  },
  {
    heading: "Large Clear-Span Spaces",
    body: "Achieve column-free interiors up to 60 metres — ideal for manufacturing halls, warehouses, data centres, and commercial showrooms where unobstructed floor space is critical.",
    stat: "60m+",
    statLabel: "Clear span possible",
    icon: (
      /* Portal frame with span dimension arrows — clear span */
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C4161C" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <line x1="2" y1="21" x2="22" y2="21" />
        <line x1="5" y1="21" x2="5" y2="12" />
        <line x1="19" y1="21" x2="19" y2="12" />
        <path d="M5 12 L12 7 L19 12" />
        <line x1="5" y1="4" x2="19" y2="4" />
        <line x1="5" y1="2.5" x2="5" y2="5.5" />
        <line x1="19" y1="2.5" x2="19" y2="5.5" />
        <polyline points="8 4 5 4 7 3" />
        <polyline points="16 4 19 4 17 3" />
      </svg>
    ),
  },
];

export default function WhySteel() {
  return (
    <section id="why-steel" className="py-20 md:py-28 bg-white">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
        <FadeInView>
          <p className="text-[0.72rem] font-extrabold uppercase tracking-[0.25em] text-[#C4161C] mb-3">
            Why Steel Structures
          </p>
        </FadeInView>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <FadeInView delay={80}>
            <h2 className="text-[2.2rem] sm:text-[2.7rem] font-extrabold text-black leading-[1.1] tracking-[-0.025em] max-w-[560px]">
              Why Multi-Storey Steel Buildings<br />
              <span className="text-[#C4161C]">Dominate India&apos;s Skyline</span>
            </h2>
          </FadeInView>
          <FadeInView delay={160}>
            <p className="text-black/55 text-[1rem] leading-relaxed max-w-[380px]">
              Concrete had its era. Structural steel is defining the next generation
              of industrial, commercial, and infrastructure development across India.
            </p>
          </FadeInView>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {REASONS.map((r, i) => (
            <FadeInView key={r.heading} delay={i * 80} className="h-full">
              <motion.div
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 280, damping: 22 }}
                className="bg-white rounded-2xl p-6 shadow-[0_0_0_1px_rgba(0,0,0,0.06),0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_0_0_1px_rgba(196,22,28,0.15),0_8px_28px_rgba(0,0,0,0.09)] transition-shadow duration-200 h-full flex flex-col cursor-default"
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-[rgba(196,22,28,0.06)] flex items-center justify-center mb-5 shrink-0">
                  {r.icon}
                </div>

                <h3 className="font-bold text-black text-[1rem] mb-2.5 leading-snug">{r.heading}</h3>
                <p className="text-black/52 text-[0.875rem] leading-relaxed flex-1">{r.body}</p>

                {/* Stat row — items-baseline keeps text optically aligned */}
                <div className="mt-5 pt-4 border-t border-black/[0.06] flex items-baseline gap-2">
                  <span className="text-[1rem] font-extrabold text-[#C4161C] tabular-nums leading-none whitespace-nowrap">
                    {r.stat}
                  </span>
                  <span className="text-[0.75rem] text-black/40 font-medium leading-none whitespace-nowrap">
                    {r.statLabel}
                  </span>
                </div>
              </motion.div>
            </FadeInView>
          ))}
        </div>
      </div>
    </section>
  );
}
