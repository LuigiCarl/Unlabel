import type { Metadata } from "next";
import { InformationPage } from "@/components/pages/InformationPage";
export const metadata: Metadata = { title: "Educational Disclaimer" };
export default function Page(){return <InformationPage eyebrow="Legal / Disclaimer" title="Learn. Verify. Seek advice." intro="UNLABEL supports reflection and learning; it does not replace professional, legal, medical, or psychological advice." sections={[
  {title:"Educational purpose",body:<p>Scenarios, prompts, quizzes, and reframes are general educational material about gender stereotypes. They are not assessments of your character, identity, beliefs, or legal position.</p>},
  {title:"Legal information",body:<p>Summaries of Philippine laws are simplified introductions. They may omit exceptions, later amendments, regulations, decisions, or facts important to a real situation. Read the official source and consult a qualified Philippine lawyer or appropriate agency for advice.</p>},
  {title:"Statistics and interpretation",body:<p>Statistics describe the stated source, population, geography, and period. They do not prove individual ability or a single cause. Verify the linked primary source before reusing a figure.</p>},
  {title:"Safety and support",body:<p>If a situation involves harassment, discrimination, immediate danger, employment action, school discipline, or personal distress, consider contacting an appropriate professional, institution, support service, or public authority. UNLABEL does not monitor interactions or provide emergency support.</p>},
  {title:"Ownership and scope",body:<><p>This educational disclaimer is provided by Luigi Carl and is effective October 14, 2026. UNLABEL is not an emergency, counseling, legal, medical, or psychological support service.</p><p>For corrections, accessibility concerns, or questions about this disclaimer, contact <a className="text-link" href="/contact/email">luigicarlbrezuela07@gmail.com</a>.</p></>},
]}/>}
