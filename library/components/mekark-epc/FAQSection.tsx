"use client";
import { useState, useEffect } from "react";

const FAQS = [
  { q: "What does an Industrial EPC Solutions Provider do?", a: "An Industrial EPC Solutions Provider manages engineering, procurement, construction, fabrication, and project execution for factories, warehouses, industrial plants, logistics parks, and industrial infrastructure projects across India." },
  { q: "What services does an Engineering Procurement Construction Company provide?", a: "An Engineering Procurement Construction Company provides end-to-end industrial project solutions including design, engineering, procurement, structural steel fabrication, construction, project management, and turnkey execution." },
  { q: "Why choose a Turnkey Industrial Construction Company?", a: "A Turnkey Industrial Construction Company handles the complete project lifecycle from planning and engineering to fabrication, erection, roofing, cladding, and final project handover, ensuring faster and more efficient execution." },
  { q: "What does a PEB Industrial Building Contractor do?", a: "A PEB Industrial Building Contractor designs and constructs pre-engineered industrial buildings, warehouses, factory sheds, logistics parks, and steel structures with faster construction timelines and cost-efficient solutions." },
  { q: "Why is in-house manufacturing important in Industrial EPC projects?", a: "In-house manufacturing improves quality control, reduces outsourcing delays, ensures faster project execution, and supports better coordination throughout industrial construction projects." },
  { q: "What industries use Industrial EPC Solutions?", a: "Industrial EPC Solutions are widely used in manufacturing, logistics, FMCG, automotive, electronics, food processing, textile, warehousing, engineering, and industrial infrastructure sectors." },
  { q: "What is included in Industrial Roofing & Cladding Solutions?", a: "Industrial Roofing & Cladding Solutions include insulated roofing systems, wall cladding panels, weather protection systems, thermal-efficient industrial roofing, and long-lasting exterior building solutions." },
];

export default function FAQSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <section id="faq" style={{ background: "#fff", padding: "0", borderTop: "1px solid rgba(0,0,0,0.07)" }}>
      <div style={{ maxWidth: 1400, margin: "0 auto", padding: "96px 24px" }}>
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 40, flexWrap: "wrap", marginBottom: 72 }}>
          <div>
            <p style={{ fontSize: "0.7rem", fontWeight: 800, letterSpacing: "0.25em", color: "#C4161C", textTransform: "uppercase", marginBottom: 14 }}>FAQ</p>
            <h2 style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)", fontWeight: 800, color: "#111", lineHeight: 1.06, letterSpacing: "-0.04em" }}>
              Frequently Asked<br />Questions
            </h2>
          </div>
          <p style={{ color: "#888", fontSize: "0.97rem", lineHeight: 1.8, maxWidth: 360 }}>
            Everything you need to know about Mekark Industrial EPC services.
          </p>
        </div>

        <div>
          {FAQS.map((faq, i) => {
            const open = openFaq === i;
            return (
              <div key={i} style={{ borderTop: "1px solid rgba(0,0,0,0.09)" }}>
                <button
                  onClick={() => setOpenFaq(open ? null : i)}
                  style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 24, padding: "28px 0", background: "none", border: "none", cursor: "pointer", textAlign: "left", fontFamily: "inherit" }}>
                  <span style={{ fontSize: "clamp(0.95rem, 1.5vw, 1.1rem)", fontWeight: 700, color: open ? "#C4161C" : "#111", lineHeight: 1.4, transition: "color 250ms ease" }}>
                    {faq.q}
                  </span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                    style={{ transition: "transform 260ms ease", transform: open ? "rotate(180deg)" : "rotate(0deg)", flexShrink: 0, color: open ? "#C4161C" : "#999" }}>
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>
                <div className={`faq-body${open ? " open" : ""}`}>
                  <div>
                    <p style={{ paddingBottom: 24, paddingRight: 40, color: "#555", lineHeight: 1.8, fontSize: "0.97rem" }}>
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
          <div style={{ borderTop: "1px solid rgba(0,0,0,0.09)" }} />
        </div>
      </div>
    </section>
  );
}
