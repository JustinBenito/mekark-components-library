"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { LockIcon } from "@/components/cold-mekark/icons";
import CountUp from "@/components/cold-mekark/CountUp";

const STORAGE_TYPES = [
  "Blast Freezer (-40°C to -20°C)",
  "Deep Freeze Cold Room (-20°C to 0°C)",
  "Chilled Cold Room (0°C to 10°C)",
  "Controlled Atmosphere Storage",
  "Pharmaceutical Cold Storage",
  "Multi-Temperature Warehouse",
  "Not Sure — Need Consultation",
];

const AREA_OPTIONS = [
  "Below 2,000 Sq.Ft.",
  "2,000 – 5,000 Sq.Ft.",
  "5,000 – 15,000 Sq.Ft.",
  "15,000 – 50,000 Sq.Ft.",
  "Above 50,000 Sq.Ft.",
];

const PITCH_STATS = [
  { to: 200, suffix: "+", label: "Projects Completed" },
  { to: 120, suffix: " Days", label: "Delivery Commitment" },
  { to: 15,  suffix: "+", label: "Years Experience" },
  { to: 35,  suffix: "%", label: "Max Capital Subsidy" },
];

const TRUST_BULLETS = [
  "Free site assessment — no commitment",
  "Fixed price, zero hidden add-ons",
  "Engineers respond within 2 hours",
];

type Fields = {
  name: string;
  phone: string;
  company: string;
  storageType: string;
  area: string;
  location: string;
};

type Errors = Partial<Record<keyof Fields, string>>;

function useCountdown(targetDate: Date) {
  const [remaining, setRemaining] = useState(0);
  useEffect(() => {
    const update = () => setRemaining(Math.max(0, targetDate.getTime() - Date.now()));
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, [targetDate]);
  const d = Math.floor(remaining / 86400000);
  const h = Math.floor((remaining % 86400000) / 3600000);
  const m = Math.floor((remaining % 3600000) / 60000);
  const s = Math.floor((remaining % 60000) / 1000);
  return { d, h, m, s };
}

const DEADLINE = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);

