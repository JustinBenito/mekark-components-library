import RevealOnScroll from "@/components/space-frame-mekark/RevealOnScroll";

const benefits = [
  {
    title: "Column-Free Spans",
    desc: "Enables large open-plan spaces without internal columns — maximizing usable floor area.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
        <path d="M3 10H17M3 10L7 6M3 10L7 14" stroke="#DC2626" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M17 10L13 6M17 10L13 14" stroke="#DC2626" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Lightweight Yet Rigid",
    desc: "Superior strength-to-weight ratio reduces foundation loads and overall structural cost.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
        <path d="M10 3L17 7.5V12.5L10 17L3 12.5V7.5L10 3Z" stroke="#DC2626" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M10 3V10M3 7.5L10 10M17 7.5L10 10" stroke="#DC2626" strokeWidth="1" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Faster Installation",
    desc: "Pre-fabricated modular components allow rapid on-site assembly, cutting construction time significantly.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
        <circle cx="10" cy="10" r="7" stroke="#DC2626" strokeWidth="1.5" />
        <path d="M10 6V10L13 12" stroke="#DC2626" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "High Seismic Resistance",
    desc: "3D load distribution mechanism handles dynamic forces, ensuring safety in high-seismic zones.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
        <path d="M3 10L6 7L9 13L12 4L15 10L17 8" stroke="#DC2626" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Flexible Design",
    desc: "Adapts to virtually any architectural form — from curved vaults to complex geometric structures.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
        <path d="M5 15L10 5L15 15" stroke="#DC2626" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7 12H13" stroke="#DC2626" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function WhySpaceFrame() {
  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left: Header */}
          <div className="lg:sticky lg:top-28">
            <RevealOnScroll>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-100 text-red-600 text-xs font-semibold uppercase tracking-wider mb-5">
                Why Space Frame
              </div>
            </RevealOnScroll>
            <RevealOnScroll delay={80}>
              <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-balance text-gray-900 leading-tight mb-6">
                Revolutionizing Modern Construction
              </h2>
            </RevealOnScroll>
            <RevealOnScroll delay={160}>
              <p className="text-base lg:text-lg text-gray-500 leading-relaxed text-pretty mb-8">
                Space frame structures deliver maximum strength with minimal material usage —
                enabling the construction of wide, column-free spaces without compromising
                structural integrity.
              </p>
              <div className="rounded-2xl bg-red-600 p-6 text-white">
                <div className="text-3xl font-bold mb-1">3D Load Distribution</div>
                <div className="text-sm text-red-100">
                  Uniform stress handling across the entire framework — unlike conventional
                  one-dimensional beams.
                </div>
              </div>
            </RevealOnScroll>
          </div>

          {/* Right: Benefits */}
          <div className="space-y-4">
            {benefits.map((b, i) => (
              <RevealOnScroll key={b.title} delay={i * 90 + 100}>
                <div
                  className="group flex gap-4 p-5 rounded-2xl bg-white hover:bg-gray-50 card-hover"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center">
                    {b.icon}
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-gray-900 mb-1">{b.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{b.desc}</p>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
