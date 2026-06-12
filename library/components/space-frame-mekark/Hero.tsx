import Image from "next/image";

const stats = [
  { value: "40,000+", label: "Tons Annual Capacity" },
  { value: "In-House", label: "Design + Manufacturing" },
  { value: "120 Days", label: "Delivery Commitment" },
  { value: "PAN India", label: "Project Execution" },
];

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-16"
      style={{
        background: `
          radial-gradient(ellipse 55% 45% at 78% 2%, rgba(220,38,38,0.07) 0%, transparent 60%),
          radial-gradient(circle at 1px 1px, rgba(0,0,0,0.065) 1px, transparent 0) 0 0 / 28px 28px
        `,
      }}
      >
      {/* Background image */}
      <Image
        src="/Banner.webp"
        alt=""
        fill
        priority
        sizes="100vw"
        aria-hidden
        className="object-cover object-center opacity-25 pointer-events-none select-none"
      />

      {/* Decorative accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-0.5 bg-linear-to-r from-transparent via-red-500 to-transparent opacity-60"
        aria-hidden
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-4 pb-14 sm:pt-6 sm:pb-20 lg:pt-8 lg:pb-24">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="hero-1 inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full border border-red-200 bg-red-50 text-red-700 text-sm font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" aria-hidden />
            India&apos;s Leading Space Frame Structures Contractor
          </div>

          {/* H1 */}
          <h1
            className="hero-2 text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight leading-[1.08] text-balance text-gray-900 mb-6"
          >
            Engineered Space Frame{" "}
            <span className="relative sm:whitespace-nowrap">
              Structures
              <svg
                aria-hidden
                className="absolute -bottom-1 left-0 w-full h-5 overflow-visible"
                viewBox="0 0 500 26"
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3,13 C18,7 48,3 95,5 C142,7 178,11 225,8 C272,5 308,2 355,5 C390,7 428,10 470,8 C482,7 492,9 497,13 C490,18 478,21 466,19 C424,16 386,19 350,17 C303,15 267,19 220,17 C173,15 137,18 90,16 C46,14 18,19 3,13 Z"
                  fill="#C4161C"
                  fillOpacity="0.88"
                />
              </svg>
            </span>{" "}
            <span className="text-red-600">That Redefine</span>
            {" "}
            <br className="hidden sm:block" />
            Strength &amp; Span
          </h1>

          {/* Subheading */}
          <p className="hero-3 text-xl lg:text-2xl text-gray-500 max-w-2xl leading-relaxed text-pretty mb-12">
            Leading space frame structures contractor in India delivering high-performance,
            lightweight, and long-span structural solutions for industrial, commercial, and
            infrastructure projects.
          </p>

          {/* Stats strip — each card staggered individually */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
            {stats.map((s, i) => (
              <div
                key={s.value}
                className="hero-4 group relative rounded-2xl bg-white/80 backdrop-blur-sm px-5 py-4 overflow-hidden card-hover"
                style={{ animationDelay: `${330 + i * 100}ms` }}
              >
                <div
                  className="absolute inset-0 bg-red-50 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                  aria-hidden
                />
                <div className="relative">
                  <div className="text-2xl font-bold tabular-nums text-gray-900 leading-tight">
                    {s.value}
                  </div>
                  <div className="text-xs text-gray-500 mt-0.5 font-medium leading-snug">
                    {s.label}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="hero-5 flex flex-wrap gap-4 items-center justify-center">
            <a
              href="#intake"
              className="inline-flex items-center gap-2 pl-6 pr-5 py-3.5 rounded-xl bg-red-600 text-white font-semibold text-base hover:bg-red-700 active:scale-[0.96] transition-[background-color,transform,box-shadow] duration-150 ease-out"
              style={{ boxShadow: "var(--shadow-red)" }}
            >
              Get Free Consultation
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
                <path d="M3.75 9H14.25M14.25 9L9.75 4.5M14.25 9L9.75 13.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-gray-200 text-gray-700 font-semibold text-base hover:border-gray-300 hover:bg-gray-50 active:scale-[0.96] transition-[background-color,border-color,transform] duration-150 ease-out"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div
        className="absolute bottom-0 inset-x-0 h-32 bg-linear-to-t from-white to-transparent pointer-events-none"
        aria-hidden
      />
    </section>
  );
}
