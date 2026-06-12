"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "motion/react";

interface CountUpProps {
  to: number;
  from?: number;
  prefix?: string;
  suffix?: string;
  delay?: number;
  decimals?: number;
}

export default function CountUp({
  to,
  from = 0,
  prefix = "",
  suffix = "",
  delay = 0,
  decimals = 0,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });
  const [value, setValue] = useState(from);

  useEffect(() => {
    if (!inView) return;
    let start: number | null = null;
    const duration = 1800;
    const timer = setTimeout(() => {
      const tick = (ts: number) => {
        if (!start) start = ts;
        const progress = Math.min((ts - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = from + eased * (to - from);
        setValue(decimals > 0 ? parseFloat(current.toFixed(decimals)) : Math.floor(current));
        if (progress < 1) requestAnimationFrame(tick);
        else setValue(to);
      };
      requestAnimationFrame(tick);
    }, delay);
    return () => clearTimeout(timer);
  }, [inView, to, from, delay, decimals]);

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}{decimals > 0 ? value.toFixed(decimals) : value.toLocaleString()}{suffix}
    </span>
  );
}
