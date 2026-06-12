"use client";

const mekarkContact = { phoneHref: "tel:+919876543210", phoneLabel: "+91 98765 43210", emailHref: "mailto:info@mekark.com", emailLabel: "info@mekark.com", whatsappUrl: "https://wa.me/919876543210", websiteUrl: "https://www.mekark.com" };

import { motion } from "motion/react";
import FadeInView from "@/components/multi-storey-steel-building-mekark/FadeInView";


const ITEMS = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C4161C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
      </svg>
    ),
    heading: "Precision Fabrication Tolerances",
    body: "CNC-driven cutting and drilling holds tolerances of ±1mm — ensuring perfect field fit-up and eliminating costly site rework during erection.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C4161C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    heading: "Blast-Cleaned & Epoxy-Primed",
    body: "All structural members are shot-blast cleaned to SA 2.5 and epoxy-primed before dispatch — doubling corrosion resistance in industrial environments.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C4161C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" /><line x1="3" y1="9" x2="21" y2="9" /><line x1="9" y1="21" x2="9" y2="9" />
      </svg>
    ),
    heading: "Transparent Progress Reporting",
    body: "Every 72 hours, you receive a structured site progress report with photos, completion percentages, and upcoming milestone dates. No guesswork, no surprises.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C4161C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
    heading: "NABL-Tested Steel Material",
    body: "We procure structural steel only from JSW, SAIL, and TATA with NABL test certificates — no compromises on mill certificates or chemical composition reports.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C4161C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    heading: "Pan-India Logistics Network",
    body: "Mekark's dedicated logistics team handles oversized load transport permits, state border clearances, and last-mile delivery to remote sites across 18 states.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C4161C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" />
      </svg>
    ),
    heading: "Complete Documentation Package",
    body: "GA drawings, fabrication drawings, as-built drawings, QC reports, weld inspection certificates, load test reports, and handover documents — delivered as a complete project dossier.",
  },
];

export default function Guarantees() {
  return (
    <section className="relative py-20 md:py-28 bg-[#C4161C] overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            radial-gradient(circle, rgba(255,255,255,0.2) 1.5px, transparent 1.5px),
            linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px, 80px 80px, 80px 80px",
        }}
      />

      {/* Vignette */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/20 to-transparent pointer-events-none z-[2]" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/15 to-transparent pointer-events-none z-[2]" />
      {/* Structural frame watermark */}
      <div className="absolute right-0 top-0 bottom-0 w-[40%] pointer-events-none overflow-hidden opacity-[0.07]">
        <svg viewBox="0 0 280 680" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="0" y1="0" x2="0" y2="680" />
          <line x1="140" y1="0" x2="140" y2="680" />
          <line x1="280" y1="0" x2="280" y2="680" />
          <line x1="0" y1="0" x2="280" y2="0" /><line x1="0" y1="100" x2="280" y2="100" />
          <line x1="0" y1="200" x2="280" y2="200" /><line x1="0" y1="300" x2="280" y2="300" />
          <line x1="0" y1="400" x2="280" y2="400" /><line x1="0" y1="500" x2="280" y2="500" />
          <line x1="0" y1="600" x2="280" y2="600" /><line x1="0" y1="680" x2="280" y2="680" />
          <line x1="0" y1="0" x2="140" y2="100" /><line x1="140" y1="0" x2="0" y2="100" />
          <line x1="0" y1="200" x2="140" y2="300" /><line x1="140" y1="200" x2="0" y2="300" />
          <line x1="0" y1="400" x2="140" y2="500" /><line x1="140" y1="400" x2="0" y2="500" />
          <line x1="0" y1="600" x2="140" y2="680" /><line x1="140" y1="600" x2="0" y2="680" />
          <line x1="140" y1="100" x2="280" y2="200" /><line x1="280" y1="100" x2="140" y2="200" />
          <line x1="140" y1="300" x2="280" y2="400" /><line x1="280" y1="300" x2="140" y2="400" />
          <line x1="140" y1="500" x2="280" y2="600" /><line x1="280" y1="500" x2="140" y2="600" />
          {[0, 100, 200, 300, 400, 500, 600, 680].flatMap(y =>
            [0, 140, 280].map(x => (
              <circle key={`${x}-${y}`} cx={x} cy={y} r="6" fill="white" stroke="none" />
            ))
          )}
        </svg>
      </div>

      <div className="relative z-10 max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
        <FadeInView>
          <p className="text-[0.72rem] font-extrabold uppercase tracking-[0.25em] text-white/70 mb-3">
            Benefits of Choosing Mekark
          </p>
        </FadeInView>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <FadeInView delay={80}>
            <h2 className="text-[2.2rem] sm:text-[2.7rem] font-extrabold text-white leading-[1.1] tracking-[-0.025em] max-w-[500px]">
              Every Project Comes<br />
              <span className="text-white">with These Guarantees</span>
            </h2>
          </FadeInView>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
          {ITEMS.map((item, i) => (
            <FadeInView key={item.heading} delay={i * 70}>
              <motion.div
                className="p-5 rounded-2xl bg-white shadow-[0_2px_12px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.15)] transition-shadow duration-200 h-full"
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
              >
                <div className="w-10 h-10 rounded-xl bg-[rgba(196,22,28,0.08)] flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="font-bold text-black text-[0.95rem] mb-2 leading-snug">{item.heading}</h3>
                <p className="text-black/55 text-[0.82rem] leading-relaxed">{item.body}</p>
              </motion.div>
            </FadeInView>
          ))}
        </div>

        {/* Bottom CTA card */}
        <FadeInView delay={100}>
          <motion.div
            className="rounded-2xl bg-white p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-[0_2px_12px_rgba(0,0,0,0.12)]"
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.99 }}
            transition={{ type: "spring", stiffness: 260, damping: 24 }}
          >
            <div className="max-w-[540px]">
              <h3 className="text-[1.4rem] font-extrabold text-black mb-2">
                Ready to Build with Mekark?
              </h3>
              <p className="text-black/55 text-[0.9rem] leading-relaxed mb-4">
                Join 500+ businesses across India who chose Mekark for their most critical steel
                building projects. Get your free structural feasibility consultation today.
              </p>
              <div className="flex flex-col sm:flex-row gap-2 text-[0.82rem] text-black/50">
                {[
                  "Free 60-min structural consultation",
                  "Preliminary cost estimate in 48 hours",
                  "No-obligation site visit",
                  "Dedicated engineer assigned",
                ].map(item => (
                  <div key={item} className="flex items-center gap-1.5">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#C4161C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <a
                href="#contact-form"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md bg-[#C4161C] text-white font-bold text-[0.95rem] transition-[background-color,transform] duration-150 hover:bg-[#A31217] active:scale-[0.96]"
              >
                Get Free Consultation
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
              <a
                href={mekarkContact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md border border-black/10 text-black/70 font-semibold text-[0.95rem] transition-[border-color,background-color] duration-150 hover:border-black/20 hover:bg-black/[0.02]"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#25D366">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp Quote
              </a>
            </div>
          </motion.div>
        </FadeInView>
      </div>
    </section>
  );
}
