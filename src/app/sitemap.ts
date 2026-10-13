import type { MetadataRoute } from "next";
const routes = ["", "/explore", "/challenge", "/impact", "/rights", "/take-action", "/about", "/references", "/privacy", "/terms", "/educational-disclaimer", "/copyright", "/contact"];
export default function sitemap(): MetadataRoute.Sitemap { const base = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"; return routes.map((route) => ({ url: `${base}${route}`, changeFrequency: "monthly", priority: route === "" ? 1 : .8 })); }
