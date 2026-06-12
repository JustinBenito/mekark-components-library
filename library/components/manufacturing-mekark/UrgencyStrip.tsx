"use client";

export default function UrgencyStrip() {
  return (
    <section style={{ background: "#C4161C", padding: "72px 48px" }}>
      <div style={{ maxWidth: "1300px", margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "48px", flexWrap: "wrap" }}>

        {/* Left */}
        <div>
          <div style={{ display: "inline-flex", alignItems: "center", background: "rgba(0,0,0,0.25)", borderRadius: "6px", padding: "6px 14px", marginBottom: "20px" }}>
            <span style={{ color: "rgba(255,255,255,0.95)", fontSize: "0.75rem", fontWeight: 900, letterSpacing: "0.14em", textTransform: "uppercase" }}>
              4 SLOTS LEFT — FY 2026–27
            </span>
          </div>

          <h2 style={{ color: "#ffffff", fontSize: "clamp(1.8rem, 3vw, 2.6rem)", fontWeight: 900, lineHeight: 1.1, letterSpacing: "-0.025em", margin: "0 0 14px 0" }}>
            Q3 capacity is filling fast.
          </h2>

          <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "1.05rem", lineHeight: 1.65, margin: 0 }}>
            Only 4 turnkey project slots remaining this quarter · Chennai · Tamil Nadu · Pan-India
          </p>
        </div>

        {/* Right — CTA */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "10px", flexShrink: 0 }}>
          <a
            href="#contact"
            style={{
              display: "inline-flex", alignItems: "center", gap: "10px",
              background: "#ffffff", color: "#C4161C",
              fontSize: "1rem", fontWeight: 700,
              padding: "16px 32px", borderRadius: "999px",
              textDecoration: "none",
              boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
            }}
          >
            Schedule a Free Site Assessment
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "0.85rem", margin: 0, paddingLeft: "32px" }}>
            No commitment · Site visit is complimentary
          </p>
        </div>

      </div>
    </section>
  );
}
