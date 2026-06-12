"use client";

import { motion } from "motion/react";
import CountUp from "@/components/cold-mekark/CountUp";
import { XIcon, CheckIcon } from "@/components/cold-mekark/icons";

const OTHERS = [
  "Timeline Overruns — 2×, 3×, Even 4×",
  "Hidden Costs After Contract Signing",
  "Multiple Vendors, Zero Accountability",
  "Energy Costs Blow Up After Handover",
];

const OURS = [
  { title: <><CountUp to={120} />-Day Contractual Delivery Commitment</>, desc: <>We commit the handover date in writing at contract signing. Our <CountUp to={200} suffix="+" /> project track record backs every promise we make.</> },
  { title: "Fixed-Price Turnkey Quotation", desc: "Design, structure, insulation, refrigeration, electrical, and commissioning — single quote, no add-ons, no surprises." },
  { title: "Single-Point EPC Responsibility", desc: <>Mekark owns every phase in-house. One contract, one project manager, one point of contact from day 1 to day <CountUp to={120} />.</> },
  { title: "Energy-Optimised Design Standard", desc: "Every facility is engineered for minimum lifecycle energy cost — validated thermal models, best-in-class insulation panels, inverter-driven compressors." },
];

const spring = { type: "spring" as const, stiffness: 55, damping: 18 };

export default function WhyMekark() {
  return (
    <section className="w-full bg-[#111] py-16 md:py-24 px-6">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={spring}
          className="text-center mb-14"
        >
          <p className="text-xs font-bold tracking-[0.22em] uppercase text-[#c4161c] mb-3">
            Why Choose Mekark
          </p>
          <h2 className="text-[1.8rem] md:text-[2.5rem] font-extrabold text-white text-balance">
            Tired of Contractors Who{" "}
            <span className="text-[#c4161c]">Over-Promise &amp; Under-Deliver?</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Others column */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={spring}
            className="rounded-2xl border border-white/10 bg-white/5 p-7"
          >
            <h3 className="text-[0.85rem] font-bold tracking-widest uppercase text-[#888] mb-6 flex items-center gap-2">
              <XIcon className="w-4 h-4 shrink-0" />
              What Others Do
            </h3>
            <div className="flex flex-col gap-4">
              {OTHERS.map((o) => (
                <div key={o} className="flex items-start gap-3">
                  <div className="mt-0.5 w-5 h-5 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="2.5" strokeLinecap="round"><path d="M18 6L6 18M6 6l12 12"/></svg>
                  </div>
                  <p className="text-[#999] text-[0.9rem] leading-[1.7]">{o}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Mekark column */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ ...spring, delay: 0.08 }}
            className="rounded-2xl border border-[#c4161c]/30 bg-[#c4161c]/5 p-7"
          >
            <h3 className="text-[0.85rem] font-bold tracking-widest uppercase text-[#c4161c] mb-6 flex items-center gap-2">
              <CheckIcon className="w-4 h-4 shrink-0" />
              The Mekark Difference
            </h3>
            <div className="flex flex-col gap-5">
              {OURS.map((o, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ ...spring, delay: i * 0.07 }}
                  className="flex items-start gap-3"
                >
                  <div className="mt-0.5 w-5 h-5 rounded-full bg-[#c4161c] flex items-center justify-center shrink-0">
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
                  </div>
                  <div>
                    <p className="text-white font-semibold text-[0.9rem] mb-0.5">{o.title}</p>
                    <p className="text-white/50 text-[0.82rem] leading-[1.65] text-pretty">{o.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
