"use client";
import { useEffect } from "react";

const TESTIMONIALS = [
  { quote: "Mekark completed our warehouse project within the committed timeline with excellent structural quality and professional project coordination. Their in-house execution made a huge difference in project speed.", name: "Rajesh Sundaramurthy", role: "Head of Projects", company: "Eastman Industries" },
  { quote: "We were looking for a reliable Industrial EPC Contractor for our manufacturing facility, and Mekark delivered beyond expectations. The entire process was streamlined from design to final handover.", name: "K. Venkataraman", role: "Director, Operations", company: "Sanmar Group" },
  { quote: "Their engineering team understood our operational requirements perfectly and delivered a scalable industrial infrastructure solution with zero execution delays.", name: "Priya Gopalakrishnan", role: "VP Infrastructure", company: "TVS Motor Company" },
  { quote: "Mekark's in-house manufacturing capability helped avoid common outsourcing issues. Communication, fabrication quality, and project management were handled exceptionally well.", name: "Arun Balaji", role: "Senior Manager, Facilities", company: "L&T" },
  { quote: "Our logistics warehouse project was completed faster than expected. The team maintained quality standards throughout the project while ensuring smooth execution.", name: "Vikram Nair", role: "Head of Logistics", company: "Reliance Industries" },
  { quote: "We partnered with Mekark for a large-scale industrial shed construction project, and their structural engineering expertise and execution planning were highly impressive.", name: "Suresh Mehta", role: "VP Projects", company: "Bosch India" },
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
    <section style={{ background: "#fff", padding: "96px 24px" }}>
      <div style={{ maxWidth: 1400, margin: "0 auto" }}>
        <div className="reveal" style={{ textAlign: "center", marginBottom: 60 }}>
          <p style={{ fontSize: "0.7rem", fontWeight: 800, letterSpacing: "0.25em", color: "#C4161C", textTransform: "uppercase", marginBottom: 14 }}>
            Client Testimonials
          </p>
          <h2 style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)", fontWeight: 800, color: "#111", lineHeight: 1.1 }}>
            What Industrial Leaders Say About Mekark EPC
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className={`reveal d${(i % 3) + 1} spring-card`}
              style={{ background: "#f8f8f8", padding: "36px 32px", cursor: "default", borderLeft: "3px solid transparent" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.borderLeftColor = "#C4161C"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.borderLeftColor = "transparent"; }}>
              <div style={{ display: "flex", gap: 4, marginBottom: 18 }}>
                {[0,1,2,3,4].map(n => (
                  <svg key={n} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#C4161C">
                    <polygon points="12 2 15 9 22 9.3 17 14 18.7 21 12 17.3 5.3 21 7 14 2 9.3 9 9" />
                  </svg>
                ))}
              </div>
              <p style={{ color: "#555", lineHeight: 1.8, fontSize: "0.9rem", marginBottom: 24, fontStyle: "italic" }}>
                &ldquo;{t.quote}&rdquo;
              </p>
              <div>
                <div style={{ fontWeight: 800, color: "#111", fontSize: "0.88rem" }}>{t.name}</div>
                <div style={{ color: "#888", fontSize: "0.78rem" }}>{t.role}, {t.company}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
