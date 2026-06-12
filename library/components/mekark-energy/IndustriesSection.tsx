"use client";
import { useEffect } from "react";

const industries = [
  { title: "Power Generation", tag: "Thermal · Coal · Gas", desc: "Complete EPC delivery for coal, thermal, and industrial power plants — steel structures, civil, and electromechanical scope under one roof.", img: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=700&q=75" },
  { title: "Renewable Energy", tag: "Solar · Wind · Hybrid", desc: "Ground-mount solar, rooftop systems, and wind energy infrastructure — from mounting structures to full commissioning.", img: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=700&q=75" },
  { title: "Manufacturing", tag: "Factories · Warehouses", desc: "PEB steel warehouses, process plants, and factory buildings built fast with in-house fabrication and turnkey execution.", img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=700&q=75" },
  { title: "Oil & Gas", tag: "Upstream · Downstream", desc: "Structural steel, process plant infrastructure, and utility systems for oil & gas processing and storage facilities.", img: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=700&q=75" },
  { title: "Heavy Industry", tag: "Steel · Boilers · Turbines", desc: "Turbine buildings, boiler structures, and heavy industrial infrastructure built to withstand the demands of continuous operation.", img: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=700&q=75" },
  { title: "Electrical Utilities", tag: "Substations · HT/LT", desc: "Substation construction, switchyard development, transformer yards, and complete HT/LT electrical contracting at scale.", img: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=700&q=75" },
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
    <section id="industries" style={{ background: "#000", padding: "100px 32px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div className="reveal" style={{ textAlign: "center", marginBottom: 64 }}>
          <p style={{ fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#C4161C", marginBottom: 14 }}>
            Industries Served
          </p>
          <h2 style={{ fontSize: "clamp(1.9rem, 3.2vw, 2.8rem)", fontWeight: 800, color: "#fff", letterSpacing: "-0.04em", lineHeight: 1.1 }}>
            Where Mekark EPC Delivers
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
          {industries.map((ind, i) => (
            <div key={ind.title} className={`reveal d${(i % 3) + 1} spring-card`}
              style={{ position: "relative", overflow: "hidden", minHeight: 280, cursor: "default", borderRadius: 8 }}>
              <div style={{
                position: "absolute", inset: 0,
                backgroundImage: `url(${ind.img})`,
                backgroundSize: "cover", backgroundPosition: "center",
                transition: "transform 350ms ease-out",
              }} />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.5) 55%, rgba(0,0,0,0.1) 100%)" }} />
              <div style={{ position: "relative", padding: "24px", display: "flex", flexDirection: "column", height: "100%", justifyContent: "flex-end", minHeight: 280 }}>
                <span style={{ display: "inline-block", padding: "3px 8px", marginBottom: 10, background: "rgba(196,22,28,0.8)", color: "#fff", fontSize: "0.66rem", fontWeight: 700, letterSpacing: "0.05em" }}>
                  {ind.tag}
                </span>
                <h3 style={{ fontWeight: 800, fontSize: "1.05rem", color: "#fff", marginBottom: 8 }}>{ind.title}</h3>
                <p style={{ fontSize: "0.84rem", lineHeight: 1.65, color: "rgba(255,255,255,0.65)" }}>{ind.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
