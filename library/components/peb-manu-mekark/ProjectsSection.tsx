"use client";
import { motion } from "motion/react";
import Image from "next/image";

const PROJECT_IMAGES = [
  "DJI_20240925133237_0011_D copy.webp",
  "DJI_20240925133658_0021_D copy.webp",
  "DJI_20240930120803_0048_D copy.webp",
  "DJI_20240930120958_0057_D copy.webp",
  "DJI_20240930172656_0118_D copy.webp",
  "DJI_20241004133100_0172_D copy.webp",
  "DJI_20241021133222_0174_D copy.webp",
  "DJI_20250103131743_0097_D copy.webp",
  "DJI_20250103155013_0133_D copy.webp",
  "DJI_20250103155636_0140_D copy.webp",
  "DJI_20250301123134_0007_D copy.webp",
  "DJI_20250319140917_0052_D copy.webp",
];

export function ProjectsSection() {
  return (
    <section id="projects" className="bg-white py-20 md:py-28">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
          className="mb-12"
        >
          <p className="text-[#C4161C] font-bold uppercase text-[0.75rem] mb-3">Completed Projects</p>
          <h2 className="font-bold text-gray-900 text-balance" style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)" }}>
            Our Work Speaks Louder Than Claims — 450+ Completed PEB Projects Across India
          </h2>
          <p className="text-gray-500 text-[1rem] mt-3 max-w-2xl text-pretty">
            Every project below represents a client who trusted Mekark as their Pre Engineered Building Manufacturer — and got their facility delivered on time, on budget, and built to last.
          </p>
        </motion.div>

        {/* Masonry-style grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
          {PROJECT_IMAGES.map((img, i) => (
            <motion.div
              key={img}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08, ease: [0.25, 1, 0.5, 1] }}
              className="break-inside-avoid relative rounded-xl overflow-hidden group"
            >
              <div className="relative w-full" style={{ paddingBottom: i % 3 === 0 ? "70%" : i % 3 === 1 ? "60%" : "75%" }}>
                <Image
                  src={`/peb-manu-mekark/bundle/Our Completed Projects/${img}`}
                  alt={`Mekark completed PEB project ${i + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03] outline outline-1 -outline-offset-1 outline-black/10"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-[background-color] duration-300" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
