"use client";

import Image from "next/image";
import { motion } from "motion/react";
import FadeInView from "@/components/multi-storey-steel-building-mekark/FadeInView";

const INDUSTRIES = [
  {
    heading: "Manufacturing",
    body: "Heavy-span production halls, crane gantry buildings, and process plant structures built for operational intensity.",
    image: "/multi-storey-steel-building-mekark/bundle/Our%20Factories/DJI_20250301123837_0021_D%20copy.webp",
    icon: (
      /* Overhead crane factory: sawtooth roof + crane beam + hook */
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="1" y1="22" x2="23" y2="22" />
        <line x1="3" y1="22" x2="3" y2="10" />
        <line x1="21" y1="22" x2="21" y2="10" />
        <polyline points="3,10 7,6.5 7,10 13,6.5 13,10 19,6.5 19,10 21,10" />
        <line x1="3" y1="13" x2="21" y2="13" />
        <rect x="8" y="12.25" width="5" height="1.5" rx="0.4" />
        <line x1="10.5" y1="13.75" x2="10.5" y2="18" />
        <path d="M9 18 Q8.5 21 10.5 21 Q12.5 21 12.5 18" />
        <line x1="8" y1="13" x2="8" y2="22" />
        <line x1="16.5" y1="13" x2="16.5" y2="22" />
      </svg>
    ),
  },
  {
    heading: "Warehousing & Logistics",
    body: "Multi-level steel warehouses, distribution hubs, and cold chain facilities with mezzanine floors and dock levellers.",
    image: "/multi-storey-steel-building-mekark/bundle/Home%20Page%20Images/Warehouse%20Infrastrucre.webp",
    icon: (
      /* Wide warehouse: gabled roof + bay columns + dock doors + outbound arrow */
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="1" y1="22" x2="23" y2="22" />
        <path d="M2 22 V11 H22 V22" />
        <path d="M2 11 L12 7 L22 11" />
        <line x1="8.5" y1="11" x2="8.5" y2="22" />
        <line x1="15.5" y1="11" x2="15.5" y2="22" />
        <rect x="3" y="16" width="4" height="6" />
        <rect x="10" y="16" width="4" height="6" />
        <line x1="3" y1="21" x2="7" y2="21" />
        <line x1="10" y1="21" x2="14" y2="21" />
        <polyline points="17,19 21,19" />
        <polyline points="19.5,17 21,19 19.5,21" />
      </svg>
    ),
  },
  {
    heading: "Commercial & IT Parks",
    body: "Multi-storey office buildings, software parks, and retail complexes with architectural steel facades.",
    image: "/multi-storey-steel-building-mekark/bundle/Home%20Page%20Images/Multi%20storey.webp",
    icon: (
      /* Tall office tower: curtain wall grid, rooftop plant, ground podium */
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="4" y1="23" x2="20" y2="23" />
        <rect x="6" y="4" width="12" height="19" />
        <line x1="6" y1="10" x2="18" y2="10" />
        <line x1="6" y1="16" x2="18" y2="16" />
        <rect x="8" y="5.5" width="2.5" height="3" />
        <rect x="13.5" y="5.5" width="2.5" height="3" />
        <rect x="8" y="11.5" width="2.5" height="3" />
        <rect x="13.5" y="11.5" width="2.5" height="3" />
        <rect x="8" y="17.5" width="2.5" height="3" />
        <rect x="13.5" y="17.5" width="2.5" height="3" />
        <rect x="8.5" y="2" width="7" height="2" rx="0.5" />
      </svg>
    ),
  },
  {
    heading: "Power & Energy",
    body: "Substation structures, wind turbine foundations, solar plant support systems, and power plant steel frameworks.",
    image: "/multi-storey-steel-building-mekark/bundle/Home%20Page%20Images/eot%20cranes.webp",
    icon: (
      /* Lattice transmission tower: pylon legs, crossarm, catenary power lines */
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="4" y1="22" x2="20" y2="22" />
        <line x1="12" y1="3" x2="8.5" y2="22" />
        <line x1="12" y1="3" x2="15.5" y2="22" />
        <line x1="9" y1="10" x2="15" y2="10" />
        <line x1="9.5" y1="16" x2="14.5" y2="16" />
        <line x1="9" y1="10" x2="9.5" y2="16" />
        <line x1="15" y1="10" x2="14.5" y2="16" />
        <line x1="9" y1="10" x2="14.5" y2="16" />
        <line x1="15" y1="10" x2="9.5" y2="16" />
        <line x1="5" y1="10" x2="19" y2="10" />
        <path d="M4 10 Q9 12.5 12 10.5 Q15 8.5 20 10" />
        <rect x="7.5" y="21" width="2" height="1.5" />
        <rect x="14.5" y="21" width="2" height="1.5" />
      </svg>
    ),
  },
  {
    heading: "Healthcare & Pharma",
    body: "Cleanroom-compatible multi-storey steel buildings for pharma manufacturing, hospitals, and medical R&D facilities.",
    image: "/multi-storey-steel-building-mekark/bundle/Our%20Completed%20Projects/DJI_20250319140917_0052_D%20copy.webp",
    icon: (
      /* Hospital: main block + wing extensions + medical cross + floor plate + entry */
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="2" y1="22" x2="22" y2="22" />
        <rect x="5" y="8" width="14" height="14" />
        <rect x="1" y="13" width="4.5" height="7" />
        <rect x="18.5" y="13" width="4.5" height="7" />
        <line x1="5" y1="15" x2="19" y2="15" />
        <line x1="12" y1="3" x2="12" y2="8" />
        <line x1="9.5" y1="5.5" x2="14.5" y2="5.5" />
        <rect x="10" y="17" width="4" height="5" />
        <rect x="6.5" y="9.5" width="2.5" height="2.5" />
        <rect x="15" y="9.5" width="2.5" height="2.5" />
      </svg>
    ),
  },
  {
    heading: "Food Processing",
    body: "Hygienic-design steel structures for food processing plants, cold storages, and FSSAI-compliant factory buildings.",
    image: "/multi-storey-steel-building-mekark/bundle/Home%20Page%20Images/Manufacturing%20plant.webp",
    icon: (
      /* Processing plant: factory with monitor roof + two silos + connecting pipe */
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="1" y1="22" x2="23" y2="22" />
        <path d="M2 22 V12 H13 V22" />
        <polyline points="2,12 5,8.5 5,12 9,8.5 9,12 13,12" />
        <line x1="5" y1="12" x2="5" y2="22" />
        <line x1="9" y1="12" x2="9" y2="22" />
        <path d="M14.5 8 Q16.5 5.5 18.5 8 V22 H14.5 Z" />
        <path d="M18.5 11 Q20 9 21.5 11 V22 H18.5 Z" />
        <line x1="13" y1="15" x2="14.5" y2="15" />
        <line x1="18.5" y1="16" x2="19" y2="16" />
      </svg>
    ),
  },
  {
    heading: "Data Centres",
    body: "Vibration-controlled, EMI-shielded structural steel frames for mission-critical data centre and server room buildings.",
    image: "/multi-storey-steel-building-mekark/bundle/Our%20Completed%20Projects/DJI_20250103155636_0140_D%20copy.webp",
    icon: (
      /* Data centre: box building + rooftop cooling + two rows of server racks */
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="2" y1="22" x2="22" y2="22" />
        <rect x="3" y="6" width="18" height="16" />
        <rect x="5" y="3.5" width="4.5" height="2.5" rx="0.5" />
        <rect x="14.5" y="3.5" width="4.5" height="2.5" rx="0.5" />
        <line x1="3" y1="14" x2="21" y2="14" />
        <rect x="5" y="15" width="3" height="6" rx="0.3" />
        <rect x="9.5" y="15" width="3" height="6" rx="0.3" />
        <rect x="14" y="15" width="3" height="6" rx="0.3" />
        <rect x="5" y="7" width="3" height="6" rx="0.3" />
        <rect x="9.5" y="7" width="3" height="6" rx="0.3" />
        <rect x="14" y="7" width="3" height="6" rx="0.3" />
        <line x1="17" y1="7" x2="17" y2="13" />
        <line x1="17" y1="15" x2="17" y2="21" />
      </svg>
    ),
  },
  {
    heading: "Infrastructure & Ports",
    body: "Marine steel structures, port handling equipment frames, bridge superstructures, and public infrastructure steel works.",
    image: "/multi-storey-steel-building-mekark/bundle/Our%20Completed%20Projects/DJI_20240930172656_0118_D%20copy.webp",
    icon: (
      /* Cable-stayed bridge: deck + single pylon + fan stays + piers + water */
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M1 20 Q6 18.5 12 20 Q18 21.5 23 20" />
        <line x1="2" y1="16" x2="22" y2="16" />
        <line x1="7" y1="16" x2="7" y2="20" />
        <line x1="17" y1="16" x2="17" y2="20" />
        <line x1="12" y1="3" x2="12" y2="16" />
        <line x1="10.5" y1="7" x2="13.5" y2="7" />
        <line x1="12" y1="4" x2="4" y2="16" />
        <line x1="12" y1="6" x2="6.5" y2="16" />
        <line x1="12" y1="9" x2="9" y2="16" />
        <line x1="12" y1="4" x2="20" y2="16" />
        <line x1="12" y1="6" x2="17.5" y2="16" />
        <line x1="12" y1="9" x2="15" y2="16" />
        <rect x="2" y="16" width="3" height="4" />
        <rect x="19" y="16" width="3" height="4" />
      </svg>
    ),
  },
];

