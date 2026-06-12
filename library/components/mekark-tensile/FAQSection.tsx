"use client";
import { useState, useEffect } from "react";

const FAQS = [
  { q: "How is tensile roofing structurally different from conventional roofing systems?", a: "Tensile systems rely on membrane tension rather than compression-heavy structures, resulting in lower dead load and higher design flexibility." },
  { q: "What factors influence tensile structure cost?", a: "Material type, span size, design complexity, wind load requirements, and installation conditions directly impact cost." },
  { q: "Can tensile structures withstand high wind and heavy rain conditions?", a: "Yes, when engineered correctly with proper anchoring and tension calculations, they perform exceptionally well in extreme weather." },
  { q: "What membrane materials are used in Mekark tensile systems?", a: "We use high-performance architectural fabrics like PVC-coated polyester and PTFE, selected based on project requirements." },
  { q: "Why should I choose Mekark over standard tensile contractors?", a: "Unlike generic vendors, Mekark combines structural engineering expertise with industrial execution capability, ensuring long-term performance." },
  { q: "Is tensile roofing suitable for industrial applications?", a: "Yes, especially for warehouses, parking, and extensions where lightweight, fast-install solutions are required." },
  { q: "What is the typical lifespan of a tensile structure?", a: "Depending on material quality and maintenance, tensile systems can last 10–25 years or more." },
  { q: "Can tensile roofing reduce internal heat in factories?", a: "Yes, reflective membranes significantly reduce heat absorption, improving thermal comfort." },
];

export default function FAQSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("active"); }),
      { threshold: 0.08 }
    );
    document.querySelectorAll(".reveal").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section style={{ background: "#f8fafc", padding: "96px 48px", borderBottom: "1px solid #e2e8f0" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div className="reveal" style={{ textAlign: "center", marginBottom: 64 }}>
          <p style={{ fontSize: "0.72rem", fontWeight: 800, letterSpacing: "0.25em", color: "#E31E24", textTransform: "uppercase", marginBottom: 14 }}>
            FAQ
          </p>
          <h2 style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)", fontWeight: 800, color: "#0f172a", lineHeight: 1.1 }}>
            Frequently Asked Questions
          </h2>
        </div>

        <div>
          {FAQS.map((faq, i) => {
            const open = openFaq === i;
            return (
              <div key={i} style={{ borderTop: "1px solid #e2e8f0" }}>
                <button
                  onClick={() => setOpenFaq(open ? null : i)}
                  style={{
                    width: "100%", display: "flex", alignItems: "center",
                    justifyContent: "space-between", gap: 24,
                    padding: "24px 0", background: "none", border: "none",
                    cursor: "pointer", textAlign: "left", fontFamily: "inherit",
                  }}>
                  <span style={{
                    fontSize: "1.02rem", fontWeight: 700,
                    color: open ? "#E31E24" : "#0f172a", lineHeight: 1.4,
                    transition: "color 250ms ease",
                  }}>
                    {faq.q}
                  </span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                    style={{ transition: "transform 260ms ease", transform: open ? "rotate(180deg)" : "rotate(0deg)", flexShrink: 0, color: open ? "#E31E24" : "#64748b" }}>
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>
                <div className={`faq-body${open ? " open" : ""}`}>
                  <div>
                    <p style={{ paddingBottom: 24, paddingRight: 40, color: "#64748b", lineHeight: 1.8, fontSize: "0.97rem" }}>
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
          <div style={{ borderTop: "1px solid #e2e8f0" }} />
        </div>
      </div>
    </section>
  );
}
