"use client";

import { useEffect, useState, useRef } from "react";

interface CountUpProps {
  end: number;
  duration?: number;
  suffix?: string;
  decimals?: number;
  flicker?: boolean;
}

export default function CountUp({ end, duration = 2000, suffix = "", decimals = 0, flicker = false }: CountUpProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      setCount(end);
      return;
    }

    let startTime: number | null = null;
    let animationFrameId: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      
      const percentage = Math.min(progress / duration, 1);
      
      if (percentage < 1) {
        if (flicker) {
          // Generate a random number up to the target scale for a hacking/flicker effect
          const max = Math.pow(10, Math.floor(end).toString().length) - 1;
          setCount(Math.random() * max);
        } else {
          // Normal easing
          const easeOut = 1 - Math.pow(2, -10 * percentage);
          setCount(end * easeOut);
        }
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setCount(end); // Ensure it hits the exact end value
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          animationFrameId = requestAnimationFrame(animate);
          observer.disconnect(); // Only animate once
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [duration, end, flicker]);

  // Format the number to match the requested decimals
  const formattedCount = decimals > 0 
    ? count.toFixed(decimals)
    : Math.floor(count).toString();

  return <span ref={ref}>{formattedCount}{suffix}</span>;
}
