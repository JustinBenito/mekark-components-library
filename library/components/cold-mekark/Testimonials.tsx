"use client";

import { motion } from "motion/react";
import CountUp from "@/components/cold-mekark/CountUp";

const TESTIMONIALS = [
  {
    stars: 5,
    quote: <>We were running a seafood export unit and couldn&apos;t afford even a day&apos;s delay. Mekark finished our blast freeze complex <CountUp to={8} /> days ahead of schedule. That&apos;s unheard of in this industry. The facility has been running flawlessly for <CountUp to={2} /> years.</>,
    name: "Rajendran K.",
    role: "MD, Coastal Marine Exports · Tuticorin",
    initials: "RK",
  },
  {
    stars: 5,
    quote: <>We compared <CountUp to={7} /> cold storage contractors before choosing Mekark. Only they could give a fixed price, fixed timeline, and a single point of responsibility. The GDP-compliant pharma cold room they built cleared our WHO-GMP audit on the first attempt.</>,
    name: "Sunita P.",
    role: "Supply Chain Director, MedLife Pharma · Chennai",
    initials: "SP",
  },
  {
    stars: 5,
    quote: <>The NABARD subsidy documentation support alone saved us ₹<CountUp to={1.2} decimals={1} /> crore. Mekark&apos;s team guided us through the entire application while simultaneously running the construction. Their process is like clockwork. Every deadline hit. Every promise kept.</>,
    name: "Venkatesh M.",
    role: "Director, AgroFresh Cold Chain · Coimbatore",
    initials: "VM",
  },
];

const spring = { type: "spring" as const, stiffness: 55, damping: 18 };

export default function Testimonials() {
  return (
    <section className="w-full bg-[#f7f7f7] py-16 md:py-24 px-6">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={spring}
          className="text-center mb-14"
        >
          <p className="text-xs font-bold tracking-[0.22em] uppercase text-[#c4161c] mb-3">
            What Our Clients Say
          </p>
          <h2 className="text-[1.8rem] md:text-[2.5rem] font-extrabold text-[#111] text-balance">
            <CountUp to={200} suffix="+" /> Businesses.{" "}
            <span className="text-[#c4161c]">One Consistent Review.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ ...spring, delay: i * 0.09 }}
              className="bg-white rounded-2xl p-7 border border-black/[0.07] shadow-[0_2px_12px_rgba(0,0,0,0.06)] flex flex-col"
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.stars }).map((_, si) => (
                  <svg key={si} width="16" height="16" viewBox="0 0 24 24" fill="#c4161c"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                ))}
              </div>

              {/* Quote mark */}
              <div className="text-[4rem] leading-none text-[#c4161c]/15 font-serif mb-2 -mt-2">&ldquo;</div>

              <p className="text-[#555] text-[0.88rem] leading-[1.75] flex-1 mb-5 text-pretty italic">
                {t.quote}
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-black/[0.06]">
                <div className="w-10 h-10 rounded-full bg-[#c4161c] flex items-center justify-center text-white font-extrabold text-[0.82rem] shrink-0">
                  {t.initials}
                </div>
                <div>
                  <p className="font-bold text-[0.9rem] text-[#111]">{t.name}</p>
                  <p className="text-[0.75rem] text-[#999]">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
