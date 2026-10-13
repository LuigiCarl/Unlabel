"use client";
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "@/hooks/useReducedMotion";
gsap.registerPlugin(ScrollTrigger, useGSAP);

export function KineticBand() {
  const root = useRef<HTMLElement>(null); const reduced = useReducedMotion();
  useGSAP(() => { if (reduced) return; gsap.to(".kinetic-track", { xPercent: -22, ease: "none", scrollTrigger: { trigger: root.current, scrub: 1.2, start: "top bottom", end: "bottom top" } }); }, { scope: root, dependencies: [reduced], revertOnUpdate: true });
  return <section ref={root} className="kinetic-band" aria-label="Question inherited expectations"><div className="kinetic-track"><span>WHO SAID YOU SHOULD?</span><i>✦</i><span>WHO SAID YOU COULDN’T?</span><i>✦</i><span>WHO SAID YOU SHOULD?</span></div></section>;
}
