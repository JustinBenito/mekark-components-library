"use client";

import { FadeInView } from "@/components/manufacturing-mekark/FadeInView";

const capabilities = [
  {
    n: "01",
    title: "Own 6 Lakh Sq.ft Production Facility",
    body: "Not a hired yard. Not a leased facility. Our own 6,00,000 sq.ft manufacturing campus gives us physical control over what your project needs — when it needs it.",
  },
  {
    n: "02",
    title: "40,000-Ton Annual Steel Fabrication Capacity",
    body: "The largest privately owned structural steel capacity among design-build contractors in South India — which means priority scheduling, zero outsourcing, and no queue at a third-party fabricator.",
  },
  {
    n: "03",
    title: "One Company — Every Discipline",
    body: "Design, detailing, fabrication, civil construction, MEP, and commissioning — one entity, one contract, one point of accountability. No interface disputes between separate vendors.",
  },
  {
    n: "04",
    title: "ISO-Certified End-to-End Process",
    body: "Our quality management system covers the full value chain — from raw material procurement and in-process inspection to structural erection and final handover documentation.",
  },
  {
    n: "05",
    title: "Factory-Direct Cost Economics",
    body: "Eliminating the fabrication subcontractor layer removes 12–18% from your structural cost. That margin stays in your project — reinvested in finish quality, equipment, or retained as savings.",
  },
  {
    n: "06",
    title: "Precision Detailing at Production Scale",
    body: "Our detailing team works directly with our fabrication floor — real-time feedback loops that prevent tolerance errors before steel is cut. Most contractors discover these at site erection.",
  },
];

export default function StructuralDifference() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-16 xl:px-24 bg-[#0a0a0a]">
      <div className="max-w-[1300px] mx-auto">

        <FadeInView>
          <span className="inline-flex items-center rounded-full px-4 py-1.5 mb-3 text-[0.78rem] font-semibold text-[#C4161C]" style={{ background: "rgba(196,22,28,0.15)", border: "1px solid rgba(196,22,28,0.35)", boxShadow: "inset 0 0 16px rgba(196,22,28,0.25)" }}>The Structural Difference</span>
          <h2
            className="text-[2.6rem] md:text-[3.2rem] font-black leading-[1.08] max-w-[700px] mb-4"
            style={{ letterSpacing: "-0.03em" }}
          >
            <span style={{ color: "#C4161C" }}>Capabilities No Competitor</span><br />
            <span style={{ color: "white" }}>Can Replicate from Outside.</span>
          </h2>
          <p className="text-[1rem] text-white/50 leading-[1.75] max-w-[560px] mb-14 text-pretty">
            When your contractor owns its manufacturing infrastructure, every project advantage
            compounds from day one of fabrication.
          </p>
        </FadeInView>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.06] rounded-2xl overflow-hidden border border-white/[0.06]">
          {capabilities.map((cap, i) => (
            <FadeInView key={cap.n} delay={0.05 + i * 0.06}>
              <div className="bg-[#111] p-8 h-full group hover:bg-[#161616] transition-colors duration-200">
                <span
                  className="block text-[0.72rem] font-extrabold text-[#C4161C] tabular-nums mb-5"
                  style={{ letterSpacing: "0.04em" }}
                >
                  {cap.n}
                </span>
                <h3 className="text-[1rem] font-bold text-white mb-3 leading-snug">
                  {cap.title}
                </h3>
                <p className="text-[0.875rem] text-white/50 leading-[1.75] text-pretty">
                  {cap.body}
                </p>
              </div>
            </FadeInView>
          ))}
        </div>

      </div>
    </section>
  );
}
