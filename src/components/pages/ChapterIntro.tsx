export function ChapterIntro({ index, eyebrow, title, intro }: { index: string; eyebrow: string; title: string; intro: string }) {
  return <section className="chapter-intro"><div className="page-hero-top"><span>{index} / 05</span><span>{eyebrow}</span></div><h1>{title}<span>.</span></h1><p>{intro}</p></section>;
}
