"use client";
import { useEffect } from "react";

const SERVICES = [
  { title: "Solar Feasibility Study & Energy Audit", body: "Before a single panel is specified, our engineers conduct a shadow analysis, load profile study, and financial modelling to map your exact solar potential and savings trajectory.", cta: "Know your numbers first" },
  { title: "Solar Design & Engineering", body: "Precision structural and electrical engineering — optimised for Tamil Nadu's solar irradiance data — ensuring maximum generation across every season of the year.", cta: "Built for peak performance" },
  { title: "Solar Panel Procurement", body: "Tier-1 panels, certified inverters, and BIS-approved BOS components sourced at scale. No grey-market shortcuts. Every component traceable with warranty documentation.", cta: "Only bankable equipment" },
  { title: "Solar Installation & Commissioning", body: "TANGEDCO-approved installation teams with a track record of zero-defect commissioning. Your plant goes live on schedule — and it stays live.", cta: "On-time, every time" },
  { title: "Solar Operation & Maintenance (O&M)", body: "Predictive maintenance with remote monitoring, drone-based thermal imaging, and quarterly performance audits. Your system delivers on its promise — year after year.", cta: "Your uptime is our SLA" },
  { title: "Battery Energy Storage Solutions", body: "Grid-independent energy security through lithium-based BESS. Smooth out demand peaks, eliminate power purchase at high-tariff hours, and future-proof your energy stack.", cta: "Energy 24×7" },
  { title: "EV Charging Infrastructure", body: "Solar-powered EV charging stations for factory fleets, office complexes, and commercial establishments. The smart way to electrify your transport chain.", cta: "Power what moves" },
  { title: "Net Zero & ESG Advisory", body: "Strategic consulting for industrial clients pursuing science-based targets, carbon neutrality roadmaps, and ESG disclosures. We translate energy data into boardroom language.", cta: "Green credentials, proven" },
];

export default function ServicesSection() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("active"); }),
      { threshold: 0.08 }
    );
    document.querySelectorAll(".reveal").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="services" style={{ background: "#fff", padding: "96px 24px" }}>
      <div style={{ maxWidth: 1400, margin: "0 auto" }}>
        <div className="reveal" style={{ marginBottom: 64 }}>
          <p style={{ fontSize: "0.7rem", fontWeight: 800, letterSpacing: "0.25em", color: "#f59e0b", textTransform: "uppercase", marginBottom: 14 }}>
            Our Services
          </p>
          <h2 style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)", fontWeight: 800, color: "#111", lineHeight: 1.1 }}>
            End-to-End Solar EPC Services
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 2 }}>
          {SERVICES.map((svc, i) => (
            <div key={svc.title} className={`reveal d${(i % 4) + 1} spring-card`}
              style={{
                background: "#f8f8f8", padding: "32px 28px", cursor: "default",
                borderTop: "3px solid transparent", transition: "border-color 200ms ease, transform 350ms cubic-bezier(0.34,1.56,0.64,1)",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.borderTopColor = "#f59e0b"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.borderTopColor = "transparent"; }}>
              <div style={{ fontSize: "0.72rem", fontWeight: 800, color: "#f59e0b", letterSpacing: "0.15em", marginBottom: 12 }}>0{i + 1}</div>
              <h3 style={{ fontWeight: 800, fontSize: "0.95rem", color: "#111", marginBottom: 10, letterSpacing: "-0.02em", lineHeight: 1.4 }}>{svc.title}</h3>
              <p style={{ fontSize: "0.84rem", lineHeight: 1.75, color: "#555", marginBottom: 12 }}>{svc.body}</p>
              <span style={{ fontSize: "0.78rem", fontWeight: 700, color: "#f59e0b" }}>{svc.cta} →</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
