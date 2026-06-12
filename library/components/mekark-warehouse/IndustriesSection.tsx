"use client";
import { useEffect } from "react";

const INDUSTRIES = [
  { title: "Manufacturing", desc: "Heavy-span structures with crane bays and integrated mezzanine floors." },
  { title: "Logistics & 3PL", desc: "High-bay warehouses optimized for dock levelers and rapid throughput." },
  { title: "Automotive", desc: "Wide-span, column-free bays for assembly lines and spare part hubs." },
  { title: "Agri & Food", desc: "Insulated PEB structures with specialized temperature control capabilities." },
  { title: "Engineering", desc: "Heavy-duty structural floors designed for vibration-intensive machinery." },
  { title: "Chemicals", desc: "Explosion-proof envelopes with advanced ventilation and containment." },
  { title: "Retail", desc: "Fulfillment centers featuring multi-level mezzanines and picking zones." },
  { title: "Infrastructure", desc: "CPWD-aligned PEB structures for large-scale government and public use." },
];

export default function IndustriesSection() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("active"); }),
      { threshold: 0.08 }
    );
    document.querySelectorAll(".reveal").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section style={{ background: "#0a0a0a", padding: "96px 32px", position: "relative", overflow: "hidden" }}>
      <div style={{ maxWidth: 1400, margin: "0 auto" }}>
        <div className="reveal" style={{ textAlign: "center", marginBottom: 64 }}>
          <p style={{ fontSize: "0.7rem", fontWeight: 800, letterSpacing: "0.25em", color: "#C4161C", textTransform: "uppercase", marginBottom: 14 }}>
            Industries We Serve
          </p>
          <h2 style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)", fontWeight: 800, color: "#fff", lineHeight: 1.1 }}>
            Purpose-Built Warehouses Across Sectors
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 2 }}>
          {INDUSTRIES.map((ind, i) => (
            <div key={ind.title} className={`reveal d${(i % 4) + 1} spring-card`}
              style={{ background: "rgba(255,255,255,0.04)", padding: "32px 24px", cursor: "default", borderTop: "2px solid transparent" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.borderTopColor = "#C4161C"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.borderTopColor = "transparent"; }}>
              <div style={{ width: 32, height: 2, background: "#C4161C", marginBottom: 16 }} />
              <h3 style={{ fontWeight: 800, fontSize: "1rem", color: "#fff", marginBottom: 10 }}>{ind.title}</h3>
              <p style={{ fontSize: "0.85rem", lineHeight: 1.7, color: "rgba(255,255,255,0.5)" }}>{ind.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
