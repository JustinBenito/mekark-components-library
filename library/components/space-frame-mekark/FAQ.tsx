"use client";
import { useState, useRef, useEffect } from "react";
import RevealOnScroll from "@/components/space-frame-mekark/RevealOnScroll";

const faqs = [
  {
    q: "What is a space frame structure?",
    a: "A lightweight, rigid structural system made of interconnected struts forming a 3D framework.",
  },
  {
    q: "What materials are used?",
    a: "High-grade steel tubes and nodes designed for strength and durability.",
  },
  {
    q: "What span can space frames cover?",
    a: "They can efficiently cover large spans without internal columns.",
  },
  {
    q: "Why choose space frame over conventional structures?",
    a: "Better strength-to-weight ratio and faster construction.",
  },
  {
    q: "Are space frames cost-effective?",
    a: "Yes, optimized material usage reduces overall cost.",
  },
  {
    q: "Do you handle end-to-end execution?",
    a: "Yes, from design to installation with complete in-house capabilities.",
  },
  {
    q: "What is your project delivery timeline?",
    a: "Standard delivery within 120 days depending on project scale.",
  },
  {
    q: "What makes Mekark different?",
    a: "In-house manufacturing, engineering expertise, and faster delivery.",
  },
  {
    q: "Do you customize designs?",
    a: "Yes, every structure is tailored to project requirements.",
  },
];

function AccordionItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(open ? contentRef.current.scrollHeight : 0);
    }
  }, [open]);

  return (
    <div className="border-b border-gray-100 last:border-0">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-6 py-5 text-left group"
        aria-expanded={open}
      >
        <div className="flex items-center gap-4 min-w-0">
          <span className="shrink-0 text-xs font-bold tabular-nums text-gray-300 w-5 text-right">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span
            className={`text-base font-semibold leading-snug transition-colors duration-200 ${
              open ? "text-red-600" : "text-gray-900 group-hover:text-red-600"
            }`}
          >
            {q}
          </span>
        </div>
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          aria-hidden
          className={`shrink-0 transition-[transform,color] duration-300 ${
            open ? "rotate-180 text-red-500" : "text-gray-400"
          }`}
        >
          <path
            d="M4 6L8 10L12 6"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <div className="faq-content" style={{ height }} aria-hidden={!open}>
        <div ref={contentRef} className="pb-5 pl-9 pr-6">
          <p className="text-base text-gray-500 leading-relaxed text-pretty">{a}</p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="py-16 sm:py-24 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-20 items-start">

          {/* Left — sticky header + highlights */}
          <RevealOnScroll className="lg:sticky lg:top-28">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-100 text-red-600 text-xs font-semibold uppercase tracking-wider mb-5">
              FAQ
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-balance text-gray-900 mb-4">
              Frequently Asked <span className="text-red-600">Questions</span>
            </h2>
            <p className="text-lg text-gray-500 text-pretty mb-10">
              Everything you need to know about space frame structures and working with Mekark.
            </p>

            {/* Quick highlights — hidden on mobile */}
            <div className="hidden lg:block space-y-4 mb-10">
              {[
                { num: "450+", label: "Projects delivered across India" },
                { num: "120", label: "Day standard delivery commitment" },
                { num: "40,000+", label: "Tons annual production capacity" },
              ].map((s) => (
                <div key={s.label} className="flex items-center gap-4">
                  <div className="text-2xl font-bold tabular-nums text-red-600 w-24 shrink-0">{s.num}</div>
                  <div className="text-sm text-gray-500 leading-snug">{s.label}</div>
                </div>
              ))}
            </div>

            {/* CTA — hidden on mobile */}
            <a
              href="#intake"
              className="hidden lg:inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-red-600 text-white text-sm font-semibold hover:bg-red-700 active:scale-[0.96] transition-[background-color,transform] duration-150"
              style={{ boxShadow: "var(--shadow-red)" }}
            >
              Get Free Consultation
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
                <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </RevealOnScroll>

          {/* Right — accordion */}
          <RevealOnScroll>
            <div className="rounded-2xl border border-gray-100 bg-white px-6" style={{ boxShadow: "var(--shadow-card)" }}>
              {faqs.map((item, i) => (
                <AccordionItem key={item.q} q={item.q} a={item.a} index={i} />
              ))}
            </div>
          </RevealOnScroll>

        </div>
      </div>
    </section>
  );
}
