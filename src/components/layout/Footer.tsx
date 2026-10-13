import { ArrowUp } from "lucide-react";
import { Wordmark } from "@/components/ui/Wordmark";

export function Footer() {
  return <footer className="footer"><div className="footer-statement"><p>Leave the label.</p><p>Keep the possibility.</p></div><div className="footer-bottom"><Wordmark /><p>An educational experience about gender stereotypes.</p><a href="#top" aria-label="Back to top"><ArrowUp size={18} /> Top</a></div></footer>;
}
