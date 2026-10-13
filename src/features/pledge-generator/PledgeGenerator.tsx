"use client";
import { useState } from "react";
import { motion } from "motion/react";
import { Check, Download, Share2 } from "lucide-react";
import { downloadPledge, sharePledge } from "@/lib/exportPledge";

const commitments = [
  "Challenge stereotypes when I encounter them.",
  "Support equal opportunities without assumption.",
  "See people beyond the labels placed on them.",
] as const;

export function PledgeGenerator() {
  const [selected, setSelected] = useState(0); const [name, setName] = useState(""); const [status, setStatus] = useState(""); const commitment = commitments[selected];
  const run = async (action: "download" | "share") => { setStatus(action === "download" ? "Creating image…" : "Preparing share…"); try { if (action === "download") { await downloadPledge({ commitment, name }); setStatus("Pledge downloaded."); } else { const result = await sharePledge({ commitment, name }); setStatus(result === "shared" ? "Pledge shared." : "Sharing unavailable—PNG downloaded instead."); } } catch (error) { if (error instanceof DOMException && error.name === "AbortError") setStatus("Share cancelled."); else setStatus("Something went wrong. Please try again."); } };
  return <section className="pledge-builder" aria-labelledby="pledge-title"><div className="pledge-controls"><span>01 / Choose your commitment</span><h2 id="pledge-title">Make it personal.</h2><div className="commitment-list">{commitments.map((item, index) => <button key={item} aria-pressed={selected === index} onClick={() => setSelected(index)}><i>{selected === index && <Check size={16} />}</i><span>{item}</span></button>)}</div><label htmlFor="pledge-name">Display name <span>Optional—never uploaded</span></label><input id="pledge-name" maxLength={32} value={name} onChange={(event) => setName(event.target.value)} placeholder="A voice beyond labels" /><div className="pledge-actions"><button onClick={() => run("download")}><Download size={17} /> Download PNG</button><button onClick={() => run("share")}><Share2 size={17} /> Share</button></div><p className="pledge-status" aria-live="polite">{status || "Generated entirely in your browser."}</p></div><motion.div className="pledge-poster" key={selected} initial={{ opacity: .5, rotate: 1 }} animate={{ opacity: 1, rotate: 0 }}><div><span>UNLABEL® / MY PLEDGE</span><p>I choose to</p><h3>{commitment}</h3></div><footer><span>{name.trim() || "A voice beyond labels"}</span><span>Break the labels.<br />Redefine possibility.</span></footer></motion.div></section>;
}
