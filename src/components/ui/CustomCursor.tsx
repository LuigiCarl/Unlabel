"use client";
import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function CustomCursor() {
  const x = useMotionValue(-100); const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 650, damping: 44, mass: .35 });
  const springY = useSpring(y, { stiffness: 650, damping: 44, mass: .35 });
  const [label, setLabel] = useState("");
  const reduced = useReducedMotion();
  useEffect(() => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches || reduced) return;
    const move = (event: PointerEvent) => { x.set(event.clientX); y.set(event.clientY); };
    const over = (event: PointerEvent) => setLabel((event.target as HTMLElement).closest<HTMLElement>("[data-cursor]")?.dataset.cursor ?? "");
    window.addEventListener("pointermove", move, { passive: true }); document.addEventListener("pointerover", over);
    return () => { window.removeEventListener("pointermove", move); document.removeEventListener("pointerover", over); };
  }, [reduced, x, y]);
  return <motion.div className={`custom-cursor ${label ? "is-active" : ""}`} style={{ x: springX, y: springY }} aria-hidden="true"><span>{label}</span></motion.div>;
}
