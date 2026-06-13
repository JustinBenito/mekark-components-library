"use client";
import { motion } from "motion/react";

const USPS = [
  {
    num: "01",
    badge: "Not Subcontracted",
    title: "Validation Is In-House — Always",
    body: "Most contractors outsource DQ/IQ/OQ/PQ work to third-party consultants. That creates timeline gaps and divided accountability. At Mekark, our validation engineers are employed in-house. When your audit happens, the person who wrote the protocol is the person who answers.",
  },
  {
    num: "02",
    badge: "Written Assessment",
    title: "Written Feasibility in 48 Hours",
    body: "From your first enquiry to a structured written assessment — ISO class recommendation, regulatory pathway, and indicative cost envelope — within 48 business hours. Not a sales call. A technical document you can take to your board.",
  },
  {
    num: "03",
    badge: "Single Responsibility",
    title: "One Contract. Complete Accountability.",
    body: "Civil, HVAC, electrical, validation, and regulatory documentation sit under a single Mekark contract. There is no main contractor and sub-contractor matrix. When something needs resolving, one call reaches the person who can resolve it.",
  },
  {
    num: "04",
    badge: "Factory Tested",
    title: "Proprietary Panel System — 3× Tighter Airtightness",
    body: "Mekark's in-house fabricated modular panel system achieves ≤0.5% leakage at +15 Pa differential — three times tighter than the industry standard tolerance. Tested in our Chennai facility before it reaches your site.",
  },
  {
    num: "05",
    badge: "Included in Scope",
    title: "Regulatory Dossier Included — Not Billed Separately",
    body: "We prepare your CDSCO, WHO, and USFDA submission dossiers as part of the project scope. Not as a billable extra. Your Quality team receives a ready-to-submit package — not a folder of raw data that still needs months of formatting.",
  },
  {
    num: "06",
    badge: "Contractual Commitment",
    title: "24-Month Performance SLA — In Writing",
    body: "Every Mekark project closes with a 24-month operational performance guarantee. Scheduled re-certification, preventive maintenance visits, and 4-business-hour emergency response — specified in the contract you signed at the start.",
  },
];

export function USPSection() {
  return (
    <section id="why" className="bg-white py-20 md:py-28">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">

        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
          className="mb-4"
        >
          <p className="text-[#C4161C] font-bold  uppercase text-[0.72rem] mb-3">Why Mekark</p>
          <h2 className="font-bold text-gray-900 text-balance" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}>
            Six Things Mekark Does<br className="hidden sm:block" /> That Others Simply Don&apos;t
          </h2>
          <p className="text-gray-500 text-[0.97rem] mt-4 leading-[1.75] max-w-2xl text-pretty">
            These are not marketing claims. They are structural commitments — written into our contracts,
            measured in our delivery records, and accountable in every project we take on.
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-5">
          {USPS.map((u, i) => (
            <motion.div
              key={u.num}
              initial={{ opacity: 0, y: 18, filter: "blur(4px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: i * 0.07, ease: [0.25, 1, 0.5, 1] }}
              className="bg-[#F5F5F4] rounded-xl p-6 flex flex-col gap-3"
              style={{ boxShadow: "var(--shadow-border)" }}
            >
              <div className="flex items-center justify-between gap-3">
                <span className="text-gray-300 font-extrabold text-[1.1rem] tabular-nums">{u.num}</span>
                <span className="shrink-0 text-[#C4161C] bg-[#C4161C]/8 border border-[#C4161C]/15 rounded-full px-3 py-1 text-[0.7rem] font-bold ">
                  {u.badge}
                </span>
              </div>
              <h3 className="font-bold text-gray-900 text-[1.02rem] leading-snug">{u.title}</h3>
              <p className="text-gray-500 text-[0.9rem] leading-[1.78] text-pretty">{u.body}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default USPSection;
