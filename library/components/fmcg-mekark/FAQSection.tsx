"use client";
import { useState, useEffect } from "react";

const FAQS = [
  { q: "What types of FMCG facilities does Mekark construct?", a: "Mekark specializes in factory buildings, warehouses, cold storage facilities, PEB steel structures, distribution centers, and turnkey industrial infrastructure for the FMCG sector — from concept to commissioning." },
  { q: "How long does a typical FMCG factory construction take?", a: "Using our PEB methodology, most projects are completed 30–40% faster than traditional construction. A 50,000 sq.ft. factory typically takes 12–18 months from design approval to handover." },
  { q: "What areas does Mekark serve?", a: "Headquartered in Chennai, Tamil Nadu, we've delivered projects across Tamil Nadu, Andhra Pradesh, Karnataka, Maharashtra, Gujarat, and other major industrial corridors across India." },
  { q: "Do you offer fixed-price contracts?", a: "Yes. We offer transparent fixed-price contracts with minimal change orders, ensuring project cost predictability and protecting your budget throughout execution." },
  { q: "What is PEB and why is it better for FMCG facilities?", a: "Pre-Engineered Buildings (PEB) use factory-fabricated steel components assembled on-site, reducing construction time by 30–40%, cutting costs, and providing flexible layouts ideal for FMCG manufacturing and warehousing." },
  { q: "Are your facilities ISO certified and compliant?", a: "All Mekark facilities are built to ISO 9001 standards with strict quality control protocols. Every project meets FMCG operational regulations, safety specifications, and regulatory compliance requirements." },
  { q: "Can you handle cold storage and temperature-controlled facilities?", a: "Yes. We specialize in refrigerated warehouse manufacturing with precision climate control for perishable goods, pharmaceutical products, and other temperature-sensitive FMCG categories." },
  { q: "How do I get a quote?", a: "Fill out the project enquiry form below with your location, project type, and approximate area. Our engineering team responds within 24 hours with a preliminary assessment." },
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
    <section id="faq" style={{ background: "#fff", padding: "100px 48px" }}>
      <div style={{ maxWidth: 1400, margin: "0 auto" }}>
        <div className="reveal" style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 40, flexWrap: "wrap", marginBottom: 72 }}>
          <div>
            <p style={{ fontSize: "0.7rem", fontWeight: 800, letterSpacing: "0.25em", color: "var(--red)", textTransform: "uppercase", marginBottom: 14 }}>FAQ</p>
            <h2 style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)", fontWeight: 800, color: "#111", lineHeight: 1.06, letterSpacing: "-0.04em" }}>
              Frequently Asked<br />Questions
            </h2>
          </div>
          <p style={{ color: "#888", fontSize: "0.97rem", lineHeight: 1.8, maxWidth: 360 }}>
            Everything you need to know before starting your FMCG facility project with Mekark.
          </p>
        </div>

        <div>
          {FAQS.map((faq, i) => {
            const open = openFaq === i;
            return (
              <div key={i} style={{ borderTop: "1px solid rgba(0,0,0,0.09)" }}>
                <button
                  onClick={() => setOpenFaq(open ? null : i)}
                  style={{
                    width: "100%", display: "flex", alignItems: "center",
                    justifyContent: "space-between", gap: 32,
                    padding: "30px 0", background: "none", border: "none",
                    cursor: "pointer", textAlign: "left", fontFamily: "inherit",
                  }}>
                  <div style={{ display: "flex", alignItems: "baseline", gap: 28, flex: 1 }}>
                    <span style={{
                      fontSize: "0.68rem", fontWeight: 800, letterSpacing: "0.18em",
                      color: open ? "var(--red)" : "rgba(0,0,0,0.2)", flexShrink: 0,
                      transition: "color 300ms ease",
                    }}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span style={{
                      fontSize: "clamp(1rem, 1.5vw, 1.18rem)", fontWeight: 700,
                      color: open ? "var(--red)" : "#111", lineHeight: 1.4,
                      transition: "color 300ms ease",
                    }}>
                      {faq.q}
                    </span>
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                    style={{ transition: "transform 260ms ease", transform: open ? "rotate(180deg)" : "rotate(0deg)", flexShrink: 0, color: open ? "var(--red)" : "#999" }}>
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>
                <div className={`faq-body${open ? " open" : ""}`}>
                  <div>
                    <p style={{ paddingBottom: 28, paddingLeft: 56, paddingRight: 48, color: "#555", lineHeight: 1.8, fontSize: "0.97rem" }}>
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
