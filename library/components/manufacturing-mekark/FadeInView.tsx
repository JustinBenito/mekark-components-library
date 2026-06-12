"use client";

import { motion } from "motion/react";
import { ReactNode } from "react";

interface FadeInViewProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  y?: number;
}

export function FadeInView({
  children,
  delay = 0,
  className,
  y = 24,
}: FadeInViewProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        type: "spring",
        stiffness: 280,
        damping: 32,
        delay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
