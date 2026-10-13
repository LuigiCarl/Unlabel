import type { Metadata } from "next";
import { InformationPage, ReviewMark } from "@/components/pages/InformationPage";
export const metadata: Metadata = { title: "Educational Disclaimer" };
export default function Page(){return <InformationPage eyebrow="Legal / Disclaimer" title="Learn. Verify. Seek advice." intro="UNLABEL supports reflection and learning; it does not replace professional, legal, medical, or psychological advice." review sections={[
  {title:"Educational purpose",body:<p>Scenarios, prompts, quizzes, and reframes are general educational material about gender stereotypes. They are not assessments of your character, identity, beliefs, or legal position.</p>},
  {title:"Legal information",body:<p>Summaries of Philippine laws are simplified introductions. They may omit exceptions, later amendments, regulations, decisions, or facts important to a real situation. Read the official source and consult a qualified Philippine lawyer or appropriate agency for advice.</p>},
  {title:"Statistics and interpretation",body:<p>Statistics describe the stated source, population, geography, and period. They do not prove individual ability or a single cause. Verify the linked primary source before reusing a figure.</p>},
  {title:"Safety and support",body:<p>If a situation involves harassment, discrimination, immediate danger, employment action, school discipline, or personal distress, consider contacting an appropriate professional, institution, support service, or public authority. UNLABEL does not monitor interactions or provide emergency support.</p>},
  {title:"Final review",body:<p><ReviewMark>confirm the intended audience, any safeguarding procedure, official support contacts, effective date, and jurisdiction-specific wording before release.</ReviewMark></p>},
]}/>}
