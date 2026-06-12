"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

interface FormData {
  name: string;
  phone: string;
  email: string;
  projectType: string;
  location: string;
  sqft: string;
  message: string;
}

interface Errors {
  name?: string;
  phone?: string;
  sqft?: string;
}

interface EnquiryFormProps {
  id?: string;
}

const PROJECT_TYPES = [
  "Multi Storey Steel Building",
  "Warehouse",
  "Factories / Industries",
  "Institution",
  "Solar",
  "Space Frame Structures",
];

const SQFT_OPTIONS = [
  { label: "10,000 – 20,000 Sq.ft", value: "10,000 – 20,000 sq. ft." },
  { label: "20,000 – 30,000 Sq.ft", value: "20,000 – 30,000 sq. ft." },
  { label: "30,000 – 40,000 Sq.ft", value: "30,000 – 40,000 sq. ft." },
  { label: "40,000 – 50,000 Sq.ft", value: "40,000 – 50,000 sq. ft." },
  { label: "Above 50,000 Sq.ft", value: "Above 50,000 sq. ft." },
];

function inputCls(hasError = false) {
  return [
    "w-full rounded-xl border-[1.5px] text-[0.88rem] text-black",
    "placeholder:text-black/30 px-4 py-3.5",
    "transition-[border-color,background-color,box-shadow] duration-150",
    "focus:bg-white focus:border-[#C4161C] focus:ring-4 focus:ring-[rgba(196,22,28,0.07)] focus:outline-none",
    "disabled:opacity-60",
    hasError
      ? "bg-[rgba(196,22,28,0.05)] border-[#C4161C]/40"
      : "bg-[#F7F7F9] border-transparent",
  ].join(" ");
}

function dropdownTriggerCls(hasValue: boolean, hasError = false) {
  return [
    "w-full rounded-xl border-[1.5px] text-[0.88rem]",
    "px-4 py-3.5 flex items-center justify-between text-left",
    "transition-[border-color,background-color] duration-150",
    "focus:bg-white focus:border-[#C4161C] focus:ring-4 focus:ring-[rgba(196,22,28,0.07)] focus:outline-none",
    hasError
      ? "bg-[rgba(196,22,28,0.05)] border-[#C4161C]/40"
      : "bg-[#F7F7F9] border-transparent",
    hasValue ? "text-black" : "text-black/30",
  ].join(" ");
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[0.67rem] font-bold tracking-[0.14em] uppercase text-black/40 mb-2">
      {children}
    </p>
  );
}

function ErrorMsg({ msg }: { msg?: string }) {
  return (
    <AnimatePresence>
      {msg && (
        <motion.p
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -4 }}
          transition={{ type: "spring", stiffness: 300, damping: 28 }}
          className="text-[0.72rem] text-[#C4161C] mt-1.5 font-medium"
        >
          {msg}
        </motion.p>
      )}
    </AnimatePresence>
  );
}

function Chevron({ open }: { open: boolean }) {
  return (
    <motion.svg
      animate={{ rotate: open ? 180 : 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
      width="16" height="16" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      className="shrink-0 text-black/35"
    >
      <polyline points="6 9 12 15 18 9" />
    </motion.svg>
  );
}

function DropdownPanel({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -6, filter: "blur(6px)", scale: 0.98 }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }}
      exit={{ opacity: 0, y: -6, filter: "blur(6px)", scale: 0.98 }}
      transition={{ type: "spring", stiffness: 280, damping: 26 }}
      className="absolute z-20 top-full mt-1.5 left-0 right-0 bg-white rounded-xl border border-black/[0.08] shadow-[0_12px_40px_rgba(0,0,0,0.12),0_0_0_1px_rgba(0,0,0,0.04)] overflow-hidden"
    >
      {children}
    </motion.div>
  );
}

function DropdownItem({
  label, selected, onClick, delay,
}: { label: string; selected: boolean; onClick: () => void; delay: number }) {
  return (
    <motion.button
      type="button"
      initial={{ opacity: 0, x: -4 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ type: "spring", stiffness: 320, damping: 28, delay }}
      onClick={onClick}
      className={[
        "w-full flex items-center justify-between px-4 py-3 text-left text-[0.88rem]",
        "transition-colors duration-100 border-b border-black/[0.05] last:border-b-0",
        selected
          ? "bg-[rgba(196,22,28,0.06)] text-[#C4161C] font-semibold"
          : "text-black/65 hover:bg-black/[0.03] hover:text-black",
      ].join(" ")}
    >
      <span>{label}</span>
      {selected && (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#C4161C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="20 6 9 17 4 12" />
        </svg>
      )}
    </motion.button>
  );
}

