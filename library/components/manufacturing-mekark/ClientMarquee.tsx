"use client";

import Image from "next/image";

const row1 = [
  "agile","alliance","ar","arun","bosch","bs","casa","cavinkare",
  "ctci","eastman","epi","exaktheit","ford","hero","hyundai","igarashi","jk","johnson",
];

const row2 = [
  "komatsu","laf","lt","mrf","nsi","orbittal","reliance","sanmar",
  "sanmar1","sarvam","saveetha","srf","stetter","tata","tvs","voltas","vwu",
];

function LogoBadge({ file }: { file: string }) {
  return (
    <div
      className="shrink-0 flex items-center justify-center bg-white rounded-xl px-6"
      style={{ height: "84px", minWidth: "150px" }}
    >
      <Image
        src={`/manufacturing-mekark/Client Logo/${file}.webp`}
        alt={file}
        width={140}
        height={60}
        className="object-contain max-h-14 w-auto"
        style={{ maxWidth: 140 }}
      />
    </div>
  );
}

export default function ClientMarquee() {
  return (
    <section className="py-8 overflow-hidden bg-white" style={{ borderBottom: "1px solid rgba(0,0,0,0.06)" }}>
      {/* Row 1 — scrolls left */}
      <div className="mb-4">
        <div
          className="flex gap-5"
          style={{ animation: "marquee-left 36s linear infinite", width: "max-content" }}
        >
          {[...row1, ...row1].map((file, i) => (
            <LogoBadge key={i} file={file} />
          ))}
        </div>
      </div>

      {/* Row 2 — scrolls right */}
      <div>
        <div
          className="flex gap-5"
          style={{ animation: "marquee-right 30s linear infinite", width: "max-content" }}
        >
          {[...row2, ...row2].map((file, i) => (
            <LogoBadge key={i} file={file} />
          ))}
        </div>
      </div>
    </section>
  );
}
