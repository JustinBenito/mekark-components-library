"use client";
import { motion } from "motion/react";

const PROMISES = [
  { label: "On-Time Delivery", desc: "We commit to a programme — and we keep it." },
  { label: "Transparent Pricing", desc: "Detailed BOQ, no scope creep, no surprise bills." },
  { label: "Engineering Integrity", desc: "Every structure signed off by a qualified structural engineer." },
  { label: "Quality Fabrication", desc: "ISO-certified plant, NDT-tested welds, full traceability." },
  { label: "Safety First", desc: "OHSAS 18001-aligned site safety on every project." },
  { label: "Single Accountability", desc: "One contract, one team — zero blame-shifting." },
  { label: "After-Sales Support", desc: "2-year structural warranty and post-handover service." },
];

const CERTS = [
  { label: "ISO 9001:2015", sub: "Quality Management System" },
  { label: "IS 800 / IS 1893", sub: "Structural Code Compliance" },
  { label: "OHSAS 18001", sub: "Safety Management" },
  { label: "ISO 14001", sub: "Environmental Management" },
  { label: "INSDAG", sub: "Institute for Steel Dev. & Growth" },
  { label: "CII", sub: "Confederation of Indian Industry" },
  { label: "MSME", sub: "Govt. of India Registration" },
  { label: "GST", sub: "Pan-India Operations" },
];

const STATS = [
  { value: "15+", label: "Years in Business" },
  { value: "450+", label: "Projects Delivered" },
  { value: "3,000", label: "MT Steel / Month" },
];

export function WhyMekarkSection() {
  return (
    <section className="bg-[#111] py-20 md:py-28">
      <div className="max-w-350 mx-auto px-6 md:px-12 lg:px-16">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12"
        >
          <div className="lg:max-w-[52%]">
            <p className="text-[#C4161C] font-bold uppercase text-[0.75rem] mb-3">Why Mekark Is Unique</p>
            <h2 className="font-bold text-white text-balance" style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)" }}>
              Built Different. Delivered Better.
            </h2>
          </div>
          <p className="text-white/50 text-[0.95rem] leading-relaxed lg:max-w-[38%] text-pretty">
            Every PEB company promises quality. Mekark backs it with engineering rigour, in-house fabrication, and a track record built over 15 years and 450+ projects.
          </p>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
          className="grid grid-cols-3 mb-10 rounded-2xl overflow-hidden border border-white/8"
        >
          {STATS.map((s, i) => (
            <div
              key={s.label}
              className={`px-8 py-6 bg-white/4 ${i < STATS.length - 1 ? "border-r border-white/8" : ""}`}
            >
              <p className="font-black text-white tabular-nums" style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)" }}>{s.value}</p>
              <p className="text-white/40 text-[0.8rem] mt-1">{s.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Two columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">

          {/* Promise */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
            className="rounded-2xl p-8 border border-white/8 bg-white/3"
          >
            <h3 className="font-bold text-white text-[1.2rem] leading-tight mb-1">Mekark&apos;s 7-Point Promise</h3>
            <p className="text-white/40 text-[0.85rem] mb-7">Commitments we make on every project, to every client.</p>

            <div>
              {PROMISES.map((p, i) => (
                <motion.div
                  key={p.label}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className={`flex items-start gap-4 py-3.5 ${i < PROMISES.length - 1 ? "border-b border-white/8" : ""}`}
                >
                  <span className="shrink-0 w-5 h-5 rounded-full border border-[#C4161C]/60 flex items-center justify-center mt-0.5">
                    <svg width="8" height="6" viewBox="0 0 8 6" fill="none" aria-hidden="true">
                      <path d="M1 3l1.8 1.8L7 1" stroke="#C4161C" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-white text-[0.9rem] leading-none">{p.label}</p>
                    <p className="text-white/40 text-[0.8rem] mt-1 leading-snug">{p.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 1, 0.5, 1] }}
            className="rounded-2xl p-8 border border-white/8 bg-white/3"
          >
            <h3 className="font-bold text-white text-[1.2rem] leading-tight mb-1">Credentials &amp; Certifications</h3>
            <p className="text-white/40 text-[0.85rem] mb-7">Every structure meets the compliance requirements your sector demands.</p>

            <div className="grid grid-cols-2 gap-3">
              {CERTS.map((cert, i) => (
                <motion.div
                  key={cert.label}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className="rounded-xl p-4 bg-white/6 border border-white/8 flex flex-col justify-center"
                >
                  <p className="font-bold text-white text-[0.88rem] leading-tight">{cert.label}</p>
                  <p className="text-white/40 text-[0.72rem] mt-0.5 leading-tight">{cert.sub}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default WhyMekarkSection;
