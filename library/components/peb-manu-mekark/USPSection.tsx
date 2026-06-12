"use client";
import { motion } from "motion/react";

const USPS = [
  {
    headline: "One Company. End-to-End.",
    copy: "In-house structural engineering, a 3,000 MT/month fabrication plant, and dedicated erection teams — all under one contract. Single-point accountability, zero coordination gaps.",
    iconPaths: [
      "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-2 10v-5a1 1 0 00-1-1h-2a1 1 0 00-1 1v5m4 0H9",
    ],
  },
  {
    headline: "Delivered 50% Faster",
    copy: "Factory-fabricated off-site, erected on-site. We've handed over 50,000 sq.ft. warehouses in under 90 days — a fraction of conventional construction timelines.",
    iconPaths: [
      "M13 10V3L4 14h7v7l9-11h-7z",
    ],
  },
  {
    headline: "IS, AISC & Code-Compliant Engineering",
    copy: "Designed by qualified structural engineers in STAAD.Pro and Tekla, every structure complies with IS 800, IS 1893 (seismic), and IS 875 (wind loads). Third-party review on critical projects.",
    iconPaths: [
      "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
    ],
  },
  {
    headline: "ISO-Certified Fabrication",
    copy: "Robotic welding, CNC plasma cutting, automated surface treatment — 3,000 MT/month output. Every batch NDT-tested and dispatch-certified.",
    iconPaths: [
      "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z",
      "M15 12a3 3 0 11-6 0 3 3 0 016 0z",
    ],
  },
  {
    headline: "No Hidden Costs",
    copy: "Itemised BOQ with clear breakdowns of steel tonnage, fabrication, transportation, and erection. Fixed-price turnkey contracts available for full cost certainty.",
    iconPaths: [
      "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4",
    ],
  },
  {
    headline: "IGBC/LEED Aligned",
    copy: "Recycled steel, near-zero construction waste, and integrated energy tech — insulated roofing, solar, LED, rainwater harvesting — to support your green building certifications.",
    iconPaths: [
      "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
    ],
  },
];

function Icon({ paths }: { paths: string[] }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-5 h-5"
    >
      {paths.map((d, i) => <path key={i} d={d} />)}
    </svg>
  );
}

export function USPSection() {
  return (
    <section className="bg-white py-20 md:py-28">
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
            <p className="text-[#C4161C] font-bold uppercase text-[0.75rem] mb-3">Why Mekark</p>
            <h2 className="font-bold text-gray-900 text-balance" style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)" }}>
              What Makes Mekark the #1 Pre Engineered Building Company in South India?
            </h2>
          </div>
          <p className="text-gray-500 text-[0.95rem] leading-relaxed lg:max-w-[38%] text-pretty">
            Built on three decades of steel expertise, Mekark owns every step of the process — so you never manage multiple vendors or chase accountability.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-100 rounded-2xl overflow-hidden border border-gray-100">
          {USPS.map((usp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.45, delay: i * 0.07, ease: [0.25, 1, 0.5, 1] }}
              className="group bg-white p-7 flex flex-col gap-4 transition-colors duration-200 hover:bg-[#F8F8F8] cursor-default"
            >
              {/* Icon */}
              <div className="w-11 h-11 rounded-xl bg-[#C4161C]/8 flex items-center justify-center text-[#C4161C] shrink-0 transition-[background-color] duration-200 group-hover:bg-[#C4161C]/12">
                <Icon paths={usp.iconPaths} />
              </div>

              {/* Text */}
              <div>
                <h3 className="font-bold text-gray-900 text-[1rem] leading-snug mb-2">
                  {usp.headline}
                </h3>
                <p className="text-gray-500 text-[0.875rem] leading-[1.75] text-pretty">
                  {usp.copy}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
