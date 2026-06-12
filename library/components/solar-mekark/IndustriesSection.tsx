"use client";
import { useEffect } from "react";

const SECTORS = [
  { title: "Manufacturing & Factories", body: "High daytime load perfectly aligned with solar generation. Eliminate production halts from power outages with solar + BESS hybrid systems designed for continuous-process industries.", tag: "Rooftop + Ground Mount" },
  { title: "Commercial Buildings & Offices", body: "Convert your HVAC-heavy commercial property into a self-powered asset. Reduce common-area electricity bills and earn net metering credits with zero space consumed on the ground floor.", tag: "Rooftop Solar" },
  { title: "Malls & Retail Chains", body: "Peak shopping hours align exactly with peak solar generation. Solar-powered retail cuts operational costs while communicating a sustainability story your customers increasingly value.", tag: "Rooftop Solar" },
  { title: "Warehouses & Logistics", body: "Large flat rooftops, consistent cooling loads, and high daytime operations make warehouses ideal solar candidates. We've delivered projects for some of Tamil Nadu's largest 3PL operators.", tag: "Large Rooftop" },
  { title: "Hospitals & Healthcare", body: "Power reliability is a clinical imperative. Our solar + battery systems provide a clean, resilient energy backbone — reducing diesel generator dependency while supporting NABH requirements.", tag: "Solar + BESS" },
  { title: "Colleges & Schools", body: "Educational institutions benefit from aligned schedules — solar generates when students are in class. We've helped institutions redirect lakhs in saved electricity to scholarships and infrastructure.", tag: "Rooftop Solar" },
  { title: "Agriculture & Farms", body: "Solar water pumps, drip irrigation power, and cold-chain support for agri-businesses. Replace diesel pumps permanently. Qualify for PM-KUSUM scheme subsidies with our end-to-end support.", tag: "PM-KUSUM Eligible" },
  { title: "Real Estate & Infrastructure", body: "Green-rated buildings command premium valuations. Integrate solar at the design stage for GRIHA or IGBC compliance — we work directly with your project architects and MEP consultants.", tag: "GRIHA / IGBC" },
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
    <section style={{ background: "#0a0a0a", padding: "96px 24px" }}>
      <div style={{ maxWidth: 1400, margin: "0 auto" }}>
        <div className="reveal" style={{ textAlign: "center", marginBottom: 64 }}>
          <p style={{ fontSize: "0.7rem", fontWeight: 800, letterSpacing: "0.25em", color: "#f59e0b", textTransform: "uppercase", marginBottom: 14 }}>
            Industries We Serve
          </p>
          <h2 style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)", fontWeight: 800, color: "#fff", lineHeight: 1.1 }}>
            Solar Solutions Across Every Sector
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 2 }}>
          {SECTORS.map((sector, i) => (
            <div key={sector.title} className={`reveal d${(i % 4) + 1} spring-card`}
              style={{ background: "rgba(255,255,255,0.04)", padding: "32px 24px", cursor: "default" }}>
              <span style={{
                display: "inline-block", padding: "3px 10px", marginBottom: 16,
                background: "rgba(245,158,11,0.15)", color: "#f59e0b",
                fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.05em",
              }}>
                {sector.tag}
              </span>
              <h3 style={{ fontWeight: 800, fontSize: "1rem", color: "#fff", marginBottom: 10 }}>{sector.title}</h3>
              <p style={{ fontSize: "0.84rem", lineHeight: 1.7, color: "rgba(255,255,255,0.5)" }}>{sector.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
