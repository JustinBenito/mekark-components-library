"use client";
import Image from "next/image";

const LOGOS = [
  "agile","alliance","ar","arun","bosch","bs","casa","cavinkare","ctci","eastman",
  "epi","exaktheit","ford","hero","hyundai","igarashi","jk","johnson","komatsu",
  "laf","lt","mrf","nsi","orbittal","reliance","sanmar","sanmar1","sarvam",
  "saveetha","srf","stetter","tata","tvs","voltas","vwu",
].map(name => ({ name, src: `/new-mekark/Client Logo/${name}.webp` }));

const ROW1 = LOGOS.slice(0, 18);
const ROW2 = LOGOS.slice(17);
const CYCLE = (arr: typeof LOGOS) => [...arr, ...arr];

function MarqueeRow({ logos, reverse = false }: { logos: typeof LOGOS; reverse?: boolean }) {
  return (
    <div style={{ overflow: "hidden", width: "100%", position: "relative" }}>
      <div style={{
        display: "flex", gap: 12,
        animation: `marquee${reverse ? "Rev" : ""} 40s linear infinite`,
        width: "max-content",
      }}>
        {CYCLE(logos).map((logo, i) => (
          <div key={`${logo.name}-${i}`} style={{
            flexShrink: 0, width: 160, height: 72,
            display: "flex", alignItems: "center", justifyContent: "center",
            border: "1px solid rgba(0,0,0,0.08)", borderRadius: 8, background: "#fff",
          }}>
            <Image src={logo.src} alt={logo.name} width={120} height={48}
              style={{ objectFit: "contain", maxHeight: 48, width: "auto" }} />
          </div>
        ))}
      </div>
      <style>{`
        @keyframes marquee { from { transform: translateX(0) } to { transform: translateX(-50%) } }
        @keyframes marqueeRev { from { transform: translateX(-50%) } to { transform: translateX(0) } }
      `}</style>
    </div>
  );
}

export default function TrustedBy() {
  return (
    <section style={{ background: "#fff", padding: "40px 0 80px", overflow: "hidden" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, marginBottom: 48 }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M12 2L4 7v6c0 5.5 3.8 10.7 8 12 4.2-1.3 8-6.5 8-12V7l-8-5z" fill="#C4161C"/>
            <circle cx="12" cy="10" r="3" fill="white"/>
          </svg>
          <h2 style={{ fontSize: "clamp(1.2rem,3vw,2rem)", fontWeight: 700, color: "#111", margin: 0 }}>
            Trusted By Leading Industrial Enterprises
          </h2>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <MarqueeRow logos={ROW1} />
          <MarqueeRow logos={ROW2} reverse />
        </div>
      </div>
    </section>
  );
}
