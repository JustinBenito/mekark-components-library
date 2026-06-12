"use client";

import { motion } from "motion/react";
import FadeInView from "@/components/multi-storey-steel-building-mekark/FadeInView";
import CountUp from "@/components/multi-storey-steel-building-mekark/CountUp";

const STATS = [
  { value: 6, suffix: "L", label: "Sq.ft Facility Area", sub: "Manufacturing footprint" },
  { value: 40000, suffix: "MT", label: "Annual Output Capacity", sub: "Fabricated steel per year" },
  { display: "SA 2.5", label: "Blast Cleaning Standard", sub: "International quality spec" },
  { display: "ISO", label: "9001:2015 Certified", sub: "Quality management system" },
];

export default function Manufacturing() {
  return (
    <section className="py-20 md:py-28 bg-white relative overflow-hidden">
      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(0,0,0,0.07) 1.5px, transparent 1.5px)`,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Structural frame watermark */}
      <div className="absolute right-0 top-0 bottom-0 w-[40%] pointer-events-none overflow-hidden opacity-[0.04]">
        <svg viewBox="0 0 280 680" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" fill="none" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
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
              <circle key={`${x}-${y}`} cx={x} cy={y} r="6" fill="black" stroke="none" />
            ))
          )}
        </svg>
      </div>

      <div className="relative z-10 max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
        <FadeInView>
          <p className="text-[0.72rem] font-extrabold uppercase tracking-[0.25em] text-[#C4161C] mb-3">
            Our Manufacturing Unit
          </p>
        </FadeInView>
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <FadeInView delay={80}>
            <h2 className="text-[2.2rem] sm:text-[2.8rem] font-extrabold text-black leading-[1.1] tracking-[-0.025em] max-w-[520px]">
              Where Steel Becomes<br />
              <span className="text-[#C4161C]">Structure</span>
            </h2>
          </FadeInView>
          <FadeInView delay={160}>
            <p className="text-black/55 text-[1rem] leading-[1.8] max-w-[420px]">
              Our 6-lakh sq.ft manufacturing facility in Tamil Nadu is where precision meets
              scale. Every beam, column, and truss that arrives on your site was engineered
              and fabricated here.
            </p>
          </FadeInView>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS.map((s, i) => (
            <FadeInView key={s.label} delay={i * 100}>
              <motion.div
                className="text-center p-4 sm:p-6 rounded-2xl bg-white border border-black/[0.07] shadow-[0_2px_12px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_28px_rgba(0,0,0,0.1)] hover:border-[#C4161C]/15 transition-[border-color,box-shadow] duration-200"
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
              >
                <div className="text-[1.5rem] sm:text-[2.4rem] lg:text-[2.8rem] font-extrabold text-[#C4161C] tabular-nums leading-none mb-3">
                  {"display" in s ? (
                    <span>{s.display}</span>
                  ) : (
                    <CountUp to={s.value!} suffix={s.suffix} delay={i * 120} />
                  )}
                </div>
                <p className="text-black font-bold text-[0.88rem] mb-1">{s.label}</p>
                <p className="text-black/45 text-[0.72rem]">{s.sub}</p>
              </motion.div>
            </FadeInView>
          ))}
        </div>
      </div>
    </section>
  );
}
