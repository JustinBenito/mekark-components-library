"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const factoryImages = [
  "/about-us/Our Factories/DJI_20250301123710_0015_D copy.webp",
  "/about-us/Our Factories/DJI_20250301123837_0021_D copy.webp",
  "/about-us/Our Factories/DJI_20250301123854_0022_D copy.webp",
  "/about-us/Our Factories/DJI_20250301124425_0033_D copy.webp",
  "/about-us/Our Factories/DJI_20250301124433_0035_D copy.webp",
  "/about-us/Our Factories/WhatsApp Image 2026-04-07 at 12.49.26 PM (1) copy.webp",
];

export default function OurFactories() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); io.disconnect(); } },
      { threshold: 0.1 }
    );
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  return (
    <section className="relative w-full bg-white py-24 px-6 md:px-12 lg:px-24 font-manrope overflow-hidden">
      <div className="max-w-350 mx-auto">
        <div className="flex flex-col mb-16">
          <div className="flex items-center gap-3 mb-5">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M12 2L4 7v6c0 5.5 3.8 10.7 8 12 4.2-1.3 8-6.5 8-12V7l-8-5z" fill="#ED1C24"/>
              <circle cx="12" cy="10" r="3" fill="white"/>
            </svg>
            <h2 className="text-[24px] md:text-[40px] font-bold tracking-tight bg-linear-to-b from-black to-black/50 bg-clip-text text-transparent">
              Manufacturing Factories
            </h2>
          </div>
          <p className="max-w-2xl text-[1rem] text-[#666666] md:text-[1.1rem]">
            Factory-level manufacturing infrastructure equipped with advanced machinery to deliver precision-engineered structural solutions at scale.
          </p>
        </div>

        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {factoryImages.map((src, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-3xl group cursor-crosshair shadow-2xl transition-[transform,box-shadow] duration-500 hover:scale-[1.02] aspect-4/3"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "none" : "translateY(28px)",
                transition: `opacity 600ms ease-out ${index * 80}ms, transform 600ms ease-out ${index * 80}ms`,
              }}
            >
              <Image
                src={src}
                alt={`Mekark Factory ${index + 1}`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-6 left-6 text-white translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#ED1C24]">Facility {index + 1}</span>
                <p className="text-lg font-bold">Mekark Industrial Unit</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
