"use client";
import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { CountUp } from "@/components/clean-rooms-mekark/CountUp";

const STATS = [
  { value: 25,  suffix: "+",      label: "Years of Experience",    isNumber: true },
  { value: 450, suffix: "+",      label: "Facilities Delivered",   isNumber: true },
  { value: null, text: "4.8★",    label: "Client Review Rating",   isNumber: false },
  { value: null, text: "PAN India", label: "Project Execution",    isNumber: false },
];

export function StatsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section className="bg-white border-b border-[rgba(0,0,0,0.06)]" ref={ref}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 py-14 md:py-18">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-0">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.25, 1, 0.5, 1] }}
              className={`flex flex-col items-center text-center py-8 px-4 ${
                i < 3 ? "lg:border-r border-[rgba(0,0,0,0.08)]" : ""
              } ${i === 0 || i === 2 ? "border-r border-[rgba(0,0,0,0.08)] lg:border-r-0" : ""}`}
            >
              <span className="font-extrabold text-[#C4161C] tabular-nums leading-none" style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}>
                {stat.isNumber && stat.value !== null ? (
                  <CountUp to={stat.value} suffix={stat.suffix} delay={i * 120} />
                ) : (
                  <span className="whitespace-nowrap">{stat.text}</span>
                )}
              </span>
              <p className="text-gray-500 font-medium text-[0.75rem] mt-2 uppercase tracking-tight">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
