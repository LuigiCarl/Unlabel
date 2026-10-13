import { BookOpen, Fingerprint, Gavel, Orbit, Sparkles } from "lucide-react";
import type { RoutePreview } from "@/types/content";

export const routePreviews: RoutePreview[] = [
  { index: "01", title: "Explore", eyebrow: "Understand the labels", description: "Trace how expectations become limits across classrooms, careers, leadership and everyday life.", href: "/explore", accent: "lime", icon: Orbit },
  { index: "02", title: "Challenge", eyebrow: "Question the reflex", description: "Step into branching situations designed to make assumptions visible—and interruptible.", href: "/challenge", accent: "violet", icon: Fingerprint },
  { index: "03", title: "Impact", eyebrow: "See the consequence", description: "A future evidence-led space for verified data, context and the stories behind the numbers.", href: "/impact", accent: "lime", icon: Sparkles },
  { index: "04", title: "Rights", eyebrow: "Know the protections", description: "Navigate clearly explained Philippine protections with direct, authoritative references.", href: "/rights", accent: "violet", icon: Gavel },
  { index: "05", title: "Take Action", eyebrow: "Make your mark", description: "Turn reflection into everyday commitments that move beyond prescribed roles.", href: "/take-action", accent: "lime", icon: BookOpen },
];
