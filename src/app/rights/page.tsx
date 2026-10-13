import type { Metadata } from "next";
import { ChapterIntro } from "@/components/pages/ChapterIntro";
import { LawTimeline } from "@/features/law-timeline/LawTimeline";
import { ArrowLink } from "@/components/ui/ArrowLink";
export const metadata: Metadata = { title: "Rights" };
export default function Page() { return <main className="experience-page"><ChapterIntro index="04" eyebrow="Know the protections" title="Clarity is power" intro="Explore selected Philippine laws connected to equality, employment discrimination, and gender-based sexual harassment—with the scope and original text always within reach." /><LawTimeline /><section className="next-chapter"><span>Continue the journey</span><h2>Make your mark</h2><ArrowLink href="/take-action">Next chapter</ArrowLink></section></main>; }