function ErrorPad({ k, errors, children }: { k: keyof Fields; errors: Errors; children: React.ReactNode }) {
  return (
    <div>
      {children}
      <AnimatePresence>
        {errors[k] && (
          <motion.p
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ type: "spring", stiffness: 280, damping: 22 }}
            className="mt-1.5 text-[0.78rem] text-red-400 font-medium"
          >
            {errors[k]}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}

function CustomSelect({
  value, onChange, options, placeholder, disabled,
}: {
  value: string; onChange: (v: string) => void; options: string[]; placeholder: string; disabled?: boolean;
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
        onClick={() => !disabled && setOpen((o) => !o)}
        disabled={disabled}
        className="w-full flex items-center justify-between rounded-xl border border-black/[0.12] bg-[#fafafa] px-4 py-3.5 text-[0.93rem] outline-none transition-[border-color,box-shadow,background-color] disabled:opacity-60 cursor-pointer"
        style={{
          borderColor: open ? "#c4161c" : undefined,
          backgroundColor: open ? "white" : undefined,
          boxShadow: open ? "0 0 0 4px rgba(196,22,28,0.08)" : undefined,
        }}
      >
        <span className={value ? "text-[#111]" : "text-[#bbb]"}>{value || placeholder}</span>
        <motion.svg
          width="16" height="16" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 24 }}
          className="shrink-0 text-[#999]"
        >
          <path d="M6 9l6 6 6-6" />
        </motion.svg>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -6, filter: "blur(8px)", scale: 0.98 }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }}
            exit={{ opacity: 0, y: -6, filter: "blur(8px)", scale: 0.98 }}
            transition={{ type: "spring", stiffness: 320, damping: 26 }}
            className="absolute top-full mt-1.5 w-full z-50 bg-white rounded-xl border border-black/[0.08] shadow-[0_8px_32px_rgba(0,0,0,0.12),0_0_0_1px_rgba(0,0,0,0.04)] overflow-hidden"
          >
            {options.map((opt, i) => (
              <motion.button
                key={opt}
                type="button"
                initial={{ opacity: 0, x: -4 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.025, type: "spring", stiffness: 300, damping: 24 }}
                onClick={() => { onChange(opt); setOpen(false); }}
                className={`w-full text-left px-4 py-2.5 text-[0.88rem] transition-colors duration-100 border-b border-black/[0.04] last:border-0 ${
                  value === opt
                    ? "bg-[#fef2f2] text-[#c4161c] font-semibold"
                    : "text-[#333] hover:bg-[#f7f7f7]"
                }`}
              >
                {opt}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

const spring = { type: "spring" as const, stiffness: 55, damping: 18 };

export default function IntakeForm() {
  const [fields, setFields] = useState<Fields>({ name: "", phone: "", company: "", storageType: "", area: "", location: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [submitting, setSubmitting] = useState(false);
  const [apiError, setApiError] = useState("");
  const timer = useCountdown(DEADLINE);

  const set = (k: keyof Fields) => (v: string) => {
    setFields((f) => ({ ...f, [k]: v }));
    setErrors((e) => ({ ...e, [k]: undefined }));
  };

  const validate = (): Errors => {
    const e: Errors = {};
    if (!fields.name.trim()) e.name = "Full name is required";
    if (!/^\d{10,15}$/.test(fields.phone.replace(/\D/g, ""))) e.phone = "Enter a valid 10-digit mobile number";
    return e;
  };

  const submit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    const e = validate();
    if (Object.keys(e).length) { setErrors(e); return; }
    setSubmitting(true);
    setApiError("");
    try {
      const res = await fetch("/api/enquiry-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: fields.name.trim(), phone: fields.phone.trim(), company: fields.company.trim(),
          storageType: fields.storageType, sqft: fields.area, city: fields.location.trim(),
          projectType: "Cold Storage", email: "", projectDetails: "",
        }),
      });
      if (!res.ok) throw new Error("Server error");
      window.location.assign("https://www.mekark.com/thank-you");
    } catch {
      setApiError("Something went wrong. Please try again or WhatsApp us directly.");
      setSubmitting(false);
    }
  };

  const fi = "w-full rounded-xl border border-black/[0.12] bg-[#fafafa] px-4 py-3.5 text-[0.93rem] text-[#111] placeholder:text-[#bbb] outline-none transition-[border-color,box-shadow,background-color] focus:border-[#c4161c] focus:bg-white focus:ring-4 focus:ring-[rgba(196,22,28,0.08)] disabled:opacity-60";
  const fe = "border-red-400 bg-red-50 focus:border-red-400 focus:ring-red-100";
  const lbl = "block text-[0.68rem] font-extrabold tracking-[0.18em] uppercase text-[#555] mb-1.5";

  return (
    <section id="intake" className="w-full bg-white py-16 md:py-24 px-6">
      <div className="max-w-[1160px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_460px] gap-10 lg:gap-16 items-start">

          {/* Left — pitch (shows below form on mobile, left on desktop) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={spring}
            className="order-2 lg:order-1 lg:sticky lg:top-10"
          >
            <p className="text-[0.7rem] font-extrabold tracking-[0.24em] uppercase text-[#c4161c] mb-4">
              Free Consultation
            </p>
            <h2 className="text-[2rem] md:text-[2.6rem] font-extrabold text-[#111] text-balance leading-[1.12] mb-5">
              Get a Fixed-Price Quote<br className="hidden md:block" /> in 48 Hours
            </h2>
            <p className="text-[#777] text-[0.95rem] leading-[1.8] mb-10 text-pretty max-w-[420px]">
              Tell us what you need. Our engineers assess your site and deliver a detailed, no-surprises quotation — completely free.
            </p>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-3 mb-10">
              {PITCH_STATS.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ ...spring, delay: i * 0.07 }}
                  className="bg-[#f7f7f7] border border-black/[0.07] rounded-xl px-4 py-4"
                >
                  <div className="text-[#111] font-extrabold text-[1.5rem] tabular-nums leading-none mb-1.5">
                    <CountUp to={s.to} suffix={s.suffix} delay={300 + i * 80} />
                  </div>
                  <div className="text-[#888] text-[0.78rem] font-medium">{s.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Project image — hidden on mobile to keep pitch section compact */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ ...spring, delay: 0.3 }}
              className="relative h-52 rounded-2xl overflow-hidden hidden lg:block"
            >
              <Image
                src="/cold-mekark/bundle/Our Completed Projects/DJI_20250103155013_0133_D copy.webp"
                alt="Mekark completed cold storage project"
                fill
                className="object-cover outline-1 -outline-offset-1 outline-black/10"
                sizes="(max-width:1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-white font-bold text-[0.88rem]">One of 200+ completed facilities</p>
                <p className="text-white/50 text-[0.78rem] mt-0.5">Pan-India delivery · In-house manufacturing · ISO certified</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right — form card (shows first on mobile) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ ...spring, delay: 0.1 }}
            className="order-1 lg:order-2"
          >
            <div className="rounded-2xl shadow-[0_0_0_1px_rgba(0,0,0,0.06),0_12px_48px_rgba(0,0,0,0.1)]">

              {/* Card header */}
              <div className="px-6 pt-7 pb-6 md:px-8 border-b border-black/[0.06] rounded-t-2xl bg-white">
                <div className="flex flex-col gap-4 mb-5 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <span className="inline-block text-[0.65rem] font-extrabold tracking-[0.2em] uppercase text-[#c4161c] bg-[#fef2f2] px-3 py-1 rounded-full mb-3">
                      Free Consultation
                    </span>
                    <h3 className="text-[#111] font-extrabold text-[1.2rem] leading-tight mb-1">
                      Get Your Cold Storage Quote
                    </h3>
                    <p className="text-[#999] text-[0.82rem]">Our engineers respond within 2 hours.</p>
                  </div>

                  {/* Countdown */}
                  <div className="shrink-0">
                    <p className="text-[#bbb] text-[0.6rem] font-extrabold tracking-[0.15em] uppercase mb-2 sm:text-right">Offer expires</p>
                    <div className="flex items-start gap-1">
                      {[{ v: timer.d, u: "Days" }, { v: timer.h, u: "Hrs" }, { v: timer.m, u: "Min" }, { v: timer.s, u: "Sec" }].map(({ v, u }, i) => (
                        <div key={u} className="flex items-start gap-1">
                          <div className="flex flex-col items-center">
                            <div className="relative w-11 h-11 bg-[#111] rounded-xl overflow-hidden flex items-center justify-center shadow-[0_2px_8px_rgba(0,0,0,0.12)]">
                              <div className="absolute inset-x-0 top-1/2 h-px bg-white/10 z-10" />
                              <span className="relative z-20 text-white font-extrabold text-[1rem] tabular-nums">
                                {String(v).padStart(2, "0")}
                              </span>
                            </div>
                            <span className="text-[#bbb] text-[0.56rem] font-bold uppercase tracking-wide mt-1">{u}</span>
                          </div>
                          {i < 3 && <span className="text-[#ccc] font-bold text-[1rem] mt-2 leading-none">:</span>}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Trust bullets */}
                <div className="flex flex-wrap gap-x-5 gap-y-1.5">
                  {TRUST_BULLETS.map((t) => (
                    <span key={t} className="flex items-center gap-1.5 text-[#777] text-[0.76rem]">
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#c4161c" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="shrink-0"><path d="M20 6L9 17l-5-5" /></svg>
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Form body */}
              <div className="bg-white px-6 py-7 md:px-8 rounded-b-2xl">
                <AnimatePresence>
                  {apiError && (
                    <motion.div
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ type: "spring", stiffness: 280, damping: 22 }}
                      role="alert"
                      className="mb-5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-[0.88rem] text-red-700"
                    >
                      {apiError}
                    </motion.div>
                  )}
                </AnimatePresence>

                <form onSubmit={submit} noValidate>
                  <div className="flex flex-col gap-4">

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <ErrorPad k="name" errors={errors}>
                        <label className={lbl}>Full Name *</label>
                        <input type="text" value={fields.name} onChange={(e) => set("name")(e.target.value)}
                          placeholder="Your full name" className={`${fi} ${errors.name ? fe : ""}`} disabled={submitting} />
                      </ErrorPad>
                      <ErrorPad k="phone" errors={errors}>
                        <label className={lbl}>Mobile Number *</label>
                        <input type="tel" value={fields.phone} onChange={(e) => set("phone")(e.target.value)}
                          placeholder="+91 98XXX XXXXX" className={`${fi} ${errors.phone ? fe : ""}`} disabled={submitting} />
                      </ErrorPad>
                    </div>

                    <div>
                      <label className={lbl}>Company / Organisation</label>
                      <input type="text" value={fields.company} onChange={(e) => set("company")(e.target.value)}
                        placeholder="Your company name (optional)" className={fi} disabled={submitting} />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className={lbl}>Storage Type</label>
                        <CustomSelect value={fields.storageType} onChange={set("storageType")}
                          options={STORAGE_TYPES} placeholder="Select type" disabled={submitting} />
                      </div>
                      <div>
                        <label className={lbl}>Approximate Area</label>
                        <CustomSelect value={fields.area} onChange={set("area")}
                          options={AREA_OPTIONS} placeholder="Select area" disabled={submitting} />
                      </div>
                    </div>

                    <div>
                      <label className={lbl}>Project Location</label>
                      <input type="text" value={fields.location} onChange={(e) => set("location")(e.target.value)}
                        placeholder="City / District" className={fi} disabled={submitting} />
                    </div>

                    <div className="mt-1">
                      <motion.button
                        type="submit"
                        disabled={submitting}
                        whileTap={{ scale: 0.96 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        className="w-full bg-[#c4161c] hover:bg-[#a31217] text-white font-extrabold text-[1rem] py-4 rounded-xl shadow-[0_4px_24px_rgba(196,22,28,0.35)] transition-[background-color] duration-150 disabled:opacity-70 disabled:cursor-wait flex items-center justify-center gap-2.5"
                      >
                        {submitting ? "Submitting…" : (
                          <>
                            Request Free Site Assessment
                            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                            </svg>
                          </>
                        )}
                      </motion.button>

                      <p className="flex items-center justify-center gap-1.5 text-[0.72rem] text-[#bbb] mt-3">
                        <LockIcon className="w-3 h-3 shrink-0" />
                        Your data is 100% secure. We never share your details.
                      </p>
                    </div>

                  </div>
                </form>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
