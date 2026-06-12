"use client";
import Image from "next/image";

const LOGOS = [
  "agile", "alliance", "ar", "arun", "bosch", "bs", "casa", "cavinkare",
  "ctci", "eastman", "epi", "exaktheit", "ford", "hero", "hyundai",
  "igarashi", "jk", "johnson", "komatsu", "laf", "lt", "mrf", "nsi",
  "orbittal", "reliance", "sanmar", "sanmar1", "sarvam", "saveetha",
  "srf", "stetter", "tata", "tvs", "voltas", "vwu",
];

function LogoItem({ name, rowKey }: { name: string; rowKey: string }) {
  return (
    <div className="flex shrink-0 items-center justify-center" style={{ height: 56, width: "auto" }}>
      <Image
        src={`/peb-manu-mekark/Client Logo/${name}.webp`}
        alt={name}
        height={56}
        width={160}
        className="object-contain h-14 w-auto"
        loading="lazy"
      />
    </div>
  );
}

export function ClientLogosSection() {
  const half = Math.ceil(LOGOS.length / 2);
  // Row 1: full set doubled, scrolls left
  const row1 = [...LOGOS, ...LOGOS];
  // Row 2: offset by half so logos appear in a different order, scrolls right
  const row2Logos = [...LOGOS.slice(half), ...LOGOS.slice(0, half)];
  const row2 = [...row2Logos, ...row2Logos];

  return (
    <section className="bg-white py-14 border-b border-[rgba(0,0,0,0.06)] overflow-hidden">
      <div className="max-w-350 mx-auto px-6 md:px-12 lg:px-16 mb-10 text-center">
        <p className="text-[0.72rem] font-bold tracking-[0.28em] uppercase text-gray-400 mb-1">Trusted By</p>
        <h2 className="font-bold text-gray-900 text-[1.4rem] text-balance">From Startups to Fortune 500 — Mekark Builds for Every Scale</h2>
        <p className="text-gray-500 text-[0.95rem] mt-2 max-w-2xl mx-auto text-pretty">
          As a preferred Pre Engineered Steel Buildings contractor, Mekark has delivered turnkey industrial PEB projects for clients across automotive, pharma, FMCG, logistics, e-commerce, and heavy engineering sectors.
        </p>
      </div>

      {/* Row 1 — scrolls left */}
      <div className="relative">
        <div className="flex animate-marquee gap-16 w-max hover:[animation-play-state:paused]">
          {row1.map((name, i) => (
            <LogoItem key={`r1-${name}-${i}`} name={name} rowKey="r1" />
          ))}
        </div>
      </div>

      <div className="mt-10" />

      {/* Row 2 — scrolls right */}
      <div className="relative">
        <div className="flex animate-marquee-reverse gap-16 w-max hover:[animation-play-state:paused]">
          {row2.map((name, i) => (
            <LogoItem key={`r2-${name}-${i}`} name={name} rowKey="r2" />
          ))}
        </div>
      </div>
    </section>
  );
}
