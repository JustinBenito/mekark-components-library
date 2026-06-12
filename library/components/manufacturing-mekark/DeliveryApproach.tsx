"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import Image from "next/image";
import { FadeInView } from "@/components/manufacturing-mekark/FadeInView";

const stages = [
  {
    n: 1,
    phase: "Pre-Construction",
    title: "Discovery & Feasibility",
    body: "Site assessment, geotechnical review, regulatory mapping, and production-flow consultation before a single drawing is committed.",
    photo: "1464938050520-ef2270bb8ce8",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="7" /><path d="M21 21l-4.35-4.35" /><path d="M11 8v6M8 11h6" />
      </svg>
    ),
  },
  {
    n: 2,
    phase: "Pre-Construction",
    title: "Concept Design",
    body: "Facility layout, structural system selection, and financial model aligned to your production brief and equipment footprint.",
    photo: "1503387762-592deb58ef4e",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" /><path d="M15 5l4 4" />
      </svg>
    ),
  },
  {
    n: 3,
    phase: "Engineering",
    title: "Detailed Engineering",
    body: "Structural analysis, foundation design, MEP schematics, and approval-ready drawing packages — all produced in-house.",
    photo: "1497366216548-37526070297c",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="1" /><path d="M3 9h18M9 3v18M3 15h6M15 3v6" />
      </svg>
    ),
  },
  {
    n: 4,
    phase: "Procurement",
    title: "Procurement",
    body: "Steel and materials sourced, quality-tested, and staged within our facility — no spot market delays, no third-party queues.",
    photo: "1553413077-190dd305871c",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9h11v11H3zM14 9h4l3 3v8h-7V9z" /><circle cx="7.5" cy="20" r="1.5" /><circle cx="17.5" cy="20" r="1.5" />
      </svg>
    ),
  },
  {
    n: 5,
    phase: "Fabrication",
    title: "In-Factory Fabrication",
    body: "Structural members fabricated, inspected, and staged in our 6-lakh-sq.ft plant — quality-controlled before site delivery.",
    photo: "1581091226033-d5c48150dbaa",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 20V10l5-4v4l5-4v4l4-2v12H2z" /><path d="M14 20V13h4v7M2 20h20" />
      </svg>
    ),
  },
  {
    n: 6,
    phase: "Execution",
    title: "Site Construction",
    body: "Civil works, structural erection, and MEP installation under a single integrated site team and one chain of accountability.",
    photo: "1486325212027-8081e485255e",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 22h20M6 22V6l6-4 6 4v16M10 22v-6h4v6M3 10h2M19 10h2" />
      </svg>
    ),
  },
  {
    n: 7,
    phase: "Handover",
    title: "Commissioning & Handover",
    body: "Structural certification, regulatory NOCs, and full as-built documentation — facility handed over ready for machinery installation.",
    photo: "1541888946425-d81bb19240f5",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 12l2 2 4-4" /><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M8 3v4M16 3v4M3 11h18" />
      </svg>
    ),
  },
];

// Float offsets (px) to push cards off the perfectly-centered grid row
const floatY = [0, 48, -16, 56, 12, -8, 32];

const NODE_VIEWPORT = { once: true, margin: "-38% 0px -38% 0px" } as const;
const CARD_VIEWPORT = { once: true, margin: "0px 0px -14% 0px" } as const;