export default function EnquiryForm({ id = "intake" }: EnquiryFormProps) {
  const [form, setForm] = useState<FormData>({
    name: "", phone: "", email: "",
    projectType: "", location: "", sqft: "", message: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [sqftOpen, setSqftOpen] = useState(false);
  const [typeOpen, setTypeOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState("");

  function set<K extends keyof FormData>(key: K, val: string) {
    setForm(f => ({ ...f, [key]: val }));
    if (key in errors) setErrors(e => ({ ...e, [key]: undefined }));
  }

  function validate(): Errors {
    const e: Errors = {};
    if (!form.name.trim()) e.name = "Full name is required";
    const digits = form.phone.replace(/\D/g, "");
    if (!digits || !/^[6-9]\d{9}$/.test(digits))
      e.phone = "Enter a valid 10-digit Indian mobile number";
    if (!form.sqft) e.sqft = "Please select a project area";
    return e;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setErrors({});
    setLoading(true);
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
          company: "",
          projectType: form.projectType || "Multi Storey Steel Building",
          sqft: form.sqft,
          projectDetails: form.message.trim(),
        }),
      });

      if (res.ok) {
        window.location.assign("https://www.mekark.com/thank-you");
      } else {
        const data = await res.json().catch(() => ({}));
        setServerError(data.error || "Something went wrong. Please try again.");
      }
    } catch {
      setServerError("Network error. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  }

  const selectedSqftLabel = SQFT_OPTIONS.find(o => o.value === form.sqft)?.label;

  return (
    <div
      id={id}
      className="bg-white rounded-2xl shadow-[0_16px_60px_rgba(0,0,0,0.14),0_0_0_1px_rgba(0,0,0,0.06)] overflow-hidden w-full"
    >
      {/* ── Header ── */}
      <div className="bg-[#C4161C] px-7 py-7 relative overflow-hidden">
        {/* Dot grid */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.18) 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        />
        {/* Structural frame watermark */}
        <div className="absolute -right-8 -top-8 w-48 h-48 opacity-[0.06] pointer-events-none">
          <svg viewBox="0 0 120 120" fill="none" stroke="white" strokeWidth="1.5">
            <line x1="0" y1="0" x2="0" y2="120" />
            <line x1="60" y1="0" x2="60" y2="120" />
            <line x1="120" y1="0" x2="120" y2="120" />
            <line x1="0" y1="0" x2="120" y2="0" />
            <line x1="0" y1="60" x2="120" y2="60" />
            <line x1="0" y1="120" x2="120" y2="120" />
            <line x1="0" y1="0" x2="60" y2="60" /><line x1="60" y1="0" x2="0" y2="60" />
            <line x1="60" y1="60" x2="120" y2="120" /><line x1="120" y1="60" x2="60" y2="120" />
          </svg>
        </div>

        <div className="relative">
          {/* Trust pills */}
          <div className="flex items-center flex-wrap gap-1.5 mb-5">
            {["ISO 9001:2015", "500+ Projects", "No Obligation"].map(tag => (
              <span
                key={tag}
                className="inline-flex items-center bg-white/15 rounded-full px-2.5 py-0.5 text-white/80 text-[0.6rem] font-bold uppercase tracking-[0.1em]"
              >
                {tag}
              </span>
            ))}
          </div>

          <h3 className="text-[1.55rem] font-extrabold text-white leading-[1.15] tracking-[-0.02em] mb-2">
            Get Your Free<br />Structural Quote
          </h3>
          <p className="text-white/55 text-[0.8rem] leading-relaxed">
            A structural engineer responds within 4 business hours.
          </p>
        </div>
      </div>

      {/* ── Form body ── */}
      <div className="px-6 py-6">
        <form onSubmit={handleSubmit} noValidate>
          <div className="flex flex-col gap-4">

            {/* Name + Phone */}
            <div className="grid sm:grid-cols-2 gap-3">
              <div>
                <Label>Name <span className="text-[#C4161C]">*</span></Label>
                <input
                  type="text"
                  placeholder="Your full name"
                  value={form.name}
                  onChange={e => set("name", e.target.value)}
                  className={inputCls(!!errors.name)}
                />
                <ErrorMsg msg={errors.name} />
              </div>
              <div>
                <Label>Phone <span className="text-[#C4161C]">*</span></Label>
                <input
                  type="tel"
                  placeholder="9XXXXXXXXX"
                  maxLength={10}
                  value={form.phone}
                  onChange={e => set("phone", e.target.value.replace(/\D/g, "").slice(0, 10))}
                  className={inputCls(!!errors.phone)}
                />
                <ErrorMsg msg={errors.phone} />
              </div>
            </div>

            {/* Email + City */}
            <div className="grid sm:grid-cols-2 gap-3">
              <div>
                <Label>Email</Label>
                <input
                  type="email"
                  placeholder="you@company.com"
                  value={form.email}
                  onChange={e => set("email", e.target.value)}
                  className={inputCls()}
                />
              </div>
              <div>
                <Label>City / District</Label>
                <input
                  type="text"
                  placeholder="Project location"
                  value={form.location}
                  onChange={e => set("location", e.target.value)}
                  className={inputCls()}
                />
              </div>
            </div>

            {/* Project Type */}
            <div className="relative">
              <Label>Project Type</Label>
              <button
                type="button"
                onClick={() => setTypeOpen(o => !o)}
                className={dropdownTriggerCls(!!form.projectType)}
              >
                <span>{form.projectType || "Select project type"}</span>
                <Chevron open={typeOpen} />
              </button>
              {typeOpen && (
                <div className="fixed inset-0 z-10" onClick={() => setTypeOpen(false)} aria-hidden />
              )}
              <AnimatePresence>
                {typeOpen && (
                  <DropdownPanel>
                    {PROJECT_TYPES.map((type, i) => (
                      <DropdownItem
                        key={type}
                        label={type}
                        selected={form.projectType === type}
                        delay={i * 0.03}
                        onClick={() => { set("projectType", type); setTypeOpen(false); }}
                      />
                    ))}
                  </DropdownPanel>
                )}
              </AnimatePresence>
            </div>

            {/* Project Area */}
            <div className="relative">
              <Label>Project Area <span className="text-[#C4161C]">*</span></Label>
              <button
                type="button"
                onClick={() => setSqftOpen(o => !o)}
                className={dropdownTriggerCls(!!form.sqft, !!errors.sqft)}
              >
                <span>{selectedSqftLabel ?? "Select area range"}</span>
                <Chevron open={sqftOpen} />
              </button>
              {sqftOpen && (
                <div className="fixed inset-0 z-10" onClick={() => setSqftOpen(false)} aria-hidden />
              )}
              <AnimatePresence>
                {sqftOpen && (
                  <DropdownPanel>
                    {SQFT_OPTIONS.map((opt, i) => (
                      <DropdownItem
                        key={opt.value}
                        label={opt.label}
                        selected={form.sqft === opt.value}
                        delay={i * 0.03}
                        onClick={() => { set("sqft", opt.value); setSqftOpen(false); }}
                      />
                    ))}
                  </DropdownPanel>
                )}
              </AnimatePresence>
              <ErrorMsg msg={errors.sqft} />
            </div>

            {/* Brief Details */}
            <div>
              <Label>
                Brief Details
                <span className="ml-1 text-black/25 font-medium normal-case tracking-normal text-[0.72rem]">(optional)</span>
              </Label>
              <textarea
                placeholder="Building type, number of floors, timeline..."
                rows={3}
                value={form.message}
                onChange={e => set("message", e.target.value)}
                className={`${inputCls()} resize-none`}
              />
            </div>

            {/* Server error */}
            <AnimatePresence>
              {serverError && (
                <motion.div
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ type: "spring", stiffness: 300, damping: 28 }}
                  className="rounded-xl border border-[#C4161C]/20 bg-[rgba(196,22,28,0.05)] px-4 py-3 text-[0.82rem] text-[#C4161C] font-medium"
                  role="alert"
                >
                  {serverError}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-xl font-extrabold text-white text-[0.95rem] py-4 px-6 bg-[#C4161C] hover:bg-[#A31217] transition-[background-color,box-shadow,transform] duration-150 ease-out active:scale-[0.97] disabled:opacity-70 disabled:cursor-wait shadow-[0_4px_24px_rgba(196,22,28,0.4),inset_0_1px_0_rgba(255,255,255,0.15)] hover:shadow-[0_6px_32px_rgba(196,22,28,0.5),inset_0_1px_0_rgba(255,255,255,0.15)]"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <motion.span
                    className="inline-flex gap-1"
                    initial="hidden"
                    animate="visible"
                    variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
                  >
                    {[0, 1, 2].map(i => (
                      <motion.span
                        key={i}
                        className="w-1.5 h-1.5 rounded-full bg-white inline-block"
                        variants={{
                          hidden: { opacity: 0.3, y: 0 },
                          visible: {
                            opacity: [0.3, 1, 0.3], y: [0, -4, 0],
                            transition: { duration: 0.7, repeat: Infinity, delay: i * 0.15 },
                          },
                        }}
                      />
                    ))}
                  </motion.span>
                  Submitting…
                </span>
              ) : (
                <span className="flex items-center justify-center gap-2">
                  Get My Free Quote
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                  </svg>
                </span>
              )}
            </button>

            <p className="text-center text-[0.68rem] text-black/30 leading-relaxed">
              No spam, no commitment · Your details are kept confidential
            </p>
          </div>
        </form>

        {/* Trust strip */}
        <div className="mt-5 pt-4 border-t border-black/[0.06]">
          <div className="flex items-center justify-center gap-3 text-[0.7rem] text-black/40 font-semibold flex-wrap gap-y-1">
            <span className="flex items-center gap-1.5">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
              Quote in 48h
            </span>
            <span className="w-px h-3 bg-black/15 flex-shrink-0" />
            <span className="flex items-center gap-1.5">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
              Free site visit
            </span>
            <span className="w-px h-3 bg-black/15 flex-shrink-0" />
            <span className="flex items-center gap-1.5">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
              5-yr warranty
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
