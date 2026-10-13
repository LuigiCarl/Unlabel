import type { Metadata } from "next";
import { ExternalLink } from "lucide-react";
import { ChapterIntro } from "@/components/pages/ChapterIntro";
import { PledgeGenerator } from "@/features/pledge-generator/PledgeGenerator";
import { ArrowLink } from "@/components/ui/ArrowLink";
export const metadata: Metadata = { title: "Take Action" };
const actions = [
  ["01", "Interrupt the shorthand", "Ask a simple question when gender is used as a shortcut for someone’s interests or ability."],
  ["02", "Widen the invitation", "Share opportunities openly. Encourage people based on their goals and potential, not a prescribed role."],
  ["03", "Change the small systems", "Review how tasks, recognition, care work, and speaking time are distributed in the spaces you influence."],
] as const;
export default function Page() { return <main className="experience-page"><ChapterIntro index="05" eyebrow="Make your mark" title="Change the script" intro="Big cultural shifts are built from repeatable choices: the interruption, the invitation, and the opportunity shared without assumption." /><PledgeGenerator /><section className="action-practice"><header><span>02 / From promise to practice</span><h2>Start where you stand.</h2></header><div>{actions.map(([number,title,copy]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p></article>)}</div></section><section className="resource-directory"><div><span>03 / Continue learning</span><h2>Go to the source.</h2></div><div><a href="https://pcw.gov.ph/" target="_blank" rel="noreferrer"><span>Philippine Commission on Women</span><small>Gender-equality resources, laws and policies</small><ExternalLink /></a><a href="https://dole.gov.ph/contact-us/" target="_blank" rel="noreferrer"><span>Department of Labor and Employment</span><small>Official labor information and contact channels</small><ExternalLink /></a></div></section><section className="privacy-promise"><span>Private by design</span><p>Your pledge is rendered locally. UNLABEL does not send, save, or publish your name.</p></section><section className="next-chapter"><span>The journey continues</span><h2>Begin again—with new eyes.</h2><ArrowLink href="/">Return home</ArrowLink></section></main>; }
