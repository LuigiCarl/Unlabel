const concepts = [
  { term: "Stereotype", definition: "A simplified expectation about a group that treats people as if they share the same traits, interests, or roles." },
  { term: "Bias", definition: "A learned shortcut or preference that can shape what we notice, expect, or decide before we have examined the person or situation." },
  { term: "Discrimination", definition: "Unfair treatment, exclusion, or unequal opportunity connected to a person’s identity or a characteristic associated with a group." },
  { term: "Equality and equity", definition: "Equality means fair rights and opportunity. Equity also considers barriers and support so people can participate meaningfully." },
] as const;

const learningSteps = [
  "Recognize a gendered assumption before treating it as a fact.",
  "Separate a person’s actual choices and abilities from a group expectation.",
  "Use consistent standards and make room for different ways of participating.",
  "Choose a response that protects dignity and returns agency to the person.",
] as const;

export function LearningGuide() {
  return <section className="learning-guide" aria-labelledby="learning-guide-title">
    <header className="learning-guide-header">
      <div><span>01 / Learning guide</span><h2 id="learning-guide-title">Name the idea before you challenge it.</h2></div>
      <p>These working definitions give the experience a shared starting point. They are educational explanations, not legal definitions or diagnoses.</p>
    </header>
    <div className="learning-guide-grid">
      <div className="learning-concepts">
        {concepts.map((concept, index) => <article key={concept.term}><span>0{index + 1}</span><div><h3>{concept.term}</h3><p>{concept.definition}</p></div></article>)}
      </div>
      <aside className="learning-takeaways">
        <span>After this chapter</span>
        <h3>You should be able to:</h3>
        <ol>{learningSteps.map((step) => <li key={step}>{step}</li>)}</ol>
        <p>Pause and ask: <strong>“What evidence do I have about this person, and what am I assuming because of a label?”</strong></p>
      </aside>
    </div>
  </section>;
}
