"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ExternalLink } from "lucide-react";
import { laws } from "@/data/laws";

export function LawTimeline() {
  const [active, setActive] = useState(0); const law = laws[active];
  return <section className="law-timeline" aria-labelledby="law-title"><div className="timeline-years" role="tablist" aria-label="Select a law">{laws.map((item, index) => <button key={item.code} role="tab" aria-selected={active === index} onClick={() => setActive(index)}><span>{item.year}</span><i /></button>)}</div><AnimatePresence mode="wait"><motion.article key={law.code} className="law-detail" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}><div className="law-code"><span>{law.code}</span><strong>{law.year}</strong></div><div><p>Philippine law / Simplified overview</p><h2 id="law-title">{law.title}</h2><p className="law-summary">{law.summary}</p><div className="scope-note"><span>Understand the scope</span><p>{law.scope}</p></div><a href={law.url} target="_blank" rel="noreferrer">Read the authoritative text <ExternalLink size={16} /></a></div></motion.article></AnimatePresence><p className="legal-note">Educational overview only. This is not individualized legal advice.</p></section>;
}
