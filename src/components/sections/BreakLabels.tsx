"use client";
import dynamic from "next/dynamic";
import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Check, RotateCcw, Sparkles } from "lucide-react";
import { stereotypeLabels } from "@/data/stereotypes";
import { createSeededRandom, randomSeed, shuffle } from "@/lib/random";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const LabelScene = dynamic(() => import("@/components/three/LabelScene"), { ssr: false, loading: () => <div className="scene-fallback">Building the label field…</div> });

export function BreakLabels() {
  const [brokenIds, setBrokenIds] = useState<string[]>([]);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [visibleLabels, setVisibleLabels] = useState(() => stereotypeLabels.slice(0, 5));
  const reduced = useReducedMotion();
  const complete = brokenIds.length === visibleLabels.length;
  const active = visibleLabels.find((label) => label.id === activeId);
  useEffect(() => {
    const timer = window.setTimeout(() => {
      setVisibleLabels(shuffle(stereotypeLabels, createSeededRandom(randomSeed())).slice(0, 5));
    }, 0);
    return () => window.clearTimeout(timer);
  }, []);
  const breakLabel = useCallback((id: string) => { setBrokenIds((current) => current.includes(id) ? current : [...current, id]); setActiveId(id); }, []);
  const reset = () => { setBrokenIds([]); setActiveId(null); };

  return <section className="break-experience" aria-labelledby="break-title"><header className="break-header"><div><span>02 / Break the labels</span><h2 id="break-title">The shape of an assumption.</h2></div><p>Challenge each statement to expose the expectation underneath. This is a reflective milestone—not a score.</p></header><div className="break-status"><div><span>{String(brokenIds.length).padStart(2, "0")}</span><span>/ {String(visibleLabels.length).padStart(2, "0")} challenged</span></div><div className="progress-track" role="progressbar" aria-valuenow={brokenIds.length} aria-valuemin={0}   aria-valuemax={visibleLabels.length} aria-label="Labels challenged">  <motion.span animate={{ width: `${(brokenIds.length / visibleLabels.length) * 100}%` }} /></div></div><div className="label-stage" data-cursor="BREAK">  <LabelScene labels={visibleLabels} brokenIds={brokenIds} onBreak={breakLabel} reducedMotion={reduced} />  <div className="label-rail" aria-label="Challenge a label">{visibleLabels.map((label, index) => <button key={label.id} className={brokenIds.includes(label.id) ? "is-broken" : ""} onClick={() => breakLabel(label.id)} disabled={brokenIds.includes(label.id)}>  <span>{String(index + 1).padStart(2, "0")}</span>{label.phrase}<Check size={14} /></button>)}</div></div><div className="reflection-shell" aria-live="polite"><AnimatePresence mode="wait">{complete ? <motion.div key="complete" className="complete-message" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}><Sparkles aria-hidden="true" /><div><span>Field complete</span><h3>Not fixed. Not finished. Open.</h3><p>Every challenged label creates room to see a person more fully.</p></div><button onClick={reset}><RotateCcw size={16} /> Reset experience</button></motion.div> : active ? <motion.div key={active.id} className="reflection-card" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}><span>{active.category} / Reflection</span><h3>{active.phrase}</h3><p>{active.reflection}</p></motion.div> : <motion.div key="prompt" className="reflection-prompt" initial={{ opacity: 0 }} animate={{ opacity: 1 }}><span>Choose a label to begin</span><p>Tap a floating statement or use the numbered controls.</p></motion.div>}</AnimatePresence></div></section>;
}
