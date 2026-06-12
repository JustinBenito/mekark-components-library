"use client";

import { motion } from "motion/react";

const CLIENT_LOGOS = [
  { src: "/multi-storey-steel-building-mekark/multi-storey-steel-building-mekark/Client Logo/bosch.webp", alt: "Bosch" },
  { src: "/multi-storey-steel-building-mekark/multi-storey-steel-building-mekark/Client Logo/ford.webp", alt: "Ford" },
  { src: "/multi-storey-steel-building-mekark/multi-storey-steel-building-mekark/Client Logo/hyundai.webp", alt: "Hyundai" },
  { src: "/multi-storey-steel-building-mekark/multi-storey-steel-building-mekark/Client Logo/tvs.webp", alt: "TVS" },
  { src: "/multi-storey-steel-building-mekark/multi-storey-steel-building-mekark/Client Logo/tata.webp", alt: "TATA" },
  { src: "/multi-storey-steel-building-mekark/multi-storey-steel-building-mekark/Client Logo/reliance.webp", alt: "Reliance" },
  { src: "/multi-storey-steel-building-mekark/multi-storey-steel-building-mekark/Client Logo/lt.webp", alt: "L&T" },
  { src: "/multi-storey-steel-building-mekark/multi-storey-steel-building-mekark/Client Logo/mrf.webp", alt: "MRF" },
  { src: "/multi-storey-steel-building-mekark/multi-storey-steel-building-mekark/Client Logo/voltas.webp", alt: "Voltas" },
  { src: "/multi-storey-steel-building-mekark/multi-storey-steel-building-mekark/Client Logo/komatsu.webp", alt: "Komatsu" },
  { src: "/multi-storey-steel-building-mekark/multi-storey-steel-building-mekark/Client Logo/johnson.webp", alt: "Johnson Controls" },
  { src: "/multi-storey-steel-building-mekark/multi-storey-steel-building-mekark/Client Logo/jk.webp", alt: "JK Group" },
  { src: "/multi-storey-steel-building-mekark/multi-storey-steel-building-mekark/Client Logo/igarashi.webp", alt: "Igarashi" },
  { src: "/multi-storey-steel-building-mekark/multi-storey-steel-building-mekark/Client Logo/hero.webp", alt: "Hero" },
  { src: "/multi-storey-steel-building-mekark/multi-storey-steel-building-mekark/Client Logo/cavinkare.webp", alt: "Cavinkare" },
  { src: "/multi-storey-steel-building-mekark/multi-storey-steel-building-mekark/Client Logo/sanmar.webp", alt: "Sanmar" },
  { src: "/multi-storey-steel-building-mekark/multi-storey-steel-building-mekark/Client Logo/srf.webp", alt: "SRF" },
  { src: "/multi-storey-steel-building-mekark/multi-storey-steel-building-mekark/Client Logo/stetter.webp", alt: "Stetter" },
  { src: "/multi-storey-steel-building-mekark/multi-storey-steel-building-mekark/Client Logo/saveetha.webp", alt: "Saveetha" },
  { src: "/multi-storey-steel-building-mekark/multi-storey-steel-building-mekark/Client Logo/agile.webp", alt: "Agile" },
  { src: "/multi-storey-steel-building-mekark/multi-storey-steel-building-mekark/Client Logo/alliance.webp", alt: "Alliance" },
  { src: "/multi-storey-steel-building-mekark/multi-storey-steel-building-mekark/Client Logo/ctci.webp", alt: "CTCI" },
  { src: "/multi-storey-steel-building-mekark/multi-storey-steel-building-mekark/Client Logo/eastman.webp", alt: "Eastman" },
  { src: "/multi-storey-steel-building-mekark/multi-storey-steel-building-mekark/Client Logo/epi.webp", alt: "EPI" },
  { src: "/multi-storey-steel-building-mekark/multi-storey-steel-building-mekark/Client Logo/exaktheit.webp", alt: "Exaktheit" },
  { src: "/multi-storey-steel-building-mekark/multi-storey-steel-building-mekark/Client Logo/sarvam.webp", alt: "Sarvam" },
  { src: "/multi-storey-steel-building-mekark/multi-storey-steel-building-mekark/Client Logo/bs.webp", alt: "BS Group" },
  { src: "/multi-storey-steel-building-mekark/multi-storey-steel-building-mekark/Client Logo/casa.webp", alt: "Casa" },
  { src: "/multi-storey-steel-building-mekark/multi-storey-steel-building-mekark/Client Logo/sanmar1.webp", alt: "Sanmar Group" },
  { src: "/multi-storey-steel-building-mekark/multi-storey-steel-building-mekark/Client Logo/vwu.webp", alt: "VWU" },
  { src: "/multi-storey-steel-building-mekark/multi-storey-steel-building-mekark/Client Logo/laf.webp", alt: "LAF" },
  { src: "/multi-storey-steel-building-mekark/multi-storey-steel-building-mekark/Client Logo/nsi.webp", alt: "NSI" },
  { src: "/multi-storey-steel-building-mekark/multi-storey-steel-building-mekark/Client Logo/orbittal.webp", alt: "Orbittal" },
];

const ROW_ONE = CLIENT_LOGOS.slice(0, 17);
const ROW_TWO = CLIENT_LOGOS.slice(17);

export default function LogoMarquee() {
  const row1 = [...ROW_ONE, ...ROW_ONE];
  const row2 = [...ROW_TWO, ...ROW_TWO];

  return (
    <section className="py-14 bg-white border-y border-black/[0.06] overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 mb-10 text-center">
        <p className="text-[0.72rem] font-extrabold uppercase tracking-[0.25em] text-black/40">
          Trusted By India&apos;s Leading Enterprises
        </p>
      </div>

      {/* Row 1 — scrolls left */}
      <div className="relative marquee-row overflow-hidden mb-10">
        <div className="marquee-fade-left" />
        <div className="marquee-fade-right" />
        <div className="marquee-track" style={{ animationDuration: "40s" }}>
          {row1.map((logo, i) => (
            <div
              key={`r1-${logo.alt}-${i}`}
              className="flex items-center justify-center shrink-0 mx-12"
            >
              <motion.img
                src={logo.src}
                alt={logo.alt}
                className="h-12 w-auto object-contain"
                loading="lazy"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Row 2 — scrolls right */}
      <div className="relative marquee-row overflow-hidden">
        <div className="marquee-fade-left" />
        <div className="marquee-fade-right" />
        <div className="marquee-track marquee-track-reverse" style={{ animationDuration: "46s" }}>
          {row2.map((logo, i) => (
            <div
              key={`r2-${logo.alt}-${i}`}
              className="flex items-center justify-center shrink-0 mx-12"
            >
              <motion.img
                src={logo.src}
                alt={logo.alt}
                className="h-12 w-auto object-contain"
                loading="lazy"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
