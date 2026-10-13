import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { Wordmark } from "@/components/ui/Wordmark";

const columns = [
  { title: "Experience", links: [["Explore", "/explore"], ["Challenge", "/challenge"], ["Impact", "/impact"], ["Rights", "/rights"], ["Take Action", "/take-action"]] },
  { title: "Project", links: [["About UNLABEL", "/about"], ["References & Sources", "/references"], ["Copyright & Credits", "/copyright"], ["Contact", "/contact"]] },
  { title: "Legal", links: [["Privacy Policy", "/privacy"], ["Terms of Use", "/terms"], ["Educational Disclaimer", "/educational-disclaimer"]] },
] as const;

export function Footer() {
  return <footer className="footer"><div className="footer-statement"><p>Leave the label.</p><p>Keep the possibility.</p></div><div className="footer-directory"><div className="footer-intro"><Wordmark /><p>An educational experience for noticing, questioning, and moving beyond gender stereotypes.</p></div>{columns.map(column=><nav key={column.title} aria-label={`${column.title} links`}><span>{column.title}</span>{column.links.map(([label,href])=><Link key={href} href={href}>{label}</Link>)}</nav>)}</div><div className="footer-bottom"><p>Educational information—not legal advice.</p><a href="#top" aria-label="Back to top"><ArrowUp size={18} /> Top</a></div></footer>;
}
