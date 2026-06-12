"use client";

import Image from "next/image";
import { motion } from "motion/react";
import CountUp from "@/components/cold-mekark/CountUp";
import { SnowflakeIcon } from "@/components/cold-mekark/icons";

const SOLUTIONS = [
  {
    num: "01",
    title: "Blast Freezer Rooms",
    desc: "Rapid chilling for seafood, meat, poultry, and ice cream — engineered for maximum freeze-down speed and energy efficiency.",
    temp: "-40°C to -25°C",
    img: "/cold-mekark/bundle/Our Completed Projects/DJI_20250926161559_0023_D copy.webp",
  },
  {
    num: "02",
    title: "Deep Freeze Warehouses",
    desc: "Long-term frozen food storage for FMCG manufacturers, logistics companies, and export-oriented units.",
    temp: "-25°C to -10°C",
    img: "/cold-mekark/bundle/Our Completed Projects/DJI_20260220142747_0044_D copy 2.webp",
  },
  {
    num: "03",
    title: "Chilled Cold Rooms",
    desc: "Fruits, vegetables, dairy, and beverages. Precise humidity and temperature control preserves shelf life and reduces wastage.",
    temp: "0°C to 10°C",
    img: "/cold-mekark/bundle/Our Completed Projects/DJI_20260221125016_0027_D copy 2.webp",
  },
  {
    num: "04",
    title: "Pharma Cold Storage",
    desc: "GDP-compliant, WHO-GMP-ready temperature-controlled warehouses for vaccines, biologics, and critical healthcare products.",
    temp: "2°C to 8°C",
    img: "/cold-mekark/bundle/Our Completed Projects/DJI_20250319140917_0052_D copy.webp",
  },
  {
    num: "05",
    title: "Controlled Atmosphere Stores",
    desc: <>Modified atmosphere technology for apple, grape, mango, and premium produce storage. Extends shelf life by up to <CountUp to={10} suffix="x" />.</>,
    temp: "0°C to 5°C | CA",
    img: "/cold-mekark/bundle/Our Completed Projects/DJI_20260221125744_0034_D copy 2.webp",
  },
  {
    num: "06",
    title: "PEB Cold Storage Buildings",
    desc: "Pre-Engineered steel structures with integrated insulated panels — the fastest and most cost-efficient cold storage shed construction method.",
    temp: "Any Temperature",
    img: "/cold-mekark/bundle/Our Completed Projects/DJI_20250301123134_0007_D copy.webp",
  },
];

const spring = { type: "spring" as const, stiffness: 55, damping: 18 };

export default function Solutions() {
  return (
    <section id="solutions" className="w-full bg-white py-16 md:py-24 px-6">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={spring}
          className="text-center mb-14"
        >
          <p className="text-xs font-bold tracking-[0.22em] uppercase text-[#c4161c] mb-3">
            Our Cold Storage Solutions
          </p>
          <h2 className="text-[1.8rem] md:text-[2.5rem] font-extrabold text-[#111] text-balance mb-3">
            Every Temperature.{" "}
            <span className="text-[#c4161c]">Every Industry.</span>{" "}
            One Builder.
          </h2>
          <p className="text-[#777] text-base max-w-[560px] mx-auto text-pretty">
            We construct all categories of industrial cold storage, custom-engineered for your specific product,
            throughput, and regulatory requirements.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SOLUTIONS.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ ...spring, delay: i * 0.07 }}
              className="group bg-white rounded-2xl overflow-hidden border border-black/[0.08] shadow-[0_1px_4px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_32px_rgba(196,22,28,0.1)] hover:border-[#c4161c]/20 transition-[box-shadow,border-color] duration-200"
            >
              {/* Image */}
              <div className="relative h-44 overflow-hidden">
                <Image
                  src={s.img}
                  alt={s.title}
                  fill
                  className="object-cover group-hover:scale-[1.04] transition-transform duration-500 ease-out outline-1 -outline-offset-1 outline-black/10"
                  sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
                <span className="absolute top-3 left-3 text-[0.68rem] font-extrabold tracking-[0.2em] text-white/80 bg-black/30 backdrop-blur-sm px-2 py-1 rounded-md">
                  {s.num}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-[1rem] font-bold text-[#111] mb-2">{s.title}</h3>
                <p className="text-[#777] text-[0.875rem] leading-[1.7] mb-4 text-pretty">{s.desc}</p>
                <div className="inline-flex items-center gap-1.5 rounded-full bg-[#f0f0f0] px-3 py-1 text-[0.72rem] font-bold text-[#555]">
                  <SnowflakeIcon className="w-3 h-3 text-[#c4161c] shrink-0" />
                  {s.temp}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
