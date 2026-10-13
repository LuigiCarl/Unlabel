"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { Wordmark } from "@/components/ui/Wordmark";

const links = [["Explore", "/explore"], ["Challenge", "/challenge"], ["Impact", "/impact"], ["Rights", "/rights"], ["Take action", "/take-action"]] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const path = usePathname();
  return <header className="nav-wrap"><nav className="nav" aria-label="Primary navigation"><Wordmark /><div className="nav-links">{links.map(([label, href]) => <Link key={href} className={path === href ? "active" : ""} href={href}>{label}</Link>)}</div><button className="menu-button" onClick={() => setOpen((v) => !v)} aria-expanded={open} aria-label={open ? "Close menu" : "Open menu"}>{open ? <X /> : <Menu />}</button></nav><AnimatePresence>{open && <motion.div className="mobile-menu" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>{links.map(([label, href], index) => <Link key={href} href={href} onClick={() => setOpen(false)}><span>0{index + 1}</span>{label}</Link>)}</motion.div>}</AnimatePresence></header>;
}
