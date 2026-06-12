"use client";
import { motion } from "motion/react";

export function UrgencyStrip() {
  return (
    <div className="bg-[#C4161C] py-4 px-6">
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
        className="max-w-[1400px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left"
      >
        <p className="text-white font-semibold text-[0.9rem]">
          <span className="font-extrabold">Q3 2025 pharmaceutical project slots: 3 remaining.</span>{" "}
          Regulatory submission timelines are fixed — your construction window is not.
        </p>
        <a
          href="#contact"
          className="shrink-0 bg-white text-[#C4161C] font-extrabold text-[0.82rem]  uppercase px-5 py-2.5 rounded-md hover:bg-gray-100 transition-[background-color,transform] duration-150 active:scale-[0.96] whitespace-nowrap"
        >
          Reserve Your Slot →
        </a>
      </motion.div>
    </div>
  );
}
