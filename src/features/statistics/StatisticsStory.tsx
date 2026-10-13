"use client";
import { useState } from "react";
import { motion } from "motion/react";
import { ExternalLink } from "lucide-react";
import { statistics } from "@/data/statistics";
import { sources } from "@/data/sources";

export function StatisticsStory() {
  const [active, setActive] = useState(0); const dataset = statistics[active]; const source = sources.find((item) => item.id === dataset.sourceId);
  return <section className="statistics-story" aria-labelledby="statistics-title"><div className="data-tabs" role="tablist" aria-label="Choose a dataset">{statistics.map((item, index) => <button role="tab" aria-selected={active === index} onClick={() => setActive(index)} key={item.id}>{item.id === "lfpr-sex" ? "By sex" : "Annual total"}</button>)}</div><div className="data-stage"><div className="data-context"><span>{dataset.geography} / {dataset.period}</span><h2 id="statistics-title">{dataset.title}</h2><p>{dataset.definition}</p></div><div className="data-bars">{dataset.values.map((item) => <div className="data-row" key={item.label}><div><span>{item.label}</span><strong>{item.value}%</strong></div><div><motion.span key={`${dataset.id}-${item.label}`} initial={{ width: 0 }} whileInView={{ width: `${item.value}%` }} viewport={{ once: true }} transition={{ duration: 1, ease: [.22, 1, .36, 1] }} /></div></div>)}</div><div className="data-reading"><span>Read with care</span><p>{dataset.interpretation}</p>{source && <a href={source.url} target="_blank" rel="noreferrer">View PSA source <ExternalLink size={15} /></a>}</div></div><div className="table-wrap"><table><caption>Accessible table: {dataset.title}</caption><thead><tr><th>Group</th><th>Rate</th><th>Period</th><th>Geography</th></tr></thead><tbody>{dataset.values.map((item) => <tr key={item.label}><td>{item.label}</td><td>{item.value}%</td><td>{dataset.period}</td><td>{dataset.geography}</td></tr>)}</tbody></table></div></section>;
}
