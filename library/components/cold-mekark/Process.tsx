"use client";

import { motion } from "motion/react";

const STEPS = [
  {
    num: "01",
    title: "Site Assessment",
    desc: "Free survey, soil testing, and project feasibility analysis by our senior engineers.",
    days: "Days 1–5",
  },
  {
    num: "02",
    title: "Design & Engineering",
    desc: "Thermal load calculation, structural design, refrigeration sizing, and 3D layout preparation.",
    days: "Days 6–20",
  },
  {
    num: "03",
    title: "Manufacturing",
    desc: "PEB steel fabrication, insulated panels, and cold room components produced at our facility simultaneously.",
    days: "Days 15–55",
  },
  {
    num: "04",
    title: "Civil & Structure",
    desc: "Foundation, PEB erection, insulated wall and ceiling installation by our certified site team.",
    days: "Days 40–95",
  },
  {
    num: "05",
    title: "Refrigeration & MEP",
    desc: "Refrigeration system installation, electrical, plumbing, monitoring, and control panel commissioning.",
    days: "Days 80–110",
  },
  {
    num: "06",
    title: "Commissioning & Handover",
    desc: "Full pull-down test, performance validation, operator training, and official project handover.",
    days: "Days 110–120",
  },
];

const spring = { type: "spring" as const, stiffness: 55, damping: 18 };

export default function Process() {
  return (
    <section className="w-full bg-white py-16 md:py-24 px-6">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={spring}
          className="text-center mb-14"
        >
          <p className="text-xs font-bold tracking-[0.22em] uppercase text-[#c4161c] mb-3">
            Our Process
          </p>
          <h2 className="text-[1.8rem] md:text-[2.5rem] font-extrabold text-[#111] text-balance mb-3">
            Site Survey to Switch-On{" "}
            <span className="text-[#c4161c]">In 120 Days Flat</span>
          </h2>
          <p className="text-[#777] text-base max-w-[520px] mx-auto text-pretty">
            Six engineered phases. Every milestone tracked. You always know exactly where your project stands.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-[calc(50%-0.5px)] top-0 bottom-0 w-[1px] bg-black/[0.08]" />

          <div className="flex flex-col gap-6">
            {STEPS.map((s, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={s.num}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ ...spring, delay: i * 0.07 }}
                  className={`relative md:flex md:items-start md:gap-8 ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  {/* Card */}
                  <div className="w-full md:w-[calc(50%-2rem)]">
                    <div className="rounded-2xl border border-black/[0.07] bg-white p-6 shadow-[0_2px_12px_rgba(0,0,0,0.06)] hover:shadow-[0_4px_24px_rgba(0,0,0,0.09)] transition-shadow duration-200">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-9 h-9 rounded-xl bg-[#c4161c] flex items-center justify-center shrink-0">
                          <span className="text-white font-extrabold text-[0.72rem]">{s.num}</span>
                        </div>
                        <div>
                          <h3 className="font-bold text-[0.97rem] text-[#111]">{s.title}</h3>
                          <span className="text-[0.72rem] font-semibold text-[#c4161c]">{s.days}</span>
                        </div>
                      </div>
                      <p className="text-[#777] text-[0.875rem] leading-[1.7] text-pretty">{s.desc}</p>
                    </div>
                  </div>

                  {/* Center dot */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-6 w-4 h-4 rounded-full bg-[#c4161c] border-4 border-white shadow-[0_0_0_2px_rgba(196,22,28,0.2)]" />

                  {/* Spacer */}
                  <div className="hidden md:block w-[calc(50%-2rem)]" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
