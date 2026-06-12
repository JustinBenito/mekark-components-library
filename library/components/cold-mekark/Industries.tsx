"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { WavesIcon, LeafIcon, UtensilsIcon, PlusCircleIcon, DropletIcon, TruckIcon, SproutIcon, FactoryIcon } from "@/components/cold-mekark/icons";

const INDUSTRIES = [
  {
    Icon: WavesIcon,
    title: "Seafood & Marine",
    desc: "Blast freezers and cold chain warehouses for export-quality seafood processors and fishing companies.",
    img: "/cold-mekark/bundle/Our Completed Projects/DJI_20240925133237_0011_D copy.webp",
  },
  {
    Icon: LeafIcon,
    title: "Agri & Food Processing",
    desc: "Fruits, vegetables, grains, and processed food cold storage for APMC yards, FPOs, and food parks.",
    img: "/cold-mekark/bundle/Our Completed Projects/DJI_20241004133100_0172_D copy.webp",
  },
  {
    Icon: UtensilsIcon,
    title: "Meat & Poultry",
    desc: "Hygienic, FSSAI-compliant cold rooms for meat processors, slaughterhouses, and protein distributors.",
    img: "/cold-mekark/bundle/Our Completed Projects/DJI_20241021133222_0174_D copy.webp",
  },
  {
    Icon: PlusCircleIcon,
    title: "Pharma & Healthcare",
    desc: "GDP-grade, WHO-GMP-ready cold chain infrastructure for vaccine manufacturers, hospitals, and drug distributors.",
    img: "/cold-mekark/bundle/Our Completed Projects/DJI_20250103155636_0140_D copy.webp",
  },
  {
    Icon: DropletIcon,
    title: "Dairy & Beverages",
    desc: "Chilled storage and distribution hubs for milk cooperatives, juice manufacturers, and cold beverage brands.",
    img: "/cold-mekark/bundle/Our Completed Projects/DJI_20250103131743_0097_D copy.webp",
  },
  {
    Icon: TruckIcon,
    title: "Logistics & Distribution",
    desc: "Multi-temperature cold chain distribution centres for 3PL operators, e-commerce platforms, and retail chains.",
    img: "/cold-mekark/bundle/Home Page Images/Warehouse Infrastrucre.webp",
  },
  {
    Icon: SproutIcon,
    title: "Floriculture & Horticulture",
    desc: "Specialised cold rooms for cut flowers, exotic produce exporters, and perishable commodity traders.",
    img: "/cold-mekark/bundle/Our Completed Projects/DJI_20240930120803_0048_D copy.webp",
  },
  {
    Icon: FactoryIcon,
    title: "Industrial & Chemical",
    desc: "Temperature-controlled storage for industrial chemicals, adhesives, explosives, and specialty raw materials.",
    img: "/cold-mekark/bundle/Home Page Images/industrial tank.webp",
  },
];

const spring = { type: "spring" as const, stiffness: 55, damping: 18 };

export default function Industries() {
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
            Industries We Serve
          </p>
          <h2 className="text-[1.8rem] md:text-[2.5rem] font-extrabold text-[#111] text-balance mb-3">
            Built for the Industries That{" "}
            <span className="text-[#c4161c]">Cannot Afford to Get It Wrong</span>
          </h2>
          <p className="text-[#777] text-base max-w-[540px] mx-auto text-pretty">
            We understand that temperature failure isn&apos;t an inconvenience — it&apos;s a catastrophe.
            Our cold storage facilities are engineered for zero-tolerance sectors.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {INDUSTRIES.map((ind, i) => (
            <motion.div
              key={ind.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ ...spring, delay: i * 0.06 }}
              className="group bg-white rounded-2xl overflow-hidden border border-black/[0.07] shadow-[0_1px_4px_rgba(0,0,0,0.05)] hover:shadow-[0_4px_20px_rgba(0,0,0,0.09)] transition-shadow duration-200"
            >
              {/* Image */}
              <div className="relative h-36 overflow-hidden">
                <Image
                  src={ind.img}
                  alt={ind.title}
                  fill
                  className="object-cover group-hover:scale-[1.05] transition-transform duration-500 ease-out outline-1 -outline-offset-1 outline-black/10"
                  sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/5 to-transparent" />
                {/* Icon badge on image */}
                <div className="absolute bottom-3 left-3 w-8 h-8 rounded-lg bg-white/95 flex items-center justify-center shadow-sm">
                  <ind.Icon className="w-4 h-4 text-[#c4161c]" />
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-[0.93rem] font-bold text-[#111] mb-1.5">{ind.title}</h3>
                <p className="text-[#888] text-[0.82rem] leading-[1.65] text-pretty">{ind.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
