"use client";
import { useState, useEffect } from "react";

const TESTIMONIALS = [
  { quote: "Mekark delivered our 50,000 sq.ft. processing plant on time and within budget. Their engineering team optimized our production workflow, and the facility exceeded our operational expectations from day one. Highly professional.", name: "Rajesh Kumar", role: "Operations Director, Regional FMCG Leader", initial: "R" },
  { quote: "The PEB methodology Mekark used saved us 6 months and 18% on construction costs compared to traditional methods. Their turnkey approach eliminated vendor coordination headaches. Outstanding partner for facility development.", name: "Priya Menon", role: "Supply Chain Head, Large FMCG Brand", initial: "P" },
  { quote: "Our cold storage facility is now fully operational. Mekark's expertise in temperature-controlled infrastructure ensured product quality compliance. Their technical support throughout commissioning was invaluable.", name: "Vikram Shah", role: "Facility Manager, Perishable Goods Producer", initial: "V" },
  { quote: "Working with Mekark on our distribution warehouse was seamless. Their design enhanced our logistics efficiency by 22%, and the warehouse automation integration was flawless. Professional execution from start to finish.", name: "Anita Deshmukh", role: "Logistics Director, 3PL Provider", initial: "A" },
];

export default function TestimonialsSection() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("active"); }),
      { threshold: 0.08 }
    );
    document.querySelectorAll(".reveal").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section style={{ background: "#1e1e1e", padding: "96px 48px" }}>
      <div style={{ maxWidth: 1400, margin: "0 auto" }}>
        <div className="reveal" style={{ textAlign: "center", marginBottom: 60 }}>
          <p style={{ fontSize: "0.7rem", fontWeight: 800, letterSpacing: "0.25em", color: "var(--red)", textTransform: "uppercase", marginBottom: 14 }}>
            Client Testimonials
          </p>
          <h2 style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)", fontWeight: 800, color: "#fff", lineHeight: 1.1 }}>
            What FMCG Leaders Say About Mekark
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 2 }}>
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className={`reveal d${i + 1}`}
              style={{
                background: "#2a2a2a",
                padding: "44px 40px",
                boxShadow: "0 0 0 1px rgba(255,255,255,0.06)",
                transition: "transform 420ms cubic-bezier(0.34,1.56,0.64,1), box-shadow 420ms cubic-bezier(0.34,1.56,0.64,1)",
              }}
              onMouseEnter={(e) => { const el = e.currentTarget as HTMLDivElement; el.style.transform = "translateY(-6px)"; el.style.boxShadow = "0 0 0 1px rgba(196,22,28,0.5), 0 20px 48px rgba(196,22,28,0.15)"; }}
              onMouseLeave={(e) => { const el = e.currentTarget as HTMLDivElement; el.style.transform = ""; el.style.boxShadow = "0 0 0 1px rgba(255,255,255,0.06)"; }}>
              <div style={{ display: "flex", gap: 5, marginBottom: 22 }}>
                {[0,1,2,3,4].map(n => (
                  <svg key={n} xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="var(--red)" aria-hidden>
                    <polygon points="12 2 15 9 22 9.3 17 14 18.7 21 12 17.3 5.3 21 7 14 2 9.3 9 9" />
                  </svg>
                ))}
              </div>
              <p style={{ color: "rgba(255,255,255,0.68)", lineHeight: 1.85, fontSize: "0.95rem", marginBottom: 32, fontStyle: "italic" }}>
                &ldquo;{t.quote}&rdquo;
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: 14, paddingTop: 24, borderTop: "1px solid rgba(255,255,255,0.08)" }}>
                <div style={{ width: 44, height: 44, background: "var(--red)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 800, fontSize: "1rem", flexShrink: 0 }}>
                  {t.initial}
                </div>
                <div>
                  <div style={{ fontWeight: 800, color: "#fff", fontSize: "0.92rem" }}>{t.name}</div>
                  <div style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.8rem" }}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
