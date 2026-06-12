"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const IconWarehouse = () => <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>;
const IconFactory = () => <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 20h20M4 20V10l5 4V10l5 4V4l5 16"/><line x1="8" y1="20" x2="8" y2="14"/><line x1="12" y1="20" x2="12" y2="14"/></svg>;
const IconBuilding = () => <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="1"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="3" y1="15" x2="21" y2="15"/><line x1="9" y1="9" x2="9" y2="21"/><line x1="15" y1="9" x2="15" y2="21"/></svg>;
const IconCrane = () => <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="4" y1="20" x2="4" y2="4"/><line x1="4" y1="4" x2="18" y2="4"/><line x1="18" y1="4" x2="18" y2="10"/><line x1="18" y1="10" x2="4" y2="20"/><line x1="18" y1="10" x2="18" y2="20"/></svg>;
const IconConstruct = () => <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/></svg>;
const IconTank = () => <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5"/><path d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3"/></svg>;
const IconPipe = () => <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12h20M2 12c0-2.21 1.79-4 4-4h12c2.21 0 4 1.79 4 4s-1.79 4-4 4H6c-2.21 0-4-1.79-4-4z"/></svg>;
const IconRoad = () => <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 20l4-16h10l4 16"/><line x1="6" y1="12" x2="18" y2="12"/><line x1="5" y1="16" x2="19" y2="16"/><line x1="12" y1="4" x2="12" y2="20"/></svg>;
const IconCold = () => <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 14.76V3.5a2.5 2.5 0 00-5 0v11.26a4.5 4.5 0 105 0z"/></svg>;

const cards = [
  { title: "Warehouse Infrastructure", desc: "Engineered for throughput, scalability, and logistics efficiency.", image: "/new-mekark/IIS/Warehouse Infrastrucre.webp", icon: <IconWarehouse /> },
  { title: "Manufacturing Facilities", desc: "Production-driven environments engineered for industrial performance.", image: "/new-mekark/IIS/Manufacturing plant.webp", icon: <IconFactory /> },
  { title: "Multi-Storey Steel Buildings", desc: "High-performance vertical structures optimised for land efficiency and load distribution.", image: "/new-mekark/IIS/Multi storey.webp", icon: <IconBuilding /> },
  { title: "Cold Storage", desc: "Thermally optimised structures designed for controlled environment performance.", image: "/new-mekark/IIS/cold storage.jpg", icon: <IconCold /> },
  { title: "EOT Crane Structures", desc: "Engineered for dynamic load handling and precision crane operation systems.", image: "/new-mekark/IIS/eot cranes.webp", icon: <IconCrane /> },
  { title: "MEP Systems", desc: "Integrated mechanical, electrical, and plumbing solutions for industrial operations.", image: "/new-mekark/IIS/MEP.webp", icon: <IconConstruct /> },
  { title: "Industrial Tank Construction", desc: "Heavy-duty engineered storage systems built for safety and long-term durability.", image: "/new-mekark/IIS/industrial tank.webp", icon: <IconTank /> },
  { title: "Road Construction", desc: "Durable internal roads, heavy-duty pavements, and transportation infrastructure.", image: "/new-mekark/IIS/Manufacturing plant.webp", icon: <IconRoad /> },
  { title: "Pipeline Systems", desc: "Engineered gas and water pipeline networks with safe routing and pressure control.", image: "/new-mekark/IIS/About Mekark.webp", icon: <IconPipe /> },
];

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

  useEffect(() => {
    if (innerRef.current) setFullHeight(innerRef.current.scrollHeight);
  }, []);

  return (
    <section id="solutions" className="w-full bg-white pt-10 pb-14 overflow-hidden">
      <div className="max-w-[1200px] mx-auto w-full px-4 md:px-12 relative z-10">
        <div ref={headingRef} className="flex items-center gap-3 mb-10 md:mb-14"
          style={{ opacity: headingVisible ? 1 : 0, transform: headingVisible ? "none" : "translateY(16px)", transition: "opacity 600ms ease-out, transform 600ms ease-out" }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M12 2L4 7v6c0 5.5 3.8 10.7 8 12 4.2-1.3 8-6.5 8-12V7l-8-5z" fill="#C4161C"/>
            <circle cx="12" cy="10" r="3" fill="white"/>
          </svg>
          <h2 className="text-[24px] md:text-[40px] font-bold tracking-tight text-black">
            Industrial Infrastructure Solutions
          </h2>
        </div>

        <div className="relative" ref={sectionRef}>
          <div style={{ height: expanded ? (fullHeight > 0 ? `${fullHeight}px` : "auto") : `${COLLAPSED_HEIGHT}px`, overflow: "hidden", transition: "height 750ms cubic-bezier(0.4,0,0.2,1)" }}>
            <div ref={innerRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
              {cards.map((card, idx) => (
                <div key={idx} className="group relative rounded-2xl overflow-hidden h-64 md:h-72"
                  style={{ opacity: visible ? 1 : 0, transform: visible ? "none" : "translateY(28px)", transition: `opacity 600ms ease-out ${idx * 60}ms, transform 600ms ease-out ${idx * 60}ms` }}>
                  <Image src={card.image} alt={card.title} fill sizes="(max-width:639px) 100vw,(max-width:1023px) 50vw,33vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top,rgba(0,0,0,0.92) 0%,rgba(0,0,0,0.5) 50%,rgba(0,0,0,0.15) 100%)" }} />
                  <div className="absolute inset-0 flex flex-col justify-between p-5 md:p-6">
                    <div className="w-10 h-10 rounded-xl bg-[#C4161C]/20 border border-[#C4161C]/30 flex items-center justify-center text-[#C4161C] backdrop-blur-sm">
                      {card.icon}
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-[1.05rem] leading-snug mb-1.5">{card.title}</h3>
                      <p className="text-[#AAA] text-[0.78rem] leading-relaxed line-clamp-2">{card.desc}</p>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C4161C] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </div>
              ))}
            </div>
          </div>

          <div className="absolute inset-x-0 bottom-0 pointer-events-none z-20" style={{ height: 240, opacity: expanded ? 0 : 1, transition: "opacity 600ms ease", background: "linear-gradient(to bottom,transparent 0%,rgba(255,255,255,0.8) 45%,white 100%)" }} />
          <div className="absolute inset-x-0 bottom-6 flex justify-center z-30" style={{ opacity: expanded ? 0 : 1, pointerEvents: expanded ? "none" : "auto", transition: "opacity 350ms ease" }}>
            <button onClick={() => setExpanded(true)} className="inline-flex items-center gap-2.5 bg-[#C4161C] hover:bg-[#a31217] text-white text-[0.85rem] font-bold px-7 py-3 rounded-xl shadow-lg active:scale-[0.96] transition-[background-color,transform] duration-150">
              Show More
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6"/></svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
