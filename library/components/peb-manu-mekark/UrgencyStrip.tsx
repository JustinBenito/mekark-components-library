"use client";

const mekarkContact = { phoneHref: "tel:+919876543210", phoneLabel: "+91 98765 43210", emailHref: "mailto:info@mekark.com", emailLabel: "info@mekark.com", whatsappUrl: "https://wa.me/919876543210", websiteUrl: "https://www.mekark.com" };
import { motion } from "motion/react";


export function UrgencyStrip() {
  return (
    <section className="bg-[#C4161C] py-10 md:py-12 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
            className="text-white text-center md:text-left"
          >
            <p className="font-extrabold text-[0.72rem] tracking-[0.22em] uppercase text-white/70 mb-2">
              LIMITED SLOTS AVAILABLE FOR Q3 PROJECT STARTS
            </p>
            <h2 className="font-bold text-[1.15rem] md:text-[1.35rem] text-white leading-snug text-balance">
              We accept only 8 new PEB projects per month to ensure quality.{" "}
              <span className="text-white/80">3 slots already booked this month.</span>
            </h2>
            <p className="text-white/75 text-[0.92rem] mt-2 text-pretty">
              Confirm your project requirement today — before we are fully scheduled.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.25, 1, 0.5, 1] }}
            className="flex flex-col sm:flex-row gap-3 shrink-0"
          >
            <a
              href="#contact"
              className="bg-white text-[#C4161C] font-extrabold px-7 py-4 rounded-md text-[0.95rem] hover:bg-gray-100 transition-[background-color] duration-150 active:scale-[0.96] text-center whitespace-nowrap"
            >
              LOCK YOUR PROJECT SLOT →
            </a>
            <a
              href={mekarkContact.phoneHref}
              className="border-2 border-white text-white font-bold px-6 py-4 rounded-md text-[0.95rem] hover:bg-white/10 transition-[background-color] duration-150 active:scale-[0.96] text-center whitespace-nowrap tabular-nums"
            >
              {mekarkContact.phoneLabel}
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default UrgencyStrip;
