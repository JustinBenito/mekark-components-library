"use client";

export default function HeroSection() {
  return (
    <section style={{ position: "relative", height: "100vh", minHeight: 600, overflow: "hidden", background: "#000" }}>
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(105deg, rgba(0,0,0,0.90) 0%, rgba(0,0,0,0.75) 40%, rgba(0,0,0,0.40) 65%, rgba(0,0,0,0.10) 100%), linear-gradient(135deg, #0a0a12 0%, #1a0a0a 100%)",
      }} />
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 4, background: "#C4161C" }} />

      <div style={{
        position: "relative", zIndex: 1, height: "100%",
        display: "flex", flexDirection: "column", justifyContent: "center",
        padding: "0 48px", maxWidth: 780,
      }}>
        <div style={{ marginBottom: 18 }}>
          <span style={{ fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.26em",
            color: "rgba(255,255,255,0.55)", textTransform: "uppercase" }}>
            Leading Energy Industry Construction Company in India
          </span>
        </div>

        <h1 style={{
          fontSize: "clamp(2.4rem, 5vw, 4.4rem)", fontWeight: 800,
          color: "#fff", letterSpacing: "-0.04em", lineHeight: 1.07, marginBottom: 18,
        }}>
          Turnkey EPC Solutions for<br />Industrial Power Infrastructure
        </h1>

        <p style={{
          fontSize: "clamp(0.95rem, 1.6vw, 1.08rem)",
          color: "rgba(255,255,255,0.72)", lineHeight: 1.72,
          marginBottom: 14, maxWidth: 560,
        }}>
          Design &amp; Build Contractor Specializing in Power Plant Construction, Industrial Steel Structures &amp; Renewable Energy Projects across Chennai, Tamil Nadu, and India
        </p>

        <div style={{ display: "flex", gap: 20, flexWrap: "wrap", marginBottom: 36, fontSize: "0.88rem", color: "rgba(255,255,255,0.85)", fontWeight: 600 }}>
          <span>⚡ 120 Days Fast-Track Delivery</span>
          <span>🏭 Advanced Manufacturing Unit</span>
          <span>✓ 200+ Completed Projects</span>
        </div>

        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          <a href="#contact" style={{
            background: "#C4161C", color: "#fff", padding: "14px 28px", borderRadius: 6,
            fontWeight: 700, fontSize: "0.95rem", textDecoration: "none",
          }}>
            Get a Quote
          </a>
          <a href="#projects" style={{
            border: "1.5px solid rgba(255,255,255,0.35)", color: "#fff",
            padding: "13px 24px", borderRadius: 6, fontWeight: 600, fontSize: "0.95rem",
            textDecoration: "none",
          }}>
            View Projects
          </a>
        </div>
      </div>
    </section>
  );
}
