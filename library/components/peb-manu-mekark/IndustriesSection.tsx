"use client";
import { motion } from "motion/react";
import Image from "next/image";

const INDUSTRIES = [
  {
    industry: "Manufacturing & Factory",
    application: "Factory Building Manufacturer | Manufacturing Plant Construction",
    why: "Clear-span interiors eliminate columns for unobstructed production lines. Crane-compatible frames handle heavy overhead loads.",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=600&q=75",
  },
  {
    industry: "Warehousing & Logistics",
    application: "Warehouse PEB Manufacturer | Logistics Warehouse Builder | Distribution Center Construction",
    why: "High-bay warehouses (10m–20m eave height), wide spans (60m+), and fast-track delivery make PEB ideal for logistics hubs.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=75",
  },
  {
    industry: "Automotive",
    application: "Industrial Steel Structure Manufacturer",
    why: "Crash-tested steel frames, acid-resistant flooring, and large-span paint shops or assembly lines built precisely for automotive OEMs and Tier-1 suppliers.",
    image: "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?auto=format&fit=crop&w=600&q=75",
  },
  {
    industry: "Pharmaceutical",
    application: "Industrial Facility Builder",
    why: "GMP-compliant cleanroom integration, positive pressure ventilation, and hygienic cladding systems for pharma and biotech manufacturing.",
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=600&q=75",
  },
  {
    industry: "Food & FMCG",
    application: "Storage Building Manufacturer",
    why: "Moisture-resistant, insulated PEB structures with HACCP-compliant interiors for food processing, cold storage, and packaging facilities.",
    image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=600&q=75",
  },
  {
    industry: "E-Commerce & Retail",
    application: "Distribution Center Construction | Warehouse Construction Company",
    why: "Multi-level mezzanine floors, wide bays, and dock-leveller integration for last-mile and fulfilment centre operations.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=600&q=75",
  },
  {
    industry: "Defence & Aerospace",
    application: "Heavy Steel Structure Manufacturer",
    why: "High-security, blast-resistant steel structures with large clear spans for aircraft hangars, maintenance bays, and armouries.",
    image: "https://images.unsplash.com/photo-1474302770737-173ee21bab63?auto=format&fit=crop&w=600&q=75",
  },
  {
    industry: "Data Centres",
    application: "Industrial Infrastructure Company",
    why: "Raised floor-compatible steel structures with precision-load framing, EMI shielding cladding, and 24/7 access-controlled designs.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=75",
  },
  {
    industry: "Commercial Real Estate",
    application: "Commercial Steel Building Contractor",
    why: "Multi-storey steel frame offices, retail malls, hotels, and mixed-use developments with fast construction programmes.",
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=600&q=75",
  },
  {
    industry: "Agricultural / Agri-Processing",
    application: "Prefabricated Building Manufacturer",
    why: "Grain silos, paddy dryers, cold storage, and post-harvest processing units built to rural site conditions and agri norms.",
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=600&q=75",
  },
];

export function IndustriesSection() {
  return (
    <section id="industries" className="bg-[#F8F8F8] py-20 md:py-28">
      <div className="max-w-350 mx-auto px-6 md:px-12 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
          className="mb-12"
        >
          <div className="flex items-center gap-2.5 mb-3">
            <div className="h-px w-8 bg-[#C4161C] shrink-0" />
            <p className="text-[#C4161C] font-bold uppercase text-[0.75rem]">Industries We Serve</p>
          </div>
          <h2 className="font-bold text-gray-900 text-balance" style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)" }}>
            PEB Solutions Engineered for Every Industry — Manufacturing, Logistics, Commercial &amp; More
          </h2>
          <p className="text-gray-500 text-[1rem] mt-3 max-w-2xl text-pretty">
            As an experienced Industrial PEB Manufacturer, Mekark delivers pre-engineered buildings across a wide spectrum of industries. Every structure is designed to match the unique operational, load, and regulatory requirements of each sector.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {INDUSTRIES.map((ind, i) => (
            <motion.div
              key={ind.industry}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.45, delay: (i % 5) * 0.07, ease: [0.25, 1, 0.5, 1] }}
              className="group bg-white rounded-2xl overflow-hidden cursor-default transition-[box-shadow,transform] duration-200 hover:-translate-y-1"
              style={{ boxShadow: "var(--shadow-border)" }}
              onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "var(--shadow-border-hover)")}
              onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "var(--shadow-border)")}
            >
              {/* Cover image */}
              <div className="relative h-36 overflow-hidden">
                <Image
                  src={ind.image}
                  alt={ind.industry}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                />
                {/* Subtle dark scrim for readability */}
                <div className="absolute inset-0 bg-black/20" />
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="font-bold text-gray-900 text-[0.88rem] mb-1.5 leading-tight">{ind.industry}</h3>
                <p className="text-[#C4161C] text-[0.68rem] font-semibold leading-tight mb-2">{ind.application}</p>
                <p className="text-gray-500 text-[0.78rem] leading-[1.6] text-pretty">{ind.why}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default IndustriesSection;
