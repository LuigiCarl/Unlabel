"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { Wordmark } from "@/components/ui/Wordmark";

const links = [["Explore", "/explore"], ["Challenge", "/challenge"], ["Impact", "/impact"], ["Rights", "/rights"], ["Take action", "/take-action"]] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const previousScrollY = useRef(0);
  const path = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollingDown = currentScrollY > previousScrollY.current + 8;
      const scrollingUp = currentScrollY < previousScrollY.current - 8;
      if (currentScrollY <= 8 || scrollingUp) setHidden(false);
      else if (scrollingDown && !open) setHidden(true);
      previousScrollY.current = currentScrollY;
    };

    previousScrollY.current = window.scrollY;
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [open]);

  return <header className={`nav-wrap${hidden && !open ? " nav-hidden" : ""}`}><nav className="nav" aria-label="Primary navigation"><Wordmark /><div className="nav-links">{links.map(([label, href]) => <Link key={href} className={path === href ? "active" : ""} href={href}>{label}</Link>)}</div><button className="menu-button" onClick={() => setOpen((v) => !v)} aria-expanded={open} aria-label={open ? "Close menu" : "Open menu"}>{open ? <X /> : <Menu />}</button></nav><AnimatePresence>{open && <motion.div className="mobile-menu" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>{links.map(([label, href], index) => <Link key={href} href={href} onClick={() => setOpen(false)}><span>0{index + 1}</span>{label}</Link>)}</motion.div>}</AnimatePresence></header>;
}
