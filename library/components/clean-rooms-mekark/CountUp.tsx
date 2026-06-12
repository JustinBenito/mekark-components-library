"use client";
import { useRef, useEffect, useState } from "react";
import { useInView } from "motion/react";

interface CountUpProps {
  to: number;
  suffix?: string;
  prefix?: string;
  delay?: number;
  duration?: number;
  className?: string;
  locale?: string;
}

export function CountUp({
  to,
  suffix = "",
  prefix = "",
  delay = 0,
  duration = 1800,
  className = "",
  locale = "en-IN",
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start: number | null = null;
    const timer = setTimeout(() => {
      const frame = (ts: number) => {
        if (!start) start = ts;
        const progress = Math.min((ts - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setValue(Math.floor(eased * to));
        if (progress < 1) requestAnimationFrame(frame);
        else setValue(to);
      };
      requestAnimationFrame(frame);
    }, delay);
    return () => clearTimeout(timer);
  }, [inView, to, delay, duration]);

  return (
    <span ref={ref} className={`tabular-nums ${className}`}>
      {prefix}
      {value.toLocaleString(locale)}
      {suffix}
    </span>
  );
}
