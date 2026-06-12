"use client";
import { useEffect } from "react";

const HERO_STATS = [
  { display: "500+MW", label: "Installed Capacity" },
  { display: "18+", label: "Years of EPC Excellence" },
  { display: "98%", label: "Client Retention Rate" },
  { display: "₹0", label: "Hidden Costs, Ever" },
];

const CERTIFICATIONS = ["ISO Certified", "MNRE Empanelled", "TANGEDCO Approved", "Net Metering Specialists", "NABCB Accredited"];

export default function HeroSection() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("active"); }),
      { threshold: 0.08 }
    );
    document.querySelectorAll(".reveal").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section style={{ position: "relative", background: "#0a0a0a", overflow: "hidden", minHeight: "max(100vh, 700px)", display: "flex", alignItems: "center" }}>
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 60% 50%, rgba(245,158,11,0.08) 0%, transparent 60%), linear-gradient(135deg, #0a0a0a 0%, #111 100%)" }} />
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 4, background: "linear-gradient(to right, #f59e0b, #ef4444)" }} />

      <div style={{ position: "relative", zIndex: 10, maxWidth: 1400, margin: "0 auto", padding: "120px 48px 80px", width: "100%" }}>
        <div className="reveal" style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 28 }}>
          {CERTIFICATIONS.map((cert) => (
            <span key={cert} style={{
              display: "inline-block", padding: "4px 12px",
              border: "1px solid rgba(245,158,11,0.3)", background: "rgba(245,158,11,0.06)",
              color: "rgba(255,255,255,0.7)", fontSize: "0.72rem", fontWeight: 600,
            }}>
              {cert}
            </span>
          ))}
        </div>

        <h1 className="reveal d1" style={{
          fontSize: "clamp(2.4rem, 6vw, 5rem)", fontWeight: 800,
          color: "#fff", letterSpacing: "-0.04em", lineHeight: 1.04,
          maxWidth: 900, marginBottom: 28,
        }}>
          South India&apos;s Premier<br />
          <span style={{ color: "#f59e0b" }}>Solar EPC</span> Company
        </h1>

        <p className="reveal d2" style={{
          color: "rgba(255,255,255,0.7)", fontSize: "clamp(1rem, 1.6vw, 1.15rem)",
          lineHeight: 1.8, maxWidth: 600, marginBottom: 48,
        }}>
          Rooftop, ground-mount, and hybrid solar systems for commercial, industrial, and agricultural clients across Tamil Nadu — designed, installed, and maintained with zero compromise on performance.
        </p>

        <div className="reveal d3" style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          <a href="#contact" style={{ background: "#f59e0b", color: "#000", padding: "14px 32px", fontWeight: 800, fontSize: "0.95rem", textDecoration: "none", display: "inline-block" }}>
            Get Free Energy Assessment
          </a>
          <a href="#services" style={{ border: "1px solid rgba(255,255,255,0.3)", color: "#fff", padding: "14px 28px", fontWeight: 600, fontSize: "0.95rem", textDecoration: "none", display: "inline-block" }}>
            View Solar Services
          </a>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 2, marginTop: 80, borderTop: "1px solid rgba(255,255,255,0.08)" }}>
          {HERO_STATS.map((s, i) => (
            <div key={i} style={{ padding: "28px 24px", borderRight: i < 3 ? "1px solid rgba(255,255,255,0.06)" : "none" }}>
              <div style={{ fontSize: "clamp(1.8rem, 2.8vw, 2.4rem)", fontWeight: 800, color: "#f59e0b", letterSpacing: "-0.04em", lineHeight: 1, marginBottom: 6 }}>
                {s.display}
              </div>
              <div style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.45)", fontWeight: 500 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
