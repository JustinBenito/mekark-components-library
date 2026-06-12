import FadeInView from "@/components/multi-storey-steel-building-mekark/FadeInView";

const PROBLEMS = [
  {
    problem: "\"The contractor delayed by 6 months\"",
    solution: "Steel fabrication delays happen when design and production aren't integrated. At Mekark, our in-house design team feeds directly into the shop floor — no handover gaps, no interpretation errors. Every beam cut exactly when scheduled.",
    cta: "Our Average Delay: Zero Days on Milestone",
  },
  {
    problem: "\"The final bill was 40% more than quoted\"",
    solution: "Bill escalation is the steel industry's worst-kept secret. Mekark operates on fixed-price turnkey contracts with a detailed BOQ locked before mobilisation. If costs shift, it's our risk — not yours.",
    cta: "Fixed-Price Contracts, No Surprises",
  },
  {
    problem: "\"Quality dropped once they got the advance\"",
    solution: "We've seen it. That's why Mekark uses milestone-linked payment terms, third-party QA inspections, and documented weld inspection reports at every stage. Your advance doesn't reduce our standards — it activates them.",
    cta: "Stage-Wise Quality Documentation",
  },
  {
    problem: "\"No one to call after handover\"",
    solution: "Post-handover silence is common. Mekark provides a 5-year structural warranty with a dedicated after-sales contact. Annual inspection reports are part of our handover package — not an upsell.",
    cta: "5-Year Warranty, Dedicated Support",
  },
];

const PROTECTIONS = [
  "Fixed-price BOQ with zero escalation clauses",
  "Milestone-based payment — pay as work progresses",
  "Third-party structural audit before handover",
  "IS 800-compliant engineering drawings provided",
  "5-year structural warranty in writing",
  "Dedicated project manager, single point of contact",
  "Real-time site progress reports every 72 hours",
  "Load test certificate before final handover",
];

export default function WhyChoose() {
  return (
    <section id="why-choose" className="py-20 md:py-28 bg-white">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
        <FadeInView>
          <p className="text-[0.72rem] font-extrabold uppercase tracking-[0.25em] text-[#C4161C] mb-3">
            Why Choose Mekark
          </p>
        </FadeInView>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <FadeInView delay={80}>
            <h2 className="text-[2.2rem] sm:text-[2.7rem] font-extrabold text-black leading-[1.1] tracking-[-0.025em] max-w-[540px]">
              We Solve the Problems<br />
              <span className="text-[#C4161C]">Other Contractors Create</span>
            </h2>
          </FadeInView>
        </div>

        <div className="grid lg:grid-cols-2 gap-5 mb-16">
          {PROBLEMS.map((p, i) => (
            <FadeInView key={i} delay={i * 80} className="h-full">
              <div className="h-full rounded-2xl border border-black/[0.08] p-6 hover:border-[#C4161C]/20 hover:shadow-[0_4px_24px_rgba(0,0,0,0.07)] transition-[border-color,box-shadow] duration-200">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-black/[0.05] flex items-center justify-center text-[0.8rem] font-extrabold text-black/30 shrink-0 tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <p className="font-bold text-black/70 text-[1rem] leading-snug italic">{p.problem}</p>
                </div>
                <p className="text-black/55 text-[0.875rem] leading-relaxed mb-4 pl-11">{p.solution}</p>
                <div className="flex items-center gap-2 pl-11">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#C4161C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 11 12 14 22 4" /><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                  </svg>
                  <span className="text-[0.82rem] font-bold text-[#C4161C]">{p.cta}</span>
                </div>
              </div>
            </FadeInView>
          ))}
        </div>

        {/* Client Protection Framework */}
        <FadeInView delay={100}>
          <div className="rounded-2xl bg-black text-white p-8 md:p-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[#C4161C] flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <h3 className="text-[1.3rem] font-extrabold text-white">
                The Mekark Client Protection Framework
              </h3>
            </div>
            <div className="grid sm:grid-cols-2 gap-3 mb-8">
              {PROTECTIONS.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C4161C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 shrink-0">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span className="text-white/75 text-[0.875rem] leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
            <a
              href="#contact-form"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md bg-[#C4161C] text-white font-bold text-[0.95rem] transition-[background-color,transform] duration-150 hover:bg-[#A31217] active:scale-[0.96]"
            >
              Start Your Protected Project
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
          </div>
        </FadeInView>
      </div>
    </section>
  );
}
