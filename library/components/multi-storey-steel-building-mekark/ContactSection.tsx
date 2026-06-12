import FadeInView from "@/components/multi-storey-steel-building-mekark/FadeInView";
import EnquiryForm from "@/components/multi-storey-steel-building-mekark/EnquiryForm";

const mekarkContact = { phoneHref: "tel:+919790924754", phoneLabel: "+91 97909 24754", emailHref: "mailto:info@mekark.com", emailLabel: "info@mekark.com", whatsappUrl: "https://wa.me/919790924754", websiteUrl: "https://www.mekark.com" };

const TRUST_POINTS = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C4161C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    text: "Detailed quote in 48 hours — guaranteed",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C4161C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
    text: "Direct structural engineer — no sales reps",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C4161C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
      </svg>
    ),
    text: "Free site visit within Tamil Nadu",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C4161C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    text: "ISO 9001:2015 certified manufacturing",
  },
];

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 md:py-28 bg-white">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid lg:grid-cols-[1fr_460px] gap-12 xl:gap-20 items-start">

          {/* Left: copy */}
          <div>
            <FadeInView>
              <p className="text-[0.72rem] font-extrabold uppercase tracking-[0.25em] text-[#C4161C] mb-3">
                Start Your Project
              </p>
            </FadeInView>

            <FadeInView delay={80}>
              <h2 className="text-[2.4rem] sm:text-[2.9rem] font-extrabold text-black leading-[1.05] tracking-[-0.025em] mb-6">
                Talk to a Structural<br />
                <span className="text-[#C4161C]">Engineer Today</span>
              </h2>
            </FadeInView>

            <FadeInView delay={150}>
              <p className="text-black/55 text-[1.05rem] leading-[1.8] mb-10 max-w-[480px]">
                Fill the form and our structural engineers will reach out within 4 business
                hours. No commitment, no spam — just a straight conversation about your
                steel building project.
              </p>
            </FadeInView>

            <div className="flex flex-col gap-4 mb-10">
              {TRUST_POINTS.map((tp, i) => (
                <FadeInView key={tp.text} delay={220 + i * 60}>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.07),0_2px_8px_rgba(0,0,0,0.04)] flex items-center justify-center shrink-0">
                      {tp.icon}
                    </div>
                    <span className="text-black/70 text-[0.92rem] font-medium">{tp.text}</span>
                  </div>
                </FadeInView>
              ))}
            </div>

            <FadeInView delay={480}>
              <div className="flex flex-wrap gap-3">
                <a
                  href={mekarkContact.phoneHref}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white border border-black/10 text-black font-semibold text-[0.9rem] transition-[border-color,box-shadow] duration-150 hover:border-black/20 hover:shadow-[0_2px_8px_rgba(0,0,0,0.08)]"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  {mekarkContact.phoneLabel}
                </a>
                <a
                  href={mekarkContact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#25D366] text-white font-semibold text-[0.9rem] transition-[opacity,transform] duration-150 hover:opacity-90 active:scale-[0.96]"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  WhatsApp Us
                </a>
              </div>
            </FadeInView>
          </div>

          {/* Right: Form */}
          <FadeInView delay={100} className="lg:sticky lg:top-28">
            <EnquiryForm id="contact-form" />
          </FadeInView>
        </div>
      </div>
    </section>
  );
}
