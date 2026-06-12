"use client";
import Image from "next/image";

const LOGOS = [
  "agile","alliance","ar","arun","bosch","bs","casa","cavinkare","ctci","eastman",
  "epi","exaktheit","ford","hero","hyundai","igarashi","jk","johnson","komatsu",
  "laf","lt","mrf","nsi","orbittal","reliance","sanmar","sanmar1","sarvam",
  "saveetha","srf","stetter","tata","tvs","voltas","vwu",
].map(n => `/cold-mekark/bundle/Client Logo/${n}.webp`);

const ROW1 = LOGOS.slice(0, 18);
const ROW2 = LOGOS.slice(17);

function Row({ srcs, reverse }: { srcs: string[]; reverse?: boolean }) {
  const doubled = [...srcs, ...srcs];
  return (
    <div style={{ overflow: "hidden", position: "relative" }}>
      <div style={{
        display: "flex", gap: 24, width: "max-content",
        animation: `${reverse ? "mqdR" : "mqd"} 40s linear infinite`,
      }}>
        {doubled.map((src, i) => (
          <div key={i} style={{ flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", width: 140, height: 60 }}>
            <Image src={src} alt="" width={120} height={48} style={{ objectFit: "contain", maxHeight: 48, width: "auto" }} />
          </div>
        ))}
      </div>
      <style>{`
        @keyframes mqd { from{transform:translateX(0)} to{transform:translateX(-50%)} }
        @keyframes mqdR { from{transform:translateX(-50%)} to{transform:translateX(0)} }
      `}</style>
    </div>
  );
}

export default function ClientLogos() {
  return (
    <section className="w-full bg-[#f7f7f7] border-y border-black/[0.06] py-10 overflow-hidden">
      <p className="text-center text-[0.7rem] font-extrabold tracking-[0.24em] uppercase text-[#aaa] mb-8">
        Trusted By India&apos;s Leading Industries
      </p>
      <div className="relative flex flex-col gap-4">
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-40 bg-gradient-to-r from-[#f7f7f7] to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-40 bg-gradient-to-l from-[#f7f7f7] to-transparent" />
        <Row srcs={ROW1} />
        <Row srcs={ROW2} reverse />
      </div>
    </section>
  );
}
