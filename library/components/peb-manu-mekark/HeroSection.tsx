"use client";
import { motion } from "motion/react";
import Image from "next/image";

const stagger = {
  visible: { transition: { staggerChildren: 0.11 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.6, ease: "easeOut" as const } },
};

const POINTS = [
  "Get a FREE detailed PEB project estimate within 24 hours — no obligation",
  "50% faster construction vs. conventional building methods",
  "30-40% cost savings with our optimized steel structure fabrication",
  "450+ successfully delivered industrial buildings across India",
];

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-start justify-center overflow-hidden">
      {/* Background */}
      <Image
        src="/peb-manu-mekark/bundle/Home Page Images/Warehouse Infrastrucre.webp"
        alt="Mekark industrial warehouse"
        fill
        className="object-cover object-center"
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black/55" />

      <div className="relative z-10 w-full max-w-215 mx-auto px-6 md:px-12 pt-20 pb-10 md:pt-24 md:pb-12 text-center">
        <motion.div initial="hidden" animate="visible" variants={stagger}>

          <motion.p
            variants={fadeUp}
            className="inline-block text-[#C4161C] font-bold uppercase text-[0.78rem] mb-5"
          >
            South India&apos;s #1 PEB Manufacturer
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="font-extrabold text-white leading-[1.08] tracking-tight text-balance"
            style={{ fontSize: "clamp(2.2rem, 5.5vw, 4rem)" }}
          >
            India&apos;s Most Trusted Pre-Engineered Building Manufacturer
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-5 text-[1.05rem] text-white/75 leading-[1.7] text-pretty max-w-160 mx-auto"
          >
            From industrial warehouses and manufacturing plants to logistics hubs and commercial steel buildings — Mekark delivers turnkey PEB solutions across India in as fast as 120 days.
          </motion.p>

          {/* Bullet points */}
          <motion.ul
            variants={stagger}
            className="mt-8 space-y-2.5 text-left max-w-140 mx-auto"
          >
            {POINTS.map((point) => (
              <motion.li key={point} variants={fadeUp} className="flex items-start gap-3 text-[0.93rem] text-white/85">
                <span className="mt-0.75 shrink-0 w-4.5 h-4.5 rounded-full bg-[#C4161C] flex items-center justify-center">
                  <svg width="9" height="7" viewBox="0 0 9 7" fill="none" aria-hidden="true">
                    <path d="M1 3.5L3.2 5.8L8 1" stroke="white" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                {point}
              </motion.li>
            ))}
          </motion.ul>

          {/* CTAs */}
          <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-3 mt-10">
            <a
              href="#contact"
              className="bg-[#C4161C] hover:bg-[#A31217] text-white font-bold px-7 py-3.5 rounded-md text-[0.95rem] transition-[background-color,transform] duration-150 active:scale-[0.96]"
            >
              Get Free PEB Estimate
            </a>
            <a
              href="#projects"
              className="border border-white/30 hover:border-white/60 text-white font-bold px-7 py-3.5 rounded-md text-[0.95rem] transition-[border-color,transform] duration-150 active:scale-[0.96]"
            >
              View Our Projects
            </a>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}

export default HeroSection;