function StageCard({ stage }: { stage: typeof stages[number] }) {
  return (
    <div
      className="bg-white rounded-3xl overflow-hidden w-full group"
      style={{
        border: "1px solid rgba(215,25,32,0.08)",
        boxShadow: "0 1px 2px rgba(0,0,0,0.03), 0 4px 20px rgba(0,0,0,0.04)",
      }}
    >
      {/* Image */}
      <div className="relative h-[160px] overflow-hidden">
        <Image
          src={`https://images.unsplash.com/photo-${stage.photo}?auto=format&fit=crop&w=600&q=75`}
          alt={stage.title}
          fill
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between gap-4 mb-3">
          <p
            className="text-[0.58rem] font-semibold tracking-[0.18em] uppercase text-[#D71920] leading-none"
            style={{ opacity: 0.85 }}
          >
            Stage {String(stage.n).padStart(2, "0")} · {stage.phase}
          </p>
          <div
            className="shrink-0 w-7 h-7 rounded-lg flex items-center justify-center text-[#D71920]"
            style={{ border: "1px solid rgba(215,25,32,0.14)", opacity: 0.7 }}
          >
            {stage.icon}
          </div>
        </div>
        <h3
          className="text-[1.05rem] font-bold text-[#0f0f0f] mb-2.5 leading-snug"
          style={{ letterSpacing: "-0.012em" }}
        >
          {stage.title}
        </h3>
        <p className="text-[0.875rem] text-[#666] leading-[1.82] text-pretty">
          {stage.body}
        </p>
      </div>
    </div>
  );
}

