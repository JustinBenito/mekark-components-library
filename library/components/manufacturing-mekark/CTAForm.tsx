"use client";

const mekarkContact = { phoneHref: "tel:+919876543210", phoneLabel: "+91 98765 43210", emailHref: "mailto:info@mekark.com", emailLabel: "info@mekark.com", whatsappUrl: "https://wa.me/919876543210", websiteUrl: "https://www.mekark.com" };

import { useState, FormEvent } from "react";
import { FadeInView } from "@/components/manufacturing-mekark/FadeInView";


const SQFT_OPTIONS = [
  "1,000 - 10,000 sq. ft.",
  "10,000 - 20,000 sq. ft.",
  "20,000 - 30,000 sq. ft.",
  "40,000 - 50,000 sq. ft.",
  "More than 50,000 sq. ft.",
];

const BENEFITS = [
  "Dedicated project feasibility report",
  "Structural system recommendation",
  "Indicative cost model & timeline",
  "Regulatory clearance roadmap",
];

interface FormState {
  name: string;
  email: string;
  phone: string;
  company: string;
  location: string;
  sqft: string;
  projectDetails: string;
}

interface Errors {
  name?: string;
  email?: string;
  phone?: string;
  sqft?: string;
}

const inputBase =
  "w-full rounded-lg border text-[0.88rem] text-white outline-none placeholder:text-white/30 transition-[border-color,background-color] duration-150 focus:border-white/70 focus:bg-black/40 disabled:cursor-not-allowed disabled:opacity-60";
const inputErr = "border-white/80 bg-black/50";
const inputNorm = "border-white/15 bg-black/25";
const pad = { padding: "11px 14px" };

const labelStyle: React.CSSProperties = {
  fontSize: "0.68rem",
  fontWeight: 700,
  letterSpacing: "0.16em",
  textTransform: "uppercase",
  color: "rgba(255,255,255,0.6)",
  marginBottom: 5,
  display: "block",
};

