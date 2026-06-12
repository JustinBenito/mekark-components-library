"use client";
import { useEffect, useRef, useState } from "react";

const steps = [
  {
    num: "01",
    title: "Requirement Analysis",
    desc: "Understanding project scope, load conditions, span requirements, and application context.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden>
        <circle cx="10" cy="10" r="6" stroke="white" strokeWidth="1.5" />
        <path d="M14.5 14.5L18 18" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M8 10H12M10 8V12" stroke="white" strokeWidth="1.25" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Structural Design & Engineering",
    desc: "Advanced 3D modeling and simulation for structural precision and load optimization.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden>
        <path d="M4 18L8 14L11 17L16 10L20 14" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="3" y="3" width="16" height="12" rx="1.5" stroke="white" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Fabrication",
    desc: "High-quality production using automated CNC machinery in our in-house manufacturing facility.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden>
        <circle cx="11" cy="11" r="3" stroke="white" strokeWidth="1.5" />
        <path d="M11 4V6M11 16V18M4 11H6M16 11H18M6.34 6.34L7.76 7.76M14.24 14.24L15.66 15.66M6.34 15.66L7.76 14.24M14.24 7.76L15.66 6.34" stroke="white" strokeWidth="1.25" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    num: "04",
    title: "Quality Inspection",
    desc: "Rigorous quality checks at every production stage ensuring compliance with IS/international standards.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden>
        <path d="M11 3L13.5 8.5L19 9.27L15 13.14L16.18 19L11 16.23L5.82 19L7 13.14L3 9.27L8.5 8.5L11 3Z" stroke="white" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    num: "05",
    title: "Installation & Execution",
    desc: "On-site assembly by expert teams with real-time project supervision and safety protocols.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden>
        <path d="M3 11L8 16L19 5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    num: "06",
    title: "Project Handover",
    desc: "Timely completion with full documentation, performance assurance, and post-installation support.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden>
        <rect x="5" y="3" width="12" height="16" rx="1.5" stroke="white" strokeWidth="1.5" />
        <path d="M8 8H14M8 11H14M8 14H11" stroke="white" strokeWidth="1.25" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function Process() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const activeIndex = Math.min(steps.length - 1, Math.floor(progress * steps.length));

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const track = trackRef.current;
    if (!wrapper || !track) return;

    function recalc() {
      if (!wrapper || !track) return;
      const overflow = Math.max(0, track.scrollWidth - window.innerWidth);
      wrapper.style.height = `calc(100vh + ${overflow}px)`;
    }

    function onScroll() {
      if (!wrapper || !track) return;
      const scrolled = Math.max(0, -wrapper.getBoundingClientRect().top);
      const scrollable = wrapper.offsetHeight - window.innerHeight;
      if (scrollable <= 0) return;
      const p = Math.min(1, scrolled / scrollable);
      setProgress(p);
      const overflow = Math.max(0, track.scrollWidth - window.innerWidth);
      track.style.transform = `translateX(${-p * overflow}px)`;
    }

    const handleResize = () => { recalc(); onScroll(); };

    recalc();
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section id="process" className="bg-white">

      {/* ── Desktop: horizontal scroll-jacked timeline ── */}
      <div ref={wrapperRef} className="hidden md:block">
        <div className="sticky top-0 h-screen overflow-hidden">

          {/* Horizontal spine */}
          <div
            className="absolute inset-x-0 h-px bg-red-100 pointer-events-none z-0"
            style={{ top: "42%" }}
            aria-hidden
          />

          {/* Progress bar */}
          <div className="absolute bottom-0 inset-x-0 h-[3px] bg-gray-100 z-20" aria-hidden>
            <div
              className="h-full bg-red-600 origin-left"
              style={{ width: `${progress * 100}%`, transition: "width 60ms linear" }}
            />
          </div>

          {/* Horizontal track */}
          <div
            ref={trackRef}
            className="flex h-full items-stretch"
            style={{ willChange: "transform" }}
          >
            {/* ── Intro panel ── */}
            <div className="shrink-0 w-[400px] flex flex-col justify-center px-14 pr-10 border-r border-gray-100 z-10 bg-white">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-red-100 bg-red-50 text-red-600 text-xs font-semibold uppercase tracking-wider mb-6 self-start">
                Our Process
              </div>
              <h2 className="text-4xl font-bold text-gray-900 leading-tight mb-4">
                From Concept to{" "}
                <span className="text-red-600">Completion</span>
              </h2>
              <p className="text-base text-gray-500 leading-relaxed text-pretty mb-8">
                A structured six-stage process ensuring every project is delivered with precision, on time, and within specification.
              </p>
            </div>

            {/* ── Step cards ── */}
            {steps.map((step, i) => (
              <div key={step.num} className="shrink-0 w-72 h-full relative">

                {/* Ghost step number (decorative) */}
                <span
                  className="absolute font-black leading-none tabular-nums select-none pointer-events-none transition-colors duration-300"
                  style={{
                    top: "calc(42% - 160px)",
                    left: "44px",
                    fontSize: "6rem",
                    color: i === activeIndex ? "rgba(160,10,14,0.55)" : "rgba(0,0,0,0.04)",
                  }}
                  aria-hidden
                >
                  {step.num}
                </span>

                {/* Node — sits on the spine */}
                <div
                  className="absolute z-10 w-14 h-14 rounded-full bg-red-600 ring-[5px] ring-white flex items-center justify-center"
                  style={{
                    top: "calc(42% - 28px)",
                    left: "44px",
                    boxShadow: "0 0 24px rgba(196,22,28,0.28)",
                  }}
                >
                  {step.icon}
                </div>

                {/* Content below node */}
                <div
                  className="absolute"
                  style={{ top: "calc(42% + 48px)", left: "44px", right: "20px" }}
                >
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-red-500 mb-3 tabular-nums">
                    Step {step.num}
                  </p>
                  <h3 className="text-[15px] font-bold text-gray-900 leading-snug mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}

            {/* End spacer */}
            <div className="shrink-0 w-40" />
          </div>
        </div>
      </div>

      {/* ── Mobile: vertical timeline ── */}
      <div className="md:hidden py-16 px-6 bg-white">
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-red-100 bg-red-50 text-red-600 text-xs font-semibold uppercase tracking-wider mb-4">
            Our Process
          </div>
          <h2 className="text-3xl font-bold text-gray-900 leading-tight mb-3">
            From Concept to <span className="text-red-600">Completion</span>
          </h2>
          <p className="text-base text-gray-500 leading-relaxed">
            A structured six-stage process delivering precision on time, every time.
          </p>
        </div>

        <div className="relative">
          <div
            className="absolute left-5 top-0 bottom-0 w-px"
            style={{ background: "linear-gradient(to bottom, transparent, #C4161C 6%, #C4161C 94%, transparent)" }}
            aria-hidden
          />
          <div className="space-y-6">
            {steps.map((step) => (
              <div key={step.num} className="flex gap-5 items-start">
                <div
                  className="shrink-0 w-10 h-10 rounded-full bg-red-600 flex items-center justify-center z-10 relative ring-[5px] ring-white"
                  style={{ boxShadow: "0 0 16px rgba(196,22,28,0.22)" }}
                >
                  {step.icon}
                </div>
                <div className="flex-1 min-w-0 pb-4">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-red-500 mb-1.5 tabular-nums">
                    Step {step.num}
                  </p>
                  <h3 className="text-[15px] font-bold text-gray-900 leading-snug mb-1.5">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
