"use client";
import { motion } from "motion/react";
import Image from "next/image";

const SERVICES = [
  {
    num: "01",
    title: "PEB Design Services",
    tagline: "Precision Engineering. Code-Compliant. Optimised for Every Load.",
    points: [
      "Structural analysis & primary frame design",
      "Foundation engineering & geotechnical input",
      "3D BIM modelling & clash detection",
      "Wind, seismic & crane load analysis",
    ],
    promise: "Zero design errors. Optimised tonnage. Faster approvals.",
    image: "/peb-manu-mekark/bundle/Home Page Images/Manufacturing plant.webp",
  },
  {
    num: "02",
    title: "PEB Fabrication Services",
    tagline: "ISO-Certified Plant. 40,000 MT/Annual. Uncompromising Quality.",
    points: [
      "Up to 3,000 MT fabrication per month",
      "CNC plasma cutting & robotic welding",
      "Automated shot-blasting & primer coating",
      "NDT, UT & DPT quality control",
    ],
    promise: "Factory-perfect components. Fit-first-time. Zero rework.",
    image: "/peb-manu-mekark/bundle/Home Page Images/eot cranes.webp",
  },
  {
    num: "03",
    title: "PEB Installation & Erection",
    tagline: "Safety-Certified Crews. Fast Erection. On-Time Handover.",
    points: [
      "OSHA / IS-compliant safety management",
      "Dedicated on-site project manager",
      "Mobile crane & aerial work platform fleet",
      "4–8 week erection cycle (standard)",
    ],
    promise: "Zero LTI target. Plumb-and-square. Certified on completion.",
    image: "/peb-manu-mekark/bundle/Home Page Images/Warehouse Infrastrucre.webp",
  },
  {
    num: "04",
    title: "Roofing & Cladding Solutions",
    tagline: "Weather-Tight. Thermally Efficient. Built to Last 25+ Years.",
    points: [
      "JSW / Tata BlueScope colour-coated sheets",
      "PIR / PUF insulated sandwich panels",
      "Translucent polycarbonate daylighting",
      "Ridge & turbo ventilators",
    ],
    promise: "Leak-proof. Energy-efficient. Minimum maintenance.",
    image: "/peb-manu-mekark/bundle/Home Page Images/MEP.webp",
  },
  {
    num: "05",
    title: "Mezzanine & Multi-Storey Steel",
    tagline: "Double Your Usable Space. No Extra Land Required.",
    points: [
      "Warehouse storage mezzanine floors",
      "Office mezzanines above shop floors",
      "Multi-storey steel frame buildings",
      "Modular, demountable systems",
    ],
    promise: "40–60% more floor area. No new land. Rapid payback.",
    image: "/peb-manu-mekark/bundle/Home Page Images/Multi storey.webp",
  },
  {
    num: "06",
    title: "Turnkey Industrial EPC",
    tagline: "Zero Project Management Burden. Keys in Hand. On Time.",
    points: [
      "Foundation design & RCC construction",
      "PEB structural supply & erection",
      "Roofing, cladding & civil finishing",
      "Handover with as-built drawings",
    ],
    promise: "One contract. One team. One handover date.",
    image: "/peb-manu-mekark/bundle/Home Page Images/industrial tank.webp",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="bg-[#F8F8F8] py-20 md:py-28">
      <div className="max-w-350 mx-auto px-6 md:px-12 lg:px-16">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
          className="mb-12"
        >
          <div className="flex items-center gap-2.5 mb-3">
            <div className="h-px w-8 bg-[#C4161C] shrink-0" />
            <p className="text-[#C4161C] font-bold uppercase text-[0.75rem]">Our Services</p>
          </div>
          <h2 className="font-bold text-gray-900 text-balance" style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)" }}>
            Everything Your PEB Project Needs — In One Place
          </h2>
          <p className="text-gray-500 text-[1rem] mt-3 max-w-2xl text-pretty">
            Six core services covering the complete project lifecycle — design to final handover. One contractor. Zero gaps.
          </p>
        </motion.div>

        {/* Equal-size bento grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {SERVICES.map((svc, i) => (
            <motion.div
              key={svc.num}
              initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.55, delay: (i % 3) * 0.08, ease: [0.25, 1, 0.5, 1] }}
              className="group bg-white rounded-2xl overflow-hidden flex flex-col transition-[box-shadow,transform] duration-200 hover:-translate-y-1"
              style={{ boxShadow: "var(--shadow-border)" }}
              onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "var(--shadow-border-hover)")}
              onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "var(--shadow-border)")}
            >
              {/* Image — top, never overlaps text */}
              <div className="relative h-44 shrink-0 overflow-hidden">
                <Image
                  src={svc.image}
                  alt={svc.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>

              {/* Content — always below the image */}
              <div className="flex flex-col flex-1 p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[0.62rem] font-extrabold tracking-[0.2em] text-[#C4161C] bg-[#C4161C]/8 px-2 py-0.5 rounded">
                    {svc.num}
                  </span>
                </div>

                <h3 className="font-bold text-gray-900 text-[1rem] leading-tight mb-1.5">{svc.title}</h3>
                <p className="text-[#C4161C] text-[0.78rem] font-semibold mb-4 leading-snug">{svc.tagline}</p>

                <ul className="space-y-2 flex-1">
                  {svc.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-2 text-[0.82rem] text-gray-600">
                      <span className="shrink-0 mt-0.75 w-4 h-4 rounded-full bg-[#C4161C]/10 flex items-center justify-center">
                        <svg width="7" height="6" viewBox="0 0 7 6" fill="none" aria-hidden="true">
                          <path d="M1 3L2.8 4.8L6 1" stroke="#C4161C" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      {pt}
                    </li>
                  ))}
                </ul>

                {/* Promise */}
                <div className="mt-5 pt-4 border-t border-black/6">
                  <p className="text-[0.62rem] font-extrabold tracking-[0.15em] text-[#C4161C] uppercase mb-1">Our Promise</p>
                  <p className="text-gray-700 text-[0.82rem] font-semibold leading-snug">{svc.promise}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 text-center"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-[#C4161C] hover:bg-[#A31217] text-white font-bold px-8 py-4 rounded-md text-[0.95rem] transition-[background-color,transform] duration-150 active:scale-[0.96]"
          >
            Request a Service Proposal — We Respond in 24 Hours
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </motion.div>

      </div>
    </section>
  );
}

export default ServicesSection;