export default function CTAForm() {
  const [form, setForm] = useState<FormState>({
    name: "", email: "", phone: "", company: "", location: "", sqft: "", projectDetails: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [submitting, setSubmitting] = useState(false);
  const [serverError, setServerError] = useState("");
  const [sqftOpen, setSqftOpen] = useState(false);

  function validate(): Errors {
    const e: Errors = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Valid email is required";
    if (!form.phone.trim() || !/^\d{10,15}$/.test(form.phone.replace(/\D/g, "")))
      e.phone = "Valid phone number is required";
    if (!form.sqft) e.sqft = "Please select an area range";
    return e;
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setSubmitting(true);
    setServerError("");
    try {
      const res = await fetch("/api/enquiry-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          phone: form.phone.trim(),
          city: form.location.trim(),
          company: form.company.trim(),
          projectType: "Manufacturing Building",
          sqft: form.sqft,
          projectDetails: form.projectDetails.trim(),
        }),
      });
      if (res.ok) {
        window.location.assign("https://www.mekark.com/thank-you");
      } else {
        const d = await res.json().catch(() => ({}));
        setServerError(d.error ?? "Submission failed. Please try again.");
      }
    } catch {
      setServerError("Network error. Please check your connection.");
    } finally {
      setSubmitting(false);
    }
  }

  function field(key: keyof FormState, val: string) {
    setForm((f) => ({ ...f, [key]: val }));
    if (errors[key as keyof Errors])
      setErrors((e) => ({ ...e, [key]: undefined }));
  }

  return (
    <section id="contact" className="bg-white py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid lg:grid-cols-[1fr_1.15fr] gap-12 lg:gap-20 items-start">

          {/* Left: copy panel */}
          <FadeInView>
            <div className="lg:pt-3">
              <div className="w-10 h-1 bg-[#C4161C] rounded-full mb-8" />

              <h2
                className="text-[#0f0f0f] font-black text-balance mb-6 leading-[1.06]"
                style={{
                  fontSize: "clamp(2.2rem, 4vw, 3.4rem)",
                  letterSpacing: "-0.04em",
                }}
              >
                Turn plans into{" "}
                <span className="text-[#C4161C]">structural reality.</span>
              </h2>

              <p className="text-[#666] text-[1rem] leading-[1.75] mb-10 max-w-md text-pretty">
                Tell us about your project. We'll run a site assessment and come back
                with a structural proposal and indicative cost model — within 5 working days.
              </p>

              <div className="flex flex-col gap-3.5 mb-12">
                {BENEFITS.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-[rgba(196,22,28,0.15)] flex items-center justify-center shrink-0">
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#C4161C" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                    </div>
                    <span className="text-[#555] text-[0.88rem]">{item}</span>
                  </div>
                ))}
              </div>

              <div
                className="flex flex-col gap-3 pt-8"
                style={{ borderTop: "1px solid rgba(0,0,0,0.08)" }}
              >
                <a href={mekarkContact.phoneHref} className="flex items-center gap-3 group">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#C4161C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.58 3.54 2 2 0 0 1 3.54 1.38h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.46 16.92z" />
                  </svg>
                  <span className="text-[0.88rem] tabular-nums text-[#888] group-hover:text-[#333] transition-colors duration-150">
                    {mekarkContact.phoneLabel}
                  </span>
                </a>
                <a href={mekarkContact.emailHref} className="flex items-center gap-3 group">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#C4161C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  <span className="text-[0.88rem] text-[#888] group-hover:text-[#333] transition-colors duration-150">
                    {mekarkContact.emailLabel}
                  </span>
                </a>
              </div>
            </div>
          </FadeInView>

          {/* Right: form card — red */}
          <FadeInView delay={0.1}>
            <div
              className="rounded-2xl p-8 md:p-10 relative overflow-hidden"
              style={{
                background: "#C4161C",
                boxShadow: "0 40px 80px rgba(196,22,28,0.4), 0 0 0 1px rgba(255,255,255,0.08)",
              }}
            >
              {/* Subtle texture overlay */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: "radial-gradient(ellipse at top right, rgba(255,255,255,0.08) 0%, transparent 60%)",
                }}
              />
              <h3
                className="relative text-[1.1rem] font-extrabold text-white mb-6"
                style={{ letterSpacing: "-0.015em" }}
              >
                Request a Site Assessment
              </h3>

              <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4 relative">

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label style={labelStyle}>Name *</label>
                    <input
                      type="text"
                      placeholder="Your full name"
                      value={form.name}
                      onChange={(e) => field("name", e.target.value)}
                      className={`${inputBase} ${errors.name ? inputErr : inputNorm}`}
                      style={pad}
                      disabled={submitting}
                    />
                    {errors.name && <p className="text-[0.75rem] text-white/80 mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <label style={labelStyle}>Email *</label>
                    <input
                      type="email"
                      placeholder="you@company.com"
                      value={form.email}
                      onChange={(e) => field("email", e.target.value)}
                      className={`${inputBase} ${errors.email ? inputErr : inputNorm}`}
                      style={pad}
                      disabled={submitting}
                    />
                    {errors.email && <p className="text-[0.75rem] text-white/80 mt-1">{errors.email}</p>}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label style={labelStyle}>Contact Number *</label>
                    <input
                      type="tel"
                      placeholder="+91 98XXX XXXXX"
                      value={form.phone}
                      onChange={(e) => field("phone", e.target.value)}
                      className={`${inputBase} ${errors.phone ? inputErr : inputNorm}`}
                      style={pad}
                      disabled={submitting}
                    />
                    {errors.phone && <p className="text-[0.75rem] text-white/80 mt-1">{errors.phone}</p>}
                  </div>
                  <div>
                    <label style={labelStyle}>Company Name</label>
                    <input
                      type="text"
                      placeholder="Your company name"
                      value={form.company}
                      onChange={(e) => field("company", e.target.value)}
                      className={`${inputBase} ${inputNorm}`}
                      style={pad}
                      disabled={submitting}
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label style={labelStyle}>Location</label>
                    <input
                      type="text"
                      placeholder="City / District"
                      value={form.location}
                      onChange={(e) => field("location", e.target.value)}
                      className={`${inputBase} ${inputNorm}`}
                      style={pad}
                      disabled={submitting}
                    />
                  </div>
                  <div className="relative">
                    <label style={labelStyle}>Square Feet *</label>
                    <button
                      type="button"
                      onClick={() => setSqftOpen(!sqftOpen)}
                      className={`${inputBase} ${errors.sqft ? inputErr : inputNorm} flex items-center justify-between text-left`}
                      style={pad}
                      disabled={submitting}
                    >
                      <span style={{ color: form.sqft ? "#0f0f0f" : "#bbb" }}>
                        {form.sqft || "Select approximate area"}
                      </span>
                      <svg
                        width="13"
                        height="13"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="rgba(255,255,255,0.5)"
                        strokeWidth="2.5"
                        style={{ transition: "transform 180ms ease-out", transform: sqftOpen ? "rotate(180deg)" : "none", flexShrink: 0 }}
                      >
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </button>
                    {errors.sqft && <p className="text-[0.75rem] text-white/80 mt-1">{errors.sqft}</p>}
                    {sqftOpen && (
                      <div
                        className="absolute z-20 left-0 right-0 mt-1 bg-[#1a0a0b] border border-white/10 overflow-hidden"
                        style={{ borderRadius: 10, boxShadow: "0 8px 32px rgba(0,0,0,0.5)" }}
                      >
                        {SQFT_OPTIONS.map((opt) => (
                          <button
                            key={opt}
                            type="button"
                            onClick={() => { field("sqft", opt); setSqftOpen(false); }}
                            className="w-full text-left transition-colors duration-100 hover:bg-white/5"
                            style={{
                              padding: "10px 14px",
                              fontSize: "0.85rem",
                              color: form.sqft === opt ? "white" : "rgba(255,255,255,0.7)",
                              fontWeight: form.sqft === opt ? 600 : 400,
                              background: form.sqft === opt ? "rgba(255,255,255,0.08)" : "transparent",
                            }}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                <div>
                  <label style={labelStyle}>Project Details</label>
                  <textarea
                    rows={3}
                    placeholder="Describe your project — type of building, usage, timeline, etc."
                    value={form.projectDetails}
                    onChange={(e) => field("projectDetails", e.target.value)}
                    className={`${inputBase} ${inputNorm} resize-none`}
                    style={pad}
                    disabled={submitting}
                  />
                </div>

                {serverError && (
                  <div className="rounded-lg border border-white/20 bg-black/30 px-4 py-3 text-[0.85rem] text-white/90" role="alert">
                    {serverError}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full rounded-lg bg-white text-[#C4161C] font-extrabold text-[0.95rem] px-6 py-4 flex items-center justify-center gap-2.5 transition-[opacity,transform] duration-150 ease-out hover:opacity-90 active:scale-[0.97] disabled:cursor-wait disabled:opacity-60"
                  style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.25)" }}
                >
                  {submitting ? "Submitting Request..." : "Request Site Assessment"}
                  {!submitting && (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                    </svg>
                  )}
                </button>

              </form>
            </div>
          </FadeInView>

        </div>
      </div>
    </section>
  );
}
