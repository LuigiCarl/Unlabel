import type { Metadata } from "next";
import { ChapterIntro } from "@/components/pages/ChapterIntro";
import { StatisticsStory } from "@/features/statistics/StatisticsStory";
import { ArrowLink } from "@/components/ui/ArrowLink";
export const metadata: Metadata = { title: "Impact" };
export default function Page() { return <main className="experience-page"><ChapterIntro index="03" eyebrow="See the consequence" title="Evidence, in context" intro="Numbers can reveal a pattern, but never explain a person. Read verified Philippine labor-force data with its date, definition, geography, and limits intact." /><StatisticsStory /><section className="impact-manifesto"><span>Correlation is not a conclusion.</span><p>Measured differences can direct better questions. They should not become new labels or be presented as proof of a single cause.</p></section><section className="next-chapter"><span>Continue the journey</span><h2>Know your rights</h2><ArrowLink href="/rights">Next chapter</ArrowLink></section></main>; }
