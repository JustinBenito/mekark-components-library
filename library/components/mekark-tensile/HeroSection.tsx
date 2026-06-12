"use client";
import { useEffect } from "react";

export default function HeroSection() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("active"); }),
      { threshold: 0.1 }
    );
    document.querySelectorAll(".reveal").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section style={{ position: "relative", minHeight: "100vh", background: "#0f172a", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)" }} />
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 4, background: "#E31E24" }} />

      <div style={{ position: "relative", zIndex: 10, maxWidth: 1000, margin: "0 auto", padding: "96px 48px", textAlign: "center" }}>
        <div className="reveal" style={{
          display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 16px",
          border: "1px solid rgba(227,30,36,0.4)", background: "rgba(227,30,36,0.08)",
          color: "rgba(255,255,255,0.8)", fontSize: "0.8rem", fontWeight: 600, marginBottom: 32,
          borderRadius: 2,
        }}>
          Tensile Roofing Systems in Chennai Backed by Engineering &amp; Manufacturing Scale
        </div>

        <h1 className="reveal" style={{
          color: "#fff", fontWeight: 800, lineHeight: 1.1,
          fontSize: "clamp(2rem, 5.5vw, 4.2rem)",
          letterSpacing: "-0.03em", marginBottom: 24,
        }}>
          High-Performance <span style={{ color: "#E31E24" }}>Tensile Roofing</span><br />
          Solutions Engineered for Chennai&apos;s<br />Industrial &amp; Commercial Infrastructure
        </h1>

        <p className="reveal" style={{
          color: "rgba(255,255,255,0.65)", fontSize: "clamp(0.95rem, 1.4vw, 1.1rem)",
          lineHeight: 1.75, maxWidth: 680, margin: "0 auto 32px",
        }}>
          End-to-end tensile roofing systems — designed, engineered, and installed for structural efficiency, faster execution, and long-term durability in coastal and high-heat conditions.
        </p>

        <div style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.875rem", fontWeight: 600, marginBottom: 40, display: "flex", gap: "1.25rem", justifyContent: "center", flexWrap: "wrap" }}>
          <span>Custom-engineered designs</span><span style={{ opacity: 0.3 }}>•</span>
          <span>UV &amp; weather-resistant membranes</span><span style={{ opacity: 0.3 }}>•</span>
          <span>Precision fabrication</span><span style={{ opacity: 0.3 }}>•</span>
          <span>Rapid installation</span>
        </div>

        <div className="reveal" style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <a href="#intake" style={{
            display: "inline-flex", alignItems: "center", gap: 10,
            background: "#E31E24", color: "#fff", padding: "14px 28px",
            fontWeight: 700, fontSize: "0.95rem", textDecoration: "none", borderRadius: 2,
          }}>
            Get Project Cost Estimate
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </a>
        </div>
      </div>
    </section>
  );
}
