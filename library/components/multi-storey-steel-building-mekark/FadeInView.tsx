"use client";

import { motion } from "motion/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export default function FadeInView({ children, delay = 0, className = "" }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{
        y: { type: "spring", stiffness: 90, damping: 20, mass: 0.9, delay: delay / 1000 },
        opacity: { duration: 0.4, delay: delay / 1000, ease: "easeOut" },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
