"use client";

import { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What defines Mekark's EPC approach?",
      answer: "An integrated engineering-led model combining design, procurement, fabrication, and execution under one system, eliminating coordination gaps and ensuring single-point accountability across every phase."
    },
    {
      question: "How is structural performance ensured in large-span buildings?",
      answer: "Through advanced analysis using STAAD.Pro and detailed 3D modelling in Tekla, considering real-world load conditions including cranes, wind, seismic factors, and industrial usage patterns."
    },
    {
      question: "Why choose a single EPC partner?",
      answer: "It eliminates design-execution gaps, reduces coordination risk, ensures cost control, and significantly improves delivery efficiency. One partner means one point of accountability from concept to commissioning."
    },
    {
      question: "How does Mekark ensure lifecycle durability?",
      answer: "By designing for expansion, operational stress, maintenance access, and long-term load stability, every structure is engineered not just for construction, but for lifecycle performance."
    },
    {
      question: "Can Mekark handle large-scale industrial projects?",
      answer: "Yes. With 40,000 tons annual fabrication capacity, a 6 Lakh sq.ft manufacturing facility, and a 300+ strong team, Mekark is equipped to deliver complex, large-scale industrial projects on schedule."
    },
    {
      question: "How is factory-level quality maintained?",
      answer: "Through controlled fabrication environments, CNC-automated systems, ISO-certified processes, and strict engineering inspection protocols at every stage from raw material to final delivery."
    },
  ];

  return (
    <section className="relative w-full bg-[#FEF4F4] py-16 md:py-24 lg:pt-25 lg:pb-25 overflow-hidden font-manrope">
      <div className="max-w-350 mx-auto w-full px-4 md:px-12 relative z-10 flex flex-col lg:flex-row justify-between gap-10 md:gap-15 lg:gap-25">

        {/* Left Content */}
        <div className="flex-1 max-w-125">
          {/* Top Label */}
          <div className="flex items-center gap-3 mb-8 md:mb-15">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="10" fill="#ED1C24"/>
              <path d="M8 16l3-5 5-3-3 5-5 3z" fill="white"/>
            </svg>
            <span className="text-[24px] font-bold tracking-tight bg-linear-to-b from-[#222222] to-[#777777] bg-clip-text text-transparent pb-0.5">
              FAQ
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-[2.2rem] sm:text-[3rem] md:text-[3.5rem] lg:text-[4.5rem] font-bold tracking-tight leading-[1.05] mb-8">
            <span className="block bg-linear-to-b from-[#FE7278] to-[#ED1C24] bg-clip-text text-transparent pb-1">
              More Doubts?
            </span>
            <span className="block bg-linear-to-b from-[#222222] to-[#666666] bg-clip-text text-transparent">
              We&apos;ve Got You.
            </span>
          </h2>

          <p className="text-[#777] text-[1rem] md:text-[1.1rem] mb-8 md:mb-10">
            Get Connected So We Could Answer Your Questions
          </p>

          <button className="bg-[#0A0A0A] text-white font-medium text-[1rem] px-6 md:px-8 py-3.5 md:py-4 rounded-xl hover:bg-[#333] transition-colors shadow-lg w-full sm:w-auto">
            Get Free Industrial Consultation
          </button>
        </div>

        {/* Right Content - Accordion */}
        <div className="flex-1 w-full flex flex-col gap-4 md:gap-5 lg:pt-8">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-3xl border border-[#FFD5D5] p-5 md:p-8 relative z-10 cursor-pointer transition-all duration-300 shadow-sm hover:shadow-md"
                onClick={() => setOpenIndex(isOpen ? null : idx)}
              >
                <div className="flex justify-between items-center gap-4">
                  <h3 className="text-[#111] font-bold text-[1rem] md:text-[1.2rem] leading-[1.4] max-w-[85%]">
                    {faq.question}
                  </h3>
                  <div className="shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full border border-[#FFD5D5] flex items-center justify-center text-[#111] bg-white transition-colors">
                    {isOpen ? (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/></svg>
                    ) : (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
                    )}
                  </div>
                </div>
                <div className={`grid transition-all duration-500 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100 mt-5' : 'grid-rows-[0fr] opacity-0 mt-0'}`}>
                  <div className="overflow-hidden">
                    <p className="text-[#888] text-[0.95rem] leading-[1.8] pr-4 md:pr-8">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
