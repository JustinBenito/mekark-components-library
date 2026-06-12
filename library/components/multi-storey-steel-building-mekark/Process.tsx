"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import FadeInView from "@/components/multi-storey-steel-building-mekark/FadeInView";

const STEPS = [
  {
    num: "01",
    time: "Within 24h",
    heading: "Discovery Call",
    body: "A structural engineer calls to understand your project scope, site conditions, timeline, and budget — no sales rep, no scripts.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        <path d="M14.5 2a8.5 8.5 0 0 1 0 9" strokeOpacity="0.5" />
        <path d="M17 4.5a5 5 0 0 1 0 4" strokeOpacity="0.5" />
      </svg>
    ),
  },
  {
    num: "02",
    time: "48 Hours",
    heading: "Feasibility & Quote",
    body: "Preliminary structural concept, floor-plate optimisation, and a fixed-price BOQ with zero hidden costs — guaranteed in writing.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="8" y1="13" x2="16" y2="13" />
        <line x1="8" y1="17" x2="13" y2="17" />
        <polyline points="8 9 9 9 10 9" />
      </svg>
    ),
  },
  {
    num: "03",
    time: "2 – 4 Weeks",
    heading: "Detailed Engineering",
    body: "STAAD Pro analysis, TEKLA 3D modelling, GA drawings, fabrication drawings, and a complete BOM — stamped by a licensed structural engineer.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="11" r="2" />
        <path d="M12 9V2" />
        <path d="M8.5 12.5 3 20" />
        <path d="M15.5 12.5 21 20" />
        <line x1="9" y1="2" x2="15" y2="2" />
        <line x1="3" y1="20" x2="6" y2="20" />
        <line x1="18" y1="20" x2="21" y2="20" />
      </svg>
    ),
  },
  {
    num: "04",
    time: "4 – 12 Weeks",
    heading: "Fabrication",
    body: "CNC cutting, weld inspection, shot-blast cleaning to SA 2.5, and epoxy priming — all in-house at our 6-lakh sq.ft Tamil Nadu facility.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 5h18v3h-7v8h7v3H3v-3h7V8H3z" />
      </svg>
    ),
  },
  {
    num: "05",
    time: "2 – 8 Weeks",
    heading: "Site Erection",
    body: "Anchor bolt setting, column erection, crane-assisted beam placement, and bolted connections by our ISO-certified erection team.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <line x1="5" y1="2" x2="5" y2="21" />
        <line x1="5" y1="6" x2="18" y2="6" />
        <line x1="5" y1="3" x2="18" y2="6" />
        <line x1="14" y1="6" x2="14" y2="12" />
        <path d="M12 12h4v2.5h-4z" />
        <line x1="14" y1="14.5" x2="14" y2="19" />
        <line x1="2" y1="21" x2="22" y2="21" />
        <rect x="3.5" y="14" width="3" height="7" />
      </svg>
    ),
  },
  {
    num: "06",
    time: "Final Day",
    heading: "Handover & Warranty",
    body: "Load test, snag clearance, as-built drawings, full QC dossier, and 5-year structural warranty documentation — signed and delivered.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
  },
];

