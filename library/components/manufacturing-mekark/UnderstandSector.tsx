"use client";

import { motion } from "motion/react";
import { FadeInView } from "@/components/manufacturing-mekark/FadeInView";

const pillars = [
  {
    title: "Structural Engineering Layer",
    body: "Column-free spans, crane bay integration, mezzanine loading, seismic compliance — built to your equipment footprint, not a standard template.",
  },
  {
    title: "Process Flow Architecture",
    body: "Facility layout aligned to your production sequence — raw material entry, in-process staging, dispatch — to eliminate intra-facility movement losses.",
  },
  {
    title: "Utilities and Infrastructure Backbone",
    body: "High-tension power, compressed air lines, effluent management, fire suppression, and HVAC — integrated during construction, not retrofitted as afterthoughts.",
  },
  {
    title: "Compliance and Certification Framework",
    body: "Factory Act, local municipal approvals, pollution control, fire NOC, and structural stability certificates — managed end-to-end by our regulatory team.",
  },
];

export default function UnderstandSector() {
  return (
    <section id="about" className="py-24 px-6 md:px-12 lg:px-16 xl:px-24 bg-[#eeeeee]">
      <div className="max-w-[1300px] mx-auto">

        <div className="grid lg:grid-cols-[1fr_1fr] gap-16 items-center">
          {/* Left — heading + long text */}
          <div>
            <FadeInView>
              <span className="inline-flex items-center rounded-full px-4 py-1.5 mb-3 text-[0.78rem] font-semibold text-[#C4161C]" style={{ background: "rgba(196,22,28,0.09)", border: "1px solid rgba(196,22,28,0.22)", boxShadow: "inset 0 0 16px rgba(196,22,28,0.18)" }}>Understanding the Sector</span>
              <h2
                className="text-[2.6rem] md:text-[3.2rem] font-black mb-6 leading-[1.08]"
                style={{ letterSpacing: "-0.03em" }}
              >
                <span style={{ color: "#C4161C" }}>What Is a</span><br />
                <span style={{ color: "#0f0f0f" }}>Manufacturing Industry?</span>
              </h2>
            </FadeInView>
            <FadeInView delay={0.08}>
              <p className="text-[1rem] text-[#555] leading-[1.85] mb-5 text-pretty">
                A manufacturing industry is a production ecosystem — not just a building. It is an
                engineered environment where raw materials are systematically converted into finished
                goods at scale, requiring precise integration of structural design, production-flow
                logic, utility systems, and operational safety in a single contiguous space.
              </p>
            </FadeInView>
            <FadeInView delay={0.12}>
              <p className="text-[1rem] text-[#555] leading-[1.85] mb-5 text-pretty">
                For business leaders investing in a new facility, the building is the first and most
                critical decision. An ill-structured floor plan, under-designed load bearing, or
                poorly ventilated bay forces operational compromises that no amount of machinery
                upgrades can fix later.
              </p>
            </FadeInView>
            <FadeInView delay={0.16}>
              <p className="text-[1rem] text-[#0f0f0f] font-semibold leading-[1.85] text-pretty">
                What you build determines how you produce — for the next 30 years. That is why the
                contractor you choose must understand your production process as intimately as your
                operations team does.
              </p>
            </FadeInView>
          </div>

          {/* Right — 4 pillars */}
          <div className="grid sm:grid-cols-2 gap-4">
            {pillars.map((pillar, i) => (
              <FadeInView key={pillar.title} delay={0.08 + i * 0.07}>
                <div
                  className="bg-white rounded-xl p-6 h-full flex flex-col"
                  style={{
                    boxShadow:
                      "0px 0px 0px 1px rgba(0,0,0,0.06), 0px 2px 6px -1px rgba(0,0,0,0.06), 0px 4px 12px -2px rgba(0,0,0,0.04)",
                    borderTop: "2px solid #C4161C",
                  }}
                >
                  <span
                    className="text-[0.65rem] font-black tabular-nums mb-3 leading-none"
                    style={{ color: "#C4161C", letterSpacing: "0.06em" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-[0.95rem] font-bold text-[#0f0f0f] mb-2 leading-snug">
                    {pillar.title}
                  </h3>
                  <p className="text-[0.875rem] text-[#666] leading-[1.7] text-pretty">
                    {pillar.body}
                  </p>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
