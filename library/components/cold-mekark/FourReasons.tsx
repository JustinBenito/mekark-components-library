"use client";

import { motion } from "motion/react";
import CountUp from "@/components/cold-mekark/CountUp";

const REASONS = [
  {
    num: "01",
    title: "Fastest Cold Storage Builder in India",
    desc: <>Our advanced manufacturing unit in Tamil Nadu pre-fabricates structural steel, PEB components, and insulated panels simultaneously — slashing on-site construction time. <CountUp to={120} suffix=" days" /> isn&apos;t a target, it&apos;s a guarantee.</>,
  },
  {
    num: "02",
    title: "In-House Engineering = Zero Design Risk",
    desc: "Cold storage design failures — wrong load calculations, poor vapour barriers, undersized refrigeration — are catastrophically expensive to fix post-construction. Our in-house engineers eliminate this risk at source.",
  },
  {
    num: "03",
    title: "Subsidy Documentation Support Included",
    desc: <>Very few cold storage contractors help you navigate NABARD, NHB, and MoFPI subsidy applications. We do. Our projects have unlocked ₹<CountUp to={15} suffix="+" /> crore in government subsidies for clients across India.</>,
  },
  {
    num: "04",
    title: "Post-Handover AMC & Performance Warranty",
    desc: "We don't disappear after commissioning. Mekark offers comprehensive Annual Maintenance Contracts and a structural performance warranty — because our business depends on your facility running perfectly, always.",
  },
];

const spring = { type: "spring" as const, stiffness: 55, damping: 18 };

export default function FourReasons() {
  return (
    <section className="w-full bg-white py-16 md:py-24 px-6">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={spring}
          className="text-center mb-14"
        >
          <p className="text-xs font-bold tracking-[0.22em] uppercase text-[#c4161c] mb-3">
            Why Hand Us Your Project
          </p>
          <h2 className="text-[1.8rem] md:text-[2.5rem] font-extrabold text-[#111] text-balance mb-3">
            The <CountUp to={4} /> Reasons Smart Industrialists{" "}
            <span className="text-[#c4161c]">Choose Mekark</span>
          </h2>
          <p className="text-[#777] text-base max-w-[520px] mx-auto text-pretty">
            Not marketing language. Verifiable facts backed by <CountUp to={200} suffix="+" /> live installations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {REASONS.map((r, i) => (
            <motion.div
              key={r.num}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ ...spring, delay: i * 0.08 }}
              className="flex gap-5 p-7 rounded-2xl border border-black/[0.07] shadow-[0_1px_4px_rgba(0,0,0,0.05)] hover:shadow-[0_4px_24px_rgba(0,0,0,0.09)] transition-shadow duration-200"
            >
              <div className="text-[1.8rem] font-extrabold text-[#c4161c]/20 tabular-nums shrink-0 leading-none mt-1">
                {r.num}
              </div>
              <div>
                <h3 className="text-[1rem] font-bold text-[#111] mb-2">{r.title}</h3>
                <p className="text-[#777] text-[0.875rem] leading-[1.75] text-pretty">{r.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ ...spring, delay: 0.3 }}
          className="text-center mt-10"
        >
          <button
            onClick={() => {
              const el = document.querySelector("#intake");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center gap-2 bg-[#c4161c] hover:bg-[#a31217] active:scale-[0.96] text-white font-bold px-8 py-4 rounded-[8px] transition-[background-color,transform] duration-150 text-[0.97rem]"
          >
            Get a Free Cold Storage Consultation
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </button>
          <p className="mt-3 text-[#aaa] text-[0.78rem]">
            No commitment required · Our engineers contact you within 2 hours
          </p>
        </motion.div>
      </div>
    </section>
  );
}