export default function Process() {
  const [activeIndex, setActiveIndex] = useState(0);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    function onScroll() {
      const viewportCenter = window.scrollY + window.innerHeight * 0.5;
      let closest = 0;
      let closestDist = Infinity;
      stepRefs.current.forEach((ref, i) => {
        if (!ref) return;
        const rect = ref.getBoundingClientRect();
        const refCenter = window.scrollY + rect.top + rect.height / 2;
        const dist = Math.abs(viewportCenter - refCenter);
        if (dist < closestDist) { closestDist = dist; closest = i; }
      });
      setActiveIndex(closest);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="process" className="py-20 md:py-28 bg-white">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">

        <FadeInView>
          <p className="text-[0.72rem] font-extrabold uppercase tracking-[0.25em] text-[#C4161C] mb-3">
            Our Process
          </p>
        </FadeInView>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <FadeInView delay={80}>
            <h2 className="text-[2.2rem] sm:text-[2.7rem] font-extrabold text-black leading-[1.1] tracking-[-0.025em] max-w-[500px]">
              From First Call to<br />
              <span className="text-[#C4161C]">Final Handover</span>
            </h2>
          </FadeInView>
          <FadeInView delay={160}>
            <p className="text-black/55 text-[1rem] leading-relaxed max-w-[360px]">
              Six structured phases. One seamless experience. No surprises at any stage.
            </p>
          </FadeInView>
        </div>

        {/* Timeline */}
        <div className="max-w-[820px] mx-auto">
          {STEPS.map((step, i) => {
            const isActive = i === activeIndex;
            const isCompleted = i < activeIndex;
            const isUpcoming = i > activeIndex;

            return (
              <div
                key={step.num}
                ref={el => { stepRefs.current[i] = el; }}
                className="flex gap-5 sm:gap-8"
              >
                {/* ── Left: node + line ── */}
                <div className="flex flex-col items-center" style={{ width: 56 }}>
                  {/* Node */}
                  <motion.div
                    animate={{
                      backgroundColor: isActive || isCompleted ? "#C4161C" : "#EBEBEB",
                      scale: isActive ? 1.08 : 1,
                      boxShadow: isActive
                        ? "0 0 0 7px rgba(196,22,28,0.12)"
                        : "0 0 0 0px rgba(196,22,28,0)",
                    }}
                    transition={{ type: "spring", stiffness: 260, damping: 22 }}
                    className="w-14 h-14 rounded-full flex items-center justify-center shrink-0 z-10"
                  >
                    <AnimatePresence mode="wait" initial={false}>
                      {isCompleted ? (
                        <motion.span
                          key="check"
                          initial={{ scale: 0.4, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          exit={{ scale: 0.4, opacity: 0 }}
                          transition={{ type: "spring", stiffness: 380, damping: 18 }}
                        >
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </motion.span>
                      ) : (
                        <motion.span
                          key="num"
                          initial={{ scale: 0.4, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          exit={{ scale: 0.4, opacity: 0 }}
                          transition={{ type: "spring", stiffness: 380, damping: 18 }}
                          className="text-[0.9rem] font-extrabold tabular-nums"
                          style={{ color: isActive ? "#ffffff" : "#AAAAAA" }}
                        >
                          {step.num}
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </motion.div>

                  {/* Connector line */}
                  {i < STEPS.length - 1 && (
                    <div className="w-px flex-1 my-2 bg-black/[0.08] relative overflow-hidden" style={{ minHeight: 60 }}>
                      <motion.div
                        className="absolute inset-x-0 top-0 bg-[#C4161C]"
                        initial={{ height: "0%" }}
                        animate={{ height: isCompleted ? "100%" : "0%" }}
                        transition={{ type: "spring", stiffness: 80, damping: 20 }}
                      />
                    </div>
                  )}
                </div>

                {/* ── Right: card ── */}
                <div className="flex-1 pb-8">
                  {/* Step label + timing */}
                  <div className="flex items-center gap-2.5 mb-3 h-14">
                    <motion.span
                      animate={{ color: isActive ? "#C4161C" : isCompleted ? "#888888" : "#BBBBBB" }}
                      transition={{ type: "spring", stiffness: 200 }}
                      className="text-[0.6rem] font-extrabold tracking-[0.22em] uppercase"
                    >
                      Step {step.num}
                    </motion.span>
                    <motion.span
                      animate={{
                        backgroundColor: isActive ? "rgba(196,22,28,0.08)" : "rgba(0,0,0,0.04)",
                        color: isActive ? "#C4161C" : "#AAAAAA",
                      }}
                      transition={{ type: "spring", stiffness: 200 }}
                      className="text-[0.6rem] font-bold px-2 py-0.5 rounded-full"
                    >
                      {step.time}
                    </motion.span>
                  </div>

                  {/* Card */}
                  <motion.div
                    animate={{
                      backgroundColor: isActive ? "#C4161C" : "#ffffff",
                      boxShadow: isActive
                        ? "0 8px 32px rgba(196,22,28,0.28), 0 0 0 1px rgba(196,22,28,0.12)"
                        : isCompleted
                        ? "0 0 0 1px rgba(0,0,0,0.07), 0 2px 10px rgba(0,0,0,0.05)"
                        : "0 0 0 1px rgba(0,0,0,0.05)",
                      opacity: isUpcoming ? 0.38 : 1,
                    }}
                    transition={{ type: "spring", stiffness: 140, damping: 22 }}
                    className="rounded-2xl p-5 relative overflow-hidden"
                  >
                    {/* Ghost number */}
                    <span
                      aria-hidden
                      className="absolute -bottom-4 -right-1 text-[5.5rem] font-extrabold leading-none select-none pointer-events-none"
                      style={{ color: isActive ? "rgba(255,255,255,0.09)" : "rgba(0,0,0,0.04)" }}
                    >
                      {step.num}
                    </span>

                    <div className="flex items-start gap-4 relative z-10">
                      {/* Icon */}
                      <motion.div
                        animate={{
                          backgroundColor: isActive ? "rgba(255,255,255,0.15)" : "rgba(196,22,28,0.07)",
                          color: isActive ? "#ffffff" : "#C4161C",
                        }}
                        transition={{ type: "spring", stiffness: 140, damping: 22 }}
                        className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                      >
                        {step.icon}
                      </motion.div>

                      <div>
                        <motion.h3
                          animate={{ color: isActive ? "#ffffff" : "#000000" }}
                          transition={{ type: "spring", stiffness: 140 }}
                          className="font-bold text-[1rem] mb-2 leading-snug"
                        >
                          {step.heading}
                        </motion.h3>
                        <motion.p
                          animate={{ color: isActive ? "rgba(255,255,255,0.72)" : "rgba(0,0,0,0.5)" }}
                          transition={{ type: "spring", stiffness: 140 }}
                          className="text-[0.82rem] leading-relaxed"
                        >
                          {step.body}
                        </motion.p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
