"use client";

import Image from "next/image";
import { motion } from "motion/react";
import CountUp from "@/components/cold-mekark/CountUp";

const spring = { type: "spring" as const, stiffness: 55, damping: 18 };

const STATS = [
  { value: 120, suffix: "D", label: "Project Delivery" },
  { value: 200, suffix: "+", label: "Projects Done" },
  { value: 15, suffix: "+", label: "Years Experience" },
  { value: 100, suffix: "%", label: "In-House EPC" },
];

export default function AboutMekark() {
  return (
    <section id="about" className="w-full bg-white py-16 md:py-24 px-6">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={spring}
          className="relative h-[260px] sm:h-[340px] lg:h-[500px] rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.15)]"
        >
          <Image
            src="/cold-mekark/bundle/Home Page Images/About Mekark.webp"
            alt="About Mekark"
            fill
            className="object-cover outline outline-1 -outline-offset-1 outline-black/10"
            sizes="(max-width:1024px) 100vw, 50vw"
          />
          {/* Red accent bar */}
          <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-[#c4161c]" />
        </motion.div>

        {/* Text */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={spring}
            className="text-xs font-bold tracking-[0.22em] uppercase text-[#c4161c] mb-3"
          >
            About Mekark
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ ...spring, delay: 0.08 }}
            className="text-[1.8rem] md:text-[2.5rem] font-extrabold text-[#111] leading-[1.1] tracking-[-0.02em] text-balance mb-4"
          >
            We Don&apos;t Just Build.{" "}
            <span className="text-[#c4161c]">We Engineer Profit.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ ...spring, delay: 0.14 }}
            className="text-[#555] text-[0.97rem] leading-[1.8] mb-4 text-pretty"
          >
            Mekark is Chennai&apos;s leading turnkey cold storage construction company — one of the very few EPC
            contractors in India that designs, engineers, manufactures, and commissions cold storage facilities entirely in-house.
            No middlemen. No delays. No excuses.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ ...spring, delay: 0.2 }}
            className="text-[#555] text-[0.97rem] leading-[1.8] mb-8 text-pretty"
          >
            From PEB cold storage buildings and insulated panel systems to industrial refrigeration infrastructure,
            our advanced manufacturing unit in Tamil Nadu powers every project with precision-fabricated components
            built for Indian climate conditions.
          </motion.p>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ ...spring, delay: 0.28 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-black/[0.06] rounded-2xl overflow-hidden border border-black/[0.06] mb-8"
          >
            {STATS.map((s, i) => (
              <div key={s.label} className="bg-white px-4 py-5 text-center">
                <div className="text-[1.6rem] font-extrabold text-[#c4161c]">
                  <CountUp to={s.value} delay={i * 100} />
                  <span className="text-[1.1rem]">{s.suffix}</span>
                </div>
                <div className="text-[0.72rem] font-medium text-[#888] mt-1">{s.label}</div>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ ...spring, delay: 0.34 }}
            className="flex gap-3 flex-wrap"
          >
            <button
              onClick={() => {
                const el = document.querySelector("#intake");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 bg-[#c4161c] hover:bg-[#a31217] active:scale-[0.96] text-white font-bold text-sm px-6 py-3.5 rounded-[8px] transition-[background-color,transform] duration-150"
            >
              Start Your Project
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </button>
            <a
              href="tel:+919790924754"
              className="inline-flex items-center gap-2 border border-black/[0.12] hover:border-[#c4161c] hover:text-[#c4161c] text-[#444] font-semibold text-sm px-6 py-3.5 rounded-[8px] transition-[border-color,color] duration-150"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2A19.79 19.79 0 0111.19 19a19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" /></svg>
              Talk to an Engineer
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
