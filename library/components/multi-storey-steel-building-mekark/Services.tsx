"use client";

import { motion } from "motion/react";
import FadeInView from "@/components/multi-storey-steel-building-mekark/FadeInView";

const SERVICES = [
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        {/* Multi-storey building with floors */}
        <path d="M3 21h18" />
        <path d="M5 21V7l7-4 7 4v14" />
        <line x1="5" y1="12" x2="19" y2="12" />
        <line x1="5" y1="17" x2="19" y2="17" />
        <path d="M10 21v-4h4v4" />
        <rect x="8" y="8" width="2.5" height="2.5" />
        <rect x="13.5" y="8" width="2.5" height="2.5" />
        <rect x="8" y="13" width="2.5" height="2.5" />
        <rect x="13.5" y="13" width="2.5" height="2.5" />
      </svg>
    ),
    badge: "Flagship Service",
    heading: "Multi Storey Steel Buildings",
    body: "G+1 to G+10 and beyond — multi-level steel frame buildings for offices, residential towers, mixed-use complexes, and institutional campuses. Designed to IS 800 & IS 875.",
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        {/* Industrial factory with sawtooth roof and chimney */}
        <path d="M2 20v-8l5.5-3.5v3.5l5.5-3.5v3.5l5-3.5V20H2z" />
        <line x1="2" y1="20" x2="22" y2="20" />
        <line x1="7.5" y1="12" x2="7.5" y2="20" />
        <line x1="13" y1="12" x2="13" y2="20" />
        <rect x="9.5" y="14.5" width="3" height="5.5" />
        <rect x="17.5" y="4" width="2.5" height="8" />
      </svg>
    ),
    badge: "Industrial Grade",
    heading: "Industrial Steel Buildings",
    body: "Heavy-duty single and multi-span industrial steel structures for manufacturing, processing plants, power plants, and chemical storage facilities across India.",
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        {/* Modern office tower with window grid */}
        <rect x="4" y="2" width="16" height="20" rx="1" />
        <line x1="4" y1="7" x2="20" y2="7" />
        <line x1="4" y1="12" x2="20" y2="12" />
        <line x1="4" y1="17" x2="20" y2="17" />
        <rect x="6.5" y="3.5" width="3" height="2.5" />
        <rect x="14.5" y="3.5" width="3" height="2.5" />
        <rect x="6.5" y="8.5" width="3" height="2.5" />
        <rect x="14.5" y="8.5" width="3" height="2.5" />
        <rect x="6.5" y="13.5" width="3" height="2.5" />
        <rect x="14.5" y="13.5" width="3" height="2.5" />
        <rect x="10" y="18" width="4" height="4" />
      </svg>
    ),
    badge: "Commercial",
    heading: "Commercial Steel Structures",
    body: "Retail complexes, IT parks, logistics hubs, and commercial plazas engineered with aesthetic steel facades and structurally optimised frames for maximum usable area.",
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        {/* PEB portal frame — the signature shape of pre-engineered buildings */}
        <path d="M2 20V11l10-8 10 8v9" />
        <line x1="2" y1="20" x2="22" y2="20" />
        <path d="M8 20v-7h8v7" />
        <line x1="8" y1="16" x2="16" y2="16" />
        <path d="M2 11h4M18 11h4" />
      </svg>
    ),
    badge: "Fast-Track",
    heading: "PEB & Prefabricated Buildings",
    body: "Pre-engineered building systems manufactured at our facility and delivered site-ready. Fastest erection timelines, ideal for warehouses, cold storages, and large-span facilities.",
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        {/* I-beam / H-beam cross-section — the universal steel fabrication symbol */}
        <path d="M3 5h18v3h-7v8h7v3H3v-3h7V8H3z" />
      </svg>
    ),
    badge: "In-House",
    heading: "Structural Steel Fabrication",
    body: "In-house fabrication of columns, beams, trusses, purlins, and girts in mild steel, HYSD, and high-tensile grades. NABL-tested, precision-cut, and blast-cleaned to SA 2.5.",
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        {/* Tower crane — the icon of steel structure erection */}
        <line x1="5" y1="2" x2="5" y2="21" />
        <line x1="5" y1="5" x2="19" y2="5" />
        <line x1="5" y1="2" x2="19" y2="5" />
        <line x1="14" y1="5" x2="14" y2="12" />
        <path d="M12 12h4v2.5h-4z" />
        <line x1="2" y1="21" x2="22" y2="21" />
        <rect x="3.5" y="14" width="3" height="7" />
      </svg>
    ),
    badge: "Site Execution",
    heading: "Steel Structure Erection",
    body: "Our dedicated site erection teams handle anchor bolt setting, column erection, crane-assisted beam placement, and bolted/welded connections with ISO-certified procedures.",
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        {/* Drafting compass — the symbol of structural design & engineering */}
        <circle cx="12" cy="11" r="2" />
        <path d="M12 9V2" />
        <path d="M8.5 12.5 3 20" />
        <path d="M15.5 12.5 21 20" />
        <line x1="9" y1="2" x2="15" y2="2" />
        <line x1="3" y1="20" x2="6" y2="20" />
        <line x1="18" y1="20" x2="21" y2="20" />
      </svg>
    ),
    badge: "Engineering",
    heading: "Steel Building Design",
    body: "Detailed structural engineering, 3D modelling, fabrication drawings, GA drawings, and BOM preparation using STAAD Pro, TEKLA, and AutoCAD — in-house design team.",
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        {/* Key — the universal symbol of turnkey delivery */}
        <circle cx="7.5" cy="15.5" r="5.5" />
        <path d="M21 2l-9.6 9.6" />
        <path d="m15 5 4 4" />
        <path d="m17 3 4 4" />
      </svg>
    ),
    badge: "End-to-End",
    heading: "Turnkey Steel Projects",
    body: "From soil investigation to structural handover — Mekark handles design, civil foundation, fabrication, erection, roofing, cladding, and MEP integration under one contract.",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-20 md:py-28 bg-[#C4161C] overflow-hidden">
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
            Our Services
          </p>
        </FadeInView>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <FadeInView delay={80}>
            <h2 className="text-[2.2rem] sm:text-[2.7rem] font-extrabold text-white leading-[1.1] tracking-[-0.025em] max-w-[520px]">
              Steel Building<br />
              <span className="text-white">Solutions We Deliver</span>
            </h2>
          </FadeInView>
          <FadeInView delay={160}>
            <p className="text-white/55 text-[1rem] leading-relaxed max-w-[380px]">
              Every project Mekark undertakes is handled from structural concept to final
              bolt tightening — no middlemen, no compromises.
            </p>
          </FadeInView>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {SERVICES.map((s, i) => (
            <FadeInView key={s.heading} delay={i * 60}>
              <motion.div
                className="group bg-white rounded-2xl p-5 shadow-[0_2px_12px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.18)] transition-shadow duration-200 h-full flex flex-col"
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl bg-black/[0.04] border border-black/[0.07] flex items-center justify-center text-black/55 group-hover:border-[#C4161C]/20 group-hover:bg-[rgba(196,22,28,0.05)] group-hover:text-[#C4161C] transition-[border-color,background-color,color] duration-200">
                    {s.icon}
                  </div>
                  <span className="text-[0.65rem] font-bold uppercase tracking-[0.15em] text-[#C4161C] bg-[rgba(196,22,28,0.08)] px-2 py-1 rounded-full">
                    {s.badge}
                  </span>
                </div>
                <h3 className="font-bold text-black text-[0.95rem] mb-2 leading-snug">{s.heading}</h3>
                <p className="text-black/55 text-[0.82rem] leading-relaxed flex-1">{s.body}</p>
              </motion.div>
            </FadeInView>
          ))}
        </div>
      </div>
    </section>
  );
}
