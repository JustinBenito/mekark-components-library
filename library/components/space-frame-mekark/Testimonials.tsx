import RevealOnScroll from "@/components/space-frame-mekark/RevealOnScroll";

const testimonials = [
  {
    quote: "Mekark delivered a complex space frame project within tight timelines without compromising quality.",
    name: "Project Manager",
    company: "Tata Steel Projects",
    initials: "TS",
  },
  {
    quote: "Their in-house capabilities made a huge difference in execution speed.",
    name: "Infrastructure Head",
    company: "L&T Construction",
    initials: "LT",
  },
  {
    quote: "Highly reliable partner for large-span industrial structures.",
    name: "Operations Director",
    company: "Adani Group",
    initials: "AG",
  },
  {
    quote: "Engineering precision and project management were exceptional.",
    name: "Civil Engineer",
    company: "GMR Infrastructure",
    initials: "GM",
  },
  {
    quote: "One of the most professional space frame contractors we've worked with.",
    name: "Procurement Head",
    company: "JSW Steel",
    initials: "JS",
  },
  {
    quote: "Strong technical team and seamless coordination.",
    name: "Site Engineer",
    company: "NCC Limited",
    initials: "NC",
  },
  {
    quote: "Delivered exactly what was promised — on time.",
    name: "General Manager",
    company: "Mahindra Infra",
    initials: "MI",
  },
  {
    quote: "Best choice for scalable and durable structural solutions.",
    name: "VP Construction",
    company: "DLF Limited",
    initials: "DL",
  },
];

const starIcon = (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="#DC2626" aria-hidden>
    <path d="M7 1L8.63 5.23H13.25L9.56 7.94L10.88 12.25L7 9.77L3.12 12.25L4.44 7.94L0.75 5.23H5.37L7 1Z" />
  </svg>
);

export default function Testimonials() {
  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <RevealOnScroll className="mb-14 text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-100 text-red-600 text-xs font-semibold uppercase tracking-wider mb-5">
            Client Testimonials
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-balance text-gray-900 leading-tight mb-4">
            Trusted by India&apos;s Leading{" "}
            <span className="text-red-600">Engineers &amp; Enterprises</span>
          </h2>
          <p className="text-base text-gray-500 text-pretty">
            What our clients say about working with Mekark.
          </p>
        </RevealOnScroll>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {testimonials.map((t, i) => (
            <RevealOnScroll key={i} delay={i * 60}>
              <div
                className="flex flex-col gap-4 p-5 rounded-2xl bg-white h-full hover:bg-gray-50 card-hover"
              >
                {/* Stars */}
                <div className="flex gap-0.5" aria-label="5 stars">
                  {Array.from({ length: 5 }).map((_, si) => (
                    <span key={si}>{starIcon}</span>
                  ))}
                </div>
                {/* Quote */}
                <p className="text-base text-gray-600 leading-relaxed flex-1 text-pretty">
                  &ldquo;{t.quote}&rdquo;
                </p>
                {/* Author */}
                <div className="flex items-center gap-3 pt-2 border-t border-gray-100">
                  <div className="w-9 h-9 rounded-xl bg-red-600 flex items-center justify-center text-white text-xs font-bold shrink-0">
                    {t.initials}
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-gray-900">{t.name}</div>
                    <div className="text-xs text-gray-400">{t.company}</div>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
