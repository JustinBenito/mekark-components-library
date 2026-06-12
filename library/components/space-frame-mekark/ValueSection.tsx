import RevealOnScroll from "@/components/space-frame-mekark/RevealOnScroll";

const benefits = [
  "Complete in-house infrastructure ensures quality control",
  "Advanced engineering for optimized material usage",
  "Proven track record in industrial space frame projects",
  "Faster turnaround with 120-day project commitment",
  "Dedicated project management from concept to completion",
];

export default function ValueSection() {
  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <RevealOnScroll className="mb-14 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-gray-200 text-red-600 text-xs font-semibold uppercase tracking-wider mb-5">
            Structural Advantage
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-balance text-gray-900 leading-tight mb-4">
            How Space Frame Structures Deliver{" "}
            <span className="text-red-600">Structural Advantage</span>
          </h2>
        </RevealOnScroll>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Content */}
          <div className="space-y-5">
            <RevealOnScroll delay={80}>
              <p className="text-base lg:text-lg text-gray-600 leading-relaxed text-pretty">
                Space frame structures are a highly efficient solution for large span steel
                structures, enabling the construction of wide, column-free spaces without
                compromising strength or stability. As a preferred system in modern space
                frame construction, these structures use a three-dimensional load distribution
                mechanism to ensure uniform stress handling across the framework.
              </p>
            </RevealOnScroll>
            <RevealOnScroll delay={160}>
              <p className="text-base lg:text-lg text-gray-600 leading-relaxed text-pretty">
                Widely adopted in industrial space frame applications such as factories,
                warehouses, airports, and stadiums, they provide exceptional durability
                while maintaining a lightweight profile. Compared to conventional methods,
                space frame roofing systems reduce overall structural weight and improve
                material efficiency — resulting in faster project execution and optimized costs.
              </p>
            </RevealOnScroll>
            <RevealOnScroll delay={240}>
              <p className="text-base lg:text-lg text-gray-600 leading-relaxed text-pretty">
                For businesses seeking reliable space frame structure contractors, this system
                offers flexibility in design, scalability for future expansion, and long-term
                performance under demanding conditions. Its modular nature allows quicker
                installation — ideal for time-sensitive industrial and infrastructure projects.
              </p>
            </RevealOnScroll>
          </div>

          {/* Benefits */}
          <div>
            <RevealOnScroll delay={100}>
              <h3 className="text-lg font-bold text-gray-900 mb-5">Benefits of Choosing Mekark</h3>
            </RevealOnScroll>
            <div className="space-y-3">
              {benefits.map((b, i) => (
                <RevealOnScroll key={b} delay={i * 70 + 120}>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-red-100 flex items-center justify-center mt-0.5">
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden>
                        <path d="M2 5L4.5 7.5L8 3" stroke="#DC2626" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <span className="text-sm font-medium text-gray-700 leading-relaxed">{b}</span>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
