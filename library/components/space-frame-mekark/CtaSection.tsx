"use client";

import { useState, useRef, useEffect } from "react";

const FORM_ENDPOINT = "/api/enquiry-form";
const THANK_YOU_URL = "https://www.mekark.com/thank-you";
const DEFAULT_PROJECT_TYPE = "Space Frame Structure";

type Fields = {
  name: string;
  email: string;
  phone: string;
  company: string;
  location: string;
  sqft: string;
  projectDetails: string;
};

type Errors = Partial<Record<keyof Fields, string>>;

const SQFT_OPTIONS = [
  "10,000 – 20,000 sq. ft.",
  "20,000 – 30,000 sq. ft.",
  "30,000 – 40,000 sq. ft.",
  "40,000 – 50,000 sq. ft.",
  "50,000+ sq. ft.",
];

const trustPoints = [
  { icon: "🏭", text: "In-house design & manufacturing" },
  { icon: "🗓️", text: "120-day delivery commitment" },
  { icon: "📐", text: "500+ projects across India" },
];

function validate(f: Fields): Errors {
  const e: Errors = {};
  if (!f.name.trim()) e.name = "Name is required";
  if (!f.email.trim()) e.email = "Email is required";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email)) e.email = "Enter a valid email";
  if (!f.phone.trim()) e.phone = "Phone number is required";
  else {
    const digits = f.phone.replace(/\D/g, "");
    const mobile = digits.startsWith("91") && digits.length === 12 ? digits.slice(2) : digits;
    if (!/^[6-9]\d{9}$/.test(mobile)) e.phone = "Enter a valid 10-digit mobile number";
  }
  if (!f.sqft) e.sqft = "Please select an area";
  return e;
}

