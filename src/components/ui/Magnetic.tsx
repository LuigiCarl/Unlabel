"use client";
import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function Magnetic({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null); const reduced = useReducedMotion();
  const x = useSpring(useMotionValue(0), { stiffness: 190, damping: 16 });
  const y = useSpring(useMotionValue(0), { stiffness: 190, damping: 16 });
  return <motion.div ref={ref} className={className} style={{ x, y }} onPointerMove={(event) => { if (reduced || !ref.current) return; const box = ref.current.getBoundingClientRect(); x.set((event.clientX - box.left - box.width / 2) * .18); y.set((event.clientY - box.top - box.height / 2) * .18); }} onPointerLeave={() => { x.set(0); y.set(0); }}>{children}</motion.div>;
}
