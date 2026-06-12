import RevealOnScroll from "@/components/space-frame-mekark/RevealOnScroll";

const types = [
  {
    name: "Dome Space Frame",
    desc: "Ideal for stadiums, auditoriums, and large public spaces requiring column-free spans.",
    img: "/Dome%20Space%20Frame.webp",
    icon: (
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none" aria-hidden>
        <path d="M4 22C4 22 8 10 16 10C24 10 28 22 28 22" stroke="#DC2626" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="4" y1="22" x2="28" y2="22" stroke="#DC2626" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="16" y1="10" x2="16" y2="22" stroke="#DC2626" strokeWidth="1" strokeDasharray="2 2" />
        <line x1="10" y1="13" x2="10" y2="22" stroke="#DC2626" strokeWidth="1" strokeDasharray="2 2" />
        <line x1="22" y1="13" x2="22" y2="22" stroke="#DC2626" strokeWidth="1" strokeDasharray="2 2" />
      </svg>
    ),
  },
  {
    name: "Barrel Vault Space Frame",
    desc: "Perfect for warehouses and walkways with curved roofing aesthetics.",
    img: "/Barrel%20Vault%20Space%20Frame.webp",
    icon: (
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none" aria-hidden>
        <path d="M4 20C4 20 4 12 16 12C28 12 28 20 28 20" stroke="#DC2626" strokeWidth="1.5" strokeLinecap="round" />
        <rect x="4" y="20" width="24" height="4" rx="1" stroke="#DC2626" strokeWidth="1.5" />
        <line x1="10" y1="13.5" x2="10" y2="20" stroke="#DC2626" strokeWidth="1" strokeDasharray="2 2" />
        <line x1="16" y1="12" x2="16" y2="20" stroke="#DC2626" strokeWidth="1" strokeDasharray="2 2" />
        <line x1="22" y1="13.5" x2="22" y2="20" stroke="#DC2626" strokeWidth="1" strokeDasharray="2 2" />
      </svg>
    ),
  },
  {
    name: "Flat Space Frame",
    desc: "Best suited for industrial roofing and commercial buildings with uniform load distribution.",
    img: "/flat%20space%20frame.webp",
    icon: (
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none" aria-hidden>
        <rect x="4" y="10" width="24" height="5" rx="1" stroke="#DC2626" strokeWidth="1.5" />
        <rect x="4" y="19" width="24" height="5" rx="1" stroke="#DC2626" strokeWidth="1.5" />
        <line x1="9" y1="15" x2="13" y2="19" stroke="#DC2626" strokeWidth="1" />
        <line x1="13" y1="15" x2="9" y2="19" stroke="#DC2626" strokeWidth="1" />
        <line x1="19" y1="15" x2="23" y2="19" stroke="#DC2626" strokeWidth="1" />
        <line x1="23" y1="15" x2="19" y2="19" stroke="#DC2626" strokeWidth="1" />
      </svg>
    ),
  },
  {
    name: "Pyramid Space Frame",
    desc: "Offers enhanced load-bearing capacity with visually striking geometry.",
    img: "/Pyramid%20Space%20Frame.webp",
    icon: (
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none" aria-hidden>
        <path d="M16 6L28 24H4L16 6Z" stroke="#DC2626" strokeWidth="1.5" strokeLinejoin="round" />
        <line x1="16" y1="6" x2="16" y2="24" stroke="#DC2626" strokeWidth="1" strokeDasharray="2 2" />
        <line x1="4" y1="24" x2="16" y2="14" stroke="#DC2626" strokeWidth="1" strokeDasharray="2 2" />
        <line x1="28" y1="24" x2="16" y2="14" stroke="#DC2626" strokeWidth="1" strokeDasharray="2 2" />
      </svg>
    ),
  },
  {
    name: "Grid Space Frame",
    desc: "Efficient for modular construction and large-scale industrial sheds.",
    img: "/grid%20space%20frame.webp",
    icon: (
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none" aria-hidden>
        <rect x="4" y="4" width="24" height="24" rx="2" stroke="#DC2626" strokeWidth="1.5" />
        <line x1="4" y1="12" x2="28" y2="12" stroke="#DC2626" strokeWidth="1" />
        <line x1="4" y1="20" x2="28" y2="20" stroke="#DC2626" strokeWidth="1" />
        <line x1="12" y1="4" x2="12" y2="28" stroke="#DC2626" strokeWidth="1" />
        <line x1="20" y1="4" x2="20" y2="28" stroke="#DC2626" strokeWidth="1" />
        <circle cx="12" cy="12" r="1.5" fill="#DC2626" />
        <circle cx="20" cy="12" r="1.5" fill="#DC2626" />
        <circle cx="12" cy="20" r="1.5" fill="#DC2626" />
        <circle cx="20" cy="20" r="1.5" fill="#DC2626" />
      </svg>
    ),
  },
  {
    name: "Curved Space Frame",
    desc: "Perfect for terminals and exhibition halls with elegant curved roofing designs.",
    img: "/Curved%20space%20frame.webp",
    icon: (
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none" aria-hidden>
        <path d="M4 24C4 24 8 8 16 8C24 8 28 24 28 24" stroke="#DC2626" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="4" y1="24" x2="28" y2="24" stroke="#DC2626" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="11" y1="12" x2="9" y2="24" stroke="#DC2626" strokeWidth="1" strokeDasharray="2 2" />
        <line x1="16" y1="8" x2="16" y2="24" stroke="#DC2626" strokeWidth="1" strokeDasharray="2 2" />
        <line x1="21" y1="12" x2="23" y2="24" stroke="#DC2626" strokeWidth="1" strokeDasharray="2 2" />
      </svg>
    ),
  },
];

export default function SpaceFrameTypes() {
  return (
    <section id="types" className="py-16 sm:py-24 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <RevealOnScroll className="mb-14">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-gray-200 text-red-600 text-xs font-semibold uppercase tracking-wider mb-5">
              Our Solutions
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-balance text-gray-900 leading-tight mb-4">
              Types of Space Frame Structures
            </h2>
            <p className="text-base lg:text-lg text-gray-500 text-pretty">
              From soaring domes to modular grids — engineered for every application and architectural vision.
            </p>
          </div>
        </RevealOnScroll>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {types.map((type, i) => (
            <RevealOnScroll key={type.name} delay={i * 80}>
              <div className="group flex flex-col bg-white rounded-2xl overflow-hidden card-hover cursor-default">
                {/* Icon */}
                <div className="px-5 pt-5 pb-4">
                  <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center">
                    {type.icon}
                  </div>
                </div>

                {/* Image */}
                <div className="overflow-hidden h-44 mx-5 rounded-xl">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={type.img}
                    alt={type.name}
                    className="w-full h-full object-cover transition-[transform] duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="px-5 pt-4 pb-5">
                  <h3 className="text-base font-bold text-gray-900 mb-1.5">{type.name}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed text-pretty">{type.desc}</p>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
