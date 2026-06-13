"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";

const SLIDES = [
  {
    src: "/clean-rooms-mekark/bundle/Home Page Images/Manufacturing plant.webp",
    alt: "Mekark clean room facility exterior",
  },
  {
    src: "/clean-rooms-mekark/bundle/Home Page Images/About Mekark.webp",
    alt: "Mekark facility",
  },
  {
    src: "/clean-rooms-mekark/bundle/Home Page Images/Multi storey.webp",
    alt: "Mekark multi-storey facility",
  },
  {
    src: "/clean-rooms-mekark/bundle/Home Page Images/Warehouse Infrastrucre.webp",
    alt: "Mekark warehouse infrastructure",
  },
];

const INTERVAL = 4500;

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 22, filter: "blur(4px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.65, ease: [0.25, 1, 0.5, 1] as const } },
};

export function HeroSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setCurrent((c) => (c + 1) % SLIDES.length), INTERVAL);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* Slideshow background */}
      <AnimatePresence mode="sync">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: 1, scale: 1.06 }}
          exit={{ opacity: 0 }}
          transition={{
            opacity: { duration: 0.55, ease: "easeInOut" },
            scale: { duration: INTERVAL / 1000 + 0.55, ease: "linear" },
          }}
          className="absolute inset-0"
        >
          <Image
            src={SLIDES[current].src}
            alt={SLIDES[current].alt}
            fill
            className="object-cover object-center"
            priority={current === 0}
            sizes="100vw"
          />
        </motion.div>
      </AnimatePresence>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/62" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 md:px-12 pt-28 pb-20 md:pt-32 md:pb-24 text-center">
        <motion.div initial="hidden" animate="visible" variants={stagger}>

          <motion.p
            variants={fadeUp}
            className="inline-block text-[#C4161C] font-bold uppercase text-[0.72rem] mb-6"
          >
            Clean Room Engineering — Chennai &amp; Pan India
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="font-extrabold text-white leading-[1.06] tracking-tight text-balance"
            style={{ fontSize: "clamp(2.4rem, 6vw, 4.4rem)" }}
          >
            We Build the Rooms<br className="hidden sm:block" />
            Where Nothing Can<br className="hidden sm:block" />
            Go Wrong.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-6 text-[1rem] text-white/72 leading-[1.8] text-pretty max-w-2xl mx-auto"
          >
            Twenty-five years. Four-fifty facilities. Pharmaceutical plants, semiconductor fabs,
            hospital operating theatres, biotech labs — every one of them passed regulatory audit.
            That record is what we are accountable to, on every project we take.
          </motion.p>

          {/* Social proof pill */}
          <motion.div
            variants={fadeUp}
            className="mt-8 inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/15 rounded-full px-5 py-2.5"
          >
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#F59E0B" aria-hidden="true">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
            <span className="text-white font-bold text-[0.88rem] tabular-nums">4.8</span>
            <span className="text-white/55 text-[0.82rem]">On Client Review</span>
          </motion.div>

          <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-3 mt-9">
            <a
              href="#contact"
              className="bg-[#C4161C] hover:bg-[#A31217] text-white font-bold px-8 py-3.5 rounded-md text-[0.95rem] transition-[background-color,transform] duration-150 active:scale-[0.96]"
            >
              Request Written Feasibility
            </a>
            <a
              href="#solutions"
              className="border border-white/30 hover:border-white/60 text-white font-semibold px-8 py-3.5 rounded-md text-[0.95rem] transition-[border-color,transform] duration-150 active:scale-[0.96]"
            >
              Our Solutions
            </a>
          </motion.div>

        </motion.div>
      </div>


    </section>
  );
}

export default HeroSection;
