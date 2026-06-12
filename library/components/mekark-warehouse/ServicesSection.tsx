"use client";
import { useEffect } from "react";

const SERVICES = [
  { num: "01", title: "PEB Warehouse Design & Engineering", desc: "Our in-house structural experts deliver IS-code-compliant designs, precise wind and seismic load calculations, and detailed 3D fabrication drawings." },
  { num: "02", title: "Pre-Engineered Steel Fabrication", desc: "Utilising our advanced Chennai manufacturing facility, we produce primary steel frames, secondary purlins, and custom bracings to +/−1 mm tolerances." },
  { num: "03", title: "Turnkey Warehouse Construction", desc: "We manage the entire construction lifecycle — from site levelling and foundation work to roofing, cladding, electrical, and plumbing." },
  { num: "04", title: "Industrial Roofing & Cladding", desc: "Protect your assets with colour-coated galvalume roofing and sandwich panels with skylights, ridge ventilators, and integrated gutter systems." },
  { num: "05", title: "Mezzanine & Multi-Level Structures", desc: "Maximise your facility's vertical potential with engineered steel mezzanine floors supporting load capacities up to 10 kN/m²." },
  { num: "06", title: "Warehouse Extension & Renovation", desc: "Expand your existing facility or upgrade ageing infrastructure with specialised PEB bolt-on extensions with minimum operational disruption." },
  { num: "07", title: "Crane Runway Beam Systems", desc: "We design and integrate heavy-duty EOT and HOT crane runway systems directly into our PEB frame structures for manufacturing and logistics." },
  { num: "08", title: "Civil & Foundation Works", desc: "Raft, isolated, and pile foundations designed precisely to Mekark's structural loads — eliminating coordination gaps between civil and structural teams." },
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
    <section id="services" style={{ background: "#efefef", padding: "96px 32px" }}>
      <div style={{ maxWidth: 1400, margin: "0 auto" }}>
        <div className="reveal" style={{ marginBottom: 60 }}>
          <p style={{ fontSize: "0.7rem", fontWeight: 800, letterSpacing: "0.25em", color: "#C4161C", textTransform: "uppercase", marginBottom: 14 }}>
            Our Services
          </p>
          <h2 style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)", fontWeight: 800, color: "#111", lineHeight: 1.1 }}>
            PEB Warehouse Construction Services
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 2 }}>
          {SERVICES.map((svc, i) => (
            <div key={svc.num} className={`reveal d${(i % 4) + 1} spring-card`}
              style={{ background: "#fff", padding: "28px 24px", cursor: "default" }}>
              <div style={{ fontSize: "0.72rem", fontWeight: 800, color: "#C4161C", letterSpacing: "0.15em", marginBottom: 12 }}>{svc.num}</div>
              <h3 style={{ fontWeight: 800, fontSize: "0.95rem", color: "#111", marginBottom: 10, letterSpacing: "-0.02em", lineHeight: 1.35 }}>{svc.title}</h3>
              <p style={{ fontSize: "0.82rem", lineHeight: 1.7, color: "#777" }}>{svc.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
