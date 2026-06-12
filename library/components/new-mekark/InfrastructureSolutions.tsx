"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { MdOutlineWarehouse } from "react-icons/md";
import { PiFactory, PiPipeLight } from "react-icons/pi";
import { FaRegBuilding } from "react-icons/fa";
import { TbBuildingWarehouse } from "react-icons/tb";
import { GiCrane, GiWaterTank } from "react-icons/gi";
import { IoConstructOutline } from "react-icons/io5";
import { LuConstruction } from "react-icons/lu";

const cards = [
  {
    title: "Warehouse Infrastructure",
    desc: "Engineered for throughput, scalability, and logistics efficiency.",
    image: "/IIS/Warehouse Infrastrucre.webp",
    icon: <MdOutlineWarehouse size={26} />,
  },
  {
    title: "Manufacturing Facilities",
    desc: "Production-driven environments engineered for industrial performance.",
    image: "/IIS/Manufacturing plant.webp",
    icon: <PiFactory size={26} />,
  },
  {
    title: "Multi-Storey Steel Buildings",
    desc: "High-performance vertical structures optimised for land efficiency and load distribution.",
    image: "/IIS/Multi storey.webp",
    icon: <FaRegBuilding size={26} />,
  },
  {
    title: "Cold Storage",
    desc: "Thermally optimised structures designed for controlled environment performance.",
    image: "/IIS/cold storage.jpg",
    icon: <TbBuildingWarehouse size={26} />,
  },
  {
    title: "EOT Crane Structures",
    desc: "Engineered for dynamic load handling and precision crane operation systems.",
    image: "/IIS/eot cranes.webp",
    icon: <GiCrane size={26} />,
  },
  {
    title: "MEP Systems",
    desc: "Integrated mechanical, electrical, and plumbing solutions engineered to support efficient, reliable, and compliant industrial operations.",
    image: "/IIS/MEP.webp",
    icon: <IoConstructOutline size={26} />,
  },
  {
    title: "Industrial Tank Construction",
    desc: "Heavy-duty engineered storage systems built for safety and long-term durability.",
    image: "/IIS/industrial tank.webp",
    icon: <GiWaterTank size={26} />,
  },
  {
    title: "Road Construction",
    desc: "Durable internal roads, heavy-duty pavements, and transportation infrastructure designed for high-load industrial and logistics environments.",
    image: "/IIS/Manufacturing plant.webp",
    icon: <LuConstruction size={26} />,
  },
  {
    title: "Pipeline Systems",
    desc: "Engineered gas and water pipeline networks with safe routing, pressure control, and long-term operational reliability for industrial facilities.",
    image: "/IIS/About Mekark.webp",
    icon: <PiPipeLight size={26} />,
  },
];

// Show row 1 fully + half of row 2
// desktop: h-72 (288px) + gap-5 (20px) + half of 288 (144px) = 452px
const COLLAPSED_HEIGHT = 452;

export default function InfrastructureSolutions() {
  const [visible, setVisible] = useState(false);
  const [headingVisible, setHeadingVisible] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [fullHeight, setFullHeight] = useState(0);

  const innerRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const makeIO = (el: HTMLElement | null, setter: (v: boolean) => void, threshold = 0.05) => {
      if (!el) return null;
      const io = new IntersectionObserver(
        ([e]) => { if (e.isIntersecting) { setter(true); io.disconnect(); } },
        { threshold }
      );
      io.observe(el);
      return io;
    };
    const io1 = makeIO(headingRef.current, setHeadingVisible, 0.5);
    const io2 = makeIO(sectionRef.current, setVisible, 0.05);
    return () => { io1?.disconnect(); io2?.disconnect(); };
  }, []);

  // Measure full grid height after first paint
  useEffect(() => {
    if (innerRef.current) {
      setFullHeight(innerRef.current.scrollHeight);
    }
  }, []);

  return (
    <section id="solutions" className="w-full scroll-mt-28 bg-white pt-10 pb-14 overflow-hidden font-manrope">
      <div className="max-w-350 mx-auto w-full px-4 md:px-12 relative z-10">

        {/* Heading */}
        <div
          ref={headingRef}
          className="flex items-center gap-3 mb-10 md:mb-14"
          style={{
            opacity: headingVisible ? 1 : 0,
            transform: headingVisible ? "none" : "translateY(16px)",
            transition: "opacity 600ms ease-out, transform 600ms ease-out",
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M12 2L4 7v6c0 5.5 3.8 10.7 8 12 4.2-1.3 8-6.5 8-12V7l-8-5z" fill="#ED1C24"/>
            <circle cx="12" cy="10" r="3" fill="white"/>
          </svg>
          <h2 className="text-[24px] md:text-[40px] font-bold tracking-tight bg-linear-to-b from-black to-black/50 bg-clip-text text-transparent">
            Industrial Infrastructure Solutions
          </h2>
        </div>

        {/* Grid wrapper — clips to collapsed height */}
        <div className="relative" ref={sectionRef}>
          <div
            style={{
              height: expanded
                ? fullHeight > 0 ? `${fullHeight}px` : "auto"
                : `${COLLAPSED_HEIGHT}px`,
              overflow: "hidden",
              transition: "height 750ms cubic-bezier(0.4, 0, 0.2, 1)",
            }}
          >
            <div
              ref={innerRef}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5"
            >
              {cards.map((card, idx) => (
                <div
                  key={idx}
                  className="group relative rounded-2xl overflow-hidden h-64 md:h-72"
                  style={{
                    opacity: visible ? 1 : 0,
                    transform: visible ? "none" : "translateY(28px)",
                    transition: `opacity 600ms ease-out ${idx * 60}ms, transform 600ms ease-out ${idx * 60}ms`,
                  }}
                >
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0"
                    style={{ background: "linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.15) 100%)" }}
                  />
                  <div className="absolute inset-0 bg-[#ED1C24]/0 group-hover:bg-[#ED1C24]/10 transition-colors duration-300" />
                  <div className="absolute inset-0 flex flex-col justify-between p-5 md:p-6">
                    <div className="w-10 h-10 rounded-xl bg-[#ED1C24]/20 border border-[#ED1C24]/30 flex items-center justify-center text-[#ED1C24] backdrop-blur-sm">
                      {card.icon}
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-[1.05rem] md:text-[1.15rem] leading-snug mb-1.5">
                        {card.title}
                      </h3>
                      <p className="text-[#AAA] text-[0.78rem] leading-relaxed line-clamp-2">
                        {card.desc}
                      </p>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#ED1C24] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </div>
              ))}
            </div>
          </div>

          {/* Fade overlay */}
          <div
            className="absolute inset-x-0 bottom-0 pointer-events-none z-20"
            style={{
              height: "240px",
              opacity: expanded ? 0 : 1,
              transition: "opacity 600ms ease",
              background: "linear-gradient(to bottom, transparent 0%, rgba(255,255,255,0.8) 45%, white 100%)",
            }}
          />

          {/* Show More button */}
          <div
            className="absolute inset-x-0 bottom-6 flex justify-center z-30"
            style={{
              opacity: expanded ? 0 : 1,
              pointerEvents: expanded ? "none" : "auto",
              transition: "opacity 350ms ease",
            }}
          >
            <button
              onClick={() => setExpanded(true)}
              className="inline-flex items-center gap-2.5 bg-[#ED1C24] hover:bg-[#c8101b] text-white text-[0.85rem] font-bold px-7 py-3 rounded-xl shadow-lg shadow-[#ED1C24]/20 active:scale-[0.96] transition-[background-color,transform] duration-150"
            >
              Show More
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 9l6 6 6-6"/>
              </svg>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
