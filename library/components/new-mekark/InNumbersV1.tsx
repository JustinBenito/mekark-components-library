"use client";

import CountUp from "@/components/new-mekark/CountUp";

const gridStats = [
  { end: 6,   suffix: " Lakh+", label: "Sq.ft Manufacturing\nFacility" },
  { end: 98,  suffix: "%",      label: "On-Time Delivery\nPerformance" },
  { end: 15,  suffix: "+",      label: "Years of\nExperience" },
  { end: 450, suffix: "+",      label: "Projects\nDelivered" },
];

export default function InNumbers() {
  return (
    <section className="relative w-full bg-black py-14 md:py-20 px-4 md:px-12 font-manrope overflow-hidden">
      <div className="max-w-350 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-4 md:gap-5 items-stretch">

          {/* ── Left column: heading + hero stat ── */}
          <div className="flex flex-col gap-4">

            {/* Heading */}
            <div className="px-1">
              <h2 className="text-white text-[2rem] sm:text-[2.4rem] md:text-[2.8rem] font-black tracking-tight leading-[1.08]">
                Our Engineering
              </h2>
              <p className="text-[#ED1C24] text-[2rem] sm:text-[2.4rem] md:text-[2.8rem] font-black tracking-tight leading-[1.08]">
                in Numbers.
              </p>
            </div>

            {/* Hero stat card */}
            <div className="relative flex-1 overflow-hidden rounded-3xl bg-[#ED1C24] p-8 md:p-10 flex flex-col justify-between min-h-[200px]">
              {/* Glow */}
              <div className="absolute inset-0 pointer-events-none"
                style={{ backgroundImage: "radial-gradient(ellipse at 85% 15%, rgba(255,255,255,0.18) 0%, transparent 55%)" }} />
              {/* Grid lines */}
              <div className="absolute inset-0 opacity-[0.06] pointer-events-none"
                style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />

              <p className="relative text-white/60 text-[0.68rem] font-black uppercase tracking-[0.22em]">
                Annual Production Capacity
              </p>

              <div className="relative">
                <div className="text-white text-[3.8rem] sm:text-[4.5rem] md:text-[5.5rem] font-black leading-none tabular-nums tracking-tight">
                  <CountUp end={40} suffix=",000+" flicker />
                </div>
                <p className="text-white/65 text-[0.85rem] font-light mt-2 leading-snug">
                  Tons of steel from our fully integrated facility
                </p>
              </div>
            </div>
          </div>

          {/* ── Right column: 2×2 grid ── */}
          <div className="grid grid-cols-2 gap-4 md:gap-5">
            {gridStats.map((stat, i) => (
              <div
                key={i}
                className="group rounded-3xl bg-[#111111] border border-white/[0.07] p-6 md:p-7 flex flex-col justify-between hover:border-[#ED1C24]/35 hover:bg-[#161616] transition-[border-color,background-color] duration-300"
              >
                <div className="text-[#ED1C24] text-[1.9rem] sm:text-[2.2rem] md:text-[2.6rem] font-black tabular-nums leading-none tracking-tight">
                  <CountUp end={stat.end} suffix={stat.suffix} flicker />
                </div>
                <p className="text-[#5a5a5a] group-hover:text-[#777] text-[0.78rem] md:text-[0.82rem] font-medium leading-snug mt-4 whitespace-pre-line transition-colors duration-300">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
