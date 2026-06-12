const row1 = [
  { src: "/space-frame-mekark/Clients/Bosch.png", name: "Bosch" },
  { src: "/space-frame-mekark/Clients/Ford_logo.png", name: "Ford" },
  { src: "/space-frame-mekark/Clients/hyundai.png", name: "Hyundai" },
  { src: "/space-frame-mekark/Clients/komatsu.png", name: "Komatsu" },
  { src: "/space-frame-mekark/Clients/Reliance-Industries-Limited-Logo.png", name: "Reliance Industries" },
  { src: "/space-frame-mekark/Clients/LT.png", name: "L&T" },
  { src: "/space-frame-mekark/Clients/tataelectronicspvtltd_logo.png", name: "Tata Electronics" },
  { src: "/space-frame-mekark/Clients/Hero_MotoCorp-Logo.png", name: "Hero MotoCorp" },
  { src: "/space-frame-mekark/Clients/TVS_Motor_Company-Logo.png", name: "TVS Motor" },
  { src: "/space-frame-mekark/Clients/Mrf-logo.png", name: "MRF" },
  { src: "/space-frame-mekark/Clients/voltas.png", name: "Voltas" },
  { src: "/space-frame-mekark/Clients/cavinkare.png", name: "CavinKare" },
  { src: "/space-frame-mekark/Clients/srf.png", name: "SRF" },
  { src: "/space-frame-mekark/Clients/71b6caee-03fd-4a74-ac30-0081b93aeb0c_Blue_Star_primary_logo.png", name: "Blue Star" },
  { src: "/space-frame-mekark/Clients/Sanmar.png", name: "Sanmar" },
  { src: "/space-frame-mekark/Clients/jk%20tyre.svg", name: "JK Tyre" },
  { src: "/space-frame-mekark/Clients/johnson%20electric.png", name: "Johnson Electric" },
  { src: "/space-frame-mekark/Clients/igarashi.png", name: "Igarashi" },
];

const row2 = [
  { src: "/space-frame-mekark/Clients/Casagrand-Logo.png", name: "Casagrand" },
  { src: "/space-frame-mekark/Clients/adityaram.png", name: "Aditya Ram" },
  { src: "/space-frame-mekark/Clients/agile.png", name: "Agile" },
  { src: "/space-frame-mekark/Clients/alliance.png", name: "Alliance" },
  { src: "/space-frame-mekark/Clients/arun%20excello.png", name: "Arun Excello" },
  { src: "/space-frame-mekark/Clients/ctci.png", name: "CTCI" },
  { src: "/space-frame-mekark/Clients/eastman.png", name: "Eastman" },
  { src: "/space-frame-mekark/Clients/epi.png", name: "EPI" },
  { src: "/space-frame-mekark/Clients/exaktheit.png", name: "Exaktheit" },
  { src: "/space-frame-mekark/Clients/la%20freighlift.png", name: "LA Freighlift" },
  { src: "/space-frame-mekark/Clients/ns-instruments.png", name: "NS Instruments" },
  { src: "/space-frame-mekark/Clients/orbittal.png", name: "Orbittal" },
  { src: "/space-frame-mekark/Clients/sarvam%20saftey.png", name: "Sarvam Safety" },
  { src: "/space-frame-mekark/Clients/saveetha.png", name: "Saveetha" },
  { src: "/space-frame-mekark/Clients/stetter.png", name: "Stetter" },
  { src: "/space-frame-mekark/Clients/vwu.png", name: "VWU" },
  { src: "/space-frame-mekark/Clients/sanmar%201.png", name: "Sanmar" },
];

function MarqueeItem({ src, name }: { src: string; name: string }) {
  return (
    <span className="flex items-center justify-center mx-12 shrink-0">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={name}
        className="h-11 w-auto max-w-37 object-contain"
      />
    </span>
  );
}

export default function ClientMarquee() {
  return (
    <section className="py-12 bg-gray-50 border-y border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-8 text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-gray-400">
          Trusted by India&apos;s Leading Enterprises
        </p>
      </div>

      {/* Row 1 — left */}
      <div
        className="relative mb-10 overflow-hidden"
        style={{
          maskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
        }}
      >
        <div className="marquee-track marquee-track-left">
          {[...row1, ...row1].map((client, i) => (
            <MarqueeItem key={i} src={client.src} name={client.name} />
          ))}
        </div>
      </div>

      {/* Row 2 — right */}
      <div
        className="relative overflow-hidden"
        style={{
          maskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
        }}
      >
        <div className="marquee-track marquee-track-right">
          {[...row2, ...row2].map((client, i) => (
            <MarqueeItem key={i} src={client.src} name={client.name} />
          ))}
        </div>
      </div>
    </section>
  );
}
