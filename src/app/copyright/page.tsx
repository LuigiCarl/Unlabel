import type { Metadata } from "next";
import { InformationPage, ExternalTextLink, ReviewMark } from "@/components/pages/InformationPage";
export const metadata: Metadata = { title: "Copyright & Credits" };
export default function Page(){return <InformationPage eyebrow="Credits / 01" title="Made with attribution." intro="UNLABEL distinguishes project-created work from third-party tools, sources, and materials." review sections={[
  {title:"UNLABEL materials",body:<p>Unless otherwise identified, the website’s original editorial text, visual system, and interaction design are project materials. <ReviewMark>insert the copyright owner, year, reuse permissions, and trademark status; do not publish the ® symbol unless registration is verified.</ReviewMark></p>},
  {title:"Fonts",body:<p><ExternalTextLink href="https://fontsource.org/fonts/inter">Inter</ExternalTextLink> and <ExternalTextLink href="https://fontsource.org/fonts/space-grotesk">Space Grotesk</ExternalTextLink> are locally packaged through Fontsource and licensed under the SIL Open Font License 1.1.</p>},
  {title:"Software",body:<p>The site uses open-source and commercially licensed software including Next.js, React, Tailwind CSS, Three.js, React Three Fiber, Drei, Motion, Lucide, and GSAP. Each remains governed by its applicable license. See References & Sources for the recorded license information.</p>},
  {title:"Data, laws, and linked material",body:<p>Official statistics, legislation, agency pages, and external resources are attributed to their publishers. Linking, summarizing, or citing them does not transfer ownership to UNLABEL or imply endorsement.</p>},
  {title:"Media register",body:<p>No published third-party photograph, texture, or 3D model was found in the current public asset folders during this audit. <ReviewMark>record creator, source, permission or license, modifications, and required credit before adding any media.</ReviewMark></p>},
]}/>}
