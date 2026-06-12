"use client";

import { createPortal } from "react-dom";
import { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react";

const FORM_ENDPOINT = "/api/enquiry-form";
const THANK_YOU_URL = "https://www.mekark.com/thank-you";
const DEFAULT_PROJECT_TYPE = "PEB Industrial Project";
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type CtaFormValues = {
  name: string;
  email: string;
  phone: string;
  company: string;
  location: string;
  sqft: string;
  projectDetails: string;
};

type CtaFormErrors = Partial<Record<keyof CtaFormValues, string>>;

const INITIAL: CtaFormValues = {
  name: "", email: "", phone: "", company: "", location: "", sqft: "", projectDetails: "",
};

function validate(values: CtaFormValues) {
  const errors: CtaFormErrors = {};
  const digits = values.phone.replace(/\D/g, "");
  if (!values.name.trim()) errors.name = "Enter your full name.";
  if (!values.email.trim()) errors.email = "Enter your email address.";
  else if (!EMAIL_REGEX.test(values.email.trim())) errors.email = "Enter a valid email address.";
  if (!values.phone.trim()) errors.phone = "Enter your contact number.";
  else if (digits.length < 10 || digits.length > 15) errors.phone = "Enter a valid contact number.";
  if (!values.sqft.trim()) errors.sqft = "Select the approximate project area.";
  return errors;
}

const SQFT_OPTIONS = [
  "Below 1,000 sq. ft.",
  "1,000 - 5,000 sq. ft.",
  "5,000 - 20,000 sq. ft.",
  "20,000 - 1,00,000 sq. ft.",
  "Above 1,00,000 sq. ft.",
];

const TRUST_POINTS = [
  "450+ industrial projects delivered",
  "15+ years of structural expertise",
  "98% on-time project execution",
];

type Variant = "dark" | "light";

export default function CtaSection({ variant = "dark" }: { variant?: Variant }) {
  const [values, setValues] = useState<CtaFormValues>(INITIAL);
  const [errors, setErrors] = useState<CtaFormErrors>({});
  const [status, setStatus] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const key = name as keyof CtaFormValues;
    setValues((v) => ({ ...v, [key]: value }));
    setStatus(null);
    setErrors((errs) => {
      if (!errs[key]) return errs;
      const next = { ...errs };
      delete next[key];
      return next;
    });
  };

  const handleSqftChange = (value: string) => {
    setValues((v) => ({ ...v, sqft: value }));
    setStatus(null);
    setErrors((errs) => {
      if (!errs.sqft) return errs;
      const next = { ...errs };
      delete next.sqft;
      return next;
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errs = validate(values);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      setStatus("Please correct the highlighted fields before submitting.");
      return;
    }
    setErrors({});
    setStatus(null);
    setSubmitting(true);
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: values.name.trim(),
          email: values.email.trim(),
          phone: values.phone.trim(),
          city: values.location.trim(),
          company: values.company.trim(),
          projectType: DEFAULT_PROJECT_TYPE,
          sqft: values.sqft.trim(),
          projectDetails: values.projectDetails.trim(),
        }),
      });
      const payload = (await res.json().catch(() => null)) as { message?: string } | null;
      if (!res.ok) throw new Error(payload?.message || "Could not submit. Please try again.");
      setValues(INITIAL);
      window.location.assign(THANK_YOU_URL);
    } catch (err) {
      setStatus(err instanceof Error ? err.message : "Could not submit. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return variant === "dark"
    ? <DarkForm values={values} errors={errors} status={status} submitting={submitting} onChange={handleChange} onSqftChange={handleSqftChange} onSubmit={handleSubmit} />
    : <LightForm values={values} errors={errors} status={status} submitting={submitting} onChange={handleChange} onSqftChange={handleSqftChange} onSubmit={handleSubmit} />;
}

// ─── Shared field props helper ────────────────────────────────────────────────
type FieldProps = {
  values: CtaFormValues;
  errors: CtaFormErrors;
  submitting: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onSqftChange: (value: string) => void;
};

// ─── VARIANT 1: Dark split (home page) ───────────────────────────────────────
function DarkForm({ values, errors, status, submitting, onChange, onSqftChange, onSubmit }: FieldProps & { status: string | null; onSubmit: (e: FormEvent<HTMLFormElement>) => void }) {
  const f = "w-full rounded-xl border border-white/10 bg-white/6 px-4 py-3 text-[0.92rem] text-white outline-none transition-[border-color,background-color] duration-150 placeholder:text-white/35 focus:border-[#ED1C24]/60 focus:bg-white/8 disabled:opacity-60";
  const fe = "border-red-400/50 bg-red-900/20";

  return (
    <section id="intake" className="w-full bg-[#0A0A0A] px-4 py-12 sm:px-6 sm:py-16 md:px-12 md:py-24 font-manrope">
      <div className="mx-auto w-full max-w-350">
        {/* Outer wrapper — no overflow-hidden so the portal dropdown isn't clipped */}
        <div className="relative z-10 rounded-2xl sm:rounded-3xl border border-white/8 bg-[#0A0A0A]">
          <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr]">

            {/* Left: Red panel */}
            <div className="relative flex flex-col justify-between gap-8 overflow-hidden bg-[#ED1C24] rounded-t-2xl sm:rounded-t-3xl lg:rounded-t-none lg:rounded-tl-2xl lg:rounded-bl-2xl sm:rounded-tl-3xl sm:rounded-bl-3xl px-6 py-8 sm:px-8 sm:py-10 md:px-12 md:py-14">
              <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 30% 20%, white 1px, transparent 1px), radial-gradient(circle at 70% 80%, white 1px, transparent 1px)", backgroundSize: "40px 40px" }} />

              <div className="relative">
                <p className="mb-3 text-[0.7rem] font-black tracking-[0.25em] uppercase text-white/70">
                  Start Your Project
                </p>
                <h2 className="text-[1.75rem] sm:text-[2rem] md:text-[2.6rem] lg:text-[2.8rem] font-black leading-[1.08] tracking-tight text-white">
                  Let&apos;s Build Your<br />Next Industrial<br />Project.
                </h2>
                <p className="mt-4 text-[0.95rem] leading-[1.75] text-white/80 max-w-sm">
                  Partner with Mekark for high-quality, fast-track, and cost-efficient industrial building solutions.
                </p>
              </div>

              <div className="relative flex flex-col gap-3 sm:gap-4">
                {TRUST_POINTS.map((pt) => (
                  <div key={pt} className="flex items-center gap-3">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/20">
                      <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                        <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span className="text-[0.85rem] sm:text-[0.88rem] font-semibold text-white/90">{pt}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Dark form */}
            <div className="bg-[#111] rounded-b-2xl sm:rounded-b-3xl lg:rounded-b-none lg:rounded-tr-2xl lg:rounded-br-2xl sm:rounded-tr-3xl sm:rounded-br-3xl px-5 py-8 sm:px-8 sm:py-10 md:px-12 md:py-14">
              <p className="mb-6 sm:mb-8 text-[0.72rem] font-black tracking-[0.22em] uppercase text-white/40">
                Enquiry Form
              </p>
              <form className="flex flex-col gap-4 sm:gap-5" onSubmit={onSubmit} noValidate>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
                  <Field label="Name *" error={errors.name}>
                    <input id="d-name" name="name" type="text" placeholder="Your full name" value={values.name} onChange={onChange} autoComplete="name" disabled={submitting} className={`${f} ${errors.name ? fe : ""}`} />
                  </Field>
                  <Field label="Email *" error={errors.email}>
                    <input id="d-email" name="email" type="email" placeholder="you@company.com" value={values.email} onChange={onChange} autoComplete="email" disabled={submitting} className={`${f} ${errors.email ? fe : ""}`} />
                  </Field>
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
                  <Field label="Phone *" error={errors.phone}>
                    <input id="d-phone" name="phone" type="tel" placeholder="+91 98XXX XXXXX" value={values.phone} onChange={onChange} autoComplete="tel" disabled={submitting} className={`${f} ${errors.phone ? fe : ""}`} />
                  </Field>
                  <Field label="Company" error={undefined}>
                    <input id="d-company" name="company" type="text" placeholder="Company name" value={values.company} onChange={onChange} autoComplete="organization" disabled={submitting} className={f} />
                  </Field>
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
                  <Field label="Location" error={undefined}>
                    <input id="d-location" name="location" type="text" placeholder="City / District" value={values.location} onChange={onChange} autoComplete="address-level2" disabled={submitting} className={f} />
                  </Field>
                  <Field label="Project Area *" error={errors.sqft}>
                    <SelectField id="d-sqft" name="sqft" value={values.sqft} onValueChange={onSqftChange} disabled={submitting} hasError={Boolean(errors.sqft)} dark />
                  </Field>
                </div>
                <Field label="Project Details" error={undefined}>
                  <textarea id="d-details" name="projectDetails" rows={3} placeholder="Describe your project — type, usage, timeline…" value={values.projectDetails} onChange={onChange} disabled={submitting} className={`${f} resize-none`} />
                </Field>

                {status && (
                  <p className="rounded-xl border border-red-400/20 bg-red-900/20 px-4 py-3 text-[0.88rem] text-red-200" role="alert">{status}</p>
                )}

                <button type="submit" disabled={submitting}
                  className="mt-1 flex w-full items-center justify-center gap-3 rounded-xl bg-[#ED1C24] px-6 py-4 text-[0.95rem] font-black text-white shadow-[0_8px_32px_rgba(237,28,36,0.35)] transition-[transform,box-shadow] duration-150 hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(237,28,36,0.5)] active:scale-[0.96] disabled:cursor-wait disabled:opacity-70">
                  <span>{submitting ? "Submitting…" : "Request Project Proposal"}</span>
                  {!submitting && (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" />
                    </svg>
                  )}
                  {submitting && (
                    <svg className="animate-spin" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" strokeLinecap="round" />
                    </svg>
                  )}
                </button>
              </form>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

// ─── VARIANT 2: Light clean (about page) ─────────────────────────────────────
function LightForm({ values, errors, status, submitting, onChange, onSqftChange, onSubmit }: FieldProps & { status: string | null; onSubmit: (e: FormEvent<HTMLFormElement>) => void }) {
  const f = "w-full rounded-xl border border-[#E5E5E5] bg-white px-4 py-3 text-[0.95rem] text-[#111] outline-none transition-[border-color,box-shadow] duration-150 placeholder:text-[#B8B8B8] focus:border-[#ED1C24] focus:shadow-[0_0_0_3px_rgba(237,28,36,0.08)] disabled:opacity-50";
  const fe = "border-red-400 bg-[#FFF7F7]";

  return (
    <section id="intake" className="w-full bg-[#FAFAFA] px-4 py-12 sm:px-6 sm:py-16 md:px-12 md:py-24 font-manrope">
      <div className="mx-auto w-full max-w-350">
        <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-10 lg:gap-20 items-start">

          {/* Left: Context */}
          <div className="lg:pt-2">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#FFE8E8] px-4 py-1.5 mb-5">
              <span className="h-1.5 w-1.5 rounded-full bg-[#ED1C24]" />
              <span className="text-[0.72rem] font-black tracking-[0.2em] uppercase text-[#ED1C24]">Free Consultation</span>
            </div>

            <h2 className="text-[1.75rem] sm:text-[2rem] md:text-[2.5rem] lg:text-[3rem] font-black leading-[1.1] tracking-tight text-[#111] mb-5">
              Ready to Build<br />
              <span className="text-[#ED1C24]">Something Great?</span>
            </h2>

            <p className="text-[#666] text-[0.95rem] leading-[1.8] mb-8 max-w-sm text-pretty">
              Tell us about your project and our engineering team will get back to you within 24 hours with a free assessment.
            </p>

            <div className="flex flex-col gap-4">
              {[
                { icon: "M12 2L4 7v6c0 5.5 3.8 10.7 8 12 4.2-1.3 8-6.5 8-12V7l-8-5z", text: "Confidential & no-obligation" },
                { icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z", text: "Dedicated project manager assigned" },
                { icon: "M22 11.08V12a10 10 0 1 1-5.93-9.14", text: "98% on-time execution record" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-4">
                  <div className="flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-xl sm:rounded-2xl bg-[#FFE8E8]">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ED1C24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d={item.icon} />
                    </svg>
                  </div>
                  <span className="text-[0.88rem] sm:text-[0.9rem] font-semibold text-[#444]">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Form card */}
          <div className="relative z-10 rounded-2xl sm:rounded-3xl bg-white border border-[#E7E7E7] px-5 py-7 sm:px-8 sm:py-10 shadow-[0_18px_60px_rgba(0,0,0,0.12)]">
            <p className="mb-6 sm:mb-8 text-[0.72rem] font-black tracking-[0.22em] uppercase text-[#BBB]">
              Project Enquiry
            </p>
            <form className="flex flex-col gap-5 sm:gap-7" onSubmit={onSubmit} noValidate>
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-7">
                <LightField label="Full Name *" error={errors.name}>
                  <input id="l-name" name="name" type="text" placeholder="Your name" value={values.name} onChange={onChange} autoComplete="name" disabled={submitting} className={`${f} ${errors.name ? fe : ""}`} />
                </LightField>
                <LightField label="Email Address *" error={errors.email}>
                  <input id="l-email" name="email" type="email" placeholder="you@company.com" value={values.email} onChange={onChange} autoComplete="email" disabled={submitting} className={`${f} ${errors.email ? fe : ""}`} />
                </LightField>
              </div>
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-7">
                <LightField label="Phone Number *" error={errors.phone}>
                  <input id="l-phone" name="phone" type="tel" placeholder="+91 98XXX XXXXX" value={values.phone} onChange={onChange} autoComplete="tel" disabled={submitting} className={`${f} ${errors.phone ? fe : ""}`} />
                </LightField>
                <LightField label="Company Name" error={undefined}>
                  <input id="l-company" name="company" type="text" placeholder="Your company" value={values.company} onChange={onChange} autoComplete="organization" disabled={submitting} className={f} />
                </LightField>
              </div>
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-7">
                <LightField label="Project Location" error={undefined}>
                  <input id="l-location" name="location" type="text" placeholder="City / District" value={values.location} onChange={onChange} autoComplete="address-level2" disabled={submitting} className={f} />
                </LightField>
                <LightField label="Project Area *" error={errors.sqft}>
                  <SelectField id="l-sqft" name="sqft" value={values.sqft} onValueChange={onSqftChange} disabled={submitting} hasError={Boolean(errors.sqft)} dark={false} />
                </LightField>
              </div>
              <LightField label="Project Details" error={undefined}>
                <textarea id="l-details" name="projectDetails" rows={3} placeholder="Describe your project — type of building, usage, timeline…" value={values.projectDetails} onChange={onChange} disabled={submitting} className={`${f} resize-none`} />
              </LightField>

              {status && (
                <p className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-[0.88rem] text-red-600" role="alert">{status}</p>
              )}

              <button type="submit" disabled={submitting}
                className="flex w-full items-center justify-center gap-3 rounded-xl sm:rounded-2xl bg-[#ED1C24] px-6 py-4 text-[0.95rem] font-black text-white shadow-[0_6px_24px_rgba(237,28,36,0.3)] transition-[transform,box-shadow] duration-150 hover:-translate-y-0.5 hover:shadow-[0_10px_32px_rgba(237,28,36,0.45)] active:scale-[0.96] disabled:cursor-wait disabled:opacity-70">
                <span>{submitting ? "Submitting…" : "Get Free Consultation"}</span>
                {!submitting && (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" />
                  </svg>
                )}
                {submitting && (
                  <svg className="animate-spin" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" strokeLinecap="round" />
                  </svg>
                )}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}

// ─── Shared sub-components ────────────────────────────────────────────────────
function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-[0.68rem] font-black tracking-[0.2em] uppercase text-white/50">{label}</label>
      {children}
      {error && <p className="text-[0.78rem] leading-5 text-red-300">{error}</p>}
    </div>
  );
}

function LightField({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-[0.68rem] font-black tracking-[0.18em] uppercase text-[#999]">{label}</label>
      {children}
      {error && <p className="text-[0.78rem] leading-5 text-red-500">{error}</p>}
    </div>
  );
}

function SelectField({ id, name, value, onValueChange, disabled, hasError, dark }: {
  id: string; name: string; value: string;
  onValueChange: (value: string) => void;
  disabled: boolean; hasError: boolean; dark: boolean;
}) {
  const [open, setOpen] = useState(false);
  const [dropRect, setDropRect] = useState<DOMRect | null>(null);
  const btnRef = useRef<HTMLButtonElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  const handleToggle = () => {
    if (!open && btnRef.current) {
      setDropRect(btnRef.current.getBoundingClientRect());
    }
    setOpen((o) => !o);
  };

  // Close on outside click
  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      if (
        !btnRef.current?.contains(e.target as Node) &&
        !listRef.current?.contains(e.target as Node)
      ) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open]);

  // Close and reposition on scroll / resize
  useEffect(() => {
    if (!open) return;
    const close = () => setOpen(false);
    const reposition = () => {
      if (btnRef.current) setDropRect(btnRef.current.getBoundingClientRect());
    };
    window.addEventListener("scroll", reposition, true);
    window.addEventListener("resize", close);
    return () => {
      window.removeEventListener("scroll", reposition, true);
      window.removeEventListener("resize", close);
    };
  }, [open]);

  const chevron = (
    <svg
      className={`shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""} ${dark ? "text-white/40" : "text-[#AAA]"}`}
      width="11" height="7" viewBox="0 0 12 8" fill="none"
    >
      <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );

  // Portal dropdown — renders in document.body to escape overflow:hidden parents
  const dropdown = open && dropRect && typeof document !== "undefined" && createPortal(
    <div
      ref={listRef}
      style={{
        position: "fixed",
        top: dropRect.bottom + 6,
        left: dropRect.left,
        width: dropRect.width,
        zIndex: 9999,
      }}
      className={`overflow-hidden rounded-xl border shadow-xl ${
        dark
          ? "border-white/10 bg-[#1C1C1C] shadow-[0_12px_40px_rgba(0,0,0,0.5)]"
          : "border-[#EEE] bg-white shadow-[0_8px_24px_rgba(0,0,0,0.1)]"
      }`}
    >
      {SQFT_OPTIONS.map((opt) => (
        <button
          key={opt}
          type="button"
          onClick={() => { onValueChange(opt); setOpen(false); }}
          className={`w-full px-4 py-3 text-left text-[0.88rem] transition-colors duration-100 ${
            value === opt
              ? dark
                ? "bg-[#ED1C24]/15 font-semibold text-[#ED1C24]"
                : "bg-[#FFF0F0] font-semibold text-[#ED1C24]"
              : dark
              ? "text-white/70 hover:bg-white/6 hover:text-white"
              : "text-[#444] hover:bg-[#F8F8F8]"
          }`}
        >
          {opt}
        </button>
      ))}
    </div>,
    document.body
  );

  if (dark) {
    return (
      <div id={id}>
        <button
          ref={btnRef}
          type="button"
          disabled={disabled}
          onClick={handleToggle}
          aria-expanded={open}
          aria-haspopup="listbox"
          className={`w-full flex items-center justify-between rounded-xl border px-4 py-3 text-[0.92rem] outline-none transition-[border-color,background-color] duration-150 disabled:opacity-60 ${
            hasError
              ? "border-red-400/50 bg-red-900/20"
              : open
              ? "border-[#ED1C24]/60 bg-white/8"
              : "border-white/10 bg-white/6"
          }`}
        >
          <span className={value ? "text-white" : "text-white/35"}>{value || "Select area"}</span>
          {chevron}
        </button>
        {dropdown}
      </div>
    );
  }

  return (
    <div id={id}>
      <button
        ref={btnRef}
        type="button"
        disabled={disabled}
        onClick={handleToggle}
        aria-expanded={open}
        aria-haspopup="listbox"
        className={`w-full flex items-center justify-between rounded-xl border px-4 py-3 text-[0.95rem] outline-none transition-[border-color,box-shadow] duration-150 disabled:opacity-50 ${
          hasError
            ? "border-red-400 bg-[#FFF7F7]"
            : open
            ? "border-[#ED1C24] bg-white shadow-[0_0_0_3px_rgba(237,28,36,0.08)]"
            : "border-[#E5E5E5] bg-white"
        }`}
      >
        <span className={value ? "text-[#111]" : "text-[#C0C0C0]"}>{value || "Select area"}</span>
        {chevron}
      </button>
      {dropdown}
    </div>
  );
}
