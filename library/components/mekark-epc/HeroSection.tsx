"use client";
import { useEffect } from "react";

const ACHIEVEMENTS = [
  { display: "9M+", label: "Sq. Ft.", sub: "Industrial Infrastructure Delivered" },
  { display: "40k", label: "Tons", sub: "Annual Manufacturing Capacity" },
  { display: "600k", label: "Sq. Ft.", sub: "Manufacturing Facility" },
  { display: "15+", label: "Years", sub: "Industrial Construction Expertise" },
  { display: "100+", label: "Projects", sub: "Industrial & Warehouse Projects Completed" },
];

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
    <section id="hero" style={{ minHeight: "100svh", position: "relative", display: "flex", alignItems: "center", justifyContent: "center", background: "#000", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 30% 50%, rgba(196,22,28,0.15) 0%, transparent 60%), linear-gradient(135deg, #000 0%, #111 100%)" }} />
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 4, background: "#C4161C" }} />

      <div style={{ position: "relative", zIndex: 10, maxWidth: 1400, margin: "0 auto", padding: "120px 48px 80px", width: "100%" }}>
        <div className="reveal" style={{ marginBottom: 20 }}>
          <span style={{ display: "inline-block", fontSize: "0.7rem", fontWeight: 800, letterSpacing: "0.25em", color: "#C4161C", textTransform: "uppercase" }}>
            Industrial EPC Solutions Provider
          </span>
        </div>

        <h1 className="reveal d1" style={{
          fontSize: "clamp(2.4rem, 6vw, 5rem)", fontWeight: 800,
          color: "#fff", letterSpacing: "-0.04em", lineHeight: 1.04,
          maxWidth: 900, marginBottom: 28,
        }}>
          India&apos;s Premier<br />
          <span style={{ color: "#C4161C" }}>Industrial EPC</span><br />
          Solutions Company
        </h1>

        <p className="reveal d2" style={{
          color: "rgba(255,255,255,0.7)", fontSize: "clamp(1rem, 1.6vw, 1.15rem)",
          lineHeight: 1.8, maxWidth: 600, marginBottom: 48,
        }}>
          End-to-end engineering, procurement, and construction services for factories, warehouses, industrial plants, and logistics parks — delivered by India&apos;s leading industrial infrastructure company.
        </p>

        <div className="reveal d3" style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          <a href="#contact" style={{ background: "#C4161C", color: "#fff", padding: "14px 32px", fontWeight: 700, fontSize: "0.95rem", textDecoration: "none", display: "inline-block" }}>
            Get Free Consultation
          </a>
          <a href="#services" style={{ border: "1px solid rgba(255,255,255,0.3)", color: "#fff", padding: "14px 28px", fontWeight: 600, fontSize: "0.95rem", textDecoration: "none", display: "inline-block" }}>
            View Services
          </a>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 2, marginTop: 80 }}>
          {ACHIEVEMENTS.map((ach, i) => (
            <div key={i} className="reveal" style={{ padding: "24px 20px", borderTop: "2px solid rgba(196,22,28,0.4)" }}>
              <div style={{ fontSize: "clamp(1.8rem, 2.5vw, 2.4rem)", fontWeight: 800, color: "#fff", letterSpacing: "-0.04em", lineHeight: 1, marginBottom: 4 }}>
                {ach.display}
                <span style={{ fontSize: "0.6em", color: "#C4161C", marginLeft: 4 }}>{ach.label}</span>
              </div>
              <div style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.45)", lineHeight: 1.5 }}>{ach.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
