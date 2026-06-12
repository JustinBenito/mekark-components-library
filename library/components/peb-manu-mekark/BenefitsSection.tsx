"use client";
import { motion } from "motion/react";

const BENEFITS = [
  {
    headline: "50% Faster Construction",
    copy: "Pre-fabricated steel components arrive ready to erect. Reduce project timelines from 18 months to 6-8 months for a standard factory building.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" aria-hidden="true">
        <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    headline: "30-40% Lower Project Cost",
    copy: "Optimised material usage, minimal site labour, and no RCC column wastage make PEB buildings dramatically more cost-effective than conventional construction.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" aria-hidden="true">
        {/* Descending bar chart — cost going down */}
        <path d="M3 17h18M8 5v12M13 9v8M18 13v4" />
      </svg>
    ),
  },
  {
    headline: "Built Exactly for You",
    copy: "Custom spans up to 90m, custom heights, crane beams, mezzanine floors, clerestory windows — designed for your exact industrial process flow.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" aria-hidden="true">
        {/* Sliders — adjustable/custom */}
        <path d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>
    ),
  },
  {
    headline: "Built to Last 50+ Years",
    copy: "High-tensile steel structures with hot-dip galvanisation, anti-corrosion coatings, and weather-resistant roofing systems deliver decades of reliable performance.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" aria-hidden="true">
        {/* Shield with check */}
        <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    headline: "Eco-Friendly Steel Buildings",
    copy: "Steel is 100% recyclable. Our energy-efficient PEB buildings with insulated panels, translucent sheets, and solar-ready roofs reduce your long-term operating costs.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" aria-hidden="true">
        {/* Recycle / circular arrows */}
        <path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  },
  {
    headline: "Expand as You Grow",
    copy: "PEB structures are modular and expandable. Add bays, extend spans, or increase height without demolishing and rebuilding — unlike concrete structures.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" aria-hidden="true">
        {/* Arrows pointing outward — expand */}
        <path d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
      </svg>
    ),
  },
];

const BULLETS = [
  "Earthquake-resistant and cyclone-proof structural designs as per IS 1893 standards",
  "Uniform quality — factory fabrication eliminates on-site construction variability",
  "Reduced foundation costs — lighter steel superstructures vs. heavy RCC frames",
  "Lower maintenance costs — anti-corrosion systems require minimal upkeep",
  "Fire-resistant cladding and roofing options available",
  "BIS, IS 800, and AISC code-compliant PEB engineering services",
];

export function BenefitsSection() {
  return (
    <section className="bg-[#F8F8F8] py-20 md:py-28">
      <div className="max-w-350 mx-auto px-6 md:px-12 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
          className="text-center mb-14"
        >
          <div className="flex items-center justify-center gap-2.5 mb-3">
            <div className="h-px w-8 bg-[#C4161C] shrink-0" />
            <p className="text-[#C4161C] font-bold uppercase text-[0.75rem]">Why Choose PEB</p>
            <div className="h-px w-8 bg-[#C4161C] shrink-0" />
          </div>
          <h2 className="font-bold text-gray-900 text-balance" style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)" }}>
            Why Pre-Engineered Buildings Are the Smart Choice for Industrial Construction
          </h2>
        </motion.div>

        {/* Benefit cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {BENEFITS.map((benefit, i) => (
            <motion.div
              key={benefit.headline}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.25, 1, 0.5, 1] }}
              className="bg-white rounded-2xl p-7 transition-[box-shadow,transform] duration-200 hover:-translate-y-0.5"
              style={{ boxShadow: "var(--shadow-border)" }}
              onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "var(--shadow-border-hover)")}
              onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "var(--shadow-border)")}
            >
              <div className="w-11 h-11 rounded-xl bg-[#C4161C]/[0.07] flex items-center justify-center text-[#C4161C] mb-5">
                {benefit.icon}
              </div>
              <h3 className="font-bold text-gray-900 text-[1.02rem] mb-2">{benefit.headline}</h3>
              <p className="text-gray-500 text-[0.9rem] leading-[1.7] text-pretty">{benefit.copy}</p>
            </motion.div>
          ))}
        </div>

        {/* Additional bullets */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 1, 0.5, 1] }}
          className="mt-10 bg-[#F8F8F8] rounded-2xl p-8"
        >
          <h3 className="font-bold text-gray-900 text-[1rem] mb-5">Additional PEB Benefits</h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {BULLETS.map((b) => (
              <li key={b} className="flex items-start gap-2.5 text-[0.9rem] text-gray-600">
                <span className="mt-0.75 shrink-0 w-4.5 h-4.5 rounded-full bg-[#C4161C]/10 flex items-center justify-center">
                  <svg width="8" height="8" viewBox="0 0 8 8" fill="none" aria-hidden="true">
                    <path d="M1.5 4L3.5 6L6.5 2" stroke="#C4161C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                {b}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
