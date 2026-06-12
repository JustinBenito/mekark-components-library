"use client";
import { motion } from "motion/react";
import Image from "next/image";

const INDUSTRIES = [
  {
    title: "Pharmaceutical Manufacturing",
    body: "Sterile injectables, solid dosage, aseptic fill-finish, and API production. We understand Schedule M, WHO prequalification, and USFDA expectations — not just the clean room specification.",
    tags: ["Grade A/B/C/D", "Aseptic Fill", "API"],
    img: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=800&q=80",
    imgAlt: "Pharmaceutical manufacturing",
  },
  {
    title: "Biotechnology & Cell Therapy",
    body: "Biosafety-classified environments for cell culture, gene therapy manufacturing, and ATMP production. Built to ISPE standards with containment-priority design.",
    tags: ["BSL-2 / BSL-3", "ATMP"],
    img: "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=800&q=80",
    imgAlt: "Biotechnology laboratory",
  },
  {
    title: "Semiconductor & Electronics",
    body: "ISO Class 3 to 6 environments with ESD-controlled flooring, chemical exhaust management, and vibration damping — for wafer fabrication, PCB assembly, and optical component production.",
    tags: ["ISO Class 3–5", "ESD Safe"],
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    imgAlt: "Semiconductor electronics manufacturing",
  },
  {
    title: "Hospital & Healthcare",
    body: "Operating theatre ventilation, hospital pharmacy clean rooms, and sterile compounding suites. Designed to NABH, ASHRAE 170, and EN ISO 13485 standards.",
    tags: ["OT / ICU", "Sterile Pharmacy"],
    img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80",
    imgAlt: "Hospital operating theatre",
  },
  {
    title: "Aerospace & Defence",
    body: "Precision assembly environments for avionics, optical systems, and satellite components where contamination control determines mission reliability.",
    tags: ["Avionics", "Satellite Components"],
    img: "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?auto=format&fit=crop&w=800&q=80",
    imgAlt: "Aerospace and defence manufacturing",
  },
  {
    title: "Research & Nanotechnology",
    body: "MEMS fabrication labs, nanomaterial research, and university-grade facilities with vibration-damped construction and ultra-low particle environments.",
    tags: ["MEMS / NEMS", "Nano Research"],
    img: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&w=800&q=80",
    imgAlt: "Research and nanotechnology laboratory",
  },
  {
    title: "Nutraceuticals & Cosmetics",
    body: "Hygienic-design production environments for dietary supplements, cosmeceuticals, and premium personal care — built to HACCP and GMP Cosmetics standards.",
    tags: ["HACCP", "Cosmetics GMP"],
    img: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=800&q=80",
    imgAlt: "Nutraceuticals and cosmetics production",
  },
  {
    title: "EV & Battery Technology",
    body: "Low-humidity and dry room environments for lithium-cell assembly, electrode coating, and battery module production — where moisture control is as critical as particle control.",
    tags: ["Dry Room", "<1% RH"],
    img: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=800&q=80",
    imgAlt: "EV and battery technology manufacturing",
  },
];

export function IndustriesSection() {
  return (
    <section id="industries" className="bg-[#F5F5F4] py-20 md:py-28">
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
            <p className="text-[#C4161C] font-semibold text-[0.75rem] uppercase tracking-[0.12em]">Sectors We Serve</p>
          </div>
          <h2 className="font-bold text-gray-900 text-balance" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}>
            Industries Where a Shortcut Is Not an Option
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {INDUSTRIES.map((ind, i) => (
            <motion.div
              key={ind.title}
              initial={{ opacity: 0, y: 18, filter: "blur(4px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.45, delay: i * 0.05, ease: [0.25, 1, 0.5, 1] }}
              className="group bg-white rounded-2xl overflow-hidden flex flex-col"
              style={{ boxShadow: "var(--shadow-border)" }}
            >
              {/* Image */}
              <div className="relative h-44 overflow-hidden shrink-0">
                <Image
                  src={ind.img}
                  alt={ind.imgAlt}
                  fill
                  unoptimized
                  className="object-cover transition-[transform] duration-500 ease-out group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/25 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col gap-2.5 flex-1">
                <h3 className="font-bold text-gray-900 text-[0.95rem] leading-snug">{ind.title}</h3>
                <p className="text-gray-400 text-[0.83rem] leading-[1.7] text-pretty flex-1">{ind.body}</p>
                <div className="flex flex-wrap gap-1.5 mt-1">
                  {ind.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[#C4161C] bg-[#C4161C]/8 border border-[#C4161C]/15 rounded-full px-2.5 py-0.5 text-[0.7rem] font-semibold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
