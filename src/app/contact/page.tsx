import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { InformationPage, ReviewMark } from "@/components/pages/InformationPage";
export const metadata: Metadata = { title: "Contact" };
export default function Page(){return <InformationPage eyebrow="Contact / 01" title="Start a thoughtful conversation." intro="Use the appropriate channel for corrections, accessibility feedback, permissions, privacy questions, or educational collaboration." review sections={[
  {title:"Email the project",body:<><p>The address is not printed on this page. Use the button below to open a new Gmail message addressed to UNLABEL.</p><a className="contact-email-action" href="/contact/email" target="_blank" rel="noreferrer">Compose in Gmail <ArrowUpRight size={17} aria-hidden="true" /></a></>},
  {title:"Editorial corrections",body:<p>When reporting a factual or citation issue, include the page, the exact statement, and a reliable source that supports the correction.</p>},
  {title:"Privacy and accessibility",body:<><p>For a privacy question, avoid including sensitive personal information unless it is necessary. For an accessibility report, include the page URL, device, browser, assistive technology if relevant, and what prevented access.</p><p><ReviewMark>confirm the privacy-controller identity, secure request procedure, and expected response times before publication.</ReviewMark></p></>},
  {title:"Permissions and collaboration",body:<p>For classroom use, reproduction, press, or collaboration, describe the intended material, audience, format, territory, and duration. Permission cannot be assumed from the existence of this page.</p>},
  {title:"Response expectations",body:<p>This is an email link, not an emergency or monitored support service. <ReviewMark>add normal response hours, the owner’s legal name, and an alternative contact method if required.</ReviewMark></p>},
]}/>}
