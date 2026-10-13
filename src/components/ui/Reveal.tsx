"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export function Reveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  useGSAP(() => {
    if (reduced || !ref.current) return;
    gsap.fromTo(ref.current, { autoAlpha: 0, y: 48 }, { autoAlpha: 1, y: 0, duration: 1, ease: "power3.out", scrollTrigger: { trigger: ref.current, start: "top 86%", once: true } });
  }, { scope: ref, dependencies: [reduced], revertOnUpdate: true });
  return <div ref={ref} className={className}>{children}</div>;
}
