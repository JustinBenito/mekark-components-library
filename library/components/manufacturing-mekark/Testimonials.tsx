"use client";

import { FadeInView } from "@/components/manufacturing-mekark/FadeInView";

const testimonials = [
  {
    quote: "We had evaluated four contractors before Mekark. The differentiator was simple — every other bidder was going to source fabricated steel from the market. Mekark was going to produce it. That single fact changed our risk calculus entirely. The facility was handed over 6 weeks ahead of schedule.",
    initials: "RK",
    name: "R. Krishnamoorthi",
    role: "Managing Director",
    company: "Automotive Components OEM · Chennai",
  },
  {
    quote: "As CFO, my primary concern was cost overrun exposure. Mekark's fixed-price EPC structure with clearly defined variation clauses gave our board the comfort to approve the project. The final cost landed within 1.8% of the contracted amount — on a ₹42 crore facility.",
    initials: "SP",
    name: "S. Padmanabhan",
    role: "CFO",
    company: "Precision Engineering Group · Coimbatore",
  },
  {
    quote: "What most contractors cannot do is design the facility around your production flow — they hand you a structure and expect your operations team to adapt. Mekark spent three weeks with our plant head before drawing a single column. The result is a facility that actually fits how we manufacture.",
    initials: "VA",
    name: "V. Anand Rajan",
    role: "CEO",
    company: "Food Processing & Cold Chain Company · Tamil Nadu",
  },
  {
    quote: "We expanded production capacity twice in 4 years — both times with Mekark. The second expansion was done without stopping production on the adjacent line. That level of site management precision is not something you find everywhere. They understand manufacturing, not just construction.",
    initials: "MR",
    name: "M. Ravichandran",
    role: "Promoter",
    company: "Chemical Processing Unit · Ambattur Industrial Estate",
  },
  {
    quote: "Our PE investor required an independent structural audit before releasing the next tranche. The audit came back clean with zero observations — a first in the firm's India portfolio across 11 factories. That credibility directly supported our Series B close. Mekark built that foundation.",
    initials: "NS",
    name: "N. Subramaniam",
    role: "Founder & CEO",
    company: "EV Component Manufacturer · Sriperumbudur",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-16 xl:px-24 bg-[#eeeeee]">
      <div className="max-w-[1300px] mx-auto">

        <FadeInView>
          <span className="inline-flex items-center rounded-full px-4 py-1.5 mb-3 text-[0.78rem] font-semibold text-[#C4161C]" style={{ background: "rgba(196,22,28,0.09)", border: "1px solid rgba(196,22,28,0.22)", boxShadow: "inset 0 0 16px rgba(196,22,28,0.18)" }}>Client Outcomes</span>
          <h2
            className="text-[2.6rem] md:text-[3.2rem] font-black leading-[1.08] mb-12"
            style={{ letterSpacing: "-0.03em" }}
          >
            <span style={{ color: "#C4161C" }}>What Promoters Say</span><br />
            <span style={{ color: "#0f0f0f" }}>After Their Facilities Go Live.</span>
          </h2>
        </FadeInView>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <FadeInView key={t.name} delay={0.04 + i * 0.05}>
              <div
                className="bg-white rounded-xl p-6 flex flex-col h-full"
                style={{ boxShadow: "0 0 0 1px rgba(0,0,0,0.07), 0 2px 8px rgba(0,0,0,0.05)" }}
              >
                {/* Stars */}
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: 5 }).map((_, si) => (
                    <svg key={si} width="14" height="14" viewBox="0 0 24 24" fill="#C4161C">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>

                {/* Quote */}
                <p className="text-[0.9rem] text-[#444] leading-[1.8] text-pretty flex-1 mb-5">
                  "{t.quote}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4" style={{ borderTop: "1px solid rgba(0,0,0,0.07)" }}>
                  <div className="w-9 h-9 rounded-full bg-[#C4161C] flex items-center justify-center shrink-0">
                    <span className="text-white text-[0.7rem] font-bold">{t.initials}</span>
                  </div>
                  <div>
                    <p className="text-[0.85rem] font-bold text-[#0f0f0f]">{t.name}</p>
                    <p className="text-[0.75rem] text-[#888]">{t.role} · {t.company}</p>
                  </div>
                </div>
              </div>
            </FadeInView>
          ))}
        </div>

      </div>
    </section>
  );
}
