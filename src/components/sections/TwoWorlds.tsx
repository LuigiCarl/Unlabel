"use client";
import { useState } from "react";
import { MoveHorizontal } from "lucide-react";
import { motion } from "motion/react";

const worlds = [
  { id: "education", label: "Education", limit: "A subject is treated like a gendered choice.", open: "Curiosity decides where learning can lead." },
  { id: "career", label: "Career", limit: "A role is assigned before ability is seen.", open: "Potential is met without a prescribed path." },
  { id: "leadership", label: "Leadership", limit: "The same confidence is read by different rules.", open: "Ideas carry more weight than expectation." },
] as const;

export function TwoWorlds() {
  const [value, setValue] = useState(50); const [active, setActive] = useState(0); const world = worlds[active];
  return <section className="worlds-section" aria-labelledby="worlds-title"><div className="worlds-header"><div><span>03 / Two worlds</span><h2 id="worlds-title">Move the boundary.</h2></div><p>Compare two illustrative perspectives: one shaped by stereotype, one opened by equal possibility.</p></div><div className="world-tabs" role="tablist" aria-label="Choose a scenario">{worlds.map((item, index) => <button key={item.id} role="tab" aria-selected={active === index} onClick={() => setActive(index)}>{item.label}</button>)}</div><div className="world-stage" data-cursor="DRAG"><div className="world-side world-limit"><span>Expectation</span><motion.p key={`limit-${world.id}`} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }}>{world.limit}</motion.p><b>Assigned</b></div><div className="world-side world-open" style={{ clipPath: `inset(0 0 0 ${value}%)` }}><span>Possibility</span><motion.p key={`open-${world.id}`} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }}>{world.open}</motion.p><b>Chosen</b></div><div className="world-divider" style={{ left: `${value}%` }}><span><MoveHorizontal size={18} /></span></div><input aria-label="Reveal possibility" type="range" min="8" max="92" value={value} onChange={(event) => setValue(Number(event.target.value))} /></div><p className="world-disclaimer">Illustrative comparison — experiences differ across people and contexts.</p></section>;
}
