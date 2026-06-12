"use client";

import { motion } from "motion/react";
import CountUp from "@/components/cold-mekark/CountUp";
import { TrendingDownIcon, PackageIcon, LandmarkIcon, BoltIcon } from "@/components/cold-mekark/icons";

const REASONS = [
  {
    Icon: TrendingDownIcon,
    title: "Slash Post-Harvest Loss",
    desc: <>India loses ₹<CountUp to={92000} /> crore of food annually due to inadequate cold chain. A temperature-controlled warehouse eliminates up to <CountUp to={70} suffix="%" /> of spoilage losses from day one.</>,
  },
  {
    Icon: PackageIcon,
    title: "Unlock Premium Markets",
    desc: "Exporters, retail chains, and pharma distributors require certified cold chain compliance. Your own cold storage facility opens doors to high-margin contracts instantly.",
  },
  {
    Icon: LandmarkIcon,
    title: "Capture Government Subsidies",
    desc: <>NABARD, NHB, and MoFPI offer up to <CountUp to={35} suffix="%" /> capital subsidy for cold storage construction. Act now — 2025 schemes are time-limited and oversubscribed.</>,
  },
  {
    Icon: BoltIcon,
    title: "Future-Proof Your Supply Chain",
    desc: <>With pharmaceutical cold storage, frozen food logistics, and FMCG distribution booming, your own temperature-controlled warehouse is a <CountUp to={20} />-year asset that pays for itself in <CountUp to={4} />–<CountUp to={6} delay={200} /> years.</>,
  },
];

const spring = { type: "spring" as const, stiffness: 55, damping: 18 };

export default function WhyColdStorage() {
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
            Why Cold Storage
          </p>
          <h2 className="text-[1.8rem] md:text-[2.5rem] font-extrabold text-[#111] text-balance mb-4">
            The Invisible Infrastructure<br className="hidden md:block" />
            That Grows Your Revenue
          </h2>
          <p className="text-[#777] text-base max-w-[560px] mx-auto text-pretty">
            Cold storage is not a cost centre — it&apos;s a competitive weapon. Here&apos;s why serious businesses are investing now.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {REASONS.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ ...spring, delay: i * 0.09 }}
              className="bg-white rounded-2xl p-7 border border-black/[0.07] shadow-[0_2px_12px_rgba(0,0,0,0.06)] hover:shadow-[0_4px_24px_rgba(0,0,0,0.1)] transition-shadow duration-200"
            >
              <div className="w-10 h-10 rounded-xl bg-[#fef2f2] flex items-center justify-center mb-4">
                <r.Icon className="w-5 h-5 text-[#c4161c]" />
              </div>
              <h3 className="text-[1.05rem] font-bold text-[#111] mb-2">{r.title}</h3>
              <p className="text-[#666] text-[0.9rem] leading-[1.75] text-pretty">{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
