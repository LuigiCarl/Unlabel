import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function ArrowLink({ href, children, className = "" }: { href: string; children: React.ReactNode; className?: string }) {
  return <Link className={cn("arrow-link", className)} href={href}><span>{children}</span><ArrowUpRight aria-hidden="true" size={18} /></Link>;
}
