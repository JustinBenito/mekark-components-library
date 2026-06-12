"use client";

import { motion } from "motion/react";
import CountUp from "@/components/cold-mekark/CountUp";
import { BuildingIcon, SlidersIcon, BoltIcon, FactoryIcon, FileTextIcon, WrenchIcon } from "@/components/cold-mekark/icons";

const BENEFITS = [
  { id: "turnkey", Icon: BuildingIcon, title: "Turnkey EPC Delivery", desc: "Design, civil, structural, insulation, refrigeration, electrical, and commissioning under one contract and one project manager." },
  { id: "engineering", Icon: SlidersIcon, title: "Custom Engineering, Not Cookie-Cutter", desc: "Every cold storage is designed from scratch for your specific product, climate zone, throughput, and operational workflow." },
  { id: "energy", Icon: BoltIcon, title: <><CountUp to={30} />–<CountUp to={40} suffix="%" delay={200} /> Lower Energy Operating Costs</>, desc: <>Our thermal engineering team optimises insulation thickness, refrigerant selection, and compressor staging to minimise your electricity bill for the next <CountUp to={20} /> years.</> },
  { id: "manufacturing", Icon: FactoryIcon, title: "Advanced In-House Manufacturing", desc: "Our Tamil Nadu manufacturing facility produces PEB structural steel, sandwich insulated panels, and custom cold room components — ensuring quality control at source." },
  { id: "docs", Icon: FileTextIcon, title: "Compliance-Ready Documentation", desc: "FSSAI, WHO-GMP, GDP, NABARD subsidy, and local authority approvals — our team prepares all technical documentation as part of the project scope." },
  { id: "amc", Icon: WrenchIcon, title: "Lifetime AMC Partnership Available", desc: "We offer preventive maintenance contracts, 24/7 emergency response, and spare parts availability for every facility we commission across India." },
];

const spring = { type: "spring" as const, stiffness: 55, damping: 18 };

export default function Benefits() {
  return (
    <section className="w-full bg-white py-16 md:py-24 px-6">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={spring}
          className="text-center mb-14"
        >
          <p className="text-xs font-bold tracking-[0.22em] uppercase text-[#c4161c] mb-3">
            Benefits of Choosing Mekark
          </p>
          <h2 className="text-[1.8rem] md:text-[2.5rem] font-extrabold text-[#111] text-balance">
            What You Get When{" "}
            <span className="text-[#c4161c]">You Partner With Mekark</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {BENEFITS.map((b, i) => (
            <motion.div
              key={b.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ ...spring, delay: i * 0.07 }}
              className="rounded-2xl border border-black/[0.07] p-6 hover:border-[#c4161c]/20 hover:shadow-[0_4px_20px_rgba(196,22,28,0.07)] transition-[border-color,box-shadow] duration-200"
            >
              <div className="w-11 h-11 rounded-xl bg-[#fef2f2] flex items-center justify-center mb-4">
                <b.Icon className="w-5 h-5 text-[#c4161c]" />
              </div>
              <h3 className="font-bold text-[0.95rem] text-[#111] mb-2">{b.title}</h3>
              <p className="text-[#777] text-[0.85rem] leading-[1.7] text-pretty">{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
