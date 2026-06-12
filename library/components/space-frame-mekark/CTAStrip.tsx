export default function CTAStrip() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden py-14 sm:py-20 lg:py-24"
      style={{
        background: "linear-gradient(140deg, #C4161C 0%, #991B1B 55%, #7A0D10 100%)",
      }}
    >
      {/* ── Square grid lines ── */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,0.28) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.28) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* ── Diagonal lattice (space-frame feel) ── */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(45deg, rgba(0,0,0,0.12) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* ── Solid black box cluster — top-right ── */}
      <div aria-hidden className="absolute top-0 right-0 w-80 h-52 bg-black/[0.22] pointer-events-none" />
      <div aria-hidden className="absolute top-0 right-0 w-44 h-44 bg-black/[0.18] pointer-events-none" />
      <div aria-hidden className="absolute top-14 right-72 w-28 h-28 bg-black/[0.16] pointer-events-none" />

      {/* ── Outlined squares ── */}
      <div aria-hidden className="absolute top-8 right-8 w-28 h-28 border border-black/30 pointer-events-none" />
      <div aria-hidden className="absolute -bottom-8 -left-8 w-56 h-56 border border-black/25 pointer-events-none" />
      <div aria-hidden className="absolute bottom-6 left-48 w-20 h-20 border border-black/20 pointer-events-none" />

      {/* ── Solid black box — bottom-left ── */}
      <div aria-hidden className="absolute bottom-0 left-0 w-36 h-24 bg-black/[0.18] pointer-events-none" />
      <div aria-hidden className="absolute bottom-0 right-32 w-52 h-14 bg-black/[0.14] pointer-events-none" />

      {/* ── Thin structural vertical lines ── */}
      <div aria-hidden className="absolute inset-y-0 left-[22%] w-px bg-black/20 pointer-events-none" />
      <div aria-hidden className="absolute inset-y-0 right-[28%] w-px bg-black/15 pointer-events-none" />

      {/* ── Content ── */}
      <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-red-200 mb-4">
          Work With Us
        </p>
        <h2 className="text-4xl lg:text-5xl font-bold text-white text-balance leading-tight mb-5">
          Need a Reliable Space Frame Structures Contractor?
        </h2>
        <p className="text-base lg:text-lg text-red-100 text-pretty max-w-xl mx-auto mb-10">
          Get custom-engineered solutions designed for durability, scalability, and performance.
        </p>
        <a
          href="#intake"
          className="inline-flex items-center gap-2 pl-7 pr-6 py-4 rounded-xl bg-white text-red-600 font-bold text-base hover:bg-red-50 active:scale-[0.96] transition-[background-color,transform] duration-150 ease-out"
          style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.2)" }}
        >
          Talk to Our Experts
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
            <path d="M3.75 9H14.25M14.25 9L9.75 4.5M14.25 9L9.75 13.5" stroke="#DC2626" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>
    </section>
  );
}
