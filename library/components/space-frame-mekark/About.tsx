import Image from "next/image";
import RevealOnScroll from "@/components/space-frame-mekark/RevealOnScroll";

const differentiators = [
  "Fully integrated in-house design, fabrication & installation",
  "Advanced engineering for optimized material usage",
  "40,000+ tons annual production capacity",
  "Proven track record across 500+ projects in India",
  "Dedicated project management from concept to completion",
];

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left */}
          <div>
            <RevealOnScroll>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-100 text-red-600 text-xs font-semibold uppercase tracking-wider mb-5">
                About Mekark
              </div>
            </RevealOnScroll>
            <RevealOnScroll delay={80}>
              <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-balance text-gray-900 leading-tight mb-6">
                Precision-Engineered Structures,{" "}
                <span className="text-red-600">End-to-End</span>
              </h2>
            </RevealOnScroll>
            <RevealOnScroll delay={160}>
              <p className="text-base lg:text-lg text-gray-500 leading-relaxed text-pretty mb-8">
                Mekark is a trusted space frame structures manufacturer &amp; contractor
                specializing in precision-engineered steel structures for large-scale
                applications. With fully integrated in-house capabilities — from design
                engineering to fabrication and installation — we ensure speed, accuracy,
                and uncompromised quality.
              </p>
              <p className="text-base lg:text-lg text-gray-500 leading-relaxed text-pretty">
                Our expertise in space frame roofing systems, tubular structures, and
                long-span steel frameworks allows us to deliver cost-efficient and
                architecturally flexible solutions tailored to modern industrial demands.
              </p>
            </RevealOnScroll>
          </div>

          {/* Right */}
          <div className="space-y-5">
            <RevealOnScroll delay={80}>
              <div className="relative overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-[0_24px_60px_-36px_rgba(0,0,0,0.35)]">
                <div className="relative aspect-[16/11]">
                  <Image
                    src="/Pan%20India.webp"
                    alt="Engineers reviewing plans for a pan-India project"
                    fill
                    sizes="(max-width: 1024px) 100vw, 48vw"
                    className="object-cover object-center"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(17,17,17,0.05) 0%, rgba(17,17,17,0.12) 100%)",
                    }}
                    aria-hidden
                  />
                </div>
                <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-red-600 shadow-sm backdrop-blur-sm">
                  Pan India Execution
                </div>
              </div>
            </RevealOnScroll>

            <div className="space-y-3">
              {differentiators.map((item, i) => (
                <RevealOnScroll key={item} delay={i * 80 + 140}>
                  <div className="group flex items-start gap-4 rounded-2xl p-4 hover:bg-gray-50 card-hover">
                    <div className="flex-shrink-0 mt-0.5 flex h-8 w-8 items-center justify-center rounded-xl bg-red-50">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
                        <path
                          d="M3 8L6.5 11.5L13 4.5"
                          stroke="#DC2626"
                          strokeWidth="1.75"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <span className="pt-0.5 text-sm font-medium leading-relaxed text-gray-700">
                      {item}
                    </span>
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
