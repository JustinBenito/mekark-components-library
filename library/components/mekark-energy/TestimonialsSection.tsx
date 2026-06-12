"use client";
import { useEffect } from "react";

const TESTIMONIALS = [
  { quote: "Mekark delivered our 50 MW power plant project 2 months ahead of schedule. Their turnkey EPC approach eliminated coordination chaos. Quality was exceptional.", name: "Raj Kumar Sharma", role: "Director, Energy Infrastructure Corp" },
  { quote: "The 120-day delivery program was a game-changer. In-house manufacturing ensured consistent quality and saved us ₹5 Cr compared to other EPC contractors.", name: "Priya Desai", role: "Project Manager, Renewable Energy Firm" },
  { quote: "We needed reliable industrial construction with transparent pricing. Mekark delivered flawless execution — no hidden costs, no surprises. Our facility runs perfectly.", name: "Vikram Patel", role: "Owner, Industrial Manufacturing Facility" },
  { quote: "Their substation construction and electrical scope was handled end-to-end. Commissioning was smooth and the documentation was thorough. A truly professional EPC team.", name: "Suresh Nair", role: "VP Projects, Power Distribution Ltd" },
  { quote: "Mekark's PEB structures came in 18% under budget. The steel quality and erection precision were outstanding. We've already awarded them our next expansion project.", name: "Ananya Krishnan", role: "COO, Heavy Industries Group" },
  { quote: "From concept to commissioning in 110 days — that's unheard of in this industry. Mekark's parallel workflow model is genuinely different from any other contractor.", name: "Deepak Mehta", role: "Head of Capital Projects, Greenfield Energy" },
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
    <section style={{ background: "#fff", padding: "100px 32px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div className="reveal" style={{ textAlign: "center", marginBottom: 64 }}>
          <p style={{ fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#C4161C", marginBottom: 14 }}>
            Client Feedback
          </p>
          <h2 style={{ fontSize: "clamp(1.9rem, 3.2vw, 2.8rem)", fontWeight: 800, color: "#111", letterSpacing: "-0.04em", lineHeight: 1.1 }}>
            What Our Clients Say
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className={`reveal d${(i % 3) + 1} spring-card`}
              style={{ background: "#f9f9f9", padding: "32px 28px", cursor: "default", borderRadius: 8 }}>
              <div style={{ display: "flex", gap: 4, marginBottom: 16 }}>
                {[0,1,2,3,4].map(n => (
                  <svg key={n} xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="#C4161C">
                    <polygon points="12 2 15 9 22 9.3 17 14 18.7 21 12 17.3 5.3 21 7 14 2 9.3 9 9" />
                  </svg>
                ))}
              </div>
              <p style={{ color: "#555", lineHeight: 1.75, fontSize: "0.88rem", marginBottom: 20, fontStyle: "italic" }}>
                &ldquo;{t.quote}&rdquo;
              </p>
              <div>
                <div style={{ fontWeight: 800, color: "#111", fontSize: "0.85rem" }}>{t.name}</div>
                <div style={{ color: "#888", fontSize: "0.76rem" }}>{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
