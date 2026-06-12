"use client";

import { FadeInView } from "@/components/manufacturing-mekark/FadeInView";

const certifications = [
  {
    code: "ISO 9001:2015",
    label: "Quality Management System",
    desc: "Full project lifecycle quality control — from raw material intake to final structural handover.",
  },
  {
    code: "ISO 45001:2018",
    label: "Occupational Health & Safety",
    desc: "Site safety protocols, incident prevention, and worker welfare across all construction phases.",
  },
  {
    code: "ISO 14001:2015",
    label: "Environmental Management",
    desc: "Waste reduction, resource efficiency, and environmental compliance on every project site.",
  },
  {
    code: "IS 800",
    label: "Indian Standard — Steel Structures",
    desc: "All fabricated steel members comply with IS 800 for general structural steel construction.",
  },
  {
    code: "BOCW",
    label: "Building & Construction Workers Act",
    desc: "Registered and compliant with labour welfare requirements under the BOCW Act.",
  },
];

export default function QualityCompliance() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-16 xl:px-24 bg-white">
      <div className="max-w-[1300px] mx-auto">

        <FadeInView>
          <span className="inline-flex items-center rounded-full px-4 py-1.5 mb-3 text-[0.78rem] font-semibold text-[#C4161C]" style={{ background: "rgba(196,22,28,0.09)", border: "1px solid rgba(196,22,28,0.22)", boxShadow: "inset 0 0 16px rgba(196,22,28,0.18)" }}>Quality & Compliance</span>
          <h2
            className="text-[2.8rem] md:text-[3.4rem] font-black leading-[1.08] max-w-[640px] mb-4"
            style={{ letterSpacing: "-0.03em" }}
          >
            <span style={{ color: "#C4161C" }}>Our Certification</span><br />
            <span style={{ color: "#0f0f0f" }}>Framework.</span>
          </h2>
          <p className="text-[1rem] text-[#666] leading-[1.75] max-w-[580px] mb-14 text-pretty">
            Certifications are not wall decorations. Each standard below maps to a specific
            operational discipline that directly affects your facility's structural integrity,
            worker safety, and regulatory clearance speed.
          </p>
        </FadeInView>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {certifications.map((cert, i) => (
            <FadeInView key={cert.code} delay={0.05 + i * 0.07}>
              <div
                className="bg-[#fafafa] rounded-xl p-7 h-full"
                style={{
                  boxShadow: "0px 0px 0px 1px rgba(0,0,0,0.06)",
                }}
              >
                <div className="mb-4">
                  <span
                    className="inline-block text-[0.78rem] font-extrabold text-[#C4161C] bg-[rgba(196,22,28,0.06)] px-3 py-1.5 rounded-lg"
                    style={{ letterSpacing: "0.02em" }}
                  >
                    {cert.code}
                  </span>
                </div>
                <h3 className="text-[0.98rem] font-bold text-[#0f0f0f] mb-2 leading-snug">
                  {cert.label}
                </h3>
                <p className="text-[0.875rem] text-[#666] leading-[1.7] text-pretty">
                  {cert.desc}
                </p>
              </div>
            </FadeInView>
          ))}
        </div>

      </div>
    </section>
  );
}
