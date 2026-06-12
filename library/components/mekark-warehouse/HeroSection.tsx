"use client";
import { useEffect } from "react";

const RED = "#C4161C";
const heroStats = [
  { label: "Years of Experience", display: "18+", isNum: false },
  { label: "PEB Projects Delivered", value: 350, suffix: "+", isNum: true },
  { label: "On-Time Completion", display: "99%", isNum: false },
  { label: "ISO Certified", display: "9001:2015", isNum: false },
];

export default function HeroSection() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          obs.unobserve(e.target);
          e.target.querySelectorAll("[data-count]").forEach((el, i) => {
            const target = Number((el as HTMLElement).dataset.count);
            const suffix = (el as HTMLElement).dataset.suffix ?? "";
            let t0: number | null = null;
            setTimeout(() => {
              requestAnimationFrame(function tick(ts) {
                if (!t0) t0 = ts;
                const p = Math.min((ts - t0) / 1800, 1);
                el.textContent = Math.floor(p * target) + suffix;
                if (p < 1) requestAnimationFrame(tick);
                else el.textContent = target + suffix;
              });
            }, i * 150);
          });
        });
      },
      { threshold: 0.3 }
    );
    document.querySelectorAll(".stat-group").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section className="stat-group" style={{ position: "relative", height: "100vh", minHeight: 640, display: "flex", flexDirection: "column", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0a0a0a 100%)" }} />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.6) 45%, rgba(0,0,0,0.92) 100%)" }} />
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 4, background: RED }} />

      <div style={{
        position: "relative", zIndex: 1, flex: 1, display: "flex",
        flexDirection: "column", justifyContent: "center", alignItems: "center",
        textAlign: "center", padding: "0 48px",
      }}>
        <p style={{
          color: RED, fontSize: "0.7rem", fontWeight: 700,
          letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 20,
        }}>
          Chennai&apos;s #1 PEB Contractor
        </p>

        <h1 style={{
          fontSize: "clamp(2.6rem, 5.2vw, 4.6rem)", fontWeight: 400,
          color: "#fff", letterSpacing: "-0.04em", lineHeight: 1.06, marginBottom: 28,
        }}>
          Next-Generation PEB Warehouses<br />
          for Modern Supply Chains
        </h1>

        <p style={{
          fontSize: "clamp(1rem, 1.6vw, 1.12rem)", color: "rgba(255,255,255,0.82)",
          lineHeight: 1.8, maxWidth: 580, marginBottom: 40,
        }}>
          Integrated PEB warehouse infrastructure engineered for logistics, manufacturing, e-commerce, and distribution operations across Chennai and Tamil Nadu.
        </p>

        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center" }}>
          <a href="#contact" style={{ background: RED, color: "#fff", padding: "13px 28px", borderRadius: 6, fontWeight: 700, fontSize: "0.93rem", textDecoration: "none" }}>
            Start Your Project
          </a>
          <a href="#services" style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.3)", color: "#fff", padding: "13px 28px", borderRadius: 6, fontWeight: 600, fontSize: "0.93rem", textDecoration: "none" }}>
            View Our Capability
          </a>
        </div>
      </div>

      <div style={{ position: "relative", zIndex: 1, borderTop: "1px solid rgba(255,255,255,0.1)", display: "grid", gridTemplateColumns: "repeat(4, 1fr)" }}>
        {heroStats.map((s, i) => (
          <div key={i} style={{ padding: "20px 24px", textAlign: "center", borderRight: i < 3 ? "1px solid rgba(255,255,255,0.08)" : "none" }}>
            <div style={{ fontSize: "clamp(1.6rem, 2.8vw, 2.2rem)", fontWeight: 700, color: "#fff", letterSpacing: "-0.03em", lineHeight: 1, marginBottom: 5 }}>
              {s.isNum ? <span data-count={s.value} data-suffix={s.suffix}>0{s.suffix}</span> : <span>{s.display}</span>}
            </div>
            <p style={{ fontSize: "0.66rem", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)" }}>
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
