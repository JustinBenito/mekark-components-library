"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const FAQS = [
  {
    category: "TECHNICAL",
    q: "What ISO classification does my pharmaceutical facility need?",
    a: "It depends on your product and the regulatory authority you answer to. Sterile injectable fill-finish requires ISO Class 5 (Grade A) for critical zones, supported by ISO Class 7 (Grade C) and ISO Class 8 (Grade D) for surrounding areas. Solid dosage and oral liquids typically require ISO Class 7 to 8 throughout. Mekark's first step on every project is a process-risk assessment that determines your classification requirement — we do not assume from the product category alone.",
  },
  {
    category: "TECHNICAL",
    q: "How is clean room HVAC different from standard commercial air conditioning?",
    a: "They share very little beyond the word 'air'. Clean room HVAC is a contamination control system. It governs particle concentration through air change rates of 20 to 600 per hour (versus 6 to 10 in commercial buildings), HEPA and ULPA filtration at 99.995% to 99.9995% particle capture, controlled pressure differentials between adjacent zones, directional airflow — laminar or turbulent — and validated temperature and humidity tolerances. Every system we design is validated, not commissioned and forgotten.",
  },
  {
    category: "TECHNICAL",
    q: "What does clean room validation actually involve?",
    a: "Validation is the documented proof that your facility consistently performs within its design specification. It runs in four phases: Design Qualification confirms the design is fit for purpose; Installation Qualification verifies the equipment was installed as designed; Operational Qualification confirms the system operates within spec; Performance Qualification confirms it performs under actual production conditions. Mekark's in-house validation team executes and documents all four phases — the same team that designed the facility.",
  },
  {
    category: "ABOUT MEKARK",
    q: "How long does a typical project take from brief to validated handover?",
    a: "A modular ISO Class 7 pharmaceutical clean room of 150 to 200 sq m typically runs 14 to 18 weeks from approved design to validated handover. A multi-suite GMP facility with Grade A through D zones may span 8 to 14 months. The honest answer depends on your regulatory classification, facility complexity, and whether your site is ready for installation. Mekark provides a milestone-anchored project schedule at the feasibility stage — with clear gate criteria at each phase.",
  },
  {
    category: "ABOUT MEKARK",
    q: "Can Mekark work on our existing facility rather than a new build?",
    a: "Yes, and retrofit projects account for around 35% of our annual work. We survey the existing structure and systems, identify what can be retained, upgraded, or must be replaced, and map the gap to your current regulatory requirement — including revised Schedule M and the 2022 EU Annex I standard. We plan retrofits to minimise production disruption, including phased construction sequences where your facility continues operating during works.",
  },
  {
    category: "MEKARK ADVANTAGE",
    q: "What happens if our facility fails a regulatory inspection after you hand it over?",
    a: "If a regulatory failure within 24 months of handover is attributable to a design, construction, or validation deficiency in Mekark's scope, we remediate it at no additional charge. Root cause investigation is joint. Corrective documentation for the regulatory authority's CAPA requirement is prepared by us. This is written into the project contract — not communicated verbally at handover and forgotten six months later.",
  },
  {
    category: "COMMERCIAL",
    q: "What does a clean room cost per square foot in India?",
    a: "Classification determines cost — not square footage alone. A basic ISO Class 8 environment runs from ₹2,500 to ₹4,500 per sq ft. ISO Class 7 pharmaceutical facilities range from ₹5,000 to ₹9,000 per sq ft. ISO Class 5 sterile manufacturing environments range from ₹12,000 to ₹22,000 per sq ft and above. These cover civil, MEP, HVAC, and validation. Mekark provides a fixed-price envelope after a site assessment and process review — not a per-square-foot rate that shifts with scope changes discovered mid-project.",
  },
];

export function FAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIdx((prev) => (prev === i ? null : i));

  return (
    <section className="bg-[#F5F5F4] py-20 md:py-28">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.7fr] gap-12 lg:gap-16 items-start">

          {/* Left — sticky heading */}
          <motion.div
            initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
            className="lg:sticky lg:top-28"
          >
            <p className="text-[#C4161C] font-bold  uppercase text-[0.72rem] mb-3">FAQ</p>
            <h2 className="font-bold text-gray-900 text-balance" style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)" }}>
              Questions We Get From Decision-Makers
            </h2>
            <p className="text-gray-500 text-[0.95rem] mt-4 leading-[1.75] text-pretty">
              Answers worth having before you decide.
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
              const isOpen = openIdx === i;
              return (
                <motion.div
                  key={faq.q}
                  initial={{ opacity: 0, y: 12, filter: "blur(4px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.4, delay: i * 0.04, ease: [0.25, 1, 0.5, 1] }}
                  className="bg-white rounded-xl overflow-hidden"
                  style={{ boxShadow: isOpen ? "var(--shadow-border-hover)" : "var(--shadow-border)" }}
                >
                  <button
                    onClick={() => toggle(i)}
                    className="w-full flex items-start justify-between px-5 py-4 text-left gap-4"
                    aria-expanded={isOpen}
                  >
                    <div className="flex flex-col gap-0.5">
                      <span className="text-[0.67rem] font-extrabold  text-gray-400 uppercase">{faq.category}</span>
                      <span className={`font-semibold text-[0.95rem] leading-snug transition-colors duration-150 ${isOpen ? "text-[#C4161C]" : "text-gray-900"}`}>
                        {faq.q}
                      </span>
                    </div>
                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.25, ease: [0.25, 1, 0.5, 1] }}
                      className={`shrink-0 mt-0.5 transition-colors duration-150 ${isOpen ? "text-[#C4161C]" : "text-gray-400"}`}
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </motion.span>
                  </button>

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
                            className="px-5 pb-5 text-gray-500 text-[0.9rem] leading-[1.82] text-pretty"
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
