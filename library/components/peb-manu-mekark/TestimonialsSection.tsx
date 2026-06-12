"use client";
import { motion } from "motion/react";

const TESTIMONIALS = [
  {
    quote:
      "We needed a 1,00,000 sq.ft. warehouse operational within 5 months — an almost impossible timeline with conventional construction. Mekark's team delivered the complete structure in 4 months, 3 weeks. The quality of the steel fabrication and the professionalism of the site team was outstanding. We have already awarded them our second project.",
    name: "VP Operations",
    company: "Leading 3PL Company, Bengaluru",
    sector: "Logistics",
  },
  {
    quote:
      "As a Tier-1 automotive supplier with stringent quality and timeline requirements, we cannot afford a contractor who makes excuses. Mekark delivered our 80,000 sq.ft. assembly plant with a 10-tonne overhead crane system on schedule and within the approved budget.",
    name: "Director Projects",
    company: "Auto Component Manufacturer, Chennai",
    sector: "Automotive",
  },
  {
    quote:
      "The turnkey approach of Mekark saved us enormous time and coordination effort. From foundation to handover, they managed civil, structural, roofing, and all finishing works under a single contract. Zero snag list items at completion.",
    name: "Head of Infrastructure",
    company: "Large FMCG Brand, Pune",
    sector: "FMCG",
  },
  {
    quote:
      "I was building my first factory and had no idea where to start. The Mekark team held my hand through the entire process. The cost was transparent, the quality is excellent, and my 25,000 sq.ft. factory was delivered in 75 days.",
    name: "Managing Director",
    company: "Precision Engineering Startup, Coimbatore",
    sector: "SME",
  },
  {
    quote:
      "We needed a PEB contractor who could build 20 industrial shed units simultaneously in our SEZ with consistent quality. Mekark managed the entire 2,00,000 sq.ft. project and delivered all phases on the agreed schedule.",
    name: "CEO",
    company: "Industrial Park Developer, Tamil Nadu",
    sector: "Real Estate",
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5 mb-4">
      {[...Array(5)].map((_, i) => (
        <svg key={i} width="13" height="13" viewBox="0 0 24 24" fill="#C4161C" aria-hidden="true">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

function QuoteMark() {
  return (
    <svg width="28" height="22" viewBox="0 0 36 28" fill="currentColor" className="text-[#C4161C]/15 mb-3" aria-hidden="true">
      <path d="M0 28V17C0 7.3 4 2.3 12 0v4C9.3 4.7 8 6.7 8 10h5v18H0zm20 0V17c0-9.7 4-14.7 12-17v4c-2.7.7-4 2.7-4 6h5v18H20z" />
    </svg>
  );
}

export function TestimonialsSection() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="max-w-350 mx-auto px-6 md:px-12 lg:px-16">

        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
          className="mb-12"
        >
          <div className="flex items-center gap-2.5 mb-3">
            <div className="h-px w-8 bg-[#C4161C] shrink-0" />
            <p className="text-[#C4161C] font-bold uppercase text-[0.75rem]">Client Testimonials</p>
          </div>
          <h2 className="font-bold text-gray-900 text-balance" style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)" }}>
            Real Words from Real Clients — Why India&apos;s Industries Trust Mekark
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08, ease: [0.25, 1, 0.5, 1] }}
              className="bg-white rounded-2xl p-6 flex flex-col transition-[box-shadow,transform] duration-200 hover:-translate-y-0.5"
              style={{ boxShadow: "var(--shadow-border)" }}
              onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "var(--shadow-border-hover)")}
              onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "var(--shadow-border)")}
            >
              <Stars />
              <QuoteMark />

              <p className="text-gray-700 text-[0.9rem] leading-[1.8] text-pretty flex-1">
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="mt-5 pt-4 border-t border-black/6 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#C4161C]/8 flex items-center justify-center shrink-0">
                  <span className="text-[#C4161C] font-bold text-[0.88rem]">{t.name.charAt(0)}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-bold text-gray-900 text-[0.88rem] leading-none">{t.name}</p>
                  <p className="text-gray-400 text-[0.76rem] mt-1 truncate">{t.company}</p>
                </div>
                <span className="shrink-0 text-[0.63rem] font-bold tracking-widest uppercase text-[#C4161C] bg-[#C4161C]/[0.07] px-2.5 py-1 rounded-md">
                  {t.sector}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
