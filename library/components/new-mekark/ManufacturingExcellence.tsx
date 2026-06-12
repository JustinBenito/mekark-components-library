"use client";


import FadeInView from "@/components/new-mekark/FadeInView";

type ManufacturingExcellenceProps = {
  showEyebrow?: boolean;
};

const highlights = [
  "Advanced CNC fabrication systems",
  "Automated fabrication lines",
  "High precision & consistent quality",
  "Reduced production time",
  "Multiple large-scale projects simultaneously",
  "One of Tamil Nadu's largest PEB units",
];

export default function ManufacturingExcellence({
  showEyebrow = true,
}: ManufacturingExcellenceProps) {
  return (
    <section className="relative w-full bg-white py-16 md:py-20 lg:pt-30 lg:pb-30 overflow-hidden font-manrope">

      {/* GlobeDecoration omitted in library preview */}

      <div className="max-w-350 mx-auto w-full px-4 md:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-12 lg:gap-20 items-start">

        {/* Left — text */}
        <div>
          {showEyebrow ? (
            <div className="flex items-center gap-3 mb-8">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L4 7v6c0 5.5 3.8 10.7 8 12 4.2-1.3 8-6.5 8-12V7l-8-5z" fill="#ED1C24"/>
                <circle cx="12" cy="10" r="3" fill="white"/>
              </svg>
              <h2 className="text-[24px] md:text-[40px] font-bold tracking-tight bg-linear-to-b from-black to-black/50 bg-clip-text text-transparent">
                Manufacturing Excellence
              </h2>
            </div>
          ) : null}

          <div className="flex flex-col gap-5 text-[#555] text-[1rem] md:text-[1.08rem] leading-[1.8] max-w-xl text-pretty">
            <p>
              Mekark operates one of Tamil Nadu&apos;s largest PEB manufacturing units, designed for high-volume and high-speed production.
            </p>
            <p>
              Our facility integrates advanced CNC systems, automated fabrication lines, and modern engineering tools to ensure high precision, consistent quality, reduced production time, and the ability to handle multiple large-scale projects simultaneously.
            </p>
          </div>
        </div>

        {/* Right — highlights */}
        <FadeInView delay={100}>
          <div className="rounded-3xl bg-[#0A0A0A] p-8 md:p-10 relative z-10 h-full">
            <h3 className="text-white text-[1.15rem] md:text-[1.35rem] font-bold mb-7">
              Facility Capabilities
            </h3>
            <ul className="flex flex-col gap-4">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[#BDBDBD] text-[0.95rem] leading-relaxed">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#ED1C24] shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </FadeInView>

      </div>
    </section>
  );
}
