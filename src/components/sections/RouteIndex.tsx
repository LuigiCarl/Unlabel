import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { routePreviews } from "@/data/routes";
import { Reveal } from "@/components/ui/Reveal";

export function RouteIndex() { return <section className="route-index"><div className="route-intro"><span>Explore the experience</span><p>Six chapters. One question: who could we become without the limits we inherited?</p></div><div>{routePreviews.map((item) => <Reveal key={item.href}><Link href={item.href} className={`route-row ${item.accent}`}><span className="route-number">{item.index}</span><item.icon className="route-icon" aria-hidden="true" /><div><span className="route-eyebrow">{item.eyebrow}</span><h3>{item.title}</h3></div><p>{item.description}</p><ArrowUpRight className="route-arrow" aria-hidden="true" /></Link></Reveal>)}</div></section>; }
