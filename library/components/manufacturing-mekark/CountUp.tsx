"use client";

import { useRef, useEffect, useState } from "react";
import { useInView } from "motion/react";

interface CountUpProps {
  to: number;
  suffix?: string;
  prefix?: string;
  delay?: number;
  duration?: number;
}

export function CountUp({
  to,
  suffix = "",
  prefix = "",
  delay = 0,
  duration = 1800,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let rafId: number;
    const timer = setTimeout(() => {
      let start: number | null = null;
      rafId = requestAnimationFrame(function tick(ts) {
        if (!start) start = ts;
        const progress = Math.min((ts - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setValue(Math.floor(eased * to));
        if (progress < 1) {
          rafId = requestAnimationFrame(tick);
        } else {
          setValue(to);
        }
      });
    }, delay);
    return () => {
      clearTimeout(timer);
      cancelAnimationFrame(rafId);
    };
  }, [isInView, to, delay, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      {value.toLocaleString()}
      {suffix}
    </span>
  );
}
