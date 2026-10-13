"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowLeft, ArrowRight, RotateCcw } from "lucide-react";
import { stories } from "@/data/stories";

type HistoryEntry = { nodeId: string; choice: string };

export function BranchingStory() {
  const [nodeId, setNodeId] = useState("start");
  const [history, setHistory] = useState<HistoryEntry[]>([]);
  const node = stories.find((item) => item.id === nodeId) ?? stories[0];
  const complete = node.choices.length === 0;

  const choose = (nextNodeId: string, choice: string) => {
    setHistory((items) => [...items, { nodeId, choice }]);
    setNodeId(nextNodeId);
  };

  const goBack = () => {
    const previous = history.at(-1);
    if (!previous) return;
    setNodeId(previous.nodeId);
    setHistory((items) => items.slice(0, -1));
  };

  const restart = () => { setNodeId("start"); setHistory([]); };

  return (
    <section className="story-experience" aria-labelledby="story-title">
      <div className="experience-label"><span>01 / Branching story</span><span>{complete ? "Reflection" : `Decision ${node.stage} of 2`}</span></div>
      <div className="story-progress" aria-label={`Story stage ${node.stage} of 3`}>{[1, 2, 3].map((stage) => <span key={stage} className={node.stage >= stage ? "active" : ""} />)}</div>
      {history.length > 0 && <div className="story-trail" aria-label="Your choices"><span>Your path</span>{history.map((entry, index) => <strong key={`${entry.nodeId}-${index}`}>{entry.choice}</strong>)}</div>}
      <AnimatePresence mode="wait">
        <motion.div key={node.id} className="story-node" initial={{ opacity: 0, x: 28 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -28 }}>
          <p className="story-role">Scenario / {node.context}</p>
          <h2 id="story-title">{node.narrative}</h2>
          {complete ? (
            <div className="story-outcome">
              <div><span>What this choice reveals</span><p>{node.explanation}</p></div>
              <div><span>Carry it forward</span><p>{node.learning}</p></div>
              <div className="story-actions"><button onClick={goBack}><ArrowLeft size={16} /> Change the last choice</button><button onClick={restart}><RotateCcw size={16} /> Start a new path</button></div>
            </div>
          ) : (
            <>
              <div className={`story-choices ${node.choices.length === 2 ? "two" : ""}`}>
                {node.choices.map((choice, index) => <button key={choice.id} onClick={() => choose(choice.nextNodeId, choice.text)}><span>0{index + 1}</span><strong>{choice.text}</strong><small>{choice.detail}</small><ArrowRight aria-hidden="true" /></button>)}
              </div>
              {history.length > 0 && <button className="story-back" onClick={goBack}><ArrowLeft size={16} /> Back to the previous decision</button>}
            </>
          )}
        </motion.div>
      </AnimatePresence>
      <p className="experience-note">Illustrative scenario. There is no perfect response; consider context, safety, and the affected person’s agency.</p>
    </section>
  );
}
