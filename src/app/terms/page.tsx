import type { Metadata } from "next";
import { InformationPage, ReviewMark } from "@/components/pages/InformationPage";
export const metadata: Metadata = { title: "Terms of Use" };
export default function Page(){return <InformationPage eyebrow="Legal / Terms" title="Use with care." intro="Plain-language draft terms for access to the UNLABEL educational website." review sections={[
  {title:"Using UNLABEL",body:<p>You may browse and use the site for lawful personal, classroom, and non-commercial educational purposes. Do not disrupt the service, attempt unauthorized access, introduce harmful code, or use the experience to harass, demean, or target another person.</p>},
  {title:"Educational content",body:<p>UNLABEL offers general education about gender stereotypes. Its scenarios are illustrative and do not establish facts about a particular person or event. Content may be revised as sources and the project evolve.</p>},
  {title:"Intellectual property",body:<p>Project-original writing, interface design, and code may be protected by applicable intellectual-property law. Third-party laws, data, fonts, libraries, and linked materials remain the property of their respective owners and are governed by their own terms or licenses. No ownership of third-party material is claimed.</p>},
  {title:"No warranties",body:<p>The site is provided on an “as available” basis. The owners should not promise uninterrupted access, error-free operation, or that the content is suitable for every purpose. Nothing here excludes responsibility that cannot lawfully be excluded.</p>},
  {title:"Governing details",body:<p><ReviewMark>identify the contracting owner, effective date, age expectations, acceptable-use enforcement, governing law and venue, liability language, and a notice address. Obtain Philippine legal review before publication.</ReviewMark></p>},
]}/>}
