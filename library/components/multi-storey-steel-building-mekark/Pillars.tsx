import Image from "next/image";
import FadeInView from "@/components/multi-storey-steel-building-mekark/FadeInView";

const PILLARS = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C4161C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
    heading: "Integrated Manufacturing",
    body: "No outsourced fabrication. Our 2.5-lakh sq.ft manufacturing unit in Tamil Nadu handles raw steel intake, CNC cutting, drilling, welding, blast cleaning, and epoxy priming — all under one roof, under our QC.",
    stat: "2.5L sq.ft facility",
    image: "/multi-storey-steel-building-mekark/bundle/Our%20Factories/DJI_20250301123837_0021_D%20copy.webp",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C4161C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    ),
    heading: "Structural Engineering Depth",
    body: "Our in-house team of chartered structural engineers designs every project to IS 800, IS 875, and SP 6 — using STAAD Pro, TEKLA Structures, and AutoCAD. You get engineering rigour, not templated drawings.",
    stat: "20+ in-house engineers",
    image: "/multi-storey-steel-building-mekark/bundle/Home%20Page%20Images/Manufacturing%20plant.webp",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C4161C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    heading: "Zero Subcontract Policy",
    body: "From the first anchor bolt to the last cladding panel, Mekark's own teams are on-site. We don't pass your project to a sub-contractor and manage paperwork — we build it, personally.",
    stat: "0 subcontracted packages",
    image: "/multi-storey-steel-building-mekark/bundle/Our%20Completed%20Projects/DJI_20240930172656_0118_D%20copy.webp",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C4161C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
    heading: "Speed Without Compromise",
    body: "Our parallel track methodology runs fabrication and civil foundation simultaneously — eliminating the idle wait between phases and compressing total project duration by 30-40% compared to sequential contractors.",
    stat: "40% faster completion",
    image: "/multi-storey-steel-building-mekark/bundle/Our%20Completed%20Projects/DJI_20241021133222_0174_D%20copy.webp",
  },
];

export default function Pillars() {
  return (
    <section id="pillars" className="py-20 md:py-28 bg-white">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
        <FadeInView>
          <p className="text-[0.72rem] font-extrabold uppercase tracking-[0.25em] text-[#C4161C] mb-3">
            What Sets Us Apart
          </p>
        </FadeInView>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <FadeInView delay={80}>
            <h2 className="text-[2.2rem] sm:text-[2.7rem] font-extrabold text-black leading-[1.1] tracking-[-0.025em] max-w-[500px]">
              Four Pillars That Make<br />
              <span className="text-[#C4161C]">Mekark Irreplaceable</span>
            </h2>
          </FadeInView>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {PILLARS.map((p, i) => (
            <FadeInView key={p.heading} delay={i * 80}>
              <div className="group bg-white rounded-2xl overflow-hidden shadow-[0_0_0_1px_rgba(0,0,0,0.06),0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_0_0_1px_rgba(0,0,0,0.09),0_8px_32px_rgba(0,0,0,0.09)] transition-shadow duration-200 flex flex-col sm:flex-row h-full">
                <div className="relative sm:w-48 shrink-0 h-40 sm:h-auto">
                  <Image
                    src={p.image}
                    alt={p.heading}
                    fill
                    className="object-cover outline outline-1 -outline-offset-1 outline-black/10"
                    sizes="(max-width: 640px) 100vw, 192px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-black/30 to-transparent" />
                </div>
                <div className="flex flex-col justify-between p-5 flex-1">
                  <div>
                    <div className="flex items-center gap-2.5 mb-3">
                      <div className="w-9 h-9 rounded-lg bg-[rgba(196,22,28,0.06)] flex items-center justify-center">
                        {p.icon}
                      </div>
                      <h3 className="font-bold text-black text-[0.95rem] leading-snug">{p.heading}</h3>
                    </div>
                    <p className="text-black/55 text-[0.82rem] leading-relaxed">{p.body}</p>
                  </div>
                  <div className="mt-4 flex items-center gap-2">
                    <div className="w-1 h-4 bg-[#C4161C] rounded-full" />
                    <span className="text-[0.78rem] font-bold text-black/70 tabular-nums">{p.stat}</span>
                  </div>
                </div>
              </div>
            </FadeInView>
          ))}
        </div>
      </div>
    </section>
  );
}
