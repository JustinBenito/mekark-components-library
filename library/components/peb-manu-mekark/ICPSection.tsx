"use client";
import { motion } from "motion/react";
import Image from "next/image";

const PROFILES = [
  {
    title: "The Factory Owner",
    desc: "SME or large manufacturer planning a new facility or expansion in Tamil Nadu, Andhra Pradesh, Karnataka, or Maharashtra.",
    pain: "Conventional construction is slow, expensive, and riddled with contractor delays. They need a turnkey partner.",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=600&q=75",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" aria-hidden="true">
        <path d="M4 20V9L12 4l8 5v11H4z" />
        <path d="M9 20v-5h2v5M13 20v-5h2v5" />
        <path d="M9 9h2v3H9zm4 0h2v3h-2z" />
      </svg>
    ),
  },
  {
    title: "The Logistics Head",
    desc: "VP/GM Operations at a logistics company, 3PL, or e-commerce brand building a new regional distribution centre or cold store.",
    pain: "Warehouse must be operational in 6 months. Cost overruns are not acceptable. Needs single accountability.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=75",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" aria-hidden="true">
        <path d="M1 8h13v8H1z" />
        <path d="M14 10h4l3 3v3h-7v-6z" />
        <circle cx="5" cy="18" r="1.5" />
        <circle cx="17" cy="18" r="1.5" />
      </svg>
    ),
  },
  {
    title: "The Real Estate Developer",
    desc: "Commercial developer building industrial parks, SEZ sheds, or built-to-suit factory spaces for lease.",
    pain: "Needs cost-effective, fast-to-market industrial shed construction with quality that attracts blue-chip tenants.",
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=600&q=75",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" aria-hidden="true">
        <path d="M3 21h18" />
        <path d="M9 21V9l6-4 6 4v12" />
        <path d="M3 21V11l6-4v14" />
        <path d="M13 12h2v3h-2zm0 5h2v4h-2z" />
      </svg>
    ),
  },
  {
    title: "The Infra & Projects Head",
    desc: "Infrastructure & projects director at a large industrial conglomerate or EPC firm.",
    pain: "Needs a reliable PEB subcontractor with pan-India delivery capability, proven track record, and QHSE compliance.",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=600&q=75",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" aria-hidden="true">
        <rect x="10" y="2" width="4" height="4" rx="1" />
        <rect x="3" y="14" width="4" height="4" rx="1" />
        <rect x="17" y="14" width="4" height="4" rx="1" />
        <path d="M12 6v4m0 0l-7 4m7-4l7 4" />
      </svg>
    ),
  },
  {
    title: "The Entrepreneur",
    desc: "First-generation entrepreneur building their first factory or warehouse and looking for trusted, transparent guidance.",
    pain: "Does not know where to start. Needs a partner who will hand-hold from concept to keys.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=75",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" aria-hidden="true">
        <path d="M9 18h6m-3 3v-3" />
        <path d="M12 2a7 7 0 00-7 7c0 2.5 1.3 4.7 3.2 6h7.6C17.7 13.7 19 11.5 19 9a7 7 0 00-7-7z" />
      </svg>
    ),
  },
  {
    title: "The Govt / PSU Planner",
    desc: "Government agency or PSU planning industrial infrastructure — defence depots, railway workshops, or MSME sheds.",
    pain: "Needs a company with experience in government project delivery, BOQ-based transparent pricing, and L1 bid support.",
    image: "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?auto=format&fit=crop&w=600&q=75",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" aria-hidden="true">
        <path d="M3 21h18" />
        <path d="M5 21V9m14 12V9" />
        <path d="M3 9l9-7 9 7" />
        <path d="M9 21v-7h6v7" />
        <path d="M9 9h6" />
      </svg>
    ),
  },
];

export function ICPSection() {
  return (
    <section className="bg-[#F8F8F8] py-20 md:py-28">
      <div className="max-w-350 mx-auto px-6 md:px-12 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
          className="mb-12"
        >
          <div className="flex items-center gap-2.5 mb-3">
            <div className="h-px w-8 bg-[#C4161C] shrink-0" />
            <p className="text-[#C4161C] font-bold uppercase text-[0.75rem]">Who We Build For</p>
          </div>
          <h2 className="font-bold text-gray-900 text-balance" style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)" }}>
            Is Mekark Right for Your Project? See Who We Typically Work With
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {PROFILES.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.07, ease: [0.25, 1, 0.5, 1] }}
              className="group bg-white rounded-2xl overflow-hidden flex flex-col transition-[box-shadow,transform] duration-200 hover:-translate-y-1"
              style={{ boxShadow: "var(--shadow-border)" }}
              onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "var(--shadow-border-hover)")}
              onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "var(--shadow-border)")}
            >
              {/* Cover image */}
              <div className="relative h-40 overflow-hidden shrink-0">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/25" />
                {/* Icon badge floated over image */}
                <div className="absolute bottom-3 left-4">
                  <div className="w-9 h-9 rounded-xl bg-white/95 backdrop-blur-sm flex items-center justify-center text-[#C4161C]"
                    style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.2)" }}>
                    {p.icon}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-1">
                <h3 className="font-bold text-gray-900 text-[0.97rem] mb-2">{p.title}</h3>
                <p className="text-gray-500 text-[0.86rem] leading-[1.7] text-pretty flex-1">{p.desc}</p>

                {/* Pain point */}
                <div className="mt-4 pt-4 border-t border-black/6">
                  <div className="flex items-center gap-1.5 mb-1.5">
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#C4161C" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 8v4m0 4h.01" />
                    </svg>
                    <p className="text-[0.65rem] text-[#C4161C] font-extrabold uppercase tracking-[0.15em]">Their Pain Point</p>
                  </div>
                  <p className="text-gray-600 text-[0.84rem] leading-[1.65] text-pretty">{p.pain}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 bg-[#F8F8F8] rounded-2xl p-8 flex flex-col items-center text-center gap-5"
        >
          <div>
            <p className="font-semibold text-gray-900 text-[1rem]">Need a warehouse built in 120 days?</p>
            <p className="text-gray-500 text-[0.88rem] mt-1.5 max-w-lg mx-auto">
              Mekark is your PEB Warehouse Contractor — get a free feasibility assessment today.
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-[#C4161C] hover:bg-[#A31217] text-white font-bold px-6 py-3 rounded-md text-[0.9rem] transition-[background-color,transform] duration-150 active:scale-[0.96]"
          >
            Free 15-Min Feasibility Call
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default ICPSection;
