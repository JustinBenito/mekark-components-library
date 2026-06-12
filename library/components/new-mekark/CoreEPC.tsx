"use client";

import { useEffect, useRef, useState } from "react";

const cards = [
  {
    title: "Industrial Master Planning",
    desc: "Strategic site optimisation and logistical flow design for high-performance industrial environments.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#ED1C24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>
      </svg>
    ),
  },
  {
    title: "Structural Engineering & Analysis",
    desc: "Advanced STAAD.Pro and Tekla-driven modelling for precision load analysis and clash-free execution.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#ED1C24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 20h20M6 20V10l6-6 6 6v10"/><path d="M10 20v-5h4v5"/>
      </svg>
    ),
  },
  {
    title: "Pre-Engineered Buildings",
    desc: "Custom-engineered PEB structures designed for speed, structural strength, and long-term scalability.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#ED1C24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="8" width="8" height="10" rx="1"/><path d="M3 11h8"/><path d="M11 8l7-5v12"/><circle cx="18" cy="18" r="2"/>
      </svg>
    ),
  },
  {
    title: "Heavy Steel Fabrication",
    desc: "40,000 tons annual production capacity through CNC-automated, precision-controlled fabrication systems.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#ED1C24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
      </svg>
    ),
  },
  {
    title: "Turnkey EPC Execution",
    desc: "End-to-end project ownership from design and procurement through fabrication and site commissioning.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#ED1C24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/>
      </svg>
    ),
  },
  {
    title: "Project Delivery Management",
    desc: "Single-point accountability with dedicated project managers ensuring timeline and quality certainty.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#ED1C24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
      </svg>
    ),
  },
];

export default function CoreEPC() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="expertise" className="w-full scroll-mt-28 bg-white py-10 md:py-16 overflow-hidden font-manrope">
      <div className="max-w-350 mx-auto w-full px-4 md:px-12 relative z-10">

        <div className="flex items-center gap-3 mb-8 md:mb-16">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M12 2L4 7v6c0 5.5 3.8 10.7 8 12 4.2-1.3 8-6.5 8-12V7l-8-5z" fill="#ED1C24"/>
            <circle cx="12" cy="10" r="3" fill="white"/>
          </svg>
          <h2 className="text-[24px] md:text-[40px] font-bold tracking-tight bg-linear-to-b from-black to-black/50 bg-clip-text text-transparent">
            Core EPC Capabilities
          </h2>
        </div>

        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full pb-4">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="w-full bg-white border border-[#E0E0E0] rounded-2xl p-6 flex flex-col relative z-10 hover:-translate-y-1 transition-[transform,opacity] duration-700 ease-out"
              style={{
                boxShadow: "0px 6px 0px 0px #ED1C24",
                marginBottom: "6px",
                opacity: visible ? 1 : 0,
                transform: visible ? "none" : "translateY(28px)",
                transitionDelay: visible ? `${idx * 80}ms` : "0ms",
              }}
            >
              <div className="mb-8 md:mb-12">{card.icon}</div>
              <h4 className="text-[#111] font-bold text-[1.2rem] mb-2">{card.title}</h4>
              <p className="text-[#888] text-[0.95rem] leading-normal">{card.desc}</p>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-[#888] text-[0.95rem] leading-relaxed">
          Integrated execution from concept to commissioning under one engineering framework.
        </p>

      </div>
    </section>
  );
}
