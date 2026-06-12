import FadeInView from "@/components/multi-storey-steel-building-mekark/FadeInView";
import CountUp from "@/components/multi-storey-steel-building-mekark/CountUp";

const TESTIMONIALS = [
  {
    quote: "Mekark delivered our G+4 manufacturing complex 3 weeks ahead of schedule. The fabrication quality was exceptional — zero rework on-site. Their in-house engineering team caught a foundation conflict in the drawings before mobilisation, saving us significant cost.",
    name: "Rajesh Venkataraman",
    title: "Managing Director",
    company: "TVS Industrial",
    location: "Chennai",
  },
  {
    quote: "We've worked with five structural contractors over 12 years. Mekark is the only one that has never missed a milestone and never added a rupee to the contract price without written approval. Their 72-hour progress reports gave us real-time visibility.",
    name: "Priya Sundaram",
    title: "VP Projects",
    company: "Sundaram Logistics",
    location: "Hosur",
  },
  {
    quote: "The G+7 IT park structure was completed in 16 months — 2 months faster than our previous contractor's estimate for the same scope. The STAAD Pro analysis reports and IS 800 compliance documentation were thorough and professionally presented.",
    name: "Karthik Narayanan",
    title: "Chief Infrastructure Officer",
    company: "Hexaware Technologies",
    location: "Bengaluru",
  },
  {
    quote: "Mekark handled our pharmaceutical cleanroom steel structure with the precision it required. Every weld inspection report was documented, and the blast-cleaning and epoxy coating met our pharma-grade specifications. Impressed with the zero-subcontract commitment.",
    name: "Dr. Lakshmi Iyer",
    title: "Facility Director",
    company: "Sun Pharma",
    location: "Hyderabad",
  },
  {
    quote: "Our 200 MW solar plant required steel structures across difficult terrain in Rajasthan. Mekark's logistics team managed permits, border clearances, and remote delivery flawlessly. Their in-house erection team worked in 48°C heat without a single safety incident.",
    name: "Anil Sharma",
    title: "Project Director",
    company: "Adani Green Energy",
    location: "Rajasthan",
  },
  {
    quote: "Fixed-price contract, milestone-linked payments, and a 5-year warranty in writing. No other contractor offered this combination. Six months in, they delivered exactly what was quoted. We're now commissioning a second facility with Mekark.",
    name: "Mohammed Iqbal",
    title: "COO",
    company: "Logistics India Ltd.",
    location: "Coimbatore",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-28 bg-white">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
        <FadeInView>
          <p className="text-[0.72rem] font-extrabold uppercase tracking-[0.25em] text-[#C4161C] mb-3">
            Client Testimonials
          </p>
        </FadeInView>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <FadeInView delay={80}>
            <h2 className="text-[2.2rem] sm:text-[2.7rem] font-extrabold text-black leading-[1.1] tracking-[-0.025em] max-w-[500px]">
              <CountUp to={450} suffix="+" />{" "}Projects.<br />
              <span className="text-[#C4161C]"><CountUp to={300} suffix="+" delay={120} /> Happy Clients.</span>
            </h2>
          </FadeInView>
          <FadeInView delay={160}>
            <p className="text-black/55 text-[1rem] leading-relaxed max-w-[360px]">
              Real feedback from clients who trusted Mekark with their most critical
              structural projects across India.
            </p>
          </FadeInView>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {TESTIMONIALS.map((t, i) => (
            <FadeInView key={t.name} delay={i * 70}>
              <div className="bg-white rounded-2xl p-6 shadow-[0_0_0_1px_rgba(0,0,0,0.06),0_2px_8px_rgba(0,0,0,0.04)] h-full flex flex-col">
                <div className="text-[3rem] leading-none font-extrabold text-[#C4161C] mb-3 select-none" aria-hidden="true">
                  &ldquo;
                </div>
                <p className="text-black/60 text-[0.875rem] leading-relaxed flex-1 mb-5">
                  {t.quote}
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-black/[0.06]">
                  <div>
                    <p className="font-bold text-black text-[0.88rem]">{t.name}</p>
                    <p className="text-black/40 text-[0.75rem]">{t.title}, {t.company}</p>
                  </div>
                  <div className="ml-auto">
                    <div className="flex items-center gap-1 text-black/40 text-[0.72rem]">
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
                      </svg>
                      {t.location}
                    </div>
                  </div>
                </div>
              </div>
            </FadeInView>
          ))}
        </div>
      </div>
    </section>
  );
}
