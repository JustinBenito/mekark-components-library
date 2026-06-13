"use client";
import { motion } from "motion/react";

const CREDS = [
  { name: "ISO 14644-1 / 2",           sub: "Clean Room Classification & Monitoring" },
  { name: "WHO-GMP Technical Report",  sub: "Pharmaceutical Manufacturing" },
  { name: "EU GMP Annex I — 2022",     sub: "Sterile Products Manufacture" },
  { name: "Schedule M (Revised)",      sub: "CDSCO — India" },
  { name: "ISO 9001 : 2015",           sub: "Quality Management System" },
];

export function CredentialsSection() {
  return (
    <section className="bg-white py-16 md:py-20 border-y border-[rgba(0,0,0,0.06)]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
          className="text-center mb-10"
        >
          <p className="text-[#C4161C] font-bold  uppercase text-[0.72rem] mb-3">Our Credentials</p>
          <h2 className="font-bold text-gray-900 text-balance" style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)" }}>
            The Standards Your Auditor Will Verify
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {CREDS.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 12, filter: "blur(4px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.4, delay: i * 0.07, ease: [0.25, 1, 0.5, 1] }}
              className="bg-white rounded-xl px-4 py-4 flex flex-col items-center text-center gap-1.5"
              style={{ boxShadow: "var(--shadow-border)" }}
            >
              <span className="text-[#C4161C] text-[0.9rem]" aria-hidden="true">✦</span>
              <p className="font-bold text-gray-900 text-[0.9rem] leading-tight">{c.name}</p>
              <p className="text-gray-400 text-[0.78rem]">{c.sub}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CredentialsSection;
