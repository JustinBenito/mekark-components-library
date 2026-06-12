import FadeInView from "@/components/multi-storey-steel-building-mekark/FadeInView";
import CountUp from "@/components/multi-storey-steel-building-mekark/CountUp";


const STATS = [
  { value: 0, display: "₹0", label: "Hidden Charges", isCurrency: true },
  { value: 100, display: null, suffix: "%", label: "Load Test Pass Rate" },
  { value: 48, display: null, suffix: "hr", label: "Quote Turnaround" },
  { value: 5, display: null, suffix: "-Yr", label: "Structural Warranty" },
];

export default function Commitment() {
  return (
    <section className="py-20 md:py-28 bg-white relative overflow-hidden">
      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            radial-gradient(circle, rgba(0,0,0,0.07) 1.5px, transparent 1.5px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Structural frame watermark */}
      <div className="absolute right-0 top-0 bottom-0 w-[40%] pointer-events-none overflow-hidden opacity-[0.04]">
        <svg viewBox="0 0 280 680" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" fill="none" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="0" y1="0" x2="0" y2="680" />
          <line x1="140" y1="0" x2="140" y2="680" />
          <line x1="280" y1="0" x2="280" y2="680" />
          <line x1="0" y1="0" x2="280" y2="0" /><line x1="0" y1="100" x2="280" y2="100" />
          <line x1="0" y1="200" x2="280" y2="200" /><line x1="0" y1="300" x2="280" y2="300" />
          <line x1="0" y1="400" x2="280" y2="400" /><line x1="0" y1="500" x2="280" y2="500" />
          <line x1="0" y1="600" x2="280" y2="600" /><line x1="0" y1="680" x2="280" y2="680" />
          <line x1="0" y1="0" x2="140" y2="100" /><line x1="140" y1="0" x2="0" y2="100" />
          <line x1="0" y1="200" x2="140" y2="300" /><line x1="140" y1="200" x2="0" y2="300" />
          <line x1="0" y1="400" x2="140" y2="500" /><line x1="140" y1="400" x2="0" y2="500" />
          <line x1="0" y1="600" x2="140" y2="680" /><line x1="140" y1="600" x2="0" y2="680" />
          <line x1="140" y1="100" x2="280" y2="200" /><line x1="280" y1="100" x2="140" y2="200" />
          <line x1="140" y1="300" x2="280" y2="400" /><line x1="280" y1="300" x2="140" y2="400" />
          <line x1="140" y1="500" x2="280" y2="600" /><line x1="280" y1="500" x2="140" y2="600" />
          {[0, 100, 200, 300, 400, 500, 600, 680].flatMap(y =>
            [0, 140, 280].map(x => (
              <circle key={`${x}-${y}`} cx={x} cy={y} r="6" fill="black" stroke="none" />
            ))
          )}
        </svg>
      </div>

      <div className="relative max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
        <FadeInView>
          <p className="text-[0.72rem] font-extrabold uppercase tracking-[0.25em] text-[#C4161C] mb-3">
            The Mekark Commitment
          </p>
        </FadeInView>

        {/* Heading + Description + CTAs */}
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8 mb-16">
          <FadeInView delay={80} className="lg:max-w-[500px]">
            <h2 className="text-[2.2rem] sm:text-[2.8rem] font-extrabold text-black leading-[1.1] tracking-[-0.025em]">
              Your Deadline Is<br />
              <span className="text-[#C4161C]">Our Non-Negotiable</span>
            </h2>
          </FadeInView>

          <FadeInView delay={160} className="lg:max-w-[440px]">
            <p className="text-black/55 text-[1rem] leading-[1.8] mb-8">
              In 15 years, we have never handed over a structure that failed its load test.
              We&apos;ve never invoiced a rupee beyond the agreed contract price without a
              signed change order. That&apos;s not marketing — that&apos;s our track record,
              verified by 500 clients across 18 states.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#contact-form"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md bg-[#C4161C] text-white font-bold text-[0.95rem] transition-[background-color,transform] duration-150 hover:bg-[#A31217] active:scale-[0.96]"
              >
                Claim Your Free Quote
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
              <a
                href={mekarkContact.phoneHref}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md border border-black/15 text-black/70 font-semibold text-[0.95rem] transition-[border-color,background-color] duration-150 hover:border-black/25 hover:bg-black/[0.02]"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                Speak to Engineer
              </a>
            </div>
          </FadeInView>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-12 border-t border-black/[0.08]">
          {STATS.map((s, i) => (
            <FadeInView key={s.label} delay={i * 100}>
              <div className="text-center">
                <div className="text-[2.8rem] sm:text-[3.4rem] font-extrabold text-[#C4161C] tabular-nums leading-none mb-2">
                  {s.isCurrency ? (
                    <span>₹0</span>
                  ) : (
                    <CountUp to={s.value} suffix={s.suffix} delay={i * 120} />
                  )}
                </div>
                <p className="text-black/50 text-[0.82rem] font-semibold uppercase tracking-wide">{s.label}</p>
              </div>
            </FadeInView>
          ))}
        </div>
      </div>
    </section>
  );
}
