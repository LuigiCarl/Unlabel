export function SectionHeading({ number, eyebrow, title }: { number: string; eyebrow: string; title: string }) {
  return <header className="section-heading"><div className="section-kicker"><span>{number}</span><span>{eyebrow}</span></div><h2>{title}</h2></header>;
}
