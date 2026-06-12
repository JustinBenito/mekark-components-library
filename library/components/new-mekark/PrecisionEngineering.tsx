import FadeInView from "@/components/new-mekark/FadeInView";

const tools = [
  {
    name: "Tekla Structures",
    badge: "3D BIM Modeling",
    desc: "Fabrication-ready structural detailing and connection design for precision execution.",
    features: ["Shop Drawings", "Clash Detection", "CNC Export"],
  },
  {
    name: "STAAD.Pro",
    badge: "Structural Analysis",
    desc: "Industry-standard load analysis with full code compliance for industrial structures.",
    features: ["Seismic Analysis", "Wind Load", "Code Compliance"],
  },
];

const workflow = ["Analyse", "Model", "Shop Drawings"];

export default function PrecisionEngineering() {
  return (
    <section className="relative w-full bg-[#FEF4F4] py-14 md:py-20 overflow-hidden font-manrope">
      <div className="max-w-350 mx-auto w-full px-4 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-9 md:mb-12">
          <div className="max-w-[680px]">
            <div className="flex items-center gap-3 mb-6">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L4 7v6c0 5.5 3.8 10.7 8 12 4.2-1.3 8-6.5 8-12V7l-8-5z" fill="#ED1C24"/>
                <circle cx="12" cy="10" r="3" fill="white"/>
              </svg>
              <h2 className="text-[24px] md:text-[40px] font-bold tracking-tight bg-linear-to-b from-black to-black/50 bg-clip-text text-transparent">
                Precision-Driven Engineering
              </h2>
            </div>

            <p className="text-[#666] text-[1rem] md:text-[1.08rem] leading-[1.8] max-w-2xl">
              Tekla Structures and STAAD.Pro connect design intent, structural validation, detailing, and CNC-ready output before site execution begins.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-3 text-center lg:min-w-[420px]">
            {["Accuracy", "Clarity", "Speed"].map((item) => (
              <div key={item} className="border-l border-[#ED1C24]/25 bg-white/55 px-4 py-3">
                <span className="block text-[0.72rem] font-extrabold uppercase tracking-[0.16em] text-[#ED1C24]">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.9fr] gap-6 lg:gap-8 items-stretch">
          <FadeInView>
            <div className="h-full border border-[#FFD5D5] bg-white p-5 md:p-7 relative z-10 shadow-[0_10px_34px_rgba(237,28,36,0.07)]">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-0">
                {workflow.map((step, idx) => (
                  <div key={step} className="relative flex min-h-28 flex-col justify-between border border-[#F2D4D4] bg-[#FFF9F9] p-4 md:border-l-0 md:first:border-l">
                    <span className="text-[0.72rem] font-black text-[#ED1C24] tabular-nums">
                      0{idx + 1}
                    </span>
                    <span className="text-[1.05rem] md:text-[1.2rem] font-black text-[#111]">
                      {step}
                    </span>
                    {idx < workflow.length - 1 ? (
                      <span className="absolute -right-2 top-1/2 z-10 hidden h-4 w-4 -translate-y-1/2 rotate-45 border-r border-t border-[#ED1C24]/35 bg-[#FFF9F9] md:block" />
                    ) : null}
                  </div>
                ))}
              </div>

              <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-3 text-[#555]">
                {["Fabrication accuracy from Day 1", "Clash-free structural execution", "Structural reliability at industrial scale"].map((item) => (
                  <div key={item} className="flex items-start gap-3 text-[0.9rem] font-semibold leading-relaxed">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#ED1C24] shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </FadeInView>

          <div className="grid grid-cols-1 gap-4">
            {tools.map((tool, idx) => (
              <FadeInView key={tool.name} delay={idx * 120}>
                <div className="h-full border border-[#FFD5D5] bg-white p-5 md:p-6 relative z-10 shadow-[0_8px_26px_rgba(237,28,36,0.07)] hover:-translate-y-0.5 transition-transform duration-200">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <h4 className="font-bold text-[#111] text-[1.1rem] leading-tight">{tool.name}</h4>
                    <span className="shrink-0 text-[0.68rem] font-bold uppercase tracking-wider text-[#ED1C24] bg-[#FFE8E8] px-2.5 py-1 rounded-full border border-[#FFD5D5]">
                      {tool.badge}
                    </span>
                  </div>
                  <p className="text-[#666] text-[0.88rem] leading-relaxed mb-4">{tool.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {tool.features.map((f) => (
                      <span key={f} className="text-[0.72rem] font-semibold text-[#555] bg-[#F5F5F5] px-3 py-1 rounded-full">
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>

        <div className="mt-6 border-l-2 border-[#ED1C24] pl-4 text-[0.95rem] font-semibold text-[#555]">
          The result is fewer coordination gaps between engineering office, fabrication shop, and site team.
        </div>
      </div>
    </section>
  );
}
