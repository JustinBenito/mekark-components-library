"use client";
import { useEffect, useRef, useState } from "react";

interface Stat {
  raw: number;
  display: string;
  suffix: string;
  label: string;
  sub: string;
}

const stats: Stat[] = [
  { raw: 10, display: "10L+", suffix: "L+", label: "Sq.ft Delivered", sub: "Industrial space frames delivered" },
  { raw: 450, display: "450+", suffix: "+", label: "Projects Across India", sub: "Multi-sector execution expertise" },
  { raw: 40000, display: "40,000+", suffix: "+", label: "Tons Annual Capacity", sub: "In-house manufacturing ecosystem" },
];

function CounterStat({ stat, active }: { stat: Stat; active: boolean }) {
  const [count, setCount] = useState(0);
  const startedRef = useRef(false);

  useEffect(() => {
    if (!active || startedRef.current) return;
    startedRef.current = true;
    const duration = 1800;
    const start = Date.now();
    const tick = () => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * stat.raw));
      if (progress < 1) requestAnimationFrame(tick);
      else setCount(stat.raw);
    };
    requestAnimationFrame(tick);
  }, [active, stat.raw]);

  const formatted =
    stat.raw >= 1000
      ? count.toLocaleString("en-IN") + stat.suffix
      : stat.raw === 10
      ? count + "L+"
      : count + stat.suffix;

  return (
    <div className="text-center px-6">
      <div
        className="text-5xl lg:text-6xl font-bold text-white tabular-nums leading-tight mb-2"
        style={{ animation: active ? "count-in 0.5s cubic-bezier(0.16,1,0.3,1) both" : "none" }}
      >
        {active ? formatted : "0"}
      </div>
      <div className="text-sm font-semibold text-gray-200 mb-1">{stat.label}</div>
      <div className="text-xs text-gray-400">{stat.sub}</div>
    </div>
  );
}

export default function Projects() {
  const [active, setActive] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ob = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          ob.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    ob.observe(el);
    return () => ob.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="relative py-16 sm:py-24 lg:py-32 overflow-hidden"
      style={{ background: "linear-gradient(160deg, #111111 0%, #1a1a1a 100%)" }}
    >
      {/* Red square grid lines */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(196,22,28,0.22) 1px, transparent 1px),
            linear-gradient(90deg, rgba(196,22,28,0.22) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
        }}
      />

      {/* Red diagonal lattice */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(45deg, rgba(196,22,28,0.10) 1px, transparent 1px)`,
          backgroundSize: "64px 64px",
        }}
      />

      {/* Solid red box cluster — top-left */}
      <div aria-hidden className="absolute top-0 left-0 w-72 h-48 pointer-events-none" style={{ background: "rgba(180,20,24,0.22)" }} />
      <div aria-hidden className="absolute top-0 left-0 w-40 h-40 pointer-events-none" style={{ background: "rgba(180,20,24,0.18)" }} />
      <div aria-hidden className="absolute top-14 left-56 w-24 h-24 pointer-events-none" style={{ background: "rgba(180,20,24,0.14)" }} />

      {/* Outlined red squares — top-right */}
      <div aria-hidden className="absolute top-6 right-6 w-32 h-32 border border-red-700/30 pointer-events-none" />
      <div aria-hidden className="absolute top-0 right-32 w-20 h-20 border border-red-700/20 pointer-events-none" />

      {/* Solid red box — bottom-right */}
      <div aria-hidden className="absolute bottom-0 right-0 w-64 h-40 pointer-events-none" style={{ background: "rgba(180,20,24,0.20)" }} />
      <div aria-hidden className="absolute bottom-0 right-0 w-36 h-36 pointer-events-none" style={{ background: "rgba(180,20,24,0.16)" }} />

      {/* Outlined squares — bottom-left */}
      <div aria-hidden className="absolute -bottom-6 left-20 w-28 h-28 border border-red-700/25 pointer-events-none" />
      <div aria-hidden className="absolute bottom-8 left-6 w-14 h-14 border border-red-700/20 pointer-events-none" />

      {/* Thin structural vertical lines */}
      <div aria-hidden className="absolute inset-y-0 left-[33%] w-px pointer-events-none" style={{ background: "rgba(196,22,28,0.20)" }} />
      <div aria-hidden className="absolute inset-y-0 right-[33%] w-px pointer-events-none" style={{ background: "rgba(196,22,28,0.15)" }} />

      {/* Red glow — center top */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-150 h-40 blur-3xl opacity-25 pointer-events-none"
        style={{ background: "radial-gradient(ellipse, #DC2626, transparent)" }}
        aria-hidden
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-xs font-semibold uppercase tracking-widest text-red-400 mb-3">
            Our Track Record
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-white text-balance leading-tight">
            Completed Projects
          </h2>
        </div>

        <div className="grid sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
          {stats.map((s) => (
            <CounterStat key={s.label} stat={s} active={active} />
          ))}
        </div>
      </div>
    </section>
  );
}
