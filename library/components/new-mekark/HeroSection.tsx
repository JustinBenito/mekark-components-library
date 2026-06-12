import Image from "next/image";


const benefits = [
  "Faster project delivery timelines",
  "Engineered cost efficiency",
  "Large clear-span space optimization",
  "End-to-end execution management",
  "High-strength structural performance",
  "Pan India project capability",
];

const stats = [
  { num: "15+",   label: "Years of Engineering Excellence" },
  { num: "450+",  label: "Industrial Projects Delivered" },
  { num: "5M+",   label: "Sq.ft Infrastructure Executed" },
  { num: "Multi", label: "Industry Engineering Expertise" },
];

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen flex flex-col overflow-hidden bg-[#090909]">

      {/* ── Background ── */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=2400&q=85"
          alt="Industrial steel structure under construction"
          fill
          sizes="100vw"
          className="object-cover object-[center_35%]"
          priority
        />
        {/* Dark base */}
        <div className="absolute inset-0 bg-[#090909]/78" />
        {/* Bottom vignette – bleeds into next section */}
        <div className="absolute inset-0 bg-linear-to-t from-[#090909] via-[#090909]/40 to-transparent" />
        {/* Left vignette – grounds the text */}
        <div className="absolute inset-0 bg-linear-to-r from-[#090909]/90 via-[#090909]/45 to-transparent" />
      </div>

      {/* ── Red glow behind headline ── */}
      <div
        className="absolute pointer-events-none z-[5]"
        style={{
          top: "-10%",
          left: "-10%",
          width: "860px",
          height: "680px",
          background:
            "radial-gradient(ellipse at 28% 22%, rgba(237,28,36,0.20) 0%, rgba(237,28,36,0.05) 52%, transparent 72%)",
        }}
      />

      {/* ── Dot grid ── */}
      <div
        className="absolute inset-0 z-[6] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(rgba(255,255,255,0.032) 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />

      {/* Navbar omitted in library preview */}

      {/* ── Main content ── */}
      <main className="relative z-10 flex-1 flex flex-col px-4 sm:px-8 md:px-12 lg:px-20 xl:px-24 w-full max-w-[1440px] mx-auto">

        <div className="flex-1 flex flex-col justify-start pt-10 pb-8 md:pt-14 md:pb-10 lg:pt-16 lg:pb-12">

          {/* Eyebrow */}
          <div
            className="mb-7 hero-anim"
            style={{ animationDelay: "0ms" }}
          >
            <span className="inline-flex items-center gap-3 text-[0.67rem] font-black uppercase tracking-[0.32em] text-[#ED1C24]">
              <span className="w-7 h-px bg-[#ED1C24] opacity-90" />
              Industrial EPC Excellence
            </span>
          </div>

          {/* Headline – each line animates independently */}
          <div className="mb-7 md:mb-9">
            <h1
              className="text-[2rem] sm:text-[2.8rem] md:text-[3.8rem] lg:text-[5rem] xl:text-[6rem] font-black leading-[1.02] tracking-tight text-white hero-anim"
              style={{ animationDelay: "80ms" }}
            >
              Precision Steel
            </h1>
            <h1
              className="text-[2rem] sm:text-[2.8rem] md:text-[3.8rem] lg:text-[5rem] xl:text-[6rem] font-black leading-[1.02] tracking-tight text-white hero-anim"
              style={{ animationDelay: "175ms" }}
            >
              Engineering for
            </h1>
            <h1
              className="text-[2rem] sm:text-[2.8rem] md:text-[3.8rem] lg:text-[5rem] xl:text-[6rem] font-black leading-[1.02] tracking-tight hero-anim"
              style={{ animationDelay: "270ms" }}
            >
              <span
                style={{
                  backgroundImage: "linear-gradient(118deg, #FF6B6B 0%, #ED1C24 48%, #B80000 100%)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                Ambitious Industrial
              </span>
            </h1>
            <h1
              className="text-[2rem] sm:text-[2.8rem] md:text-[3.8rem] lg:text-[5rem] xl:text-[6rem] font-black leading-[1.02] tracking-tight text-white hero-anim"
              style={{ animationDelay: "365ms" }}
            >
              Growth
            </h1>
          </div>

          {/* Subtitle */}
          <p
            className="max-w-xl text-[0.93rem] md:text-[1.05rem] leading-[1.82] text-white/48 mb-10 md:mb-12 hero-anim"
            style={{ animationDelay: "480ms" }}
          >
            High-performance industrial buildings engineered for faster execution,
            optimized operations, and future scalability.
          </p>

          {/* Benefits + CTA */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_200px] gap-8 lg:gap-16 items-start">

            {/* Benefits list */}
            <div>
              <p
                className="text-[0.58rem] font-black uppercase tracking-[0.3em] text-white/25 mb-5 hero-anim"
                style={{ animationDelay: "550ms" }}
              >
                What Businesses Gain with Mekark
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-3.5">
                {benefits.map((b, i) => (
                  <div
                    key={b}
                    className="flex items-center gap-3 hero-anim"
                    style={{ animationDelay: `${600 + i * 65}ms` }}
                  >
                    <span className="relative flex items-center justify-center w-[18px] h-[18px] shrink-0">
                      <span className="absolute inset-0 rounded-full border border-[#ED1C24]/40" />
                      <span className="w-[5px] h-[5px] rounded-full bg-[#ED1C24]" />
                    </span>
                    <span className="text-[0.875rem] text-white/58 font-medium leading-snug">{b}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA buttons */}
            <div
              className="flex flex-col gap-3 hero-anim lg:pt-[0.65rem]"
              style={{ animationDelay: "905ms" }}
            >
              <a
                href="#intake"
                className="hero-cta-glow bg-[#ED1C24] hover:bg-[#CC1820] text-white font-bold text-[0.875rem] px-6 py-4 rounded-xl transition-[background-color,transform] duration-150 active:scale-[0.96] text-center"
              >
                Get Free Consultation
              </a>
              <a
                href="#intake"
                className="bg-white/[0.06] hover:bg-white/[0.1] text-white/68 font-semibold text-[0.875rem] px-6 py-4 rounded-xl transition-[background-color] duration-150 border border-white/[0.09] text-center"
              >
                Request Proposal
              </a>
            </div>

          </div>

        </div>

        {/* ── Stats strip ── */}
        <div
          className="hero-anim"
          style={{ animationDelay: "1060ms" }}
        >
          <div className="border-t border-white/[0.07] pt-6 pb-8 md:pt-8 md:pb-10">

            {/* Strip label */}
            <p className="text-[0.55rem] font-black uppercase tracking-[0.34em] text-[#ED1C24]/55 mb-6">
              Trusted Industrial Execution Across India
            </p>

            {/* Stats grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-y-7 md:gap-y-0">
              {stats.map((s, i) => (
                <div
                  key={s.label}
                  className={`flex flex-col gap-1.5${i > 0 ? " md:border-l border-white/[0.08] md:pl-8" : ""}`}
                >
                  <span
                    className="font-chakra font-bold text-white leading-none tracking-tight"
                    style={{ fontSize: s.num.length > 4 ? "1.55rem" : "2.4rem" }}
                  >
                    {s.num}
                  </span>
                  <span className="text-[0.68rem] text-white/30 font-medium leading-snug max-w-[150px]">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>

          </div>
        </div>

      </main>
    </section>
  );
}
