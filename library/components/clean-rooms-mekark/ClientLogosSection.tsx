import Image from "next/image";

const ROW1 = [
  "tata", "bosch", "ford", "hyundai", "reliance", "mrf", "tvs",
  "johnson", "lt", "srf", "voltas", "komatsu", "cavinkare", "eastman",
  "hero", "agile", "alliance",
];

const ROW2 = [
  "ar", "arun", "bs", "casa", "ctci", "epi", "exaktheit",
  "igarashi", "jk", "laf", "nsi", "orbittal", "sanmar", "sanmar1",
  "sarvam", "saveetha", "stetter", "vwu",
];

function MarqueeRow({ logos, reverse = false }: { logos: string[]; reverse?: boolean }) {
  const repeated = [...logos, ...logos];
  return (
    <div
      className={`flex gap-14 whitespace-nowrap ${reverse ? "animate-marquee-reverse" : "animate-marquee"}`}
      style={{ width: "max-content" }}
    >
      {repeated.map((logo, i) => (
        <div key={i} className="flex items-center justify-center shrink-0 h-16">
          <Image
            src={`/clean-rooms-mekark/Client Logo/${logo}.webp`}
            alt={logo}
            width={180}
            height={64}
            className="h-14 w-auto object-contain object-center"
            loading="lazy"
          />
        </div>
      ))}
    </div>
  );
}

export function ClientLogosSection() {
  return (
    <section className="bg-white py-12 border-b border-[rgba(0,0,0,0.06)] overflow-hidden">
      <p className="text-center text-gray-400 font-semibold text-[0.72rem] uppercase mb-8">
        Trusted By India&apos;s Leading Manufacturers
      </p>
      <div
        className="relative flex flex-col gap-8"
        style={{
          maskImage: "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
        }}
      >
        <MarqueeRow logos={ROW1} />
        <MarqueeRow logos={ROW2} reverse />
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee {
          animation: marquee 35s linear infinite;
        }
        .animate-marquee-reverse {
          animation: marquee-reverse 35s linear infinite;
        }
        .animate-marquee:hover,
        .animate-marquee-reverse:hover {
          animation-play-state: paused;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-marquee,
          .animate-marquee-reverse { animation: none; }
        }
      `}</style>
    </section>
  );
}

export default ClientLogosSection;
