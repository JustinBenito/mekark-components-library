"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { CountUp } from "@/components/manufacturing-mekark/CountUp";

const spring = { type: "spring" as const, stiffness: 260, damping: 28 };

const stats = [
  { countTo: 6, suffix: "L+", label: "Sq.ft Own Manufacturing Unit" },
  { countTo: 40, suffix: "K", label: "Tons Annual Steel Capacity" },
  { value: "ISO", label: "Certified End-to-End Process" },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-[82vh] flex items-center overflow-hidden">

      {/* Background image */}
      <Image
        src="/hero.webp"
        alt="Mekark manufacturing facility"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Gradient overlay — heavy on left where text sits */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(105deg, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.78) 35%, rgba(0,0,0,0.55) 60%, rgba(0,0,0,0.25) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1300px] mx-auto px-6 md:px-12 lg:px-16 xl:px-24 pt-28 pb-16">
        <div className="max-w-[680px]">

          {/* Label pill */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...spring, delay: 0.05 }}
            className="inline-flex items-center rounded-full px-4 py-1.5 mb-7"
            style={{
              background: "rgba(196,22,28,0.15)",
              border: "1px solid rgba(196,22,28,0.35)",
              boxShadow: "inset 0 0 16px rgba(196,22,28,0.25)",
            }}
          >
            <span className="text-[0.78rem] font-semibold text-[#C4161C]">
              Manufacturing Building Contractor · India
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...spring, delay: 0.15 }}
            className="font-black text-white leading-[1.04] mb-6"
            style={{ fontSize: "clamp(2.4rem, 4.5vw, 4rem)", letterSpacing: "-0.032em" }}
          >
            Your Manufacturing<br />
            Facility, Engineered<br />
            <span className="text-[#C4161C]">From Inside Our Own Factory</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...spring, delay: 0.25 }}
            className="text-[1.05rem] leading-[1.8] mb-8 max-w-[480px] text-pretty"
            style={{ color: "rgba(255,255,255,0.68)" }}
          >
            Most contractors procure from the market. We build from our own 6 lakh
            sq.ft production floor — which means tighter tolerances, fewer handoffs,
            and zero supply-chain surprises on your project.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...spring, delay: 0.35 }}
            className="flex items-center gap-4 flex-wrap"
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-2.5 bg-[#C4161C] hover:bg-[#A31217] active:scale-[0.96] text-white font-bold text-[0.95rem] px-8 py-4 rounded-lg transition-[background-color,transform] duration-150 ease-out"
              style={{ boxShadow: "0 4px 24px rgba(196,22,28,0.45)" }}
            >
              Request a Site Assessment
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-1.5 text-[0.95rem] font-semibold transition-colors duration-150"
              style={{ color: "rgba(255,255,255,0.7)" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "white")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.7)")}
            >
              View Services
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...spring, delay: 0.45 }}
            className="mt-10 pt-6 flex items-center"
            style={{ borderTop: "1px solid rgba(255,255,255,0.12)" }}
          >
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className="pr-4 mr-4 md:pr-8 md:mr-8 last:pr-0 last:mr-0"
                style={{
                  borderRight: i < stats.length - 1 ? "1px solid rgba(255,255,255,0.12)" : "none",
                }}
              >
                <p
                  className="text-[1.4rem] md:text-[2rem] font-black text-white tabular-nums leading-none mb-0.5"
                  style={{ letterSpacing: "-0.025em" }}
                >
                  {"countTo" in stat ? (
                    <CountUp to={stat.countTo!} suffix={stat.suffix ?? ""} />
                  ) : (
                    stat.value
                  )}
                </p>
                <p className="text-[0.73rem] font-medium" style={{ color: "rgba(255,255,255,0.5)" }}>
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>

        </div>
      </div>

    </section>
  );
}