export default function DeliveryApproach() {
  const trackRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start 0.7", "end 0.45"],
  });
  const scaleY = useSpring(scrollYProgress, { stiffness: 60, damping: 24, restDelta: 0.001 });

  return (
    <section id="process" className="py-32 px-6 md:px-12 lg:px-16 xl:px-24 bg-white">
      <div className="max-w-[1200px] mx-auto">

        {/* Header */}
        <FadeInView>
          <div className="flex flex-col items-center text-center mb-24">
            <span
              className="inline-flex items-center rounded-full px-4 py-1.5 mb-5 text-[0.75rem] font-semibold text-[#C4161C]"
              style={{ background: "rgba(196,22,28,0.09)", border: "1px solid rgba(196,22,28,0.22)", boxShadow: "inset 0 0 16px rgba(196,22,28,0.18)" }}
            >
              Project Delivery
            </span>
            <h2
              className="text-[2.6rem] md:text-[3.2rem] font-black leading-[1.08] max-w-[600px] mb-5"
              style={{ letterSpacing: "-0.03em" }}
            >
              <span style={{ color: "#C4161C" }}>From Brief to</span><br />
              <span style={{ color: "#0f0f0f" }}>Commissioned Facility.</span>
            </h2>
            <p className="text-[1rem] text-[#777] leading-[1.8] max-w-[440px] text-pretty">
              Seven engineered stage-gates. Each one eliminates the risk carried into the next.
            </p>
          </div>
        </FadeInView>

        {/* ─── Desktop Timeline ─── */}
        <div ref={trackRef} className="hidden md:block relative max-w-[980px] mx-auto">

          {/* Base track */}
          <div
            className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px"
            style={{ background: "rgba(215,25,32,0.07)" }}
          />
          {/* Animated red fill */}
          <motion.div
            className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px"
            style={{
              scaleY,
              transformOrigin: "top",
              background: "rgba(215,25,32,0.28)",
            }}
          />

          {/* Stage rows */}
          {stages.map((stage, i) => {
            const isLeft = i % 2 === 0;
            const offset = floatY[i] ?? 0;

            return (
              <div
                key={stage.n}
                className="relative grid grid-cols-2"
                style={{ minHeight: 300 }}
              >
                {/* Node */}
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={NODE_VIEWPORT}
                  transition={{ type: "spring", duration: 0.35, bounce: 0 }}
                  className="absolute left-1/2 -translate-x-1/2 z-10"
                  style={{ top: "calc(50% - 5px)" }}
                >
                  <div
                    className="w-2.5 h-2.5 rounded-full bg-[#D71920]"
                    style={{ boxShadow: "0 0 0 4px #fff, 0 0 0 5.5px rgba(215,25,32,0.18)" }}
                  />
                </motion.div>

                {/* Horizontal connector */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={NODE_VIEWPORT}
                  transition={{ duration: 0.35, ease: "easeOut", delay: 0.08 }}
                  className="absolute h-px z-0"
                  style={{
                    top: "50%",
                    width: 72,
                    background: "rgba(215,25,32,0.2)",
                    ...(isLeft
                      ? { right: "calc(50% + 5px)", transformOrigin: "right" }
                      : { left: "calc(50% + 5px)", transformOrigin: "left" }),
                  }}
                />

                {/* Left col */}
                <div className="flex items-center justify-end pr-28">
                  {isLeft && (
                    <motion.div
                      initial={{ opacity: 0, y: 20, filter: "blur(3px)" }}
                      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                      viewport={CARD_VIEWPORT}
                      transition={{ type: "spring", duration: 0.6, bounce: 0, delay: 0.12 }}
                      className="w-full max-w-[420px]"
                      style={{ marginTop: offset }}
                    >
                      <StageCard stage={stage} />
                    </motion.div>
                  )}
                </div>

                {/* Right col */}
                <div className="flex items-center pl-28">
                  {!isLeft && (
                    <motion.div
                      initial={{ opacity: 0, y: 20, filter: "blur(3px)" }}
                      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                      viewport={CARD_VIEWPORT}
                      transition={{ type: "spring", duration: 0.6, bounce: 0, delay: 0.12 }}
                      className="w-full max-w-[420px]"
                      style={{ marginTop: offset }}
                    >
                      <StageCard stage={stage} />
                    </motion.div>
                  )}
                </div>

              </div>
            );
          })}

          {/* Terminal node */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={NODE_VIEWPORT}
            transition={{ type: "spring", duration: 0.35, bounce: 0 }}
            className="relative flex justify-center pt-4 pb-12"
          >
            <div
              className="w-7 h-7 rounded-full bg-[#0a0a0a] flex items-center justify-center z-10"
              style={{ boxShadow: "0 0 0 5px #fff, 0 0 0 6.5px rgba(0,0,0,0.1)" }}
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </div>
          </motion.div>
        </div>

        {/* ─── Mobile ─── */}
        <div className="md:hidden flex flex-col gap-10">
          {stages.map((stage, i) => (
            <FadeInView key={stage.n} delay={0.04 + i * 0.04}>
              <div className="flex gap-5 items-start">
                <div className="shrink-0 mt-1.5 flex flex-col items-center gap-2">
                  <div
                    className="w-2.5 h-2.5 rounded-full bg-[#D71920]"
                    style={{ boxShadow: "0 0 0 4px #fff, 0 0 0 5px rgba(215,25,32,0.18)" }}
                  />
                  {i < stages.length - 1 && (
                    <div className="w-px flex-1 min-h-[80px]" style={{ background: "rgba(215,25,32,0.15)" }} />
                  )}
                </div>
                <div className="flex-1">
                  <StageCard stage={stage} />
                </div>
              </div>
            </FadeInView>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -8% 0px" }}
          transition={{ type: "spring", duration: 0.6, bounce: 0, delay: 0.1 }}
          className="flex justify-center mt-16 md:mt-4"
        >
          <a
            href="#contact"
            className="group flex items-center gap-3 rounded-full px-8 py-4 text-white font-semibold text-[0.88rem] transition-[box-shadow] duration-200 ease-out active:scale-[0.96] whitespace-nowrap"
            style={{
              background: "#D71920",
              boxShadow: "0 0 0 1px rgba(215,25,32,0.35), 0 4px 18px -4px rgba(215,25,32,0.45)",
              letterSpacing: "0.01em",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                "0 0 0 1px rgba(215,25,32,0.45), 0 8px 28px -4px rgba(215,25,32,0.5)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                "0 0 0 1px rgba(215,25,32,0.35), 0 4px 18px -4px rgba(215,25,32,0.45)";
            }}
          >
            Request Feasibility Assessment — Stage 01
            <svg
              width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
              strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
              className="transition-transform duration-200 ease-out group-hover:translate-x-1"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </motion.div>

      </div>
    </section>
  );
}
