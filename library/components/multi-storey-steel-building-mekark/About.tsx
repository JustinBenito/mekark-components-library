import Image from "next/image";
import FadeInView from "@/components/multi-storey-steel-building-mekark/FadeInView";
import CountUp from "@/components/multi-storey-steel-building-mekark/CountUp";

const PILLARS = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C4161C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    heading: "In-House Fabrication",
    body: "Full control from design to delivery. No third-party dependency.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C4161C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    heading: "IS Code Compliance",
    body: "Every structure designed and executed to Bureau of Indian Standards.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C4161C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="9 11 12 14 22 4" /><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </svg>
    ),
    heading: "Turnkey Delivery",
    body: "Single-window responsibility — design, supply, erect, handover.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C4161C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    heading: "Pan-India Reach",
    body: "18 states, 450+ projects, one unified quality standard.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-white">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
        <FadeInView>
          <p className="text-[0.72rem] font-extrabold uppercase tracking-[0.25em] text-[#C4161C] mb-3">
            About Mekark
          </p>
        </FadeInView>

        <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-stretch">
          {/* Left */}
          <div>
            <FadeInView delay={80}>
              <h2 className="text-[2.4rem] sm:text-[2.8rem] font-extrabold text-black leading-[1.1] tracking-[-0.025em] mb-6">
                Built on Steel.<br />
                <span className="text-[#C4161C]">Driven by Engineering.</span>
              </h2>
            </FadeInView>
            <FadeInView delay={160}>
              <p className="text-black/60 text-[1.05rem] leading-[1.8] mb-4">
                Mekark is a Chennai-based multi storey steel building contractor and manufacturer
                with deep roots in structural steel fabrication, PEB construction, and turnkey
                project delivery. We don&apos;t subcontract what matters — our in-house
                manufacturing unit in Tamil Nadu controls every weld, every beam, and every bolt
                before it leaves our facility.
              </p>
            </FadeInView>
            <FadeInView delay={220}>
              <p className="text-black/60 text-[1.05rem] leading-[1.8] mb-8">
                From industrial steel buildings to high-rise commercial steel structures, we&apos;ve
                engineered 500+ projects across India — always on schedule, always within budget,
                always structurally uncompromising.
              </p>
            </FadeInView>

            <div className="grid sm:grid-cols-2 gap-4">
              {PILLARS.map((p, i) => (
                <FadeInView key={p.heading} delay={280 + i * 80} className="h-full">
                  <div className="flex gap-3 p-4 rounded-xl bg-black/[0.03] border border-black/[0.06] hover:border-[#C4161C]/20 hover:bg-[rgba(196,22,28,0.02)] transition-[border-color,background-color] duration-200 h-full">
                    <div className="w-9 h-9 rounded-lg bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.08),0_1px_3px_rgba(0,0,0,0.06)] flex items-center justify-center shrink-0">
                      {p.icon}
                    </div>
                    <div>
                      <p className="font-bold text-black text-[0.88rem] mb-0.5">{p.heading}</p>
                      <p className="text-black/50 text-[0.8rem] leading-relaxed">{p.body}</p>
                    </div>
                  </div>
                </FadeInView>
              ))}
            </div>
          </div>

          {/* Right: Image + stat */}
          <FadeInView delay={120} className="relative">
            <div className="relative rounded-2xl overflow-hidden h-[320px] sm:h-[420px] lg:h-full lg:min-h-[520px]">
              <Image
                src="/multi-storey-steel-building-mekark/bundle/Home Page Images/About Mekark.webp"
                alt="Mekark steel fabrication facility"
                fill
                className="object-cover outline outline-1 -outline-offset-1 outline-black/10"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

              {/* Floating stat cards */}
              <div className="absolute bottom-4 left-4 right-4 flex gap-2 sm:gap-3">
                <div className="flex-1 bg-white/95 backdrop-blur-sm rounded-xl p-2.5 sm:p-4 shadow-[0_8px_32px_rgba(0,0,0,0.15)]">
                  <div className="text-[1.3rem] sm:text-[1.8rem] font-extrabold text-[#C4161C] tabular-nums leading-none mb-0.5">
                    <CountUp to={15} suffix="+" />
                  </div>
                  <p className="text-[0.6rem] sm:text-[0.72rem] font-bold text-black/50 uppercase tracking-wide">Yrs Experience</p>
                </div>
                <div className="flex-1 bg-white/95 backdrop-blur-sm rounded-xl p-2.5 sm:p-4 shadow-[0_8px_32px_rgba(0,0,0,0.15)]">
                  <div className="text-[1.3rem] sm:text-[1.8rem] font-extrabold text-[#C4161C] tabular-nums leading-none mb-0.5">
                    <CountUp to={500} suffix="+" delay={120} />
                  </div>
                  <p className="text-[0.6rem] sm:text-[0.72rem] font-bold text-black/50 uppercase tracking-wide">Projects Done</p>
                </div>
                <div className="flex-1 bg-white/95 backdrop-blur-sm rounded-xl p-2.5 sm:p-4 shadow-[0_8px_32px_rgba(0,0,0,0.15)]">
                  <div className="text-[1.3rem] sm:text-[1.8rem] font-extrabold text-[#C4161C] tabular-nums leading-none mb-0.5">
                    <CountUp to={18} suffix="" delay={240} />
                  </div>
                  <p className="text-[0.6rem] sm:text-[0.72rem] font-bold text-black/50 uppercase tracking-wide">States Served</p>
                </div>
              </div>
            </div>
          </FadeInView>
        </div>
      </div>
    </section>
  );
}
