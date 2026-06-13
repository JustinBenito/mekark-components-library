"use client";
import { motion } from "motion/react";

const LAYERS = [
  { title: "Air Filtration",   body: "HEPA / ULPA — 99.995% to 99.9995% particle capture efficiency" },
  { title: "Pressure Control", body: "Positive / negative cascade — prevents cross-contamination between zones" },
  { title: "Airflow Pattern",  body: "Laminar or turbulent — matched to ISO class and process requirement" },
  { title: "Temp & Humidity",  body: "±1°C / ±5% RH tolerance — validated against regulatory specification" },
  { title: "Entry Protocol",   body: "Airlocks, gowning rooms, material pass-throughs — segregated access" },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20, filter: "blur(4px)" },
  whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, delay, ease: [0.25, 1, 0.5, 1] as const },
});

export function WhatIsCleanRoom() {
  return (
    <section id="about" className="bg-[#F5F5F4] py-20 md:py-28">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">

        {/* ── Header row ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-8 lg:gap-20 items-end mb-14">
          <motion.div {...fadeUp(0)}>
            <div className="flex items-center gap-3 mb-5">
              <span className="block h-px w-6 bg-[#C4161C]" />
              <p className="text-[#C4161C] font-semibold text-[0.75rem] uppercase tracking-[0.12em]">
                Understanding the Fundamentals
              </p>
            </div>
            <h2
              className="font-bold text-gray-900 text-balance leading-[1.05]"
              style={{ fontSize: "clamp(2.8rem, 4.5vw, 4rem)" }}
            >
              What Is a<br />Clean Room?
            </h2>
          </motion.div>

          <motion.p
            {...fadeUp(0.1)}
            className="text-gray-500 text-[0.97rem] leading-[1.85] text-pretty pb-1"
          >
            A clean room is an enclosed environment where the concentration of airborne particles
            — dust, microbes, chemical vapours — is controlled, measured, and maintained within
            legally defined limits. Air pressure, temperature, humidity, and airflow direction
            are all engineered to prevent contamination.
          </motion.p>
        </div>

        {/* ── 5-Layer strip ── */}
        <motion.div
          {...fadeUp(0.15)}
          className="grid grid-cols-1 lg:grid-cols-5 rounded-2xl overflow-hidden mb-6"
          style={{ boxShadow: "var(--shadow-border)" }}
        >
          {LAYERS.map((layer, i) => (
            <div
              key={layer.title}
              className="bg-white p-6 flex flex-col gap-3 border-b border-[rgba(0,0,0,0.06)] lg:border-b-0 lg:border-r last:border-0"
            >
              <span className="text-[#C4161C] font-extrabold text-[0.7rem] tabular-nums">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="font-semibold text-gray-900 text-[0.9rem] leading-snug">{layer.title}</p>
              <p className="text-gray-400 text-[0.82rem] leading-[1.65] text-pretty">{layer.body}</p>
            </div>
          ))}
        </motion.div>

        {/* ── Bottom row: prose + red callout ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-6">
          <motion.div
            {...fadeUp(0.2)}
            className="bg-white rounded-2xl p-8 space-y-4"
            style={{ boxShadow: "var(--shadow-border)" }}
          >
            <p className="text-gray-500 text-[0.97rem] leading-[1.85] text-pretty">
              If your product is a drug, a semiconductor chip, a medical implant, or a cell-based
              therapy, it is assembled or processed in a clean room. A single contamination event
              can halt production, trigger a regulatory recall, or invalidate years of clinical data.{" "}
              <strong className="text-gray-800 font-semibold">The room is not a backdrop. It is the process.</strong>
            </p>
            <p className="text-gray-500 text-[0.97rem] leading-[1.85] text-pretty">
              Clean rooms are classified by ISO standards — from ISO Class 9 down to ISO Class 3.
              Each class specifies the maximum number of particles permitted per cubic metre of air.
              Your product and your regulatory destination determine which class you need. That
              determination is where every Mekark engagement begins.
            </p>
          </motion.div>

          <motion.div
            {...fadeUp(0.25)}
            className="bg-[#C4161C] rounded-2xl p-8 flex flex-col justify-between"
          >
            <p className="text-red-200 font-semibold text-[0.75rem] uppercase tracking-[0.1em] mb-4">
              The financial case for getting it right
            </p>
            <p className="text-white/80 text-[0.97rem] leading-[1.8] text-pretty">
              A contamination recall in pharmaceutical manufacturing costs between{" "}
              <span className="font-bold text-white">₹2 crore and ₹50 crore</span> — before
              legal and brand consequences. Getting the clean room right the first time is not a
              quality choice. It is a financial one.
            </p>
            <div className="mt-8 pt-6 border-t border-white/15 flex items-end gap-3">
              <span className="text-white font-bold tabular-nums leading-none" style={{ fontSize: "clamp(1.8rem, 3vw, 2.4rem)" }}>
                ₹50Cr+
              </span>
              <span className="text-white/55 text-[0.82rem] leading-tight pb-0.5">
                average recall exposure<br />per contamination event
              </span>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}

export default WhatIsCleanRoom;
