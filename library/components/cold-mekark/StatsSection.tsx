"use client";

import { motion } from "motion/react";
import CountUp from "@/components/cold-mekark/CountUp";

const STATS = [
  { value: 200, suffix: "+", label: "Projects Completed" },
  { value: 15, suffix: "+", label: "Years in Cold Storage" },
  { value: 120, suffix: "", label: "Day Delivery Guarantee" },
  { value: 50, suffix: "M+", label: "Sq.Ft. Built Across India" },
  { value: 8, suffix: "", label: "Industry Verticals Served" },
];

const spring = { type: "spring" as const, stiffness: 55, damping: 18 };

export default function StatsSection() {
  return (
    <section className="w-full bg-[#c4161c] py-16 md:py-20 px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={spring}
        className="max-w-[1200px] mx-auto"
      >
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-px bg-white/20 rounded-2xl overflow-hidden">
          {STATS.map((s, i) => (
            <div key={s.label} className="bg-[#c4161c] px-6 py-8 text-center last:col-span-2 sm:last:col-span-1">
              <div className="text-[2.4rem] md:text-[2.8rem] font-extrabold text-white leading-none">
                <CountUp to={s.value} suffix={s.suffix} delay={i * 120} />
              </div>
              <div className="text-white/60 text-[0.75rem] font-medium mt-2 uppercase tracking-wide">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
