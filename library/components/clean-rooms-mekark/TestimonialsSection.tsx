"use client";
import { motion } from "motion/react";

const TESTIMONIALS = [
  {
    initials: "RK",
    name: "Rajesh Kumar",
    title: "CEO · Pharmaceutical Manufacturer, Hyderabad",
    quote: "We had been through two WHO pre-qualification cycles without clearing. After Mekark rebuilt our Grade B and Grade C zones, we cleared in the first inspection. Their validation dossier was specifically acknowledged by the auditors.",
  },
  {
    initials: "PS",
    name: "Priya Suresh",
    title: "VP Operations · API Manufacturer, Chennai",
    quote: "Our CFO asked a simple question before we signed — 'What happens if we fail the audit?' Mekark's answer was the only one with a written contractual response. Eighteen months later, we passed USFDA inspection with zero clean room observations.",
  },
  {
    initials: "AM",
    name: "Arvind Menon",
    title: "Managing Director · Medical Device Manufacturer, Bengaluru",
    quote: "Two contractors before Mekark — one failed on schedule, one on regulatory compliance. Mekark walked in, mapped the regulatory risk we had not been told about, and delivered the commissioned facility eleven days ahead of the revised deadline.",
  },
  {
    initials: "VN",
    name: "Vikram Nair",
    title: "Director of Facilities · Electronics Manufacturer, Pune",
    quote: "We needed ISO Class 4 with ESD controls and chemical exhaust management. Every other proposal we received was a generic clean room spec with our name on it. Mekark submitted a technical document that showed they had actually read our process brief.",
  },
  {
    initials: "SK",
    name: "Suresh Krishnaswamy",
    title: "Head of Quality · CRO, Coimbatore",
    quote: "Twenty-six months post-handover. We still have a scheduled maintenance calendar. We still have a named Mekark engineer we can call. That is not what most contractors promise, let alone deliver. It changed how we think about who we work with.",
  },
];

function Stars() {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#F59E0B" aria-hidden="true">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

function Card({ t, delay, large = false }: { t: typeof TESTIMONIALS[number]; delay: number; large?: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55, delay, ease: [0.25, 1, 0.5, 1] }}
      className="flex flex-col gap-5 rounded-2xl p-7 border border-white/8 bg-white/5"
    >
      <div className="flex items-start justify-between gap-4">
        <Stars />
        <span className="text-white/10 font-serif text-[3.5rem] leading-none select-none -mt-2" aria-hidden="true">&ldquo;</span>
      </div>

      <blockquote className={`text-white/75 leading-[1.82] text-pretty flex-1 ${large ? "text-[1rem]" : "text-[0.92rem]"}`}>
        {t.quote}
      </blockquote>

      <div className="flex items-center gap-3 pt-4 border-t border-white/8">
        <div className="w-9 h-9 rounded-full bg-[#C4161C] flex items-center justify-center shrink-0">
          <span className="text-white font-extrabold text-[0.72rem]">{t.initials}</span>
        </div>
        <div>
          <p className="font-bold text-white text-[0.88rem]">{t.name}</p>
          <p className="text-white/40 text-[0.78rem] leading-snug">{t.title}</p>
        </div>
      </div>
    </motion.div>
  );
}

export function TestimonialsSection() {
  return (
    <section className="bg-[#111111] py-20 md:py-28">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12"
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="block h-px w-6 bg-[#C4161C]" />
              <p className="text-[#C4161C] font-semibold text-[0.75rem] uppercase tracking-[0.12em]">
                What Our Clients Say
              </p>
            </div>
            <h2
              className="font-bold text-white text-balance leading-[1.1]"
              style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}
            >
              Decisions Come From Boards.<br className="hidden sm:block" />
              References Come From Here.
            </h2>
          </div>
          <div className="shrink-0 flex items-center gap-3 pb-1">
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#F59E0B" aria-hidden="true">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
            <span className="text-white font-bold text-[0.9rem] tabular-nums">4.8</span>
            <span className="text-white/35 text-[0.82rem]">across 450+ projects</span>
          </div>
        </motion.div>

        {/* Row 1: 2 wide cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <Card t={TESTIMONIALS[0]} delay={0}    large />
          <Card t={TESTIMONIALS[1]} delay={0.08} large />
        </div>

        {/* Row 2: 3 regular cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card t={TESTIMONIALS[2]} delay={0.06} />
          <Card t={TESTIMONIALS[3]} delay={0.12} />
          <Card t={TESTIMONIALS[4]} delay={0.18} />
        </div>

      </div>
    </section>
  );
}

export default TestimonialsSection;
