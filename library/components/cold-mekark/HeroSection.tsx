"use client";

import Image from "next/image";
import { motion } from "motion/react";
import CountUp from "@/components/cold-mekark/CountUp";

const spring = { type: "spring" as const, stiffness: 60, damping: 18 };

export default function HeroSection() {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/cold-mekark/bundle/Home Page Images/Warehouse Infrastrucre.webp"
          alt="Mekark cold storage facility"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/55" />
        {/* Red accent gradient at bottom */}
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 md:px-12 pt-28 pb-20">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 16, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ ...spring, delay: 0.1 }}
          className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm"
        >
          <span className="w-2 h-2 rounded-full bg-[#c4161c] animate-pulse" />
          <span className="text-white/90 text-sm font-semibold tracking-wide">
            Actively Taking Projects
            <span className="hidden sm:inline"> · Chennai, Tamil Nadu &amp; Pan India</span>
          </span>
        </motion.div>

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...spring, delay: 0.2 }}
          className="mb-4"
        >
          <p className="text-white/70 text-lg md:text-xl font-medium mb-2 tracking-wide">
            India&apos;s <span className="text-[#c4161c] font-bold">#1</span> Turnkey
          </p>
          <h1 className="text-white font-extrabold leading-[1.05] tracking-[-0.03em] text-balance">
            <span className="block text-[clamp(2.8rem,7vw,5.5rem)]">COLD STORAGE</span>
            <span className="block text-[clamp(1.6rem,4vw,3rem)] text-[#c4161c] font-bold mt-1">
              BUILT IN 120 DAYS.
            </span>
          </h1>
        </motion.div>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...spring, delay: 0.32 }}
          className="text-white/70 text-base md:text-lg font-medium mb-3 tracking-wide"
        >
          Design · Engineer · Commission.{" "}
          <span className="text-white font-semibold">One Company. Zero Compromise.</span>
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...spring, delay: 0.42 }}
          className="text-white/60 text-[0.97rem] md:text-base max-w-[640px] leading-[1.75] mb-8 text-pretty"
        >
          From site survey to handover — Mekark delivers turnkey EPC cold storage construction
          for factories, food processors, pharma companies &amp; logistics hubs across India.
          Fixed timeline. Transparent pricing. No subcontractor chains.
        </motion.p>

        {/* Stats mini row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...spring, delay: 0.5 }}
          className="flex flex-wrap gap-x-8 gap-y-3 mb-10"
        >
          {[
            { to: 200, suffix: "+", label: "Projects Completed" },
            { to: 120, suffix: "", label: "Days Delivery Commitment" },
            { to: 15, suffix: "+", label: "Years in Cold Storage" },
          ].map((s, i) => (
            <div key={s.label} className="flex items-center gap-2">
              <span className="text-[#c4161c] font-extrabold text-xl">
                <CountUp to={s.to} suffix={s.suffix} delay={500 + i * 100} />
              </span>
              <span className="text-white/60 text-sm">{s.label}</span>
            </div>
          ))}
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...spring, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-stretch sm:items-center"
        >
          <button
            onClick={() => scrollTo("#intake")}
            className="inline-flex items-center justify-center gap-2 bg-[#c4161c] hover:bg-[#a31217] active:scale-[0.96] text-white font-bold text-base px-7 py-4 rounded-[8px] transition-[background-color,transform] duration-150 ease-out shadow-lg"
          >
            Get a Free Site Assessment
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </button>

          <a
            href="https://wa.me/919790924754"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 active:scale-[0.96] text-white font-semibold text-base px-7 py-4 rounded-[8px] border border-white/20 transition-[background-color,transform] duration-150 ease-out backdrop-blur-sm"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-green-400"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
            WhatsApp Us
          </a>
        </motion.div>

        {/* Trust footnote */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-6 text-white/40 text-xs"
        >
          Free consultation · No obligation · Response within 2 hours
        </motion.p>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1"
      >
        <span className="text-white/30 text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-[1px] h-10 bg-gradient-to-b from-white/30 to-transparent" />
      </motion.div>
    </section>
  );
}
