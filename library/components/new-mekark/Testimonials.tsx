"use client";

import { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    name: "Industrial Client",
    title: "Manufacturing Infrastructure",
    quote: "Mekark delivers engineering clarity that translates directly into execution confidence. Every milestone was hit without compromise.",
    initials: "IC",
    bg: "#ED1C24",
  },
  {
    name: "Project Director",
    title: "Large-Scale Industrial Facility",
    quote: "Their ability to integrate design, fabrication, and construction under one roof is genuinely unmatched in the industry.",
    initials: "PD",
    bg: "#111111",
  },
  {
    name: "Operations Head",
    title: "Industrial EPC Delivery",
    quote: "Reliable timelines and industrial-grade precision make Mekark the only EPC partner we'd trust for critical infrastructure.",
    initials: "OH",
    bg: "#ED1C24",
  },
];

// Final resting rotation for each card
const restRotation = [-3, 1, -2];
// Starting rotation for the entrance spin
const fromRotation = [-18, 14, 20];

function Stars({ triggered, baseDelay }: { triggered: boolean; baseDelay: number }) {
  return (
    <div className="flex gap-1.5 mb-5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="17" height="17" viewBox="0 0 24 24"
          fill="#ED1C24"
          style={{
            opacity: triggered ? 1 : 0,
            transform: triggered ? "scale(1) rotate(0deg)" : "scale(0.1) rotate(-45deg)",
            transition: "opacity 350ms ease-out, transform 450ms cubic-bezier(0.34, 1.56, 0.64, 1)",
            transitionDelay: triggered ? `${baseDelay + i * 85}ms` : "0ms",
          }}
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section className="relative w-full bg-white py-16 md:py-24 overflow-hidden font-manrope">
      <div className="max-w-350 mx-auto w-full px-4 md:px-12 relative z-10">

        {/* Heading */}
        <div className="flex items-center gap-3 mb-16 md:mb-20">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" fill="#ED1C24"/>
            <path d="M8 16l3-5 5-3-3 5-5 3z" fill="white"/>
          </svg>
          <h2 className="text-[20px] md:text-[24px] font-bold tracking-tight bg-linear-to-b from-[#222222] to-[#777777] bg-clip-text text-transparent pb-1">
            See What Our Customers Say
          </h2>
        </div>

        {/* Cards */}
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 lg:gap-10 py-8">
          {testimonials.map((t, idx) => {
            const cardDelay = idx * 200;
            const starDelay = cardDelay + 320;
            return (
              <div
                key={idx}
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible
                    ? `rotate(${restRotation[idx]}deg) translateY(0px) scale(1)`
                    : `rotate(${fromRotation[idx]}deg) translateY(70px) scale(0.85)`,
                  transition: "opacity 650ms cubic-bezier(0.34, 1.56, 0.64, 1), transform 750ms cubic-bezier(0.34, 1.56, 0.64, 1)",
                  transitionDelay: `${cardDelay}ms`,
                }}
                className="relative z-10 bg-white rounded-3xl p-7 flex flex-col
                  shadow-[0_6px_30px_rgba(0,0,0,0.08),0_0_0_1px_rgba(0,0,0,0.055)]
                  hover:shadow-[0_14px_44px_rgba(0,0,0,0.12),0_0_0_1px_rgba(0,0,0,0.08)]
                  hover:-translate-y-1 transition-shadow duration-300"
              >
                {/* Large quote mark */}
                <span className="absolute top-5 right-6 text-[5rem] leading-none font-black text-[#F0F0F0] select-none pointer-events-none">
                  &ldquo;
                </span>

                {/* Stars */}
                <Stars triggered={visible} baseDelay={starDelay} />

                {/* Quote */}
                <p className="relative text-[#333] text-[0.97rem] md:text-[1rem] leading-[1.78] font-medium flex-1 mb-7">
                  &ldquo;{t.quote}&rdquo;
                </p>

                {/* Divider */}
                <div className="h-px w-full bg-[#EFEFEF] mb-5" />

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white text-[0.75rem] font-black shrink-0 select-none"
                    style={{ background: t.bg }}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-[#111] text-[0.87rem] font-bold leading-tight">{t.name}</p>
                    <p className="text-[#AAA] text-[0.76rem] leading-tight mt-0.5">{t.title}</p>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
