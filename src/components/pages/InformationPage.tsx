import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

export type InformationSection = { title: string; body: React.ReactNode };

export function InformationPage({ eyebrow, title, intro, review, sections }: { eyebrow: string; title: string; intro: string; review?: boolean; sections: InformationSection[] }) {
  return <main className="info-page"><header className="info-hero"><span>{eyebrow}</span><h1>{title}</h1><p>{intro}</p>{review && <div className="owner-review"><strong>Owner review required</strong><span>This is a working draft. The project owners must verify, complete, and approve it before publication.</span></div>}</header><div className="info-layout"><aside aria-label="On this page"><span>On this page</span>{sections.map((section, index) => <a key={section.title} href={`#section-${index + 1}`}>{String(index + 1).padStart(2, "0")} {section.title}</a>)}</aside><div className="info-sections">{sections.map((section, index) => <Reveal key={section.title} className="info-section"><section id={`section-${index + 1}`}><span>{String(index + 1).padStart(2, "0")}</span><div><h2>{section.title}</h2>{section.body}</div></section></Reveal>)}</div></div><nav className="info-related" aria-label="Related information"><Link href="/references">References <ArrowUpRight /></Link><Link href="/educational-disclaimer">Disclaimer <ArrowUpRight /></Link><Link href="/contact">Contact <ArrowUpRight /></Link></nav></main>;
}

export function ReviewMark({ children }: { children: React.ReactNode }) { return <mark className="review-mark">Owner review: {children}</mark>; }

export function ExternalTextLink({ href, children }: { href: string; children: React.ReactNode }) { return <a className="text-link" href={href} target="_blank" rel="noreferrer">{children}<ArrowUpRight size={15} aria-hidden="true" /></a>; }
