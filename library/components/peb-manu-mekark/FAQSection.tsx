"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const FAQS = [
  {
    q: "What is a Pre Engineered Building (PEB)?",
    a: "A Pre Engineered Building (PEB) is a steel structure system where components are designed and fabricated in a factory and assembled quickly at site. Compared to RCC construction, Pre Engineered Steel Buildings are faster, cost-effective, durable, and ideal for industrial and commercial projects.",
  },
  {
    q: "How much does a PEB building cost per sq.ft. in India?",
    a: "The cost of a PEB building depends on span, height, roofing, location, and project scope. On average, industrial PEB shed construction ranges from ₹800 to ₹3,500 per sq.ft. depending on whether it is supply-only or complete turnkey execution.",
  },
  {
    q: "How long does it take to construct a PEB building?",
    a: "A typical PEB warehouse construction project can be completed within 10–15 weeks depending on size and complexity. This is much faster compared to conventional RCC construction methods.",
  },
  {
    q: "Are PEB buildings safe in earthquake and cyclone zones?",
    a: "Yes. Mekark designs Industrial Steel Structure and PEB buildings based on IS standards for seismic and wind loads. These steel buildings are engineered for strength, durability, and long-term structural safety.",
  },
  {
    q: "What is the maximum span and height achievable in a PEB?",
    a: "Mekark can design High Span Steel Structures with clear spans up to 90 metres and heights up to 20 metres. These are suitable for warehouses, factories, logistics parks, and large industrial facilities.",
  },
  {
    q: "Do you offer turnkey PEB projects including civil works?",
    a: "Yes. Mekark is a Turnkey PEB Company offering complete industrial construction services including civil works, fabrication, roofing, cladding, erection, and final handover under one contract.",
  },
  {
    q: "Can Mekark execute PEB projects outside Tamil Nadu?",
    a: "Yes. Mekark delivers Pre Engineered Building projects across India including Tamil Nadu, Karnataka, Andhra Pradesh, Telangana, Maharashtra, and other regions with pan-India project execution capability.",
  },
  {
    q: "What types of roofing and cladding do you provide?",
    a: "We provide complete Industrial Roofing Solutions including colour-coated sheets, insulated sandwich panels, wall cladding, ventilators, gutters, and skylight systems for industrial and warehouse buildings.",
  },
  {
    q: "How do I get started with Mekark for my PEB project?",
    a: "You can share your project details such as location, area, and usage requirement through the enquiry form. Our team will provide consultation, preliminary design support, and a BOQ-based quotation for your project.",
  },
  {
    q: "What warranties and after-sales support does Mekark provide?",
    a: "Mekark provides structural warranty support for all PEB buildings along with post-project assistance, inspection support, maintenance guidance, and AMC options for long-term building performance.",
  },
];

export function FAQSection() {
  const [openSet, setOpenSet] = useState<Set<number>>(new Set());

  const toggle = (i: number) => {
    setOpenSet((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });
  };

  return (
    <section className="bg-[#F8F8F8] py-20 md:py-28">
      <div className="max-w-350 mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-12 lg:gap-16 items-start">

          {/* Left — sticky heading */}
          <motion.div
            initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
            className="lg:sticky lg:top-28"
          >
            <div className="flex items-center gap-2.5 mb-3">
              <div className="h-px w-8 bg-[#C4161C] shrink-0" />
              <p className="text-[#C4161C] font-bold uppercase text-[0.75rem]">FAQ</p>
            </div>
            <h2 className="font-bold text-gray-900 text-balance" style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)" }}>
              Everything You Need to Know About PEB Construction
            </h2>
            <p className="text-gray-500 text-[0.95rem] mt-4 leading-[1.75] text-pretty">
              Answered by Mekark&apos;s structural engineers and project managers with 15+ years of hands-on PEB experience.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 mt-7 bg-[#C4161C] hover:bg-[#A31217] text-white font-bold px-5 py-3 rounded-md text-[0.88rem] transition-[background-color,transform] duration-150 active:scale-[0.96]"
            >
              Ask Us Directly
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </motion.div>

          {/* Right — accordion */}
          <div className="space-y-2">
          {FAQS.map((faq, i) => {
            const isOpen = openSet.has(i);
            return (
              <motion.div
                key={faq.q}
                initial={{ opacity: 0, y: 12, filter: "blur(4px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.4, delay: i * 0.03, ease: [0.25, 1, 0.5, 1] }}
                className="bg-white rounded-xl overflow-hidden transition-[box-shadow,transform] duration-200"
                style={{ boxShadow: isOpen
                  ? "0 0 0 1.5px rgba(196,22,28,0.25), 0 4px 20px rgba(0,0,0,0.1), 0 8px 40px rgba(0,0,0,0.06)"
                  : "0 2px 8px rgba(0,0,0,0.06), 0 4px 20px rgba(0,0,0,0.05)" }}
              >
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left gap-4"
                  aria-expanded={isOpen}
                >
                  <span className={`font-semibold text-[0.97rem] leading-snug transition-colors duration-150 ${isOpen ? "text-[#C4161C]" : "text-gray-900"}`}>
                    {faq.q}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25, ease: [0.25, 1, 0.5, 1] }}
                    className={`shrink-0 transition-colors duration-150 ${isOpen ? "text-[#C4161C]" : "text-gray-400"}`}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </motion.span>
                </button>

                {/* Grid-row accordion */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateRows: isOpen ? "1fr" : "0fr",
                    transition: "grid-template-rows 280ms cubic-bezier(0.25, 1, 0.5, 1)",
                  }}
                >
                  <div className="overflow-hidden">
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.p
                          initial={{ opacity: 0, filter: "blur(4px)" }}
                          animate={{ opacity: 1, filter: "blur(0px)" }}
                          exit={{ opacity: 0, filter: "blur(2px)" }}
                          transition={{ duration: 0.25, ease: "easeOut" }}
                          className="px-6 pb-6 text-gray-500 text-[0.93rem] leading-[1.8] text-pretty"
                        >
                          {faq.a}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </motion.div>
            );
          })}
          </div>

        </div>
      </div>
    </section>
  );
}

export default FAQSection;
