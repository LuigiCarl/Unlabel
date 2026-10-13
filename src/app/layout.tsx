import type { Metadata, Viewport } from "next";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/space-grotesk/400.css";
import "@fontsource/space-grotesk/500.css";
import "@fontsource/space-grotesk/600.css";
import "@fontsource/space-grotesk/700.css";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CustomCursor } from "@/components/ui/CustomCursor";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
export const metadata: Metadata = { metadataBase: new URL(siteUrl), title: { default: "UNLABEL® — Break the Labels", template: "%s — UNLABEL®" }, description: "An immersive educational experience challenging gender stereotypes and the expectations they create.", applicationName: "UNLABEL®", keywords: ["gender stereotypes", "gender equality", "education", "Philippines"], openGraph: { type: "website", title: "UNLABEL® — Break the Labels", description: "Question inherited expectations. Redefine possibility.", siteName: "UNLABEL®" }, twitter: { card: "summary_large_image", title: "UNLABEL® — Break the Labels", description: "Question inherited expectations. Redefine possibility." }, alternates: { canonical: "/" }, manifest: "/manifest.webmanifest" };
export const viewport: Viewport = { themeColor: "#101014", colorScheme: "dark" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en" data-scroll-behavior="smooth"><body id="top"><a className="skip-link" href="#content">Skip to content</a><CustomCursor /><Navbar /><div id="content">{children}</div><Footer /></body></html>; }
