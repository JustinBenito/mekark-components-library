"use client";

import { motion } from "motion/react";
import { CheckIcon } from "@/components/cold-mekark/icons";

const CERTS = [
  { label: "ISO 9001:2015", color: "#c4161c" },
  { label: "ISO 45001:2018", color: "#c4161c" },
  { label: "ISO 14001:2015", color: "#c4161c" },
];

const BADGES = [
  "MSME Registered",
  "GST Verified",
  "PEB Specialist",
  "15+ Years Experience",
  "Pan India Delivery",
];

const spring = { type: "spring" as const, stiffness: 60, damping: 18 };

export default function TrustedCertified() {
  return (
    <section className="w-full bg-white py-16 md:py-20 px-6 border-b border-black/[0.06]">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={spring}
          className="text-center mb-12"
        >
          <p className="text-xs font-bold tracking-[0.22em] uppercase text-[#c4161c] mb-3">
            Certified Organisation
          </p>
          <h2 className="text-[1.8rem] md:text-[2.5rem] font-extrabold text-[#111] text-balance">
            Trusted &amp; Certified
          </h2>
        </motion.div>

        {/* ISO badges */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {CERTS.map((c, i) => (
            <motion.div
              key={c.label}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ ...spring, delay: i * 0.08 }}
              className="flex items-center gap-3 rounded-xl border-2 border-[#c4161c]/20 bg-[#fef2f2] px-6 py-4"
            >
              <div className="w-10 h-10 rounded-full bg-[#c4161c] flex items-center justify-center shrink-0">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>
              </div>
              <span className="font-extrabold text-[#c4161c] text-[1rem]">{c.label}</span>
            </motion.div>
          ))}
        </div>

        {/* Info pills */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ ...spring, delay: 0.25 }}
          className="flex flex-wrap justify-center gap-3"
        >
          {BADGES.map((b) => (
            <span
              key={b}
              className="inline-flex items-center gap-1.5 rounded-full border border-black/[0.08] bg-[#f7f7f7] px-4 py-2 text-[0.82rem] font-semibold text-[#444]"
            >
              <CheckIcon className="w-3 h-3 text-[#c4161c] shrink-0" />
              {b}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
