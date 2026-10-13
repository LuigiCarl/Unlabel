import type { LucideIcon } from "lucide-react";

export type RoutePreview = {
  index: string;
  title: string;
  eyebrow: string;
  description: string;
  href: string;
  accent: "lime" | "violet";
  icon: LucideIcon;
};
