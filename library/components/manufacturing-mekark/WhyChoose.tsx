"use client";

import { FadeInView } from "@/components/manufacturing-mekark/FadeInView";
import { CountUp } from "@/components/manufacturing-mekark/CountUp";

const reasons = [
  {
    title: "No Subcontracting Risk on Structural Steel",
    body: "We fabricate in-house. Your project never waits at a third-party yard or absorbs another vendor's quality failure. Full traceability from raw coil to erected column.",
  },
  {
    title: "One Accountable Contract, One Signatory",
    body: "When a project has 6 contractors and an issue arises, accountability evaporates. With Mekark, one MD signs every obligation — structural, civil, MEP, regulatory, and timeline.",
  },
  {
    title: "Project Cost Transparency — Zero Hidden Escalation",
    body: "Fixed-price contracts with clearly defined variation triggers. No ambiguous BOQ items designed to generate post-award claims. Your CFO controls the number from day one.",
  },
  {
    title: "Regulatory Clearances — Handled, Not Delegated",
    body: "Factory Act, DTCP, CMDA, fire NOC, pollution consent — our in-house regulatory team processes these in parallel with construction, not after structural completion.",
  },
  {
    title: "Structured MIS Reporting for Board Review",
    body: "Fortnightly physical progress reports, milestone-linked disbursement schedules, and photographic documentation — in the format your board or investor committee requires.",
  },
];

export default function WhyChoose() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-16 xl:px-24 bg-white">
      <div className="max-w-[1300px] mx-auto">

        {/* Header */}
        <FadeInView>
          <span className="inline-flex items-center rounded-full px-4 py-1.5 mb-3 text-[0.78rem] font-semibold text-[#C4161C]" style={{ background: "rgba(196,22,28,0.09)", border: "1px solid rgba(196,22,28,0.22)", boxShadow: "inset 0 0 16px rgba(196,22,28,0.18)" }}>The Leadership Decision</span>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
            <h2
              className="text-[2.6rem] md:text-[3.2rem] font-black leading-[1.08] max-w-[600px]"
              style={{ letterSpacing: "-0.03em" }}
            >
              <span style={{ color: "#C4161C" }}>Why Top Promoters & CFOs</span><br />
              <span style={{ color: "#0f0f0f" }}>Choose Mekark.</span>
            </h2>
            <p className="text-[1rem] text-[#666] leading-[1.7] max-w-[340px] text-pretty shrink-0">
              Every business case for a new manufacturing facility hinges on three variables: capital cost, time-to-production, and structural longevity. We are optimized for all three simultaneously.
            </p>
          </div>
        </FadeInView>

        <div className="grid lg:grid-cols-[1fr_400px] gap-12 lg:gap-16 items-start">

          {/* Left: numbered reasons */}
          <div>
            {reasons.map((r, i) => (
              <FadeInView key={r.title} delay={0.04 + i * 0.07}>
                <div
                  className="flex gap-6 py-7 group"
                  style={{ borderBottom: "1px solid rgba(0,0,0,0.07)" }}
                >
                  <span
                    className="text-[2.2rem] font-black tabular-nums leading-none shrink-0 mt-1 transition-colors duration-200 group-hover:text-[#C4161C]"
                    style={{ color: "rgba(0,0,0,0.08)", letterSpacing: "-0.04em" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-[1rem] font-bold text-[#0f0f0f] mb-2 leading-snug">
                      {r.title}
                    </h3>
                    <p className="text-[0.875rem] text-[#666] leading-[1.75] text-pretty">
                      {r.body}
                    </p>
                  </div>
                </div>
              </FadeInView>
            ))}
          </div>

          {/* Right: 2×2 bento stat grid */}
          <div className="grid grid-cols-2 gap-3 lg:sticky lg:top-28">

            <FadeInView delay={0.1} className="aspect-square">
              <div className="bg-[#C4161C] rounded-2xl p-6 flex flex-col justify-between h-full">
                <div />
                <div>
                  <p
                    className="text-[3rem] font-black text-white tabular-nums leading-none mb-1"
                    style={{ letterSpacing: "-0.03em" }}
                  >
                    <CountUp to={6} suffix="L+" />
                  </p>
                  <p className="text-[0.78rem] font-bold text-white mb-0.5">Sq.ft Own Manufacturing Infrastructure</p>
                  <p className="text-[0.72rem] font-medium text-white/70">Operational production campus — not a rented facility</p>
                </div>
              </div>
            </FadeInView>

            <FadeInView delay={0.14} className="aspect-square">
              <div className="bg-[#C4161C] rounded-2xl p-6 flex flex-col justify-between h-full">
                <div />
                <div>
                  <p
                    className="text-[3rem] font-black text-white tabular-nums leading-none mb-1"
                    style={{ letterSpacing: "-0.03em" }}
                  >
                    <CountUp to={40} suffix="K" delay={80} />
                  </p>
                  <p className="text-[0.78rem] font-bold text-white mb-0.5">Metric Tons Annual Fabrication Capacity</p>
                  <p className="text-[0.72rem] font-medium text-white/70">Largest private D&amp;B capacity in South India</p>
                </div>
              </div>
            </FadeInView>

            <FadeInView delay={0.18} className="aspect-square">
              <div className="bg-[#C4161C] rounded-2xl p-6 flex flex-col justify-between h-full">
                <div />
                <div>
                  <p
                    className="text-[3rem] font-black text-white tabular-nums leading-none mb-1"
                    style={{ letterSpacing: "-0.03em" }}
                  >
                    1
                  </p>
                  <p className="text-[0.73rem] font-bold text-white mb-0.5 leading-snug">One Company. Every Discipline. One Contract.</p>
                  <p className="text-[0.68rem] font-medium text-white/70 leading-snug">Design · Fabrication · Civil · MEP · Regulatory</p>
                </div>
              </div>
            </FadeInView>

            <FadeInView delay={0.22} className="aspect-square">
              <div className="bg-[#C4161C] rounded-2xl p-6 flex flex-col justify-between h-full">
                <div />
                <div>
                  <p
                    className="text-[3rem] font-black text-white tabular-nums leading-none mb-1"
                    style={{ letterSpacing: "-0.03em" }}
                  >
                    ISO
                  </p>
                  <p className="text-[0.78rem] font-bold text-white mb-0.5">Certified Across Quality, Safety &amp; Environment</p>
                  <p className="text-[0.72rem] font-medium text-white/70">9001 · 45001 · 14001</p>
                </div>
              </div>
            </FadeInView>

          </div>

        </div>

      </div>
    </section>
  );
}
