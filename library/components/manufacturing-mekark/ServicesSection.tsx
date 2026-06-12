"use client";

import Image from "next/image";
import { FadeInView } from "@/components/manufacturing-mekark/FadeInView";

const services = [
  {
    number: "01",
    tag: "Turnkey",
    title: "Design & Build (D&B)",
    body: "Single-source responsibility from concept to commissioned structure. Architecture, structural engineering, and construction under one contract — eliminating coordination gaps between design intent and execution reality.",
    photo: "1503387762-592deb58ef4e",
  },
  {
    number: "02",
    tag: "In-House Fabrication",
    title: "Pre-Engineered Buildings (PEB)",
    body: "Factory-fabricated structural steel systems delivered and erected on-site. Faster than RCC, economical at scale, and precisely engineered for your span and load requirements — fabricated in our own 40,000-ton-capacity plant.",
    photo: "1504307651254-35680f356dfd",
  },
  {
    number: "03",
    tag: "Full Accountability",
    title: "EPC Contracting",
    body: "Engineering, Procurement, and Construction under a single fixed-scope contract. Full accountability for cost, schedule, and technical performance — structured so your management bandwidth stays on core business.",
    photo: "1486325212027-8081e485255e",
  },
  {
    number: "04",
    tag: "Live-Production Safe",
    title: "Facility Expansion & Retrofit",
    body: "Capacity addition to existing production floors — structural extension, bay widening, crane bay upgrades, and mezzanine integration — without disrupting live production schedules.",
    photo: "1581091226033-d5c48150dbaa",
  },
  {
    number: "05",
    tag: "Foundation to Roofline",
    title: "Civil & Structural Works",
    body: "Foundation engineering for heavy equipment, industrial-grade flooring, RCC framed structures, equipment pits, drainage, and road works — executed as integrated packages, not isolated contracts.",
    photo: "1541888946425-d81bb19240f5",
  },
  {
    number: "06",
    tag: "Built-In, Not Bolted-On",
    title: "MEP Integration",
    body: "Mechanical, Electrical, and Plumbing systems designed and installed as part of the building — not bolted on after handover. HT/LT power, compressed air, HVAC, fire suppression, and effluent systems.",
    photo: "1558618666-fcd25c85cd64",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 px-6 md:px-12 lg:px-16 xl:px-24 bg-white">
      <div className="max-w-[1300px] mx-auto">

        <FadeInView>
          <div className="mb-4">
            <span className="inline-flex items-center rounded-full px-4 py-1.5 mb-3 text-[0.78rem] font-semibold text-[#C4161C]" style={{ background: "rgba(196,22,28,0.09)", border: "1px solid rgba(196,22,28,0.22)", boxShadow: "inset 0 0 16px rgba(196,22,28,0.18)" }}>Service Portfolio</span>
            <h2
              className="text-[2.6rem] md:text-[3.2rem] font-black leading-[1.08] max-w-[700px]"
              style={{ letterSpacing: "-0.03em" }}
            >
              <span style={{ color: "#C4161C" }}>What Comes Under a</span><br />
              <span style={{ color: "#0f0f0f" }}>Manufacturing Facility Build</span>
            </h2>
          </div>
        </FadeInView>

        <FadeInView delay={0.08}>
          <p className="text-[1rem] text-[#666] leading-[1.75] mb-14 max-w-[580px] text-pretty">
            Every component of your facility — from land assessment to commissioning — under one
            accountable contract.
          </p>
        </FadeInView>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((svc, i) => (
            <FadeInView key={svc.number} delay={0.05 + i * 0.07}>
              <div
                className="bg-white rounded-xl h-full flex flex-col group cursor-default overflow-hidden relative transition-[box-shadow] duration-200 ease-out"
                style={{
                  boxShadow: "0px 0px 0px 1px rgba(0,0,0,0.07), 0px 2px 8px -2px rgba(0,0,0,0.06)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.boxShadow =
                    "0px 0px 0px 1.5px #C4161C, 0px 8px 24px -4px rgba(0,0,0,0.1)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.boxShadow =
                    "0px 0px 0px 1px rgba(0,0,0,0.07), 0px 2px 8px -2px rgba(0,0,0,0.06)";
                }}
              >
                {/* Image */}
                <div className="relative h-[180px] shrink-0 overflow-hidden">
                  <Image
                    src={`https://images.unsplash.com/photo-${svc.photo}?auto=format&fit=crop&w=600&q=75`}
                    alt={svc.title}
                    fill
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
                </div>

                {/* Red accent line on hover */}
                <div className="h-0.5 bg-[#C4161C] opacity-0 group-hover:opacity-100 transition-opacity duration-200 shrink-0" />

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className="text-[1.6rem] font-extrabold text-[#C4161C] tabular-nums leading-none"
                      style={{ opacity: 0.18, letterSpacing: "-0.02em" }}
                    >
                      {svc.number}
                    </span>
                    <span className="text-[0.68rem] font-semibold text-[#999] bg-[#f0f0f0] px-2.5 py-1 rounded-full">
                      {svc.tag}
                    </span>
                  </div>
                  <h3 className="text-[1.05rem] font-bold text-[#0f0f0f] mb-3 leading-snug">
                    {svc.title}
                  </h3>
                  <p className="text-[0.875rem] text-[#666] leading-[1.75] text-pretty flex-1">
                    {svc.body}
                  </p>
                </div>
              </div>
            </FadeInView>
          ))}
        </div>

      </div>
    </section>
  );
}
