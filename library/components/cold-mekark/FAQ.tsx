"use client";

import { useState } from "react";
import { motion } from "motion/react";

const FAQS = [
  {
    q: "Why choose Mekark Structure India Pvt Ltd as a cold storage construction company?",
    a: "Mekark provides turnkey cold storage solutions including design, engineering, PEB structure fabrication, insulated panel installation, and project execution. Our team delivers durable and energy-efficient cold storage warehouse construction for industrial applications.",
  },
  {
    q: "What types of cold storage warehouse construction services does Mekark offer?",
    a: "We specialize in cold storage warehouse construction services such as freezer rooms, chilled warehouses, pharmaceutical cold rooms, food storage warehouses, and refrigerated logistics infrastructure. Our solutions are customized for temperature-controlled operations.",
  },
  {
    q: "Does Mekark provide turnkey cold storage construction solutions?",
    a: "Yes, Mekark offers complete turnkey cold storage construction including planning, structural steel fabrication, insulation systems, roofing, refrigeration-ready infrastructure, and installation support for industrial cold storage facilities.",
  },
  {
    q: "Can Mekark build PEB cold storage buildings in India?",
    a: "Mekark is experienced in PEB cold storage building construction using high-quality steel structures and insulated panels. Our pre engineered cold storage buildings are designed for fast installation, durability, and thermal efficiency.",
  },
  {
    q: "What industries does Mekark serve in cold chain infrastructure projects?",
    a: "We serve food processing, dairy, seafood, frozen food, beverage, pharmaceutical, healthcare, and logistics industries. Our cold chain infrastructure company solutions support safe storage and uninterrupted refrigeration operations.",
  },
  {
    q: "What are the advantages of using Mekark for industrial cold storage construction?",
    a: "Mekark provides optimized layouts, energy-efficient insulated buildings, faster project completion, quality steel fabrication, and long-lasting cold storage roofing solutions. Our expertise helps reduce operational and maintenance costs.",
  },
  {
    q: "Does Mekark construct pharmaceutical cold storage warehouses?",
    a: "Yes, we provide pharmaceutical cold storage construction and temperature controlled pharma warehouse solutions with insulated infrastructure suitable for vaccine storage and healthcare cold chain requirements.",
  },
  {
    q: "How does Mekark ensure energy efficiency in refrigerated warehouse construction?",
    a: "We use insulated panel cold storage construction, thermal roofing systems, airtight sealing, and high-performance steel structures to maintain temperature stability and improve energy efficiency in industrial freezer warehouse construction.",
  },
  {
    q: "Can Mekark develop customized cold room construction solutions?",
    a: "Yes, we offer custom cold room construction solutions based on storage capacity, temperature range, product type, and operational workflow. Our industrial cold room builders design facilities tailored to client requirements.",
  },
  {
    q: "Does Mekark provide cold storage construction services in Chennai and Tamil Nadu?",
    a: "Mekark offers cold storage construction services in Chennai, Tamil Nadu, and across India. We handle refrigerated warehouse construction, cold storage shed construction, and industrial insulated building projects for multiple sectors.",
  },
];

const spring = { type: "spring" as const, stiffness: 55, damping: 18 };

function FAQItem({
  faq,
  isOpen,
  onToggle,
}: {
  faq: (typeof FAQS)[0];
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div>
      <button
        onClick={onToggle}
        className="flex w-full items-start justify-between gap-4 py-5 text-left"
        aria-expanded={isOpen}
      >
        <span
          className={`font-semibold text-[0.95rem] leading-[1.5] transition-colors duration-150 ${
            isOpen ? "text-[#c4161c]" : "text-[#111]"
          }`}
        >
          {faq.q}
        </span>
        <div
          className={`mt-1 shrink-0 text-[#c4161c] transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </div>
      </button>

      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ type: "spring", stiffness: 120, damping: 20 }}
        className="overflow-hidden"
      >
        <p className="pb-5 pr-8 text-[#666] text-[0.9rem] leading-[1.75] text-pretty">
          {faq.a}
        </p>
      </motion.div>
    </div>
  );
}

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="w-full bg-white py-16 md:py-24 px-6">
      <div className="max-w-[900px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={spring}
          className="text-center mb-12"
        >
          <p className="text-xs font-bold tracking-[0.22em] uppercase text-[#c4161c] mb-3">
            Frequently Asked Questions
          </p>
          <h2 className="text-[1.8rem] md:text-[2.5rem] font-extrabold text-[#111] text-balance">
            Questions Serious{" "}
            <span className="text-[#c4161c]">Project Owners Ask Us</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ ...spring, delay: 0.1 }}
          className="rounded-2xl border border-black/[0.08] bg-white shadow-[0_2px_16px_rgba(0,0,0,0.06)] divide-y divide-black/[0.07] overflow-hidden px-6"
        >
          {FAQS.map((faq, i) => (
            <FAQItem
              key={i}
              faq={faq}
              isOpen={openIdx === i}
              onToggle={() => setOpenIdx((prev) => (prev === i ? null : i))}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
