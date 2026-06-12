"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, animate } from "motion/react";

interface Props {
  to: number;
  suffix?: string;
  prefix?: string;
  delay?: number;
  duration?: number;
}

export default function CountUp({ to, suffix = "", prefix = "", delay = 0, duration = 1800 }: Props) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  useEffect(() => {
    if (!isInView) return;

    const timer = setTimeout(() => {
      const controls = animate(0, to, {
        duration: duration / 1000,
        ease: [0, 0, 0.2, 1] as [number, number, number, number],
        onUpdate: (v) => setValue(Math.floor(v)),
      });
      return () => controls.stop();
    }, delay);

    return () => clearTimeout(timer);
  }, [isInView, to, delay, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}{value.toLocaleString()}{suffix}
    </span>
  );
}
