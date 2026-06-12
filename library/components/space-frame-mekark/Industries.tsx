import RevealOnScroll from "@/components/space-frame-mekark/RevealOnScroll";

const industries = [
  {
    name: "Industrial Warehouses",
    desc: "Engineered for large-span storage facilities with maximum space utilization and zero internal obstruction.",
    img: "/warehouse%20space%20frame.webp",
  },
  {
    name: "Airports & Metro Stations",
    desc: "Ideal for high-traffic infrastructure requiring wide, column-free roofing with modern architectural appeal.",
    img: "/airport.webp",
  },
  {
    name: "Stadiums & Sports Complexes",
    desc: "Designed to cover massive spectator areas with superior load distribution and aesthetic structural design.",
    img: "/stadium%201.webp",
  },
  {
    name: "Commercial Complexes",
    desc: "Enhances retail and business spaces with flexible layouts and visually striking roofing systems.",
    img: "/Commercial%20Complexes%20space%20frame.webp",
  },
  {
    name: "Exhibition Centers",
    desc: "Perfect for expansive, open interiors that demand adaptable structures for dynamic event setups.",
    img: "/exhibition.webp",
  },
  {
    name: "Automotive & Manufacturing Units",
    desc: "Supports heavy-duty industrial operations with durable, scalable, and high-performance structural frameworks.",
    img: "/automotive.webp",
  },
];

export default function Industries() {
  return (
    <section id="industries" className="py-16 sm:py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <RevealOnScroll className="mb-14 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-100 text-red-600 text-xs font-semibold uppercase tracking-wider mb-5">
            Industries We Serve
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-balance text-gray-900 leading-tight mb-4">
            Built for Every Industry,{" "}
            <span className="text-red-600">Engineered for Scale</span>
          </h2>
          <p className="text-base lg:text-lg text-gray-500 text-pretty">
            From airport terminals to manufacturing plants — Mekark delivers precision-fit
            space frame solutions across all major industrial sectors.
          </p>
        </RevealOnScroll>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {industries.map((ind, i) => (
            <RevealOnScroll key={ind.name} delay={i * 70} className="h-full">
              <div className="group rounded-2xl bg-white overflow-hidden card-hover cursor-default h-full flex flex-col">
                {/* Image */}
                <div className="overflow-hidden h-44">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={ind.img}
                    alt={ind.name}
                    className="w-full h-full object-cover transition-[transform] duration-500 group-hover:scale-105"
                  />
                </div>
                {/* Content */}
                <div className="p-6">
                  <h3 className="text-base font-bold text-gray-900 mb-1.5">{ind.name}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed text-pretty">{ind.desc}</p>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
