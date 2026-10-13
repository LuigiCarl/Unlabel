"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowRight, Check, RotateCcw, X } from "lucide-react";
import { questions } from "@/data/questions";

export function BiasDetector() {
  const [index, setIndex] = useState(0); const [selected, setSelected] = useState<number | null>(null); const [understood, setUnderstood] = useState(0);
  const finished = index >= questions.length; const question = questions[Math.min(index, questions.length - 1)];
  const answer = (option: number) => { if (selected !== null) return; setSelected(option); if (option === question.answer) setUnderstood((score) => score + 1); };
  const next = () => { setIndex((value) => value + 1); setSelected(null); }; const reset = () => { setIndex(0); setSelected(null); setUnderstood(0); };
  return <section className="quiz-experience" aria-labelledby="quiz-title"><div className="experience-label"><span>02 / Read the signal</span><span>{finished ? "Learning summary" : `${String(index + 1).padStart(2, "0")} / ${String(questions.length).padStart(2, "0")}`}</span></div>{finished ? <motion.div className="quiz-summary" initial={{ opacity: 0 }} animate={{ opacity: 1 }}><span>{understood} / {questions.length}</span><h2 id="quiz-title">Patterns recognized.</h2><p>This result reflects this short exercise—not your identity, character, or whether you are personally biased. Revisit the explanations whenever a distinction felt unclear.</p><button onClick={reset}><RotateCcw size={16} /> Try again</button></motion.div> : <AnimatePresence mode="wait"><motion.div key={question.id} className="quiz-question" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}><p>Classify the statement</p><h2 id="quiz-title">“{question.prompt}”</h2><div className="quiz-options">{question.options.map((option, optionIndex) => { const correct = optionIndex === question.answer; const chosen = optionIndex === selected; return <button key={option} onClick={() => answer(optionIndex)} className={selected === null ? "" : correct ? "correct" : chosen ? "incorrect" : "muted"}><span>{option}</span>{selected !== null && correct ? <Check /> : chosen ? <X /> : null}</button>; })}</div>{selected !== null && <motion.div className="quiz-feedback" initial={{ opacity: 0 }} animate={{ opacity: 1 }} aria-live="polite"><p>{question.explanation}</p><button onClick={next}>{index === questions.length - 1 ? "View summary" : "Next statement"}<ArrowRight size={17} /></button></motion.div>}</motion.div></AnimatePresence>}</section>;
}
