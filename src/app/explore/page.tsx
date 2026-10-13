import type { Metadata } from "next";
import { ChapterIntro } from "@/components/pages/ChapterIntro";
import { ExploreChapters } from "@/features/explore/ExploreChapters";
import { ArrowLink } from "@/components/ui/ArrowLink";
export const metadata: Metadata = { title: "Explore" };
export default function Page() { return <main className="experience-page"><ChapterIntro index="01" eyebrow="Understand the labels" title="See the pattern" intro="Stereotypes rarely announce themselves. Learn to recognize the quiet expectations that narrow what people are encouraged to study, pursue, lead, and become." /><ExploreChapters /><section className="explore-manifesto"><span>Awareness is a practice</span><p>Notice the shortcut. Question the rule. Return the choice to the person.</p></section><section className="next-chapter"><span>Continue the journey</span><h2>Challenge your bias</h2><ArrowLink href="/challenge">Next chapter</ArrowLink></section></main>; }
