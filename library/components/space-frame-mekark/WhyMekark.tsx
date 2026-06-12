import RevealOnScroll from "@/components/space-frame-mekark/RevealOnScroll";

const reasons = [
  {
    title: "Engineering-Driven Execution",
    desc: "Every project begins with rigorous structural analysis, advanced modeling, and simulation for precision outcomes.",
    img: "/execution.webp",
  },
  {
    title: "Strong In-House Manufacturing Ecosystem",
    desc: "Fully integrated production with automated machinery and strict QC at every stage — no outsourcing.",
    img: "/inhouse.webp",
  },
  {
    title: "High-Volume Structural Project Capability",
    desc: "40,000+ tons annual capacity allows us to take on the most demanding, large-scale projects across India.",
    img: "/high%20volume.webp",
  },
  {
    title: "Consistent On-Time Delivery",
    desc: "120-day delivery commitment backed by dedicated project management and milestone-driven execution.",
    img: "/on%20time%20delivery.webp",
  },
  {
    title: "Trusted by Leading Industrial Brands",
    desc: "500+ successfully delivered projects spanning factories, airports, stadiums, and commercial complexes.",
    img: "/stadium%202.webp",
  },
  {
    title: "Pan-India Project Execution",
    desc: "Nationwide project delivery capabilities with dedicated teams and support across major industrial regions.",
    img: "/Pan%20India.webp",
  },
];

export default function WhyMekark() {
  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <RevealOnScroll className="mb-14 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-gray-200 text-red-600 text-xs font-semibold uppercase tracking-wider mb-5">
            Why Choose Mekark
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-balance text-gray-900 leading-tight mb-4">
            Why Top Industries Choose{" "}
            <span className="text-red-600">Mekark</span>
          </h2>
          <p className="text-base lg:text-lg text-gray-500 text-pretty">
            Not just a contractor — a full-cycle engineering partner committed to delivering
            world-class space frame structures on time, every time.
          </p>
        </RevealOnScroll>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {reasons.map((r, i) => (
            <RevealOnScroll key={r.title} delay={i * 80}>
              <div
                className={`group relative rounded-2xl bg-white overflow-hidden card-hover ${
                  i === 0 ? "md:col-span-2 lg:col-span-1" : ""
                }`}
              >
                {/* Image */}
                <div className="overflow-hidden h-44">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={r.img}
                    alt={r.title}
                    className="w-full h-full object-cover transition-[transform] duration-500 group-hover:scale-105"
                  />
                </div>
                {/* Content */}
                <div className="relative p-6">
                  <div className="w-8 h-0.5 rounded-full bg-red-500 mb-4" aria-hidden />
                  <h3 className="text-base font-bold text-gray-900 mb-2 pr-10">{r.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed text-pretty">{r.desc}</p>
                  {/* Corner number */}
                  <span className="absolute top-4 right-5 text-5xl font-bold text-gray-100 select-none leading-none pointer-events-none tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
