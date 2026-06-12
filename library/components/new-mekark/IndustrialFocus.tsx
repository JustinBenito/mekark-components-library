"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function IndustrialFocus() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); io.disconnect(); } },
      { threshold: 0.15 }
    );
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  return (
    <section className="relative w-full bg-white py-12 md:py-20 px-4 sm:px-6 md:px-8 lg:px-12 overflow-hidden font-manrope">
      <div className="max-w-[1400px] mx-auto w-full flex flex-col lg:flex-row items-center gap-8 lg:gap-10">

        {/* Left Content */}
        <div className="flex-1 flex flex-col w-full lg:pl-12">
          <h2 className="text-[2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[3.5rem] font-bold text-[#FF5A5F] tracking-tight mb-8 md:mb-12 lg:mb-16">
            Industrial Focus
          </h2>
          <p className="text-[#777777] text-[1.05rem] leading-[1.8] max-w-[550px] mb-8 md:mb-12">
            Mekark stands at the intersection of architectural precision and industrial
            might. We don&apos;t just build structures; we engineer environments that
            drive productivity. Our vertically integrated model ensures that design
            intent is never lost in translation between the drawing board and the site.
          </p>

          {/* Two Cards */}
          <div ref={ref} className="flex flex-col sm:flex-row gap-6 w-full max-w-150">
            {[
              {
                title: "Single Window",
                desc: "Concept To Commissioning Management",
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ED1C24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4" />
                    <polyline points="14 2 14 8 20 8" />
                    <path d="M2 15h10" />
                    <path d="M9 18l3-3-3-3" />
                  </svg>
                ),
              },
              {
                title: "HSE Standards",
                desc: "Zero Compromise Safety Protocols",
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ED1C24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <path d="M12 8v4" />
                    <path d="M12 16h.01" />
                  </svg>
                ),
              },
            ].map((card, i) => (
              <div
                key={card.title}
                className="flex-1 bg-[#FFF5F5] border border-[#FFE5E5] rounded-2xl p-6 flex flex-col gap-2 relative z-10 transition-transform hover:-translate-y-1"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? "none" : "translateY(24px)",
                  transition: `opacity 600ms ease-out ${i * 120}ms, transform 600ms ease-out ${i * 120}ms`,
                }}
              >
                <div className="mb-2">{card.icon}</div>
                <h4 className="text-[#111111] font-bold text-[1.1rem]">{card.title}</h4>
                <p className="text-[#888888] text-[0.95rem] leading-[1.4]">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 w-full relative min-h-[400px] lg:min-h-[500px] rounded-3xl overflow-hidden shadow-[0_20px_50px_-15px_rgba(0,0,0,0.15)] mr-0 md:mr-12">
          <Image
            src="https://images.unsplash.com/photo-1541888086425-d81bb19240f5?auto=format&fit=crop&q=80"
            alt="Construction Site with Cranes"
            fill
            className="object-cover"
          />
        </div>

      </div>
    </section>
  );
}
