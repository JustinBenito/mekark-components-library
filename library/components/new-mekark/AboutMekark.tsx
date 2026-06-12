"use client";

import CountUp from "@/components/new-mekark/CountUp";
import FadeInView from "@/components/new-mekark/FadeInView";

export default function AboutMekark() {
  const stats = [
    { end: 15, suffix: "+", label: "Years Expertise" },
    { end: 450, suffix: "+", label: "Projects Delivered" },
    { end: 98, suffix: "%", label: "On-Time Execution" },
  ];

  return (
    <section className="w-full bg-white py-16 md:py-28 px-4 sm:px-6 md:px-12 lg:px-24 overflow-hidden font-manrope">
      <div className="max-w-350 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">

          {/* Left: Content */}
          <FadeInView>
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" fill="#ED1C24"/>
                  <path d="M8 16l3-5 5-3-3 5-5 3z" fill="white"/>
                </svg>
                <span className="text-[#ED1C24] text-[12px] md:text-[14px] font-bold tracking-widest uppercase">
                  About Mekark
                </span>
              </div>

              <h2 className="text-[1.8rem] sm:text-[2.2rem] md:text-[2.8rem] font-bold tracking-tight leading-[1.1] text-[#111]">
                Engineering Depth.{" "}
                <span className="bg-gradient-to-b from-[#ED1C24] to-[#b01218] bg-clip-text text-transparent">
                  Execution Certainty.
                </span>{" "}
                Industrial Focus.
              </h2>

              <p className="text-[#555] text-[1rem] md:text-[1.1rem] leading-[1.75] max-w-xl">
                Mekark operates at the intersection of structural engineering, industrial design, and large-scale execution.
              </p>
              <p className="text-[#555] text-[1rem] md:text-[1.1rem] leading-[1.75] max-w-xl">
                With over 15 years of experience and 450+ delivered projects, we specialise in industrial environments that demand precision, scalability, and operational intelligence.
              </p>
              <p className="text-[#888] text-[0.95rem] md:text-[1rem] leading-[1.75] max-w-xl italic border-l-[3px] border-[#ED1C24] pl-4">
                We design not just for construction, but for lifecycle performance.
              </p>
            </div>
          </FadeInView>

          {/* Right: Floating Stats */}
          <div className="flex flex-col gap-5">
            {stats.map((s, i) => (
              <FadeInView key={i} delay={i * 100}>
                <div
                  className="flex items-center gap-6 p-6 md:p-8 rounded-2xl border border-[#E0E0E0]/60 bg-white/50 relative z-10 hover:-translate-y-0.5 transition-transform duration-200"
                  style={{ boxShadow: "0px 4px 0px 0px #ED1C24" }}
                >
                  <span className="text-[#ED1C24] text-[2.5rem] md:text-[3.5rem] font-bold leading-none tracking-tight shrink-0 tabular-nums">
                    <CountUp end={s.end} suffix={s.suffix} duration={1800} />
                  </span>
                  <div className="w-px h-10 bg-[#E5E5E5] shrink-0" />
                  <span className="text-[#555] text-[1rem] md:text-[1.1rem] font-medium leading-snug">
                    {s.label}
                  </span>
                </div>
              </FadeInView>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
