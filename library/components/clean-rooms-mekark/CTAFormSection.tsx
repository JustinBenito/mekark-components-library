"use client";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

const SQFT_OPTIONS = [
  "Below 1,000 sq. ft.",
  "1,000 – 5,000 sq. ft.",
  "5,000 – 20,000 sq. ft.",
  "20,000 – 1,00,000 sq. ft.",
  "Above 1,00,000 sq. ft.",
];

const POINTS = [
  "Written feasibility assessment delivered within 48 business hours",
  "Fixed-price proposal — no floating estimates or post-signature revisions",
  "Senior Mekark engineer assigned from your first call through to final handover",
  "No obligation of any kind until you sign the contract",
];

function CustomSelect({
  value,
  onChange,
  options,
  placeholder,
  hasError,
}: {
  value: string;
  onChange: (v: string) => void;
  options: string[];
  placeholder: string;
  hasError: boolean;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className={`w-full flex items-center justify-between rounded-lg border px-4 py-3 text-[0.92rem] outline-none transition-[border-color,background-color,box-shadow] duration-150 text-left
          ${hasError
            ? "border-red-400 bg-red-50 text-gray-900"
            : "border-gray-200 bg-gray-50 text-gray-900"
          }
          ${open ? "border-gray-800 bg-white ring-3 ring-gray-900/8" : "hover:border-gray-300"}`}
      >
        <span className={value ? "text-gray-900" : "text-gray-400"}>
          {value || placeholder}
        </span>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2, ease: [0.25, 1, 0.5, 1] }}
          className="shrink-0 text-gray-400 ml-2"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M6 9l6 6 6-6" />
          </svg>
        </motion.span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -6, filter: "blur(6px)", scale: 0.98 }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }}
            exit={{ opacity: 0, y: -6, filter: "blur(6px)", scale: 0.98 }}
            transition={{ duration: 0.18, ease: [0.25, 1, 0.5, 1] }}
            className="absolute z-50 top-full left-0 right-0 mt-1.5 rounded-xl border border-gray-200 bg-white overflow-hidden"
            style={{ boxShadow: "0 8px 32px rgba(0,0,0,0.12)" }}
          >
            {options.map((opt, i) => (
              <motion.button
                key={opt}
                type="button"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.12, delay: i * 0.025 }}
                onClick={() => { onChange(opt); setOpen(false); }}
                className={`w-full text-left px-4 py-3 text-[0.9rem] transition-colors duration-100 flex items-center gap-3
                  ${value === opt
                    ? "bg-gray-50 text-gray-900 font-semibold"
                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                  }`}
              >
                {value === opt
                  ? <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-[#C4161C]" aria-hidden="true"><path d="M5 13l4 4L19 7" /></svg>
                  : <span className="w-3.5 shrink-0" />
                }
                {opt}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function CTAFormSection() {
  const [form, setForm] = useState({
    name: "", email: "", phone: "", company: "", location: "", sqft: "", projectDetails: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Name is required.";
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Valid email is required.";
    if (!form.phone.trim() || form.phone.replace(/\D/g, "").length < 10) e.phone = "Valid phone number is required.";
    if (!form.sqft) e.sqft = "Please select an area.";
    return e;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setErrors({});
    setSubmitting(true);
    setSubmitError("");
    try {
      const res = await fetch("/api/enquiry-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        const d = await res.json().catch(() => ({}));
        setSubmitError(d.error || "Something went wrong. Please try again.");
        return;
      }
      window.location.assign("https://www.mekark.com/thank-you");
    } catch {
      setSubmitError("Network error. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const fi = (err?: string) =>
    `w-full rounded-lg border px-4 py-3 text-[0.92rem] text-gray-900 outline-none transition-[border-color,background-color,box-shadow] duration-150 placeholder:text-gray-400 focus:border-gray-800 focus:bg-white focus:ring-3 focus:ring-gray-900/8 disabled:cursor-not-allowed disabled:opacity-60 ${
      err ? "border-red-400 bg-red-50" : "border-gray-200 bg-gray-50 hover:border-gray-300"
    }`;

  const label = "block text-[0.72rem] font-bold text-gray-500 uppercase tracking-wide mb-1.5";

  return (
    <section id="contact" className="bg-white py-20 md:py-28">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.25fr] gap-10 lg:gap-20 items-start">

          {/* ── Left: copy ── */}
          <motion.div
            initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65, ease: [0.25, 1, 0.5, 1] }}
            className="lg:sticky lg:top-24"
          >
            <div className="flex items-center gap-3 mb-5">
              <span className="block h-px w-6 bg-[#C4161C]" />
              <p className="text-[#C4161C] font-semibold text-[0.75rem] uppercase tracking-[0.12em]">
                Start the Conversation
              </p>
            </div>

            <h2
              className="font-black text-gray-900 leading-[1.06] tracking-tight text-balance mb-6"
              style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)" }}
            >
              Your Regulatory Calendar<br />Is Already Set.
            </h2>

            <p className="text-gray-500 text-[0.97rem] leading-[1.78] text-pretty mb-10">
              You will speak with a Mekark project engineer within 24 hours — not a sales
              coordinator, not an account manager reading from a script. Someone who can give
              you a technical answer to a technical question on the first call.
            </p>

            <ul className="space-y-4">
              {POINTS.map((pt, i) => (
                <motion.li
                  key={pt}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.15 + i * 0.07, ease: [0.25, 1, 0.5, 1] }}
                  className="flex items-start gap-3.5"
                >
                  <span className="shrink-0 mt-0.5 w-5 h-5 rounded-full bg-[#C4161C]/10 flex items-center justify-center">
                    <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#C4161C" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-gray-600 text-[0.9rem] leading-[1.6]">{pt}</span>
                </motion.li>
              ))}
            </ul>

            {/* Trust badge */}
            <div className="mt-10 pt-8 border-t border-gray-100 flex items-center gap-4">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#F59E0B" aria-hidden="true">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <span className="text-gray-900 font-bold text-[0.88rem] tabular-nums">4.8</span>
              <span className="text-gray-400 text-[0.82rem]">Client satisfaction score across 450+ projects</span>
            </div>
          </motion.div>

          {/* ── Right: form card ── */}
          <motion.div
            initial={{ opacity: 0, y: 28, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.25, 1, 0.5, 1] }}
          >
            <div
              className="bg-white rounded-2xl p-8 md:p-10"
              style={{ boxShadow: "0 0 0 1px rgba(0,0,0,0.06), 0 4px 24px rgba(0,0,0,0.06), 0 24px 64px rgba(0,0,0,0.05)" }}
            >
              <div className="mb-7">
                <p className="font-bold text-gray-900 text-[1.15rem] mb-1">Request Written Feasibility</p>
                <p className="text-gray-400 text-[0.84rem]">Delivered within 48 business hours — no obligation.</p>
              </div>

              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className={label}>Name *</label>
                    <input
                      type="text"
                      placeholder="Your full name"
                      value={form.name}
                      onChange={(e) => { setForm({ ...form, name: e.target.value }); setErrors({ ...errors, name: "" }); }}
                      className={fi(errors.name)}
                    />
                    {errors.name && <p className="text-[0.78rem] text-red-500 mt-1.5">{errors.name}</p>}
                  </div>
                  <div>
                    <label className={label}>Email *</label>
                    <input
                      type="email"
                      placeholder="you@company.com"
                      value={form.email}
                      onChange={(e) => { setForm({ ...form, email: e.target.value }); setErrors({ ...errors, email: "" }); }}
                      className={fi(errors.email)}
                    />
                    {errors.email && <p className="text-[0.78rem] text-red-500 mt-1.5">{errors.email}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className={label}>Phone *</label>
                    <input
                      type="tel"
                      placeholder="+91 98XXX XXXXX"
                      value={form.phone}
                      onChange={(e) => { setForm({ ...form, phone: e.target.value }); setErrors({ ...errors, phone: "" }); }}
                      className={fi(errors.phone)}
                    />
                    {errors.phone && <p className="text-[0.78rem] text-red-500 mt-1.5">{errors.phone}</p>}
                  </div>
                  <div>
                    <label className={label}>Company</label>
                    <input
                      type="text"
                      placeholder="Your company name"
                      value={form.company}
                      onChange={(e) => setForm({ ...form, company: e.target.value })}
                      className={fi()}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className={label}>Location</label>
                    <input
                      type="text"
                      placeholder="City / District"
                      value={form.location}
                      onChange={(e) => setForm({ ...form, location: e.target.value })}
                      className={fi()}
                    />
                  </div>
                  <div>
                    <label className={label}>Clean Room Area *</label>
                    <CustomSelect
                      value={form.sqft}
                      onChange={(v) => { setForm({ ...form, sqft: v }); setErrors({ ...errors, sqft: "" }); }}
                      options={SQFT_OPTIONS}
                      placeholder="Select approximate area"
                      hasError={!!errors.sqft}
                    />
                    {errors.sqft && <p className="text-[0.78rem] text-red-500 mt-1.5">{errors.sqft}</p>}
                  </div>
                </div>

                <div>
                  <label className={label}>Project Details</label>
                  <textarea
                    rows={4}
                    placeholder="ISO classification requirement, product type, regulatory authority, timeline…"
                    value={form.projectDetails}
                    onChange={(e) => setForm({ ...form, projectDetails: e.target.value })}
                    className={`${fi()} resize-none`}
                  />
                </div>

                <AnimatePresence>
                  {submitError && (
                    <motion.div
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-[0.88rem] text-red-700"
                      role="alert"
                    >
                      {submitError}
                    </motion.div>
                  )}
                </AnimatePresence>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full rounded-xl bg-[#C4161C] hover:bg-[#A31217] px-6 py-4 text-[0.97rem] font-bold text-white transition-[background-color,transform,box-shadow] duration-150 active:scale-[0.96] disabled:cursor-wait disabled:opacity-70 flex items-center justify-center gap-2.5 shadow-[0_4px_16px_rgba(196,22,28,0.35)] hover:shadow-[0_8px_24px_rgba(196,22,28,0.45)]"
                >
                  {submitting ? "Submitting…" : (
                    <>
                      Request Feasibility Assessment
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M22 2L11 13M22 2L15 22l-4-9-9-4 19-7z" />
                      </svg>
                    </>
                  )}
                </button>

                <p className="text-center text-gray-400 text-[0.78rem]">
                  No spam. No sales calls. A Mekark engineer responds personally.
                </p>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default CTAFormSection;
