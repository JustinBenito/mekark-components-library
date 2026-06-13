"use client";
import { useRef } from "react";
import { motion, useInView } from "motion/react";
import Image from "next/image";
import { CountUp } from "@/components/peb-manu-mekark/CountUp";

const STATS = [
  { value: 15, suffix: "+", label: "Years of Experience", desc: "Proven track record in PEB construction" },
  { value: 450, suffix: "+", label: "Projects Delivered", desc: "Across India — warehouses, factories, sheds" },
  { value: 200000, suffix: "+", label: "MT Steel Fabricated", desc: "High-volume, quality-controlled output" },
  { value: 20, suffix: "+", label: "States Served", desc: "Pan-India PEB contractor network" },
  { value: 50, suffix: "M+", label: "Sq. Ft. Built", desc: "Industrial & commercial PEB buildings" },
  { value: 250, suffix: "+", label: "Satisfied Clients", desc: "Repeat business rate above 70%" },
];

const HIGHLIGHTS = [
  "Custom-designed for warehouses, factories & logistics hubs",
  "Faster delivery with factory-fabricated steel components",
  "End-to-end turnkey execution — design to final handover",
];

export function AboutSection() {
  const statsRef = useRef<HTMLDivElement>(null);
  const statsInView = useInView(statsRef, { once: true, amount: 0.2 });

  return (
    <section id="about" className="overflow-hidden">
      <div className="flex flex-col lg:flex-row lg:min-h-170">

        {/* ── Left: dark content panel ── */}
        <motion.div
          initial={{ opacity: 0, x: -32, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.85, ease: [0.25, 1, 0.5, 1] }}
          className="bg-[#111111] w-full lg:w-[54%] shrink-0 px-8 md:px-14 lg:px-16 xl:px-20 py-20 md:py-24 flex flex-col justify-center"
        >
          {/* Eyebrow */}
          <div className="flex items-center gap-2.5 mb-5">
            <div className="h-px w-8 bg-[#C4161C] shrink-0" />
            <p className="text-[#C4161C] font-bold uppercase text-[0.75rem]">About Mekark</p>
          </div>

          {/* Headline */}
          <h2
            className="font-bold text-white leading-tight text-balance"
            style={{ fontSize: "clamp(1.7rem, 2.8vw, 2.6rem)" }}
          >
            South India&apos;s Most Reliable PEB Building Manufacturer &amp; Steel Structure Fabrication Company
          </h2>

          {/* Body */}
          <p className="text-white/55 leading-[1.85] mt-5 text-[0.95rem] text-pretty max-w-lg">
            MEKARK is India&apos;s premier pre-engineered building manufacturer specializing in custom-designed industrial structures for warehouses, factories, logistics hubs, and specialized facilities. With 15+ years of dedicated experience, we&apos;ve established ourselves as the top PEB manufacturer in India.
          </p>

          {/* Highlights */}
          <ul className="mt-6 space-y-3">
            {HIGHLIGHTS.map((item, i) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.35 + i * 0.08 }}
                className="flex items-start gap-3 text-[0.91rem] text-white/75 leading-snug"
              >
                <span className="mt-0.5 shrink-0 w-5 h-5 rounded-full bg-[#C4161C]/20 border border-[#C4161C]/30 flex items-center justify-center">
                  <svg width="8" height="7" viewBox="0 0 9 7" fill="none" aria-hidden="true">
                    <path d="M1 3.5L3.2 5.8L8 1" stroke="#C4161C" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                {item}
              </motion.li>
            ))}
          </ul>

          {/* Stats — 3×2 grid with 1px line separators */}
          <div ref={statsRef} className="mt-10">
            <div className="grid grid-cols-3 gap-px bg-white/8 rounded-xl overflow-hidden">
              {STATS.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={statsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.45, delay: i * 0.06 }}
                  className="bg-[#111111] px-3 py-4 hover:bg-[#1A1A1A] transition-colors duration-150"
                >
                  <div
                    className="font-extrabold text-[#C4161C] tabular-nums leading-none"
                    style={{ fontSize: "clamp(1.25rem, 1.8vw, 1.6rem)" }}
                  >
                    <CountUp to={stat.value} suffix={stat.suffix} delay={i * 80} />
                  </div>
                  <p className="text-white/40 text-[0.7rem] font-medium mt-1.5 leading-tight">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3 mt-8 justify-center lg:justify-start">
            <a
              href="#projects"
              className="bg-[#C4161C] hover:bg-[#A31217] text-white font-bold px-6 py-3 rounded-md text-[0.9rem] transition-[background-color,transform] duration-150 active:scale-[0.96]"
            >
              Explore Our Projects
            </a>
            <a
              href="#contact"
              className="border border-white/20 hover:border-white/50 text-white/75 hover:text-white font-bold px-6 py-3 rounded-md text-[0.9rem] transition-[border-color,color,transform] duration-150 active:scale-[0.96]"
            >
              Talk to a PEB Expert
            </a>
          </div>
        </motion.div>

        {/* ── Right: full-bleed image ── */}
        <motion.div
          initial={{ opacity: 0, x: 32, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.85, delay: 0.1, ease: [0.25, 1, 0.5, 1] }}
          className="relative flex-1 min-h-95 lg:min-h-0"
        >
          <Image
            src="/peb-manu-mekark/bundle/Home Page Images/About Mekark.webp"
            alt="Mekark manufacturing facility"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
            loading="lazy"
          />

          {/* Left-side blend: dark panel seamlessly blends into the image */}
          <div className="absolute inset-0 bg-linear-to-r from-[#111111]/70 via-[#111111]/15 to-transparent" />
          {/* Bottom gradient for badge readability */}
          <div className="absolute inset-0 bg-linear-to-t from-black/55 via-transparent to-transparent" />

          {/* Floating badges */}
          <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-3 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.65 }}
              className="bg-white/95 backdrop-blur-sm rounded-xl px-4 py-3"
              style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.25)" }}
            >
              <p className="text-[0.58rem] font-extrabold tracking-[0.16em] uppercase text-[#C4161C] mb-0.5">Established</p>
              <p className="font-extrabold text-gray-900 text-[1.05rem] leading-none">Since 2009</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="bg-[#C4161C] rounded-xl px-4 py-3"
              style={{ boxShadow: "0 4px 24px rgba(196,22,28,0.45)" }}
            >
              <p className="text-[0.58rem] font-extrabold tracking-[0.16em] uppercase text-red-200 mb-0.5">Reach</p>
              <p className="font-extrabold text-white text-[1.05rem] leading-none">Pan-India</p>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default AboutSection;
