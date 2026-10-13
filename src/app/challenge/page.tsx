import type { Metadata } from "next";
import { ChapterIntro } from "@/components/pages/ChapterIntro";
import { BranchingStory } from "@/features/branching-story/BranchingStory";
import { BiasDetector } from "@/features/bias-detector/BiasDetector";
import { ArrowLink } from "@/components/ui/ArrowLink";
export const metadata: Metadata = { title: "Challenge" };
export default function Page() { return <main className="experience-page"><ChapterIntro index="02" eyebrow="Question the reflex" title="Choose differently" intro="Awareness becomes meaningful when it changes a response. Practice noticing the assumption, making a choice, and understanding what that choice leaves behind." /><BranchingStory /><BiasDetector /><section className="next-chapter"><span>Continue the journey</span><h2>Understand the impact</h2><ArrowLink href="/impact">Next chapter</ArrowLink></section></main>; }
