"use client";

import Image from "next/image";
import { motion } from "motion/react";
import CountUp from "@/components/cold-mekark/CountUp";
import { HardHatIcon, LayersIcon, AwardIcon, TruckIcon } from "@/components/cold-mekark/icons";

const FACTORY_IMAGES = [
  "/cold-mekark/bundle/Our Factories/DJI_20250301123710_0015_D copy.webp",
  "/cold-mekark/bundle/Our Factories/DJI_20250301123837_0021_D copy.webp",
  "/cold-mekark/bundle/Our Factories/DJI_20250301123854_0022_D copy.webp",
  "/cold-mekark/bundle/Our Factories/DJI_20250301123923_0025_D copy.webp",
  "/cold-mekark/bundle/Our Factories/DJI_20250301124425_0033_D copy.webp",
  "/cold-mekark/bundle/Our Factories/DJI_20250301124433_0035_D copy.webp",
];

const HOME_IMGS = [
  "/cold-mekark/bundle/Home Page Images/Manufacturing plant.webp",
  "/cold-mekark/bundle/Home Page Images/MEP.webp",
];

const FEATURES = [
  { Icon: HardHatIcon, label: "Steel Fabrication", sub: <><CountUp to={500} /> MT / Month Capacity</> },
  { Icon: LayersIcon, label: "Insulation Panels", sub: "In-House PUF & PIR" },
  { Icon: AwardIcon, label: "Certifications", sub: "ISO 9001 · 45001 · 14001" },
  { Icon: TruckIcon, label: "Delivery Coverage", sub: "Pan India Logistics" },
];

const spring = { type: "spring" as const, stiffness: 55, damping: 18 };

export default function Manufacturing() {
  return (
    <section className="w-full bg-[#f7f7f7] py-16 md:py-24 px-6">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={spring}
          className="text-center mb-14"
        >
          <p className="text-xs font-bold tracking-[0.22em] uppercase text-[#c4161c] mb-3">
            Our Manufacturing Unit
          </p>
          <h2 className="text-[1.8rem] md:text-[2.5rem] font-extrabold text-[#111] text-balance mb-3">
            The Factory Behind{" "}
            <span className="text-[#c4161c]">Your 120-Day Delivery</span>
          </h2>
          <p className="text-[#777] text-base max-w-[560px] mx-auto text-pretty">
            Our advanced manufacturing facility in Tamil Nadu is what separates Mekark from every other
            cold storage contractor in India. We don&apos;t wait for suppliers — we build it ourselves.
          </p>
        </motion.div>

        {/* Feature pills */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ ...spring, delay: 0.1 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-10"
        >
          {FEATURES.map((f) => (
            <div key={f.label} className="bg-white rounded-xl border border-black/[0.07] p-4 text-center shadow-[0_1px_4px_rgba(0,0,0,0.05)]">
              <div className="w-10 h-10 rounded-xl bg-[#fef2f2] flex items-center justify-center mx-auto mb-2">
                <f.Icon className="w-5 h-5 text-[#c4161c]" />
              </div>
              <div className="font-bold text-[0.87rem] text-[#111]">{f.label}</div>
              <div className="text-[0.75rem] text-[#888] mt-0.5">{f.sub}</div>
            </div>
          ))}
        </motion.div>

        {/* Image grid — factory */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-3">
          {FACTORY_IMAGES.map((src, i) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ ...spring, delay: i * 0.06 }}
              className="relative h-44 md:h-52 rounded-2xl overflow-hidden group"
            >
              <Image
                src={src}
                alt={`Mekark factory ${i + 1}`}
                fill
                className="object-cover group-hover:scale-[1.04] transition-transform duration-500 ease-out outline outline-1 -outline-offset-1 outline-black/10"
                sizes="(max-width:768px) 50vw, 33vw"
              />
            </motion.div>
          ))}
        </div>

        {/* MEP + plant images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {HOME_IMGS.map((src, i) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ ...spring, delay: i * 0.08 }}
              className="relative h-52 md:h-64 rounded-2xl overflow-hidden group"
            >
              <Image
                src={src}
                alt={`Mekark facility ${i + 1}`}
                fill
                className="object-cover group-hover:scale-[1.04] transition-transform duration-500 ease-out outline outline-1 -outline-offset-1 outline-black/10"
                sizes="(max-width:768px) 100vw, 50vw"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
