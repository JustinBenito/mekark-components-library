"use client";
import { motion } from "motion/react";

const REASONS = [
  {
    num: "01",
    title: "Every Project. Every Audit. Cleared First Time.",
    body: "Since our first commissioned facility in 2010, every Mekark-delivered clean room has cleared its initial regulatory inspection without a critical observation tied to design, construction, or validation. That is not luck. It is what happens when the team that builds the facility also writes and owns the validation documentation.",
  },
  {
    num: "02",
    title: "No Delayed Handover on Record",
    body: "We have never handed over a commissioned facility past the contractual deadline. Our phased milestone structure — with client sign-off at each gate — makes schedule risk visible early enough to correct, not early enough to apologise for. Your production ramp-up schedule is treated as a hard constraint, not a target.",
  },
  {
    num: "03",
    title: "Engineering Under One Roof",
    body: "Civil, HVAC, electrical, instrumentation, and validation engineers work in the same building in Chennai. When a technical decision needs three disciplines to agree, it happens in an afternoon — not across a chain of sub-contractor emails spread over two weeks.",
  },
  {
    num: "04",
    title: "South India's Largest Clean Room Fabrication Setup",
    body: "Our Chennai facility fabricates modular panel systems, air handling units, and ancillary equipment in-house. That means consistent quality, shorter lead times, and no import-dependency surprises when your construction window is running.",
  },
  {
    num: "05",
    title: "CFOs See the Numbers Before Signing",
    body: "We issue a detailed cost breakdown — line by line, with contingency provisions, variation triggers, and payment milestones — before a contract is signed. There are no estimate-to-actual surprises at the midpoint. The number you approve at the start is the number you manage to at the end.",
  },
  {
    num: "06",
    title: "Built for the Audit You Have Not Had Yet",
    body: "BMS-integrated HVAC, IoT environmental monitoring, and digital validation data management are standard in every Mekark project. Not because regulations require it today — because the direction of travel in global pharmaceutical and semiconductor regulation is unambiguous.",
  },
];

export function WhyMekarkSection() {
  return (
    <section className="bg-[#F5F5F4] py-20 md:py-28">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">

        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
          className="mb-12"
        >
          <p className="text-[#C4161C] font-bold  uppercase text-[0.72rem] mb-3">The Business Case</p>
          <h2 className="font-bold text-gray-900 text-balance" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}>
            Why Serious Operations Choose Mekark
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {REASONS.map((r, i) => (
            <motion.div
              key={r.num}
              initial={{ opacity: 0, y: 18, filter: "blur(4px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: i * 0.07, ease: [0.25, 1, 0.5, 1] }}
              className="bg-white rounded-xl p-6 flex flex-col gap-3"
              style={{ boxShadow: "var(--shadow-border)" }}
            >
              <span className="font-extrabold text-[#C4161C]/25 text-[1.5rem] tabular-nums leading-none">{r.num}</span>
              <h3 className="font-bold text-gray-900 text-[1rem] leading-snug">{r.title}</h3>
              <p className="text-gray-500 text-[0.88rem] leading-[1.78] text-pretty">{r.body}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
