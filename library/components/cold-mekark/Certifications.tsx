"use client";

import { motion } from "motion/react";

const CERTS = [
  {
    code: "ISO 9001",
    year: ":2015",
    title: "Quality Management System",
    desc: "Certified processes for design, engineering, manufacturing & construction — ensuring consistent, defect-free project delivery across every cold storage facility we build.",
  },
  {
    code: "ISO 45001",
    year: ":2018",
    title: "Occupational Health & Safety",
    desc: "Every Mekark construction site operates under a documented safety management system — protecting workers, your premises, and your liability. Zero Lost-Time Incidents is our operational standard.",
  },
  {
    code: "ISO 14001",
    year: ":2015",
    title: "Environmental Management System",
    desc: "Certified environmental practices across construction and manufacturing — covering waste, energy, emissions, and site impact. Your facility is ESG-compliant from the ground up.",
  },
];

const spring = { type: "spring" as const, stiffness: 55, damping: 18 };

export default function Certifications() {
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
            International Certifications
          </p>
          <h2 className="text-[1.8rem] md:text-[2.5rem] font-extrabold text-white text-balance mb-3">
            Not Just a Contractor.{" "}
            <span className="text-[#c4161c]">A Certified Organisation.</span>
          </h2>
          <p className="text-white/50 text-base max-w-[540px] mx-auto text-pretty">
            Three globally recognised ISO certifications — independently audited every year.
            Documented, third-party verified proof of international operating standards.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          {CERTS.map((c, i) => (
            <motion.div
              key={c.code}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ ...spring, delay: i * 0.09 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-7"
            >
              {/* ISO badge */}
              <div className="inline-flex items-center gap-1 mb-4">
                <div className="rounded-full border border-[#c4161c] bg-[#c4161c]/10 px-3 py-1 text-[0.65rem] font-extrabold tracking-wider text-[#c4161c] uppercase">
                  ISO CERTIFIED
                </div>
              </div>

              <div className="mb-3">
                <span className="text-white font-extrabold text-[1.6rem]">{c.code}</span>
                <span className="text-white/40 font-bold text-[1.1rem]">{c.year}</span>
              </div>

              <p className="text-[#c4161c] font-semibold text-[0.82rem] uppercase tracking-wide mb-3">
                {c.title}
              </p>

              <p className="text-white/50 text-[0.87rem] leading-[1.7] mb-4 text-pretty">{c.desc}</p>

              <div className="border-t border-white/10 pt-4 flex items-center justify-between">
                <span className="text-white/30 text-[0.72rem]">Certified Organisation · MEKARK</span>
                <div className="flex items-center gap-1 text-[0.72rem] text-white/40">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6L9 17l-5-5"/></svg>
                  Audited Annually
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ ...spring, delay: 0.25 }}
          className="text-center"
        >
          <div className="inline-flex flex-wrap justify-center gap-2 mb-6">
            {["ISO 9001:2015", "ISO 45001:2018", "ISO 14001:2015"].map((tag) => (
              <span key={tag} className="rounded-full border border-[#c4161c]/30 bg-[#c4161c]/10 px-4 py-1.5 text-[0.78rem] font-bold text-[#c4161c]">
                {tag}
              </span>
            ))}
          </div>
          <p className="text-white/40 text-[0.82rem] mb-6">
            Triple-Certified. Independently Audited. Every Single Year.
          </p>
          <button
            onClick={() => {
              const el = document.querySelector("#intake");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center gap-2 bg-[#c4161c] hover:bg-[#a31217] active:scale-[0.96] text-white font-bold px-7 py-3.5 rounded-[8px] transition-[background-color,transform] duration-150 text-[0.93rem]"
          >
            Build With a Certified Contractor
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
