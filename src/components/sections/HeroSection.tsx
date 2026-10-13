"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { ArrowDown } from "lucide-react";
import { EASE } from "@/lib/animations";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { Magnetic } from "@/components/ui/Magnetic";

export function HeroSection() {
  const root = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: root, offset: ["start start", "end start"] });
  const titleY = useTransform(scrollYProgress, [0, 1], [0, reduced ? 0 : 140]);
  const titleScale = useTransform(scrollYProgress, [0, 1], [1, reduced ? 1 : .88]);
  const titleOpacity = useTransform(scrollYProgress, [0, .82], [1, reduced ? 1 : 0]);
  const line = { initial: { y: reduced ? 0 : "110%" }, animate: { y: 0 }, transition: { duration: reduced ? 0 : 1.05, ease: EASE } };
  return <section ref={root} className="hero" aria-labelledby="hero-title"><div className="hero-meta"><span>Digital experience / 01</span><span>Beyond the binary of expectation</span></div><motion.h1 style={{ y: titleY, scale: titleScale, opacity: titleOpacity }} id="hero-title" className="hero-title"><span className="hero-line"><motion.span {...line}>Break the</motion.span></span><span className="hero-line offset"><motion.span {...line} transition={{ ...line.transition, delay: .12 }}>labels<span className="lime">.</span></motion.span></span><span className="hero-line"><motion.span {...line} transition={{ ...line.transition, delay: .24 }}>Redefine</motion.span></span><span className="hero-line offset"><motion.span {...line} transition={{ ...line.transition, delay: .36 }}>possibility<span className="violet">.</span></motion.span></span></motion.h1><div className="hero-foot"><motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: reduced ? 0 : .8 }}>An immersive educational experience challenging the assumptions that shape how people are seen.</motion.p><Magnetic><a href="#manifesto" className="scroll-cue" data-cursor="SCROLL"><ArrowDown size={18} /><span>Scroll to unlearn</span></a></Magnetic></div><div className="hero-orbit" aria-hidden="true"><span>WHO DECIDED?</span></div></section>;
}
