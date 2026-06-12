"use client";

import Image from "next/image";
import { motion } from "motion/react";
import CountUp from "@/components/cold-mekark/CountUp";
import { CheckCircleIcon, MapPinIcon, RulerSquareIcon, ThermometerIcon, ClockIcon } from "@/components/cold-mekark/icons";

const PROJECTS = [
  {
    title: "Industrial Blast Freeze Complex",
    location: "Tuticorin, Tamil Nadu",
    areaNum: 18000,
    temp: "-35°C",
    daysNum: 110,
    img: "/cold-mekark/bundle/Our Completed Projects/DJI_20241004133100_0172_D copy.webp",
  },
  {
    title: "Pharma Cold Chain Warehouse",
    location: "Chennai, Tamil Nadu",
    areaNum: 9500,
    temp: "2–8°C",
    daysNum: 95,
    img: "/cold-mekark/bundle/Our Completed Projects/DJI_20250103131743_0097_D copy.webp",
  },
  {
    title: "Multi-Temp Logistics Hub",
    location: "Coimbatore, Tamil Nadu",
    areaNum: 35000,
    temp: "-20°C to +5°C",
    daysNum: 118,
    img: "/cold-mekark/bundle/Our Completed Projects/DJI_20250301123134_0007_D copy.webp",
  },
];

const spring = { type: "spring" as const, stiffness: 55, damping: 18 };

export default function CompletedProjects() {
  return (
    <section id="projects" className="w-full bg-white py-16 md:py-24 px-6">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={spring}
          className="text-center mb-14"
        >
          <p className="text-xs font-bold tracking-[0.22em] uppercase text-[#c4161c] mb-3">
            Completed Projects
          </p>
          <h2 className="text-[1.8rem] md:text-[2.5rem] font-extrabold text-[#111] text-balance mb-3">
            <CountUp to={200} suffix="+" /> Cold Storage Facilities.<br className="hidden md:block" />
            <span className="text-[#c4161c]">Delivered. Running. Profitable.</span>
          </h2>
          <p className="text-[#777] text-base max-w-[540px] mx-auto text-pretty">
            Every project is a live reference. Our clients run operations in these facilities every day —
            a testament to the durability and precision of Mekark&apos;s construction.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PROJECTS.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ ...spring, delay: i * 0.09 }}
              className="group rounded-2xl overflow-hidden border border-black/[0.08] shadow-[0_2px_12px_rgba(0,0,0,0.07)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.13)] transition-shadow duration-200"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={p.img}
                  alt={p.title}
                  fill
                  className="object-cover group-hover:scale-[1.04] transition-transform duration-500 ease-out outline outline-1 -outline-offset-1 outline-black/10"
                  sizes="(max-width:768px) 100vw, 33vw"
                />
                {/* Badge */}
                <div className="absolute top-3 left-3 rounded-full bg-black/60 backdrop-blur-sm px-3 py-1 text-white text-[0.72rem] font-semibold flex items-center gap-1.5">
                  <CheckCircleIcon className="w-3.5 h-3.5 shrink-0" />
                  Completed
                </div>
              </div>

              {/* Info */}
              <div className="bg-white p-5">
                <h3 className="font-bold text-[1rem] text-[#111] mb-3">{p.title}</h3>
                <div className="flex flex-col gap-1.5">
                  {[
                    { Icon: MapPinIcon, val: p.location },
                    { Icon: RulerSquareIcon, val: <><CountUp to={p.areaNum} delay={i * 120} /> Sq.Ft.</> },
                    { Icon: ThermometerIcon, val: p.temp },
                    { Icon: ClockIcon, val: <CountUp to={p.daysNum} suffix=" Days" delay={i * 120} /> },
                  ].map((row, j) => (
                    <div key={j} className="flex items-center gap-2 text-[0.82rem] text-[#666]">
                      <row.Icon className="w-3.5 h-3.5 shrink-0 text-[#c4161c]" />
                      <span>{row.val}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
