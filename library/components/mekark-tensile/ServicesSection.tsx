"use client";
import { useEffect } from "react";

const SOLUTIONS = [
  { id: 1, title: "Tensile Car Parking Structures", desc: "UV-resistant, heat-reducing membrane systems designed for long-term outdoor exposure and vehicle protection.", img: "https://images.unsplash.com/photo-1545173168-9f1947eebb7f?auto=format&fit=crop&w=800&q=80" },
  { id: 2, title: "Industrial Tensile Roofing", desc: "Lightweight yet high-strength roofing systems ideal for factories, warehouses, and logistics hubs requiring massive spans.", img: "https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&w=800&q=80" },
  { id: 3, title: "Tensile Walkway & Canopies", desc: "Architectural-grade tensile covers that enhance movement spaces with weather protection and design appeal.", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80" },
  { id: 4, title: "Entrance Tensile Facades", desc: "Visually striking tensile elements engineered directly for corporate branding and structural elegance.", img: "https://images.unsplash.com/photo-1497366754035-f200968a7424?auto=format&fit=crop&w=800&q=80" },
  { id: 5, title: "Warehouse Tensile Extensions", desc: "Cost-effective expansion solutions that increase storage capacity without heavy structural load impact.", img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80" },
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
    <section id="solutions" style={{ background: "#fff", padding: "96px 48px" }}>
      <div style={{ maxWidth: 1400, margin: "0 auto" }}>
        <div className="reveal" style={{ textAlign: "center", marginBottom: 64 }}>
          <p style={{ fontSize: "0.72rem", fontWeight: 800, letterSpacing: "0.25em", color: "#E31E24", textTransform: "uppercase", marginBottom: 12 }}>
            Architectural Solutions
          </p>
          <h2 style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)", fontWeight: 800, color: "#0f172a", lineHeight: 1.1, marginBottom: 12 }}>
            Engineered For Diverse Environments
          </h2>
          <p style={{ color: "#64748b", fontSize: "1rem", lineHeight: 1.75, maxWidth: 600, margin: "0 auto" }}>
            Delivering lightweight but incredibly strong coverage systems designed specifically for high-demand use-cases.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
          {SOLUTIONS.map((sol, i) => (
            <div key={sol.id} className={`reveal spring-card`}
              style={{
                position: "relative", overflow: "hidden", cursor: "default",
                borderRadius: 4, minHeight: 320,
              }}>
              <div style={{
                position: "absolute", inset: 0,
                backgroundImage: `url(${sol.img})`,
                backgroundSize: "cover", backgroundPosition: "center",
              }} />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(15,23,42,0.95) 0%, rgba(15,23,42,0.5) 60%, transparent 100%)" }} />
              <div style={{ position: "relative", padding: "24px", display: "flex", flexDirection: "column", height: "100%", justifyContent: "flex-end", minHeight: 320 }}>
                <h3 style={{ fontWeight: 800, fontSize: "1.08rem", color: "#fff", marginBottom: 10, letterSpacing: "-0.02em" }}>{sol.title}</h3>
                <p style={{ fontSize: "0.86rem", lineHeight: 1.7, color: "rgba(255,255,255,0.7)" }}>{sol.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
