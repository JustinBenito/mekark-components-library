"use client";

import Image from "next/image";
import { FadeInView } from "@/components/manufacturing-mekark/FadeInView";

const sectors = [
  { name: "Automotive & Auto Ancillary",     photo: "1492144534655-ae79c964c9d7" },
  { name: "Pharmaceutical & Life Sciences",   photo: "1532187863486-abf9dbad1b69" },
  { name: "Food & Beverage Processing",       photo: "1504307651254-35680f356dfd" },
  { name: "Electronics & Semiconductors",     photo: "1518770660439-4636190af475" },
  { name: "Defence & Aerospace",              photo: "1541888946425-d81bb19240f5" },
  { name: "Logistics & Warehousing",          photo: "1553413077-190dd305871c" },
  { name: "Chemical & Process Plants",        photo: "1581091226033-d5c48150dbaa" },
  { name: "Renewable Energy & EV",            photo: "1508514177221-188b1cf16e9d" },
  { name: "Heavy Engineering & Steel",        photo: "1503387762-592deb58ef4e" },
  { name: "Textile & Apparel",               photo: "1558618666-fcd25c85cd64" },
];

export default function IndustryApplications() {
  return (
    <section id="industries" className="py-24 px-6 md:px-12 lg:px-16 xl:px-24 bg-[#eeeeee]">
      <div className="max-w-[1300px] mx-auto">

        <FadeInView>
          <span className="inline-flex items-center rounded-full px-4 py-1.5 mb-3 text-[0.78rem] font-semibold text-[#C4161C]" style={{ background: "rgba(196,22,28,0.09)", border: "1px solid rgba(196,22,28,0.22)", boxShadow: "inset 0 0 16px rgba(196,22,28,0.18)" }}>Industry Applications</span>
          <h2
            className="text-[2.8rem] md:text-[3.4rem] font-black leading-[1.08] max-w-[640px] mb-4"
            style={{ letterSpacing: "-0.03em" }}
          >
            <span style={{ color: "#C4161C" }}>Sectors We</span><br />
            <span style={{ color: "#0f0f0f" }}>Engineer For.</span>
          </h2>
          <p className="text-[1rem] text-[#666] leading-[1.75] max-w-[560px] mb-14 text-pretty">
            Facilities built for the operational demands of specific production environments — not
            generic industrial sheds repurposed.
          </p>
        </FadeInView>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-3">
          {sectors.map((sector, i) => (
            <FadeInView key={sector.name} delay={0.03 + i * 0.05}>
              <div className="relative rounded-xl overflow-hidden group cursor-default aspect-[4/3]"
                style={{ boxShadow: "0 0 0 1px rgba(0,0,0,0.08)" }}>

                {/* Image */}
                <Image
                  src={`https://images.unsplash.com/photo-${sector.photo}?auto=format&fit=crop&w=480&q=70`}
                  alt={sector.name}
                  fill
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10 group-hover:from-black/70 transition-all duration-300" />

                {/* Red accent line on hover */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C4161C] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

                {/* Label */}
                <div className="absolute bottom-0 left-0 right-0 p-3.5">
                  <p className="text-[0.8rem] font-bold text-white leading-snug">
                    {sector.name}
                  </p>
                </div>

              </div>
            </FadeInView>
          ))}
        </div>

      </div>
    </section>
  );
}
