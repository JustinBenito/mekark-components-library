"use client";

import { useEffect, useRef, useState } from "react";
import CountUp from "@/components/new-mekark/CountUp";

const bottomStats = [
  { end: 6,   suffix: " Lakh+", label: "Sq.ft Manufacturing\nFacility" },
  { end: 15,  suffix: "+",      label: "Years of\nExperience" },
  { end: 450, suffix: "+",      label: "Projects\nDelivered" },
  { end: 98,  suffix: "%",      label: "On-Time Delivery\nRate" },
];

export default function InNumbers() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); io.disconnect(); } },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-white overflow-hidden font-manrope"
    >
      <div className="relative">
      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(rgba(0,0,0,0.07) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="max-w-350 mx-auto px-6 md:px-12 py-16 md:py-24">

        {/* ── Header row ── */}
        <div
          className="flex items-end justify-between mb-12 md:mb-16 pb-6 border-b border-[#E8E8E8]"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 600ms ease, transform 600ms ease",
          }}
        >
          <div>
            <div className="flex items-center gap-3 mb-3">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L4 7v6c0 5.5 3.8 10.7 8 12 4.2-1.3 8-6.5 8-12V7l-8-5z" fill="#ED1C24"/>
                <circle cx="12" cy="10" r="3" fill="white"/>
              </svg>
              <span className="text-[24px] md:text-[40px] font-bold tracking-tight bg-linear-to-b from-black to-black/50 bg-clip-text text-transparent">
                Our Engineering in Numbers
              </span>
            </div>
          </div>
          <p className="hidden md:block text-[#BBBBBB] text-[0.8rem] font-medium tracking-wide uppercase text-right leading-relaxed max-w-50">
            Scale that speaks<br />for itself
          </p>
        </div>

        {/* ── Hero number ── */}
        <div
          className="mb-12 md:mb-16"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(32px)",
            transition: "opacity 700ms ease 150ms, transform 700ms ease 150ms",
          }}
        >
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div className="flex-1">
              <div
                className="font-chakra font-black leading-[0.88] tracking-tight text-[#111] tabular-nums"
                style={{ fontSize: "clamp(4.5rem, 12vw, 9.5rem)" }}
              >
                <CountUp end={40} suffix=",000+" flicker />
              </div>
            </div>
            <div className="md:pb-3 md:max-w-[340px]">
              <p className="text-[#ED1C24] text-[0.72rem] font-bold tracking-[0.2em] uppercase mb-2">
                Annual Production Capacity
              </p>
              <p className="text-[#888] text-[0.9rem] md:text-[1rem] leading-relaxed font-light">
                Tons of structural steel manufactured at our fully integrated Tamil Nadu facility.
              </p>
            </div>
          </div>

          {/* Red accent line */}
          <div
            className="mt-8 h-px bg-[#ED1C24]"
            style={{
              width: visible ? "100%" : "0%",
              transition: "width 900ms cubic-bezier(0.4,0,0.2,1) 400ms",
              opacity: 0.5,
            }}
          />
        </div>

        {/* ── Bottom stats row ── */}
        <div className="grid grid-cols-2 md:grid-cols-4">
          {bottomStats.map((stat, i) => (
            <div
              key={i}
              className="relative py-8 md:py-10 px-0 md:px-6 first:pl-0 last:pr-0 group"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(24px)",
                transition: `opacity 600ms ease ${400 + i * 100}ms, transform 600ms ease ${400 + i * 100}ms`,
              }}
            >
              {/* Vertical divider */}
              {i !== 0 && (
                <div
                  className="absolute left-0 top-1/2 -translate-y-1/2 w-px bg-[#E5E5E5] hidden md:block"
                  style={{ height: "60%" }}
                />
              )}
              {/* Mobile top divider on second row */}
              {i >= 2 && (
                <div className="absolute top-0 left-0 right-0 h-px bg-[#E5E5E5] md:hidden" />
              )}

              <div className="font-chakra text-[2.4rem] sm:text-[2.8rem] md:text-[3.2rem] font-bold text-[#111] tabular-nums leading-none tracking-tight mb-3 group-hover:text-[#ED1C24] transition-colors duration-300">
                <CountUp end={stat.end} suffix={stat.suffix} flicker />
              </div>
              <p className="text-[#AAAAAA] text-[0.72rem] md:text-[0.78rem] font-semibold tracking-[0.12em] uppercase leading-snug whitespace-pre-line group-hover:text-[#777] transition-colors duration-300">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

      </div>

      {/* Bottom edge */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-[#E8E8E8]" />
      </div>
    </section>
  );
}
