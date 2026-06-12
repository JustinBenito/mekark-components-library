"use client";

import { useEffect, useRef, useState } from "react";
import CountUp from "@/components/new-mekark/CountUp";

const items: Array<{ label: string; text?: string; end?: number; suffix?: string }> = [
  { end: 450, suffix: "+", label: "Industrial Projects Delivered" },
  { end: 15, suffix: "+", label: "Years Industry Experience" },
  { end: 98, suffix: "%", label: "On-Time Delivery Performance" },
  { end: 40, suffix: ",000", label: "Tons Annual Capacity" },
  { end: 6, suffix: " Lakh+", label: "Sq.ft Manufacturing Facility" },
  { text: "Zero", label: "Compromise Quality Standard" },
];

export default function Achievements() {
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
    <section className="w-full bg-[#0A0A0A] px-4 py-16 sm:px-6 md:px-12 md:py-24 lg:px-24 overflow-hidden font-manrope">
      <div className="relative mx-auto max-w-350">

        <div className="flex items-center gap-3 mb-10 md:mb-16">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M12 2L4 7v6c0 5.5 3.8 10.7 8 12 4.2-1.3 8-6.5 8-12V7l-8-5z" fill="#ED1C24"/>
            <circle cx="12" cy="10" r="3" fill="white"/>
          </svg>
          <h2 className="text-[24px] md:text-[40px] font-bold tracking-tight bg-linear-to-b from-white to-white/50 bg-clip-text text-transparent">
            Achievements
          </h2>
        </div>

        <div ref={ref} className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, idx) => (
            <div
              key={item.label}
              className="border border-white/10 bg-white/4 p-6 md:p-8 relative z-10 transition-[transform,opacity] duration-700 ease-out"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "none" : "translateY(24px)",
                transitionDelay: visible ? `${idx * 90}ms` : "0ms",
              }}
            >
              <span className="block text-[2.5rem] md:text-[3.6rem] leading-none font-black tracking-tight text-white tabular-nums">
                {item.text
                  ? item.text
                  : <CountUp end={item.end!} suffix={item.suffix!} duration={1800} flicker />
                }
              </span>
              <span className="mt-4 block text-[0.88rem] font-bold uppercase tracking-[0.16em] text-[#ED1C24]">
                {item.label}
              </span>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-[1.1rem] md:text-[1.45rem] font-semibold text-white">
          Measured by execution. Proven by results.
        </p>
      </div>
    </section>
  );
}
