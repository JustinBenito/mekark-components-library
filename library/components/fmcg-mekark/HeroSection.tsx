"use client";
import { useEffect } from "react";

const mekarkContact = { phoneHref: "tel:+919876543210", phoneLabel: "+91 98765 43210", emailHref: "mailto:info@mekark.com", emailLabel: "info@mekark.com", whatsappUrl: "https://wa.me/919876543210", websiteUrl: "https://www.mekark.com" };

export default function HeroSection() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("active"); }),
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );
    document.querySelectorAll(".reveal").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section style={{ position: "relative", minHeight: "max(100vh, 600px)", background: "#000", display: "flex", flexDirection: "column", justifyContent: "center", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, #111 0%, #000 50%, #1a0000 100%)" }} />
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.45) 100%)" }} />
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 4, background: "var(--red)" }} />

      <div className="hero-content-wrap" style={{ position: "relative", zIndex: 10, width: "100%", display: "flex", alignItems: "center", justifyContent: "center", paddingTop: 96, paddingBottom: 64 }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 48px", width: "100%", textAlign: "center" }}>
          <div className="reveal hero-eyebrow" style={{
            display: "inline-flex", alignItems: "center", gap: 14,
            color: "rgba(255,255,255,0.55)", fontSize: "0.68rem", fontWeight: 800,
            letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: 32,
          }}>
            <span style={{ width: 32, height: 2, background: "var(--red)", flexShrink: 0 }} />
            India&rsquo;s Trusted Industrial Construction Partner
            <span style={{ width: 32, height: 2, background: "var(--red)", flexShrink: 0 }} />
          </div>

          <h1 className="reveal d1" style={{
            color: "#fff", fontWeight: 800, lineHeight: 1.04,
            fontSize: "clamp(2.4rem, 6.5vw, 5.5rem)",
            letterSpacing: "-0.04em", marginBottom: 32, maxWidth: 1000,
            marginLeft: "auto", marginRight: "auto",
          }}>
            Turnkey FMCG Factory<br />
            <span style={{ color: "var(--red)" }}>Construction</span> &amp;<br />
            Warehouse Building
          </h1>

          <p className="reveal d2" style={{
            color: "rgba(255,255,255,0.72)", fontSize: "clamp(1rem, 1.6vw, 1.2rem)",
            lineHeight: 1.75, maxWidth: 680, marginBottom: 48,
            marginLeft: "auto", marginRight: "auto",
          }}>
            Expert pre-engineered building (PEB) solutions, factory sheds, and supply chain warehouses for fast-moving consumer goods manufacturers — from concept to commissioning.
          </p>

          <div className="reveal d2" style={{ display: "flex", gap: 0, marginBottom: 48, flexWrap: "wrap", justifyContent: "center" }}>
            {["Expert Design & Engineering", "Fast-Track Execution", "ISO Quality Assured"].map((badge, i) => (
              <div key={badge} className="hero-badge" style={{
                padding: "11px 22px", border: "1px solid rgba(255,255,255,0.18)",
                borderRight: i < 2 ? "none" : "1px solid rgba(255,255,255,0.18)",
                color: "rgba(255,255,255,0.85)", fontSize: "0.82rem", fontWeight: 600,
                background: "rgba(0,0,0,0.25)", backdropFilter: "blur(4px)",
              }}>
                <span style={{ color: "var(--red)", marginRight: 6 }}>✓</span>{badge}
              </div>
            ))}
          </div>

          <div className="reveal d3" style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center" }}>
            <a href="#intake" className="hero-btn" style={{
              display: "inline-flex", alignItems: "center", gap: 10,
              background: "var(--red)", color: "#fff", padding: "15px 32px",
              fontWeight: 700, fontSize: "0.95rem", textDecoration: "none",
              transition: "background-color 150ms ease-out",
            }}>
              Get Free Consultation
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
            <a href={mekarkContact.whatsappUrl} target="_blank" rel="noopener noreferrer" className="hero-btn" style={{
              display: "inline-flex", alignItems: "center", gap: 10,
              border: "1px solid rgba(255,255,255,0.3)", color: "#fff", padding: "15px 28px",
              fontWeight: 600, fontSize: "0.95rem", textDecoration: "none",
              background: "rgba(0,0,0,0.25)", backdropFilter: "blur(4px)",
            }}>
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
