"use client";

const mekarkContact = { phoneHref: "tel:+919876543210", phoneLabel: "+91 98765 43210", emailHref: "mailto:info@mekark.com", emailLabel: "info@mekark.com", whatsappUrl: "https://wa.me/919876543210", websiteUrl: "https://www.mekark.com" };

import { motion } from "motion/react";

import FadeInView from "@/components/multi-storey-steel-building-mekark/FadeInView";

function P({ d, delay, dur = 0.6, sw = 1.5, op = 1 }: {
  d: string; delay: number; dur?: number; sw?: number; op?: number;
}) {
  return (
    <motion.path
      d={d} stroke="white" strokeWidth={sw} strokeLinecap="round" fill="none"
      initial={{ pathLength: 0, opacity: 0 }}
      whileInView={{ pathLength: 1, opacity: op }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        pathLength: { duration: dur, delay, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
        opacity: { duration: 0.05, delay },
      }}
    />
  );
}

function Node({ cx, cy, delay, r = 4 }: { cx: number; cy: number; delay: number; r?: number }) {
  return (
    <motion.circle
      cx={cx} cy={cy} r={r} fill="white"
      initial={{ scale: 0, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 0.9 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ type: "spring", stiffness: 380, damping: 18, delay }}
    />
  );
}

function BuildingElevation() {
  const cols = [60, 200, 340];
  const floors = [520, 400, 280, 160, 40];

  return (
    <div className="absolute right-0 top-0 bottom-0 w-[46%] pointer-events-none overflow-hidden flex items-center justify-center opacity-[0.08]">
      <svg viewBox="0 0 400 580" className="h-full w-auto max-w-full">
        {/* Ground */}
        <P d={`M${cols[0] - 20} ${floors[0]} L${cols[2] + 20} ${floors[0]}`} delay={0.1} dur={0.5} sw={3} />

        {/* Columns */}
        {cols.map((x, i) => (
          <P key={`col-${i}`} d={`M${x} ${floors[0]} L${x} ${floors[4]}`} delay={0.5 + i * 0.15} dur={1} sw={2.5} />
        ))}

        {/* Floor beams */}
        {floors.slice(1).map((y, i) => (
          <P key={`floor-${i}`} d={`M${cols[0]} ${y} L${cols[2]} ${y}`} delay={1.5 + i * 0.18} dur={0.5} sw={2} />
        ))}

        {/* X-braces in alternating bays */}
        <P d={`M${cols[0]} ${floors[1]} L${cols[1]} ${floors[0]}`} delay={2.0} sw={1} op={0.5} />
        <P d={`M${cols[0]} ${floors[0]} L${cols[1]} ${floors[1]}`} delay={2.1} sw={1} op={0.5} />
        <P d={`M${cols[1]} ${floors[3]} L${cols[2]} ${floors[2]}`} delay={2.2} sw={1} op={0.5} />
        <P d={`M${cols[1]} ${floors[2]} L${cols[2]} ${floors[3]}`} delay={2.3} sw={1} op={0.5} />
        <P d={`M${cols[0]} ${floors[4]} L${cols[1]} ${floors[3]}`} delay={2.4} sw={1} op={0.5} />
        <P d={`M${cols[0]} ${floors[3]} L${cols[1]} ${floors[4]}`} delay={2.5} sw={1} op={0.5} />
        <P d={`M${cols[1]} ${floors[1]} L${cols[2]} ${floors[2]}`} delay={2.6} sw={1} op={0.5} />
        <P d={`M${cols[1]} ${floors[2]} L${cols[2]} ${floors[1]}`} delay={2.7} sw={1} op={0.5} />

        {/* Roof triangle */}
        <P d={`M${cols[0]} ${floors[4]} L${(cols[0] + cols[2]) / 2} ${floors[4] - 50} L${cols[2]} ${floors[4]}`}
          delay={2.8} dur={0.5} sw={2} op={0.7} />

        {/* Connection nodes */}
        {floors.flatMap((y, fi) =>
          cols.map((x, ci) => (
            <Node key={`n-${fi}-${ci}`} cx={x} cy={y} delay={1.4 + fi * 0.3 + ci * 0.05} r={fi === 0 ? 5 : 4} />
          ))
        )}

        {/* Scanning line */}
        <motion.rect
          x="0" width="400" height="1.5" fill="white" fillOpacity={0.6}
          initial={{ y: floors[4] }}
          whileInView={{ y: [floors[4], floors[0], floors[4]] }}
          viewport={{ once: false }}
          transition={{ duration: 4, delay: 3.2, repeat: Infinity, ease: "easeInOut", repeatDelay: 2 }}
        />
      </svg>
    </div>
  );
}

export default function FinalCTA() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-[#C4161C]">
      {/* Full-section structural grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            radial-gradient(circle, rgba(255,255,255,0.2) 1.5px, transparent 1.5px),
            linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px, 80px 80px, 80px 80px",
        }}
      />

      {/* Vignette */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/20 to-transparent pointer-events-none z-[2]" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/15 to-transparent pointer-events-none z-[2]" />

      {/* Animated building elevation — right side */}
      <BuildingElevation />

      <div className="relative z-10 max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16 text-center">
        <FadeInView>
          <p className="text-[0.72rem] font-extrabold uppercase tracking-[0.25em] text-white/70 mb-4">
            Start Your Project
          </p>
        </FadeInView>
        <FadeInView delay={80}>
          <h2 className="text-[2.4rem] sm:text-[3rem] md:text-[3.6rem] font-extrabold text-white leading-[1.05] tracking-[-0.03em] mb-6 max-w-[720px] mx-auto">
            Your Steel Building<br />
            <span className="text-white">Starts with One Call</span>
          </h2>
        </FadeInView>
        <FadeInView delay={160}>
          <p className="text-white/65 text-[1.05rem] leading-[1.8] max-w-[540px] mx-auto mb-10">
            500 projects. 18 states. One promise — structurally uncompromised, delivered on
            time, priced transparently. Let&apos;s build something that outlasts us both.
          </p>
        </FadeInView>

        <FadeInView delay={240}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href="#contact-form"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-md bg-white text-[#C4161C] font-bold text-[1rem] transition-[background-color,transform] duration-150 hover:bg-white/90 active:scale-[0.96]"
            >
              Get Free Structural Quote
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
            <a
              href={mekarkContact.phoneHref}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-md border border-white/20 text-white font-semibold text-[1rem] transition-[border-color,background-color] duration-150 hover:border-white/40 hover:bg-white/5"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              {mekarkContact.phoneLabel}
            </a>
          </div>
        </FadeInView>

        <FadeInView delay={320}>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-white/35 text-[0.8rem]">
            {[
              "Multi Storey Steel Building Contractor",
              "Steel Structure Manufacturer Tamil Nadu",
              "Industrial Steel Building Contractor Chennai",
              "Structural Steel Fabrication Company India",
            ].map(tag => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </FadeInView>
      </div>
    </section>
  );
}
