"use client";
import { motion } from "motion/react";
import Image from "next/image";

const SERVICES = [
  {
    num: "01",
    title: "Modular Clean Rooms",
    body: "Factory-fabricated panel systems that cut construction time by half. Fully validated, dismantlable if your facility moves or expands, and built to the same ISO tolerances as conventional construction — without the timeline.",
    img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80",
    imgAlt: "Modular clean room facility",
    large: true,
  },
  {
    num: "02",
    title: "Turnkey EPC Projects",
    body: "One contract. One team. Civil works, MEP integration, HVAC commissioning, validation, and documentation — all from Mekark.",
    img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80",
    imgAlt: "Engineering and construction project",
    large: false,
  },
  {
    num: "03",
    title: "Pharmaceutical GMP",
    body: "WHO-GMP, EU Annex I, and Schedule M facilities for sterile fill-finish, aseptic processing, solid dosage, and API manufacturing.",
    img: "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=800&q=80",
    imgAlt: "Pharmaceutical laboratory",
    large: false,
  },
  {
    num: "04",
    title: "Industrial Clean Rooms",
    body: "Precision manufacturing environments for electronics assembly, optics, aerospace components, and EV battery production. Controlled contamination and ESD protection.",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
    imgAlt: "Industrial electronics manufacturing",
    large: true,
  },
  {
    num: "05",
    title: "Clean Room HVAC",
    body: "Custom air handling units, HEPA terminal filter banks, pressure differential controls, and BMS integration — designed, built, and commissioned by Mekark engineers.",
    img: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80",
    imgAlt: "Industrial HVAC systems",
    large: false,
  },
  {
    num: "06",
    title: "Validation & Qualification",
    body: "DQ, IQ, OQ, PQ protocols developed and executed by our internal validation engineers. Particle count reports, pressure mapping, and filter integrity tests formatted for CDSCO, WHO, or FDA submission.",
    img: "https://images.unsplash.com/photo-1579208570378-8c970854bc23?auto=format&fit=crop&w=1200&q=80",
    imgAlt: "Laboratory validation and testing",
    large: true,
  },
];

function SmallCard({ s, delay }: { s: typeof SERVICES[number]; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55, delay, ease: [0.25, 1, 0.5, 1] }}
      className="group rounded-2xl overflow-hidden bg-white flex flex-col"
      style={{ boxShadow: "var(--shadow-border)" }}
    >
      <div className="relative h-48 overflow-hidden shrink-0">
        <Image
          src={s.img}
          alt={s.imgAlt}
          fill
          unoptimized
          className="object-cover transition-[transform] duration-500 ease-out group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
      </div>
      <div className="p-6 flex flex-col gap-2.5 grow">
        <span className="text-[#C4161C] font-extrabold text-[0.7rem] tabular-nums">{s.num}</span>
        <h3 className="font-bold text-gray-900 text-[1rem] leading-snug">{s.title}</h3>
        <p className="text-gray-400 text-[0.86rem] leading-[1.7] text-pretty">{s.body}</p>
      </div>
    </motion.div>
  );
}

function LargeCard({ s, delay, flip = false }: { s: typeof SERVICES[number]; delay: number; flip?: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55, delay, ease: [0.25, 1, 0.5, 1] }}
      className={`group rounded-2xl overflow-hidden bg-white lg:col-span-2 flex flex-col ${flip ? "md:flex-row-reverse" : "md:flex-row"}`}
      style={{ boxShadow: "var(--shadow-border)" }}
    >
      <div className="relative h-56 md:h-auto md:w-[55%] overflow-hidden shrink-0">
        <Image
          src={s.img}
          alt={s.imgAlt}
          fill
          unoptimized
          className="object-cover transition-[transform] duration-500 ease-out group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, 55vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/10" />
      </div>
      <div className="p-8 flex flex-col justify-center gap-3">
        <span className="text-[#C4161C] font-extrabold text-[0.7rem] tabular-nums">{s.num}</span>
        <h3 className="font-bold text-gray-900 text-[1.15rem] leading-snug">{s.title}</h3>
        <p className="text-gray-400 text-[0.9rem] leading-[1.75] text-pretty">{s.body}</p>
      </div>
    </motion.div>
  );
}

export function ServicesSection() {
  // Layout: [large 01] [small 02] / [small 03] [large 04] / [small 05] [large 06]
  return (
    <section id="solutions" className="bg-white py-20 md:py-28">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">

        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-5">
            <span className="block h-px w-6 bg-[#C4161C]" />
            <p className="text-[#C4161C] font-semibold text-[0.75rem] uppercase tracking-[0.12em]">What We Build</p>
          </div>
          <h2
            className="font-bold text-gray-900 text-balance"
            style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)" }}
          >
            Our Clean Room Solutions
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {/* Row 1: large (col-span-2) + small */}
          <LargeCard s={SERVICES[0]} delay={0} />
          <SmallCard s={SERVICES[1]} delay={0.08} />

          {/* Row 2: small + large (col-span-2) */}
          <SmallCard s={SERVICES[2]} delay={0.05} />
          <LargeCard s={SERVICES[3]} delay={0.1} flip />

          {/* Row 3: small + large (col-span-2) */}
          <SmallCard s={SERVICES[4]} delay={0.05} />
          <LargeCard s={SERVICES[5]} delay={0.1} />
        </div>

      </div>
    </section>
  );
}

export default ServicesSection;
