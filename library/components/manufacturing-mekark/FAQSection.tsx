"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FadeInView } from "@/components/manufacturing-mekark/FadeInView";

const faqs = [
  {
    q: "Why choose Mekark as your Manufacturing Building Contractor?",
    a: "Mekark is a leading Manufacturing Building Contractor specializing in PEB, RCC, and hybrid industrial structures. We provide end-to-end solutions from design and engineering to construction and project handover.",
  },
  {
    q: "What Manufacturing Building Construction Services does Mekark offer?",
    a: "Our Manufacturing Building Construction Services include master planning, structural design, civil works, PEB fabrication, erection, MEP coordination, and turnkey project execution for industrial facilities.",
  },
  {
    q: "Can Mekark handle turnkey manufacturing facility projects?",
    a: "Yes. As a Turnkey Manufacturing Building Contractor, Mekark manages every stage of the project, ensuring seamless coordination, faster delivery, and better cost control.",
  },
  {
    q: "Do you provide Manufacturing Facility Design and Build Contractor services?",
    a: "Absolutely. Our design-build approach integrates engineering, procurement, and construction teams from the start, helping clients reduce timelines and optimize project costs.",
  },
  {
    q: "What types of manufacturing facilities does Mekark construct?",
    a: "We build production plants, assembly units, processing facilities, industrial warehouses, and large-scale manufacturing complexes across multiple industry sectors.",
  },
  {
    q: "Is Mekark a Manufacturing Plant EPC Contractor?",
    a: "Yes. Mekark offers complete EPC services, including engineering, procurement, fabrication, and construction for manufacturing plants and industrial infrastructure projects.",
  },
  {
    q: "Do you construct PEB manufacturing buildings?",
    a: "Yes. As a PEB Manufacturing Building Contractor, we deliver high-quality steel structures designed for faster construction, large clear spans, and future expansion flexibility.",
  },
  {
    q: "Can Mekark support manufacturing facility expansion projects?",
    a: "Yes. Our Manufacturing Facility Expansion Contractor services help businesses increase production capacity through facility extensions, additional production bays, and infrastructure upgrades.",
  },
  {
    q: "Does Mekark undertake projects across India?",
    a: "Yes. We serve clients throughout India as a Manufacturing Plant Construction Company, delivering industrial construction solutions tailored to regional requirements and industry standards.",
  },
  {
    q: "What makes Mekark different from other industrial construction companies?",
    a: "Mekark combines in-house engineering, advanced PEB expertise, and turnkey execution capabilities to deliver future-ready, cost-efficient, and high-performance manufacturing facilities.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<Set<number>>(new Set());

  function toggle(i: number) {
    setOpen(prev => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i); else next.add(i);
      return next;
    });
  }

  return (
    <section className="py-24 px-6 md:px-12 lg:px-16 xl:px-24 bg-[#eeeeee]">
      <div className="max-w-[1300px] mx-auto">

        <div className="grid lg:grid-cols-[380px_1fr] gap-16 items-start">

          {/* Left — sticky heading + CTA */}
          <FadeInView>
            <div className="lg:sticky lg:top-24 flex flex-col items-start">

              <span
                className="inline-flex items-center rounded-full px-4 py-1.5 mb-6 text-[0.78rem] font-semibold text-[#C4161C]"
                style={{ background: "rgba(196,22,28,0.09)", border: "1px solid rgba(196,22,28,0.22)", boxShadow: "inset 0 0 16px rgba(196,22,28,0.18)" }}
              >
                FAQ
              </span>

              <h2
                className="text-[3rem] md:text-[3.6rem] font-black leading-[1.05] mb-5"
                style={{ letterSpacing: "-0.03em" }}
              >
                <span style={{ color: "#C4161C" }}>More Doubts?</span>
                <br />
                <span className="text-[#0f0f0f]">We&apos;ve Got You.</span>
              </h2>

              <p className="text-[0.95rem] text-[#666] leading-[1.75] mb-8 text-pretty">
                Get connected so we could answer your questions directly — no sales intermediary, no generic brochures.
              </p>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-[0.85rem] font-bold text-white px-6 py-3.5 rounded-xl transition-[background-color,transform] duration-150 active:scale-[0.96]"
                style={{ background: "#0f0f0f" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.background = "#1a1a1a")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.background = "#0f0f0f")}
              >
                Get Free Industrial Consultation
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>

            </div>
          </FadeInView>

          {/* Right — accordion */}
          <div className="flex flex-col gap-3">
            {faqs.map((faq, i) => {
              const isOpen = open.has(i);
              return (
                <FadeInView key={i} delay={0.03 + i * 0.03}>
                  <div
                    className="bg-white rounded-xl overflow-hidden transition-[box-shadow] duration-200"
                    style={{
                      boxShadow: isOpen
                        ? "0 0 0 1.5px #C4161C, 0 4px 20px rgba(0,0,0,0.07)"
                        : "0 0 0 1px rgba(0,0,0,0.07), 0 2px 6px rgba(0,0,0,0.04)",
                    }}
                  >
                    <button
                      className="w-full text-left flex items-center justify-between gap-5 px-6 py-5"
                      onClick={() => toggle(i)}
                      aria-expanded={isOpen}
                    >
                      <span
                        className="text-[0.925rem] font-semibold leading-snug transition-colors duration-150"
                        style={{ color: isOpen ? "#C4161C" : "#0f0f0f" }}
                      >
                        {faq.q}
                      </span>
                      <span
                        className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-[background-color] duration-200 ease-out"
                        style={{ background: isOpen ? "#C4161C" : "rgba(0,0,0,0.06)" }}
                      >
                        {isOpen ? (
                          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14" />
                          </svg>
                        ) : (
                          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 5v14M5 12h14" />
                          </svg>
                        )}
                      </span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{
                            height: { type: "spring", stiffness: 300, damping: 32 },
                            opacity: { duration: 0.2 },
                          }}
                          className="overflow-hidden"
                        >
                          <p className="text-[0.875rem] text-[#555] leading-[1.8] px-6 pb-5 pt-0 border-t border-[rgba(0,0,0,0.05)] text-pretty">
                            {faq.a}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </FadeInView>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
