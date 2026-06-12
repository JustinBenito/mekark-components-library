"use client";
import { useEffect } from "react";

const STATS = [
  { prefix: "30–", count: 40, suffix: "%", decimals: 0, label: "Faster Delivery", sub: "vs. traditional construction" },
  { prefix: "15–", count: 20, suffix: "%", decimals: 0, label: "Cost Savings", sub: "through strategic sourcing" },
  { prefix: "20–", count: 25, suffix: "%", decimals: 0, label: "Productivity Gain", sub: "with optimized layouts" },
  { prefix: "", count: 98.9, suffix: "%", decimals: 1, label: "Uptime Reliability", sub: "superior build quality" },
  { prefix: "", count: 99.5, suffix: "%", decimals: 1, label: "Compliance Rate", sub: "all industry standards met" },
  { prefix: "", count: 150, suffix: "+", decimals: 0, label: "Projects Delivered", sub: "across India, on time" },
];

export default function StatsSection() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("active"); }),
      { threshold: 0.08 }
    );
    document.querySelectorAll(".reveal").forEach((el) => obs.observe(el));

    const countObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          countObs.unobserve(e.target);
          e.target.querySelectorAll("[data-count]").forEach((el, i) => {
            const target = Number((el as HTMLElement).dataset.count);
            const decimals = Number((el as HTMLElement).dataset.decimals ?? "0");
            const suffix = (el as HTMLElement).dataset.suffix ?? "";
            const fmt = (n: number) => decimals > 0 ? n.toFixed(decimals) : Math.floor(n).toString();
            let t0: number | null = null;
            setTimeout(() => {
              requestAnimationFrame(function tick(ts) {
                if (!t0) t0 = ts;
                const p = Math.min((ts - t0) / 1800, 1);
                const eased = 1 - Math.pow(1 - p, 3);
                el.textContent = fmt(eased * target) + suffix;
                if (p < 1) requestAnimationFrame(tick);
                else el.textContent = fmt(target) + suffix;
              });
            }, i * 140);
          });
        });
      },
      { threshold: 0.3 }
    );
    document.querySelectorAll(".stat-group").forEach((el) => countObs.observe(el));
    return () => { obs.disconnect(); countObs.disconnect(); };
  }, []);

  return (
    <section className="stat-group" style={{ background: "var(--red)", padding: "96px 48px" }}>
      <div style={{ maxWidth: 1400, margin: "0 auto" }}>
        <div className="reveal" style={{ textAlign: "center", marginBottom: 64 }}>
          <p style={{ fontSize: "0.7rem", fontWeight: 800, letterSpacing: "0.25em", color: "rgba(255,255,255,0.5)", textTransform: "uppercase", marginBottom: 14 }}>
            Measurable Results
          </p>
          <h2 style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)", fontWeight: 800, color: "#fff", lineHeight: 1.1 }}>
            Quantifiable Value Delivered to FMCG Partners
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 2 }}>
          {STATS.map((s, i) => (
            <div key={s.label} className={`reveal d${(i % 3) + 1} spring-card stat-card`}
              style={{
                background: i % 2 === 0 ? "rgba(255,255,255,0.12)" : "rgba(0,0,0,0.15)",
                padding: "48px 36px", textAlign: "center", cursor: "default",
              }}>
              <div style={{ fontSize: "clamp(2.2rem, 4vw, 3.5rem)", fontWeight: 800, color: "#fff", lineHeight: 1, marginBottom: 8, letterSpacing: "-0.04em", fontVariantNumeric: "tabular-nums" }}>
                {s.prefix}
                <span data-count={s.count} data-suffix={s.suffix} data-decimals={s.decimals}>
                  {s.decimals > 0 ? (0).toFixed(s.decimals) : "0"}{s.suffix}
                </span>
              </div>
              <div style={{ fontWeight: 800, fontSize: "1rem", color: "rgba(255,255,255,0.9)", marginBottom: 6 }}>{s.label}</div>
              <div style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.55)", fontWeight: 500 }}>{s.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
