import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { InformationPage } from "@/components/pages/InformationPage";
export const metadata: Metadata = { title: "Contact" };
export default function Page(){return <InformationPage eyebrow="Contact / 01" title="Start a thoughtful conversation." intro="Use the appropriate channel for corrections, accessibility feedback, permissions, privacy questions, or educational collaboration." sections={[
  {title:"Email the project",body:<><p>The address is not printed on this page. Use the button below to open a new Gmail message addressed to UNLABEL.</p><a className="contact-email-action" href="/contact/email" target="_blank" rel="noreferrer">Compose in Gmail <ArrowUpRight size={17} aria-hidden="true" /></a></>},
  {title:"Editorial corrections",body:<p>When reporting a factual or citation issue, include the page, the exact statement, and a reliable source that supports the correction.</p>},
  {title:"Privacy and accessibility",body:<><p>For a privacy question, avoid including sensitive personal information unless it is necessary. For an accessibility report, include the page URL, device, browser, assistive technology if relevant, and what prevented access. Luigi Carl handles these requests through the project email.</p></>},
  {title:"Permissions and collaboration",body:<p>For classroom use, reproduction, press, or collaboration, describe the intended material, audience, format, territory, and duration. Permission cannot be assumed from the existence of this page. For copyright or attribution concerns, include the URL and the specific work involved so Luigi Carl can review it.</p>},
  {title:"Response expectations",body:<p>This is an email link, not an emergency or monitored support service. It is managed by Luigi Carl, and response times may vary.</p>},
]}/>}
