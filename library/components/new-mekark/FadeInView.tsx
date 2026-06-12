"use client";

import { useEffect, useRef, useState, ReactNode } from "react";

interface FadeInViewProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export default function FadeInView({ children, delay = 0, className = "" }: FadeInViewProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 } // Trigger when 15% visible
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`w-full transition-all duration-[500ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
        isVisible ? "opacity-100" : "opacity-0 scale-[0.96] translate-y-8"
      } ${className}`}
      style={{ transitionDelay: delay ? `${delay}ms` : undefined }}
    >
      {children}
    </div>
  );
}
