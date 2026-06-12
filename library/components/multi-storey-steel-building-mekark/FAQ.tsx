"use client";

const mekarkContact = { phoneHref: "tel:+919876543210", phoneLabel: "+91 98765 43210", emailHref: "mailto:info@mekark.com", emailLabel: "info@mekark.com", whatsappUrl: "https://wa.me/919876543210", websiteUrl: "https://www.mekark.com" };

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import FadeInView from "@/components/multi-storey-steel-building-mekark/FadeInView";


const FAQS = [
  {
    q: "What is the minimum project size Mekark undertakes?",
    a: "Mekark handles medium to large-scale industrial and commercial projects including multi storey steel buildings, PEB structures, warehouses, factories, and heavy steel structures. Project feasibility depends on structural scope, location, and engineering requirements.",
  },
  {
    q: "How long does a typical multi-storey steel building project take?",
    a: "Project timelines depend on building size, fabrication volume, design complexity, and site conditions. Compared to conventional RCC construction, multi-storey steel building construction enables faster fabrication, quicker erection, and reduced project completion time.",
  },
  {
    q: "Does Mekark handle foundation and civil work as well?",
    a: "Yes. Mekark provides complete turnkey steel building solutions including foundation work, civil construction, structural steel fabrication, roofing, cladding, erection, and finishing support for industrial and commercial steel buildings.",
  },
  {
    q: "What steel grades and specifications does Mekark fabricate?",
    a: "Mekark fabricates structural steel buildings using high-quality steel grades based on project requirements and engineering standards. Our team follows industry-approved fabrication practices for heavy steel structures, industrial buildings, and multi-level steel construction projects.",
  },
  {
    q: "Does Mekark service projects outside Tamil Nadu?",
    a: "Yes. Mekark has delivered steel building projects across multiple states in India including Tamil Nadu, Karnataka, Andhra Pradesh, Telangana, Maharashtra, Gujarat, Rajasthan, and Odisha. Our logistics division manages fabrication transport, approvals, and site delivery efficiently.",
  },
  {
    q: "What warranty does Mekark provide on completed structures?",
    a: "Mekark provides a 5-year structural warranty on completed structures, documented in writing as part of the handover package. Warranty coverage includes structural integrity, weld quality, and connection performance based on IS 800 compliance.",
  },
  {
    q: "Why should industries choose multi-storey steel buildings over RCC?",
    a: "Multi-storey steel buildings offer faster construction, reduced structural weight, better space utilization, future expansion flexibility, and lower project delays compared to traditional RCC construction. Steel structures also support faster industrial setup and operational efficiency.",
  },
  {
    q: "Does Mekark offer customized multi-storey steel building designs?",
    a: "Yes. Mekark offers customized steel building design and engineering solutions based on load requirements, industry application, production workflow, and future expansion plans for industrial and commercial projects.",
  },
  {
    q: "What industries does Mekark serve for steel building construction?",
    a: "Mekark serves manufacturing industries, logistics parks, engineering sectors, textile industries, food processing units, automobile industries, warehouses, commercial infrastructure, and industrial production facilities across India.",
  },
  {
    q: "Does Mekark offer complete turnkey steel building solutions?",
    a: "Yes. Mekark provides end-to-end turnkey solutions including design, engineering, structural steel fabrication, project management, erection, roofing, cladding, mezzanine structures, and final project execution for industrial steel buildings and commercial steel structures.",
  },
];

const CERTS = [
  "ISO 9001:2015",
  "Bureau of Indian Standards",
  "MSME Registered",
  "NSIC Certified Vendor",
  "GST Compliant",
];

export default function FAQ() {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set([0]));

  function toggle(i: number) {
    setOpenItems(prev => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });
  }

  return (
    <section id="faq" className="py-20 md:py-28 bg-white">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
        <FadeInView>
          <p className="text-[0.72rem] font-extrabold uppercase tracking-[0.25em] text-[#C4161C] mb-3">
            Frequently Asked Questions
          </p>
        </FadeInView>
        <div className="flex flex-col lg:flex-row justify-between gap-6 mb-14">
          <FadeInView delay={80}>
            <h2 className="text-[2.2rem] sm:text-[2.7rem] font-extrabold text-black leading-[1.1] tracking-[-0.025em] max-w-[500px]">
              Straight Answers to<br />
              <span className="text-[#C4161C]">Real Project Questions</span>
            </h2>
          </FadeInView>
        </div>

        <div className="grid lg:grid-cols-[1fr_340px] gap-12">
          {/* Accordion — multiple open */}
          <div>
            {FAQS.map((faq, i) => {
              const isOpen = openItems.has(i);
              return (
                <FadeInView key={i} delay={i * 40}>
                  <div className="border-b border-black/[0.07] last:border-b-0">
                    <button
                      className="w-full flex items-start justify-between gap-4 py-5 text-left group"
                      onClick={() => toggle(i)}
                      aria-expanded={isOpen}
                    >
                      <span className={`font-semibold text-[0.95rem] leading-snug transition-colors duration-150 ${isOpen ? "text-[#C4161C]" : "text-black"}`}>
                        {faq.q}
                      </span>
                      <motion.svg
                        animate={{ rotate: isOpen ? 45 : 0 }}
                        transition={{ duration: 0.22, ease: "easeOut" }}
                        width="18" height="18" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                        className={`shrink-0 mt-0.5 transition-colors duration-150 ${isOpen ? "text-[#C4161C]" : "text-black/40"}`}
                      >
                        <line x1="12" y1="5" x2="12" y2="19" />
                        <line x1="5" y1="12" x2="19" y2="12" />
                      </motion.svg>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          key="content"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] as [number, number, number, number] }}
                          style={{ overflow: "hidden" }}
                        >
                          <p className="text-black/55 text-[0.875rem] leading-relaxed pb-5 pr-8">
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

          {/* Sidebar */}
          <FadeInView delay={200}>
            <div className="flex flex-col gap-5">
              <div className="rounded-2xl bg-black/[0.03] border border-black/[0.07] p-6">
                <h4 className="font-bold text-black text-[1rem] mb-2">Still have questions?</h4>
                <p className="text-black/55 text-[0.82rem] leading-relaxed mb-4">
                  Our structural engineers are available Mon-Sat, 9AM–6PM. Call, WhatsApp, or
                  fill the enquiry form — we respond within 4 business hours.
                </p>
                <a
                  href={mekarkContact.phoneHref}
                  className="flex items-center gap-2 px-4 py-3 rounded-lg bg-[#C4161C] text-white font-bold text-[0.875rem] transition-[background-color,transform] duration-150 hover:bg-[#A31217] active:scale-[0.96] justify-center"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  Talk to Engineer
                </a>
              </div>

              <div className="rounded-2xl bg-black/[0.03] border border-black/[0.07] p-6">
                <p className="text-[0.7rem] font-extrabold uppercase tracking-[0.2em] text-black/40 mb-4">Certified By</p>
                <div className="flex flex-col gap-2.5">
                  {CERTS.map(cert => (
                    <div key={cert} className="flex items-center gap-2.5">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#C4161C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span className="text-black/70 text-[0.82rem] font-medium">{cert}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeInView>
        </div>
      </div>
    </section>
  );
}
