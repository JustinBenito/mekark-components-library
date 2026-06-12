"use client";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

const SQFT_OPTIONS = [
  "10,000 – 20,000 sq. ft.",
  "20,000 – 30,000 sq. ft.",
  "30,000 – 40,000 sq. ft.",
  "40,000 – 50,000 sq. ft.",
  "50,000+ sq. ft.",
];

const POINTS = [
  "Free BOQ-based quotation within 24 hours",
  "Dedicated project manager from day one",
  "Pan-India delivery capability",
  "2-year structural warranty on all structures",
];

function CustomSelect({
  value, onChange, options, placeholder, hasError,
}: {
  value: string; onChange: (v: string) => void; options: string[]; placeholder: string; hasError: boolean;
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
        className={`w-full flex items-center justify-between rounded-lg border px-4 py-3 text-[0.92rem] outline-none transition-[border-color,box-shadow] duration-150 text-left
          ${hasError ? "border-red-300 bg-red-50" : "border-gray-200 bg-gray-50"}
          ${open ? "border-[#C4161C] ring-2 ring-[#C4161C]/10" : ""}
        `}
      >
        <span className={value ? "text-gray-900" : "text-gray-400"}>{value || placeholder}</span>
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
            initial={{ opacity: 0, y: -6, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.98 }}
            transition={{ duration: 0.18, ease: [0.25, 1, 0.5, 1] }}
            className="absolute z-50 top-full left-0 right-0 mt-1.5 rounded-xl border border-gray-200 bg-white overflow-hidden"
            style={{ boxShadow: "0 12px 32px rgba(0,0,0,0.12)" }}
          >
            {options.map((opt, i) => (
              <button
                key={opt}
                type="button"
                onClick={() => { onChange(opt); setOpen(false); }}
                className={`w-full text-left px-4 py-3 text-[0.9rem] transition-colors duration-100 flex items-center gap-3
                  ${value === opt
                    ? "bg-[#C4161C]/6 text-[#C4161C] font-semibold"
                    : "text-gray-700 hover:bg-gray-50"
                  }`}
              >
                {value === opt && (
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" className="shrink-0" aria-hidden="true">
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                )}
                {value !== opt && <span className="w-3.5 shrink-0" />}
                {opt}
              </button>
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

  const fi = "w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-[0.92rem] text-gray-900 outline-none transition-[border-color,box-shadow] duration-150 placeholder:text-gray-400 focus:border-[#C4161C] focus:ring-2 focus:ring-[#C4161C]/10 disabled:cursor-not-allowed disabled:opacity-75";
  const fiErr = "border-red-300 bg-red-50 focus:border-red-400 focus:ring-red-100";
  const labelCls = "block text-[0.78rem] font-semibold text-gray-500 mb-1.5";

  return (
    <section id="contact" className="relative bg-white py-16 md:py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-350 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
          className="relative rounded-[28px] overflow-hidden"
          style={{ boxShadow: "0 40px 80px rgba(0,0,0,0.18), 0 0 0 1px rgba(0,0,0,0.06)" }}
        >
          {/* Background image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/bundle/Home Page Images/eot cranes.webp')" }}
          />
          {/* Overlay */}
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(105deg, rgba(10,10,10,0.97) 0%, rgba(10,10,10,0.93) 35%, rgba(10,10,10,0.72) 58%, rgba(10,10,10,0.3) 78%, transparent 100%)",
            }}
          />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[1fr_1.15fr] gap-0 p-8 md:p-12 lg:p-16">

            {/* Left — copy */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.65, ease: [0.25, 1, 0.5, 1] }}
              className="flex flex-col justify-center pr-0 lg:pr-12 pb-10 lg:pb-0"
            >
              <p className="text-white/50 font-bold uppercase text-[0.72rem] mb-4">Get a Free Estimate</p>
              <h2
                className="font-black text-white leading-[1.06] tracking-tight text-balance"
                style={{ fontSize: "clamp(2rem, 3.2vw, 3rem)" }}
              >
                Turn your plans into{" "}
                <span className="text-[#C4161C] italic">structural reality.</span>
              </h2>
              <p className="mt-5 text-white/60 text-[0.95rem] leading-[1.75] text-pretty max-w-sm">
                Whether you need an industrial warehouse, a manufacturing plant, or a complete turnkey facility — Mekark delivers engineered excellence across India.
              </p>

              <ul className="mt-8 space-y-3">
                {POINTS.map((pt, i) => (
                  <motion.li
                    key={pt}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 + i * 0.07 }}
                    className="flex items-center gap-3 text-white/80 text-[0.9rem]"
                  >
                    <span className="shrink-0 w-5 h-5 rounded-full bg-[#C4161C]/25 border border-[#C4161C]/40 flex items-center justify-center">
                      <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#C4161C" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    {pt}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Right — white form card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.65, delay: 0.1, ease: [0.25, 1, 0.5, 1] }}
            >
              <div
                className="bg-white rounded-2xl p-7"
                style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.18), 0 0 0 1px rgba(0,0,0,0.04)" }}
              >
                <div className="mb-6">
                  <h3 className="font-bold text-gray-900 text-[1.15rem] leading-tight">Request a Free Estimate</h3>
                  <p className="text-gray-400 text-[0.83rem] mt-1">We respond within 24 hours — no obligation.</p>
                </div>

                <form onSubmit={handleSubmit} noValidate className="space-y-4">

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className={labelCls}>Name *</label>
                      <input type="text" placeholder="Your full name" value={form.name}
                        onChange={(e) => { setForm({ ...form, name: e.target.value }); setErrors({ ...errors, name: "" }); }}
                        className={`${fi} ${errors.name ? fiErr : ""}`} />
                      {errors.name && <p className="text-[0.75rem] text-red-500 mt-1">{errors.name}</p>}
                    </div>
                    <div>
                      <label className={labelCls}>Email *</label>
                      <input type="email" placeholder="you@company.com" value={form.email}
                        onChange={(e) => { setForm({ ...form, email: e.target.value }); setErrors({ ...errors, email: "" }); }}
                        className={`${fi} ${errors.email ? fiErr : ""}`} />
                      {errors.email && <p className="text-[0.75rem] text-red-500 mt-1">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className={labelCls}>Phone *</label>
                      <input type="tel" placeholder="+91 98XXX XXXXX" value={form.phone}
                        onChange={(e) => { setForm({ ...form, phone: e.target.value }); setErrors({ ...errors, phone: "" }); }}
                        className={`${fi} ${errors.phone ? fiErr : ""}`} />
                      {errors.phone && <p className="text-[0.75rem] text-red-500 mt-1">{errors.phone}</p>}
                    </div>
                    <div>
                      <label className={labelCls}>Company</label>
                      <input type="text" placeholder="Your company name" value={form.company}
                        onChange={(e) => setForm({ ...form, company: e.target.value })}
                        className={fi} />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className={labelCls}>Location</label>
                      <input type="text" placeholder="City / District" value={form.location}
                        onChange={(e) => setForm({ ...form, location: e.target.value })}
                        className={fi} />
                    </div>
                    <div>
                      <label className={labelCls}>Project Area *</label>
                      <CustomSelect
                        value={form.sqft}
                        onChange={(v) => { setForm({ ...form, sqft: v }); setErrors({ ...errors, sqft: "" }); }}
                        options={SQFT_OPTIONS}
                        placeholder="Select area"
                        hasError={!!errors.sqft}
                      />
                      {errors.sqft && <p className="text-[0.75rem] text-red-500 mt-1">{errors.sqft}</p>}
                    </div>
                  </div>

                  <div>
                    <label className={labelCls}>Project Details</label>
                    <textarea rows={3} placeholder="Type of building, usage, timeline…"
                      value={form.projectDetails}
                      onChange={(e) => setForm({ ...form, projectDetails: e.target.value })}
                      className={`${fi} resize-none`} />
                  </div>

                  <AnimatePresence>
                    {submitError && (
                      <motion.div
                        initial={{ opacity: 0, y: -6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-[0.85rem] text-red-600"
                        role="alert"
                      >
                        {submitError}
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full rounded-xl bg-[#C4161C] hover:bg-[#A31217] px-6 py-3.5 text-[0.95rem] font-bold text-white transition-[background-color,transform,box-shadow] duration-200 hover:-translate-y-px hover:shadow-[0_8px_24px_rgba(196,22,28,0.35)] active:scale-[0.96] disabled:cursor-wait disabled:opacity-75 flex items-center justify-center gap-2.5"
                  >
                    {submitting ? "Submitting…" : (
                      <>
                        Get Free Structural Estimate
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </>
                    )}
                  </button>

                </form>
              </div>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
