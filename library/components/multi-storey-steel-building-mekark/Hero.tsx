"use client";

import Image from "next/image";
import { motion, type Variants } from "motion/react";

const BADGES = [
  {
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    text: "ISO Certified Manufacturer",
  },
  {
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="9 11 12 14 22 4" />
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </svg>
    ),
    text: "500+ Projects Delivered",
  },
  {
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    text: "Turnkey Contractor",
  },
  {
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    text: "Pan India Delivery",
  },
];

const container: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.08 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 32, filter: "blur(8px)" },
  visible: {
    opacity: 1, y: 0, filter: "blur(0px)",
    transition: {
      y: { type: "spring", stiffness: 80, damping: 18, mass: 0.8 },
      opacity: { duration: 0.5, ease: "easeOut" },
      filter: { duration: 0.55, ease: "easeOut" },
    },
  },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-12 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/multi-storey-steel-building-mekark/bundle/Home Page Images/Multi storey.webp"
          alt="Multi storey steel building construction"
          fill className="object-cover" priority sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-black/70 to-black/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/20" />
      </div>

      {/* Structural grid overlay */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          backgroundImage: `
            radial-gradient(circle, rgba(255,255,255,0.2) 1.5px, transparent 1.5px),
            linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px, 80px 80px, 80px 80px",
        }}
      />

      <div className="relative z-10 w-full max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
        <motion.div variants={container} initial="hidden" animate="visible" className="max-w-[660px]">
          {/* Eyebrow */}
          <motion.div
            variants={item}
            className="inline-flex items-center gap-2 mb-5 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20"
          >
            <span className="w-2 h-2 rounded-full bg-[#C4161C] shrink-0" />
            <span className="text-white/90 text-[0.72rem] font-bold uppercase tracking-[0.2em]">
              India's Trusted Multi Storey Steel Building Contractor
            </span>
          </motion.div>

          {/* H1 */}
          <motion.h1
            variants={item}
            className="text-white font-extrabold leading-[1.08] tracking-[-0.03em] mb-4"
            style={{ fontSize: "clamp(2.6rem, 6vw, 5rem)" }}
          >
            We Don&apos;t Just<br />
            <span className="text-[#C4161C]">Build Steel.</span><br />
            We Build <span className="text-[#C4161C]">Legacies.</span>
          </motion.h1>

          {/* Description */}
          <motion.p variants={item} className="text-white/80 text-[1.05rem] leading-[1.75] max-w-[580px] mb-6">
            From structural steel fabrication to full turnkey delivery — Mekark engineers
            multi-storey steel buildings, industrial complexes, and commercial steel
            structures that stand a century. Based in Chennai. Serving all of Tamil Nadu
            and Pan-India.
          </motion.p>

          {/* Badges */}
          <motion.div variants={item} className="grid grid-cols-2 sm:flex sm:flex-wrap gap-2 sm:gap-2.5 mb-8">
            {BADGES.map((b) => (
              <div
                key={b.text}
                className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1.5 rounded-xl sm:rounded-full bg-white/10 backdrop-blur-sm border border-white/20"
              >
                <span className="text-white/80 shrink-0">{b.icon}</span>
                <span className="text-white/90 text-[0.72rem] font-semibold leading-tight">{b.text}</span>
              </div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div variants={item} className="flex gap-3">
            <a
              href="#contact-form"
              className="flex-1 inline-flex justify-center items-center gap-2 px-4 sm:px-6 py-3.5 rounded-md bg-[#C4161C] text-white font-bold text-[0.9rem] sm:text-[0.95rem] transition-[background-color,transform] duration-150 ease-out hover:bg-[#A31217] active:scale-[0.96]"
            >
              Get Free Estimate
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
            <a
              href="#projects"
              className="flex-1 inline-flex justify-center items-center gap-2 px-4 sm:px-6 py-3.5 rounded-md bg-white/10 backdrop-blur-sm border border-white/25 text-white font-semibold text-[0.9rem] sm:text-[0.95rem] transition-[background-color,border-color] duration-150 hover:bg-white/15 hover:border-white/40"
            >
              View Projects
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" />
                <rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" />
              </svg>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
