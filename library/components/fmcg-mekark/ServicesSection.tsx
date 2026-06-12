"use client";
import { useEffect } from "react";
import Image from "next/image";

const SERVICES = [
  { num: "01", title: "Factory Building Construction", desc: "Custom-designed FMCG manufacturing facilities with specialized engineering for food processing, beverage production, pharmaceutical packaging, and consumer goods manufacturing. Layouts optimized for operational workflows.", img: "/fmcg-mekark/images/factory building construction.png" },
  { num: "02", title: "Warehouse & Logistics Centers", desc: "Large-span warehouse construction with advanced storage management systems. Distribution centers, fulfillment facilities, and supply chain hubs built for rapid FMCG product throughput.", img: "/fmcg-mekark/images/warehouse & logistics.png" },
  { num: "03", title: "Cold Storage Facilities", desc: "Specialized refrigerated warehouse manufacturing with precision climate control ensuring consistent temperature maintenance for perishable FMCG products, extending shelf life and quality.", img: "/fmcg-mekark/images/cold storage.png" },
  { num: "04", title: "PEB Steel Structures", desc: "Pre-engineered building solutions deliver faster construction timelines and superior cost efficiency. Customizable PEB designs for factories, warehouses, and production units with minimal on-site assembly.", img: "/fmcg-mekark/images/PEB Steel Structures.png" },
  { num: "05", title: "Industrial Infrastructure Development", desc: "End-to-end infrastructure planning — utilities, material handling systems, safety features, and operational support areas that integrate seamlessly with your manufacturing processes.", img: "/fmcg-mekark/images/Industrial Infrastructure Development.png" },
  { num: "06", title: "Turnkey Project Execution", desc: "Complete project delivery from site assessment and detailed engineering through construction, quality control, and handover. One contract, one point of accountability, zero coordination issues.", img: "/fmcg-mekark/images/Turnkey Project Execution.png" },
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
    <section id="services" style={{ background: "#000", padding: "96px 48px" }}>
      <div style={{ maxWidth: 1400, margin: "0 auto" }}>
        <div className="reveal" style={{ marginBottom: 60 }}>
          <p style={{ fontSize: "0.7rem", fontWeight: 800, letterSpacing: "0.25em", color: "rgba(255,255,255,0.5)", textTransform: "uppercase", marginBottom: 14 }}>
            Our Services
          </p>
          <h2 style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)", fontWeight: 800, color: "#fff", lineHeight: 1.1 }}>
            FMCG Infrastructure Services
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 2 }}>
          {SERVICES.map((svc, i) => (
            <div key={svc.num} className={`reveal d${(i % 3) + 1} spring-card`}
              style={{ background: "#111", cursor: "default", overflow: "hidden" }}>
              <div style={{ height: 220, position: "relative", overflow: "hidden", background: "#1a1a1a" }}>
                <div style={{ width: "100%", height: "100%", background: "linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <span style={{ fontSize: "3rem", fontWeight: 800, color: "rgba(255,255,255,0.05)", fontVariantNumeric: "tabular-nums" }}>{svc.num}</span>
                </div>
              </div>
              <div style={{ padding: "28px 32px 36px" }}>
                <div style={{ fontSize: "0.75rem", fontWeight: 800, color: "var(--red)", letterSpacing: "0.15em", marginBottom: 10 }}>{svc.num}</div>
                <h3 style={{ fontWeight: 800, fontSize: "1.08rem", color: "#fff", marginBottom: 12, letterSpacing: "-0.02em" }}>{svc.title}</h3>
                <p style={{ fontSize: "0.87rem", lineHeight: 1.75, color: "rgba(255,255,255,0.5)" }}>{svc.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