export default function CtaSection() {
  const [form, setForm] = useState<Fields>({
    name: "", email: "", phone: "", company: "", location: "", sqft: "", projectDetails: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [submitting, setSubmitting] = useState(false);
  const [serverError, setServerError] = useState("");
  const [sqftOpen, setSqftOpen] = useState(false);
  const sqftRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sqftOpen) return;
    function onOutside(e: MouseEvent) {
      if (sqftRef.current && !sqftRef.current.contains(e.target as Node)) setSqftOpen(false);
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setSqftOpen(false);
    }
    document.addEventListener("mousedown", onOutside);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onOutside);
      document.removeEventListener("keydown", onKey);
    };
  }, [sqftOpen]);

  function onChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof Fields]) setErrors(prev => ({ ...prev, [name]: undefined }));
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setServerError("");
    const errs = validate(form);
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setSubmitting(true);
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          phone: form.phone.trim(),
          city: form.location.trim(),
          company: form.company.trim(),
          projectType: DEFAULT_PROJECT_TYPE,
          sqft: form.sqft,
          projectDetails: form.projectDetails.trim(),
        }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error((data as { message?: string }).message ?? "Something went wrong. Please try again.");
      }
      window.location.assign(THANK_YOU_URL);
    } catch (err) {
      setServerError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
      setSubmitting(false);
    }
  }

  function fieldClass(hasErr: boolean) {
    return [
      "w-full rounded-[10px] border px-4 py-3 outline-none bg-white",
      "text-[0.92rem] text-gray-900 placeholder:text-gray-400",
      "transition-[border-color,box-shadow] duration-150",
      "focus:ring-4",
      "disabled:cursor-not-allowed disabled:opacity-75",
      hasErr
        ? "border-red-400 focus:border-red-500 focus:ring-red-100"
        : "border-gray-200 focus:border-red-400 focus:ring-red-50",
    ].join(" ");
  }

  const lbl = "block text-[0.72rem] font-extrabold tracking-[0.18em] text-red-700 uppercase mb-1.5";
  const errMsg = "mt-1 text-[0.8rem] text-red-600";

  return (
    <section id="intake" className="bg-white py-16 md:py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-[1400px] mx-auto">
        <div
          className="relative overflow-hidden rounded-[32px]"
          style={{
            background: "linear-gradient(140deg, #C4161C 0%, #991B1B 60%, #7A1015 100%)",
            boxShadow: "0 40px 80px rgba(196,22,28,0.22), 0 0 0 1px rgba(0,0,0,0.06)",
          }}
        >
          {/* Square grid lines */}
          <div
            aria-hidden
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: `
                linear-gradient(rgba(0,0,0,0.18) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0,0,0,0.18) 1px, transparent 1px)
              `,
              backgroundSize: "56px 56px",
            }}
          />
          {/* Diagonal */}
          <div
            aria-hidden
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: `linear-gradient(45deg, rgba(0,0,0,0.08) 1px, transparent 1px)`,
              backgroundSize: "56px 56px",
            }}
          />
          {/* Corner accents */}
          <div aria-hidden className="absolute top-0 right-0 w-72 h-52 bg-black/10 pointer-events-none" />
          <div aria-hidden className="absolute top-0 right-0 w-40 h-40 bg-black/10 pointer-events-none" />
          <div aria-hidden className="absolute bottom-0 left-0 w-56 h-36 bg-black/10 pointer-events-none" />

          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 p-8 md:p-12 lg:p-16">
            {/* Left panel */}
            <div className="flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 mb-6 self-start px-3 py-1.5 rounded-full bg-white/15 border border-white/25">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" aria-hidden />
                <span className="text-white/90 text-xs font-semibold uppercase tracking-widest">Free Consultation</span>
              </div>

              <h2
                className="text-white text-balance font-black mb-5"
                style={{
                  fontSize: "clamp(2.1rem, 3.2vw, 3.2rem)",
                  letterSpacing: "-0.04em",
                  lineHeight: 1.1,
                }}
              >
                Turn plans into{" "}
                <em style={{ fontStyle: "italic" }}>structural reality.</em>
              </h2>
              <p
                className="text-white/80 text-pretty mb-8"
                style={{ fontSize: "1.02rem", lineHeight: 1.7 }}
              >
                Whether you need a massive industrial coverage system or a high-aesthetic
                commercial facade, Mekark delivers engineered excellence — on time, every time.
              </p>

              <div className="flex flex-col gap-3">
                {trustPoints.map((pt) => (
                  <div key={pt.text} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white/15 flex items-center justify-center shrink-0 text-sm">
                      {pt.icon}
                    </div>
                    <span className="text-white/85 text-sm font-medium">{pt.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right panel: form on white card */}
            <div>
              <div
                className="rounded-2xl bg-white p-7 md:p-8"
                style={{ boxShadow: "0 8px 40px rgba(0,0,0,0.18)" }}
              >
                <p className="text-xs font-extrabold tracking-[0.2em] text-red-600 uppercase mb-5">
                  Request a Blueprint
                </p>

                {serverError && (
                  <div
                    role="alert"
                    className="mb-5 rounded-[10px] border border-red-200 bg-red-50 px-4 py-3 text-[0.92rem] text-red-700"
                  >
                    {serverError}
                  </div>
                )}

                <form onSubmit={onSubmit} noValidate className="space-y-4">
                  {/* Row 1: name + email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="f-name" className={lbl}>Name *</label>
                      <input
                        id="f-name" name="name" type="text" autoComplete="name"
                        placeholder="Your full name" value={form.name}
                        onChange={onChange} disabled={submitting}
                        className={fieldClass(!!errors.name)}
                      />
                      {errors.name && <p className={errMsg}>{errors.name}</p>}
                    </div>
                    <div>
                      <label htmlFor="f-email" className={lbl}>Email ID *</label>
                      <input
                        id="f-email" name="email" type="email" autoComplete="email"
                        placeholder="you@company.com" value={form.email}
                        onChange={onChange} disabled={submitting}
                        className={fieldClass(!!errors.email)}
                      />
                      {errors.email && <p className={errMsg}>{errors.email}</p>}
                    </div>
                  </div>

                  {/* Row 2: phone + company */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="f-phone" className={lbl}>Contact Number *</label>
                      <input
                        id="f-phone" name="phone" type="tel" autoComplete="tel"
                        placeholder="+91 98XXX XXXXX" value={form.phone}
                        onChange={onChange} disabled={submitting}
                        className={fieldClass(!!errors.phone)}
                      />
                      {errors.phone && <p className={errMsg}>{errors.phone}</p>}
                    </div>
                    <div>
                      <label htmlFor="f-company" className={lbl}>Company Name</label>
                      <input
                        id="f-company" name="company" type="text" autoComplete="organization"
                        placeholder="Your company name" value={form.company}
                        onChange={onChange} disabled={submitting}
                        className={fieldClass(false)}
                      />
                    </div>
                  </div>

                  {/* Row 3: location + sqft */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="f-location" className={lbl}>Location</label>
                      <input
                        id="f-location" name="location" type="text"
                        placeholder="City / District" value={form.location}
                        onChange={onChange} disabled={submitting}
                        className={fieldClass(false)}
                      />
                    </div>
                    <div>
                      <label htmlFor="f-sqft" className={lbl}>Square Feet *</label>
                      <div ref={sqftRef} className="relative">
                        <style>{`@keyframes dd-in{from{opacity:0;transform:translateY(-6px)}to{opacity:1;transform:translateY(0)}}`}</style>
                        <button
                          id="f-sqft"
                          type="button"
                          aria-haspopup="listbox"
                          aria-expanded={sqftOpen}
                          disabled={submitting}
                          onClick={() => setSqftOpen(o => !o)}
                          className={`${fieldClass(!!errors.sqft)} flex items-center justify-between gap-2 text-left`}
                        >
                          <span className={form.sqft ? "text-gray-900" : "text-gray-400"}>
                            {form.sqft || "Select approximate area"}
                          </span>
                          <svg
                            className={`shrink-0 text-gray-400 transition-transform duration-200 ease-out ${sqftOpen ? "rotate-180" : ""}`}
                            width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden
                          >
                            <path d="M3 5L7 9L11 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </button>

                        {sqftOpen && (
                          <ul
                            role="listbox"
                            aria-label="Square feet range"
                            className="absolute z-50 mt-1.5 w-full rounded-[10px] border border-gray-200 bg-white py-1 overflow-hidden"
                            style={{
                              boxShadow: "0 8px 24px rgba(0,0,0,0.12), 0 0 0 1px rgba(0,0,0,0.06)",
                              animation: "dd-in 150ms ease-out forwards",
                            }}
                          >
                            {SQFT_OPTIONS.map(opt => {
                              const selected = form.sqft === opt;
                              return (
                                <li
                                  key={opt}
                                  role="option"
                                  aria-selected={selected}
                                  onClick={() => {
                                    setForm(prev => ({ ...prev, sqft: opt }));
                                    if (errors.sqft) setErrors(prev => ({ ...prev, sqft: undefined }));
                                    setSqftOpen(false);
                                  }}
                                  className={[
                                    "flex items-center justify-between px-4 py-2.5 cursor-pointer text-[0.92rem]",
                                    "transition-colors duration-100",
                                    selected
                                      ? "bg-red-50 text-red-700 font-semibold"
                                      : "text-gray-700 hover:bg-gray-50",
                                  ].join(" ")}
                                >
                                  {opt}
                                  {selected && (
                                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                                      <path d="M2.5 7L5.5 10L11.5 4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                  )}
                                </li>
                              );
                            })}
                          </ul>
                        )}
                      </div>
                      {errors.sqft && <p className={errMsg}>{errors.sqft}</p>}
                    </div>
                  </div>

                  {/* Row 4: project details */}
                  <div>
                    <label htmlFor="f-details" className={lbl}>Project Details</label>
                    <textarea
                      id="f-details" name="projectDetails" rows={3}
                      placeholder="Describe your project — type of building, usage, timeline, etc."
                      value={form.projectDetails} onChange={onChange}
                      disabled={submitting}
                      className={`${fieldClass(false)} resize-none`}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full rounded-[10px] bg-red-600 px-6 py-4 text-[1rem] font-extrabold text-white transition-[transform,background-color,box-shadow] duration-150 ease-out hover:bg-red-700 hover:-translate-y-0.5 active:scale-[0.96] disabled:cursor-wait disabled:opacity-80"
                    style={{ boxShadow: "0 8px 24px rgba(196,22,28,0.35)" }}
                  >
                    <span className="flex items-center justify-center gap-2.5">
                      {submitting ? "Submitting Request…" : "Request Structural Blueprint"}
                      {!submitting && (
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
                          <path d="M2.25 15.75L15.75 2.25M15.75 2.25H6.75M15.75 2.25V11.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      )}
                    </span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