export default function Industries() {
  return (
    <section id="industries" className="py-20 md:py-28 bg-white">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
        <FadeInView>
          <p className="text-[0.72rem] font-extrabold uppercase tracking-[0.25em] text-[#C4161C] mb-3">
            Industries We Serve
          </p>
        </FadeInView>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <FadeInView delay={80}>
            <h2 className="text-[2.2rem] sm:text-[2.7rem] font-extrabold text-black leading-[1.1] tracking-[-0.025em] max-w-[500px]">
              Steel Structures Built<br />
              <span className="text-[#C4161C]">for Every Industry</span>
            </h2>
          </FadeInView>
          <FadeInView delay={160}>
            <p className="text-black/55 text-[1rem] leading-relaxed max-w-[360px]">
              Mekark&apos;s structural steel expertise spans the full industrial and commercial
              landscape — each sector served with sector-specific engineering knowledge.
            </p>
          </FadeInView>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {INDUSTRIES.map((ind, i) => (
            <FadeInView key={ind.heading} delay={i * 55} className="h-full">
              <motion.div
                className="group relative bg-white rounded-2xl overflow-hidden h-full shadow-[0_0_0_1px_rgba(0,0,0,0.06),0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_0_0_1px_rgba(0,0,0,0.08),0_8px_28px_rgba(0,0,0,0.09)] transition-shadow duration-200 cursor-default flex flex-col"
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
              >
                {/* Image header */}
                <div className="relative h-40 shrink-0">
                  <Image
                    src={ind.image}
                    alt={ind.heading}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  {/* Index number over image */}
                  <p className="absolute top-3 left-3 text-[0.63rem] font-bold tabular-nums tracking-[0.12em] text-white/60">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-1">
                  {/* Icon */}
                  <div className="w-11 h-11 rounded-xl bg-black/[0.04] border border-black/[0.06] flex items-center justify-center text-black/45 mb-4 shrink-0 group-hover:bg-[rgba(196,22,28,0.06)] group-hover:border-[#C4161C]/20 group-hover:text-[#C4161C] transition-[background-color,border-color,color] duration-200">
                    {ind.icon}
                  </div>

                  <h3 className="font-bold text-black text-[0.93rem] mb-2 leading-snug">
                    {ind.heading}
                  </h3>
                  <p className="text-black/50 text-[0.8rem] leading-relaxed flex-1">
                    {ind.body}
                  </p>
                </div>
              </motion.div>
            </FadeInView>
          ))}
        </div>
      </div>
    </section>
  );
}
