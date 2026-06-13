"use client";
import { motion } from "motion/react";

const STEPS = [
  {
    num: "1",
    title: "Discovery — Your Product and Your Regulator",
    body: "We begin by understanding your product, manufacturing process, and the regulatory authority you will face — CDSCO, WHO, USFDA, or EMA. ISO classification, pressure cascade design, and contamination risk mapping are established here. No line is drawn until this is done.",
    tags: ["ISO Classification", "Process Risk Map", "Regulatory Pathway"],
  },
  {
    num: "2",
    title: "Design Engineering and Design Qualification",
    body: "Complete facility design — airflow modelling (CFD where required), HVAC load calculations, P&ID drawings, and the full Design Qualification package. Nothing is fabricated until the client has reviewed and approved the DQ. Changes after fabrication are expensive. Changes before it are free.",
    tags: ["CFD Modelling", "P&ID", "DQ Package"],
  },
  {
    num: "3",
    title: "Fabrication and Procurement",
    body: "Structural panels, HVAC units, and filtration systems are fabricated at our Chennai facility or procured from qualified vendors with full material traceability. Every item is QC-inspected before it leaves the factory gate — not after it arrives on site.",
    tags: ["In-House Fabrication", "Vendor Qualification", "Material Traceability"],
  },
  {
    num: "4",
    title: "Site Installation and Commissioning",
    body: "Discipline-specific site teams — civil, MEP, HVAC, controls — managed under one Mekark site manager. No trade coordination delays. No \"that is not our scope\" conversations. The IQ protocol runs parallel with construction completion, not after it.",
    tags: ["MEP Integration", "BMS Commissioning", "IQ Protocol"],
  },
  {
    num: "5",
    title: "Validation — OQ and PQ Execution",
    body: "Operational and Performance Qualification executed by our in-house engineers. Particle count certification, pressure differential mapping, temperature uniformity studies, airflow velocity measurement, filter integrity tests — each formatted for your regulatory submission dossier.",
    tags: ["OQ / PQ Execution", "ISO Certification", "Audit-Ready Dossier"],
  },
  {
    num: "6",
    title: "Handover and 24-Month Performance SLA",
    body: "Formal handover with as-built drawings, O&M manuals, spare parts schedule, and calibration records. Followed immediately by the 24-month performance SLA — scheduled re-certification, preventive maintenance, and 4-business-hour emergency response, written into the contract you signed at the start.",
    tags: ["As-Built Drawings", "24-Month SLA", "Re-Certification"],
  },
];

export function ProjectApproach() {
  return (
    <section id="process" className="bg-[#F5F5F4] py-20 md:py-28">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">

        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
          className="mb-4"
        >
          <p className="text-[#C4161C] font-bold  uppercase text-[0.72rem] mb-3">How Every Project Runs</p>
          <h2 className="font-bold text-gray-900 text-balance" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}>
            Our Project Approach
          </h2>
          <p className="text-gray-500 text-[0.97rem] mt-4 leading-[1.75] max-w-2xl text-pretty">
            No project starts at the design board. Every project starts at your product, your process,
            and your regulatory destination. The design follows that — not the other way around.
          </p>
        </motion.div>

        <div className="mt-12 space-y-4">
          {STEPS.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, x: -20, filter: "blur(4px)" }}
              whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: i * 0.06, ease: [0.25, 1, 0.5, 1] }}
              className="grid grid-cols-[40px_1fr] gap-5 md:gap-8"
            >
              {/* Timeline column */}
              <div className="relative flex justify-center">
                <div className="w-10 h-10 rounded-full bg-[#C4161C] flex items-center justify-center shrink-0 relative z-10">
                  <span className="text-white font-extrabold text-[0.9rem] tabular-nums">{step.num}</span>
                </div>
                {/* Line that extends from below circle through gap into next card */}
                {i < STEPS.length - 1 && (
                  <div
                    className="absolute left-1/2 -translate-x-1/2 w-px bg-gray-200"
                    style={{ top: 40, bottom: -20 }}
                  />
                )}
              </div>

              {/* Card */}
              <div
                className="bg-white rounded-xl p-6 md:p-7 mb-0"
                style={{ boxShadow: "var(--shadow-border)" }}
              >
                <h3 className="font-bold text-gray-900 text-[1.02rem] leading-snug mb-2">{step.title}</h3>
                <p className="text-gray-500 text-[0.9rem] leading-[1.78] text-pretty mb-4">{step.body}</p>
                <div className="flex flex-wrap gap-2">
                  {step.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1.5 text-gray-600 bg-gray-100 rounded-full px-3 py-1 text-[0.75rem] font-semibold"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C4161C] shrink-0" />
                      {tag}
                    </span>
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

export default ProjectApproach;
