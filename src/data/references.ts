export type ReferenceItem = { title: string; author?: string; publisher: string; date?: string; url: string; license?: string; note?: string };
export type ReferenceCategory = { id: string; title: string; intro: string; items: ReferenceItem[]; reviewNote?: string };

export const referenceCategories: ReferenceCategory[] = [
  { id: "academic", title: "Academic studies", intro: "Peer-reviewed studies should be added only when a specific claim on UNLABEL relies on them.", items: [], reviewNote: "No academic paper is currently cited by the implemented experience. Add verified records before making research-based claims." },
  { id: "statistics", title: "Statistics", intro: "Primary statistical sources used in the Impact experience.", items: [
    { title: "Labor Force Survey OpenSTAT table", author: "Philippine Statistics Authority", publisher: "Philippine Statistics Authority", date: "January 2024 data", url: "https://openstat.psa.gov.ph/PXWeb/pxweb/en/DB/DB__1B__LFS/0021B3FKEI2.px/table/tableViewLayout2/", note: "Used for labor-force participation values by sex." },
    { title: "2024 Annual Provincial Labor Market Statistics", author: "Philippine Statistics Authority", publisher: "Philippine Statistics Authority", date: "2024 preliminary annual estimate", url: "https://psa.gov.ph/statistics/labor-force-survey/node/1684077703", note: "Used for the annual labor-force participation context." },
  ] },
  { id: "laws", title: "Philippine laws", intro: "Authoritative pages linked from the Rights experience. UNLABEL provides summaries, not legal advice.", items: [
    { title: "Republic Act No. 6725", author: "Congress of the Philippines", publisher: "The Lawphil Project, Arellano Law Foundation", date: "May 12, 1989", url: "https://lawphil.net/statutes/repacts/ra1989/ra_6725_1989.html" },
    { title: "Republic Act No. 9710 — Magna Carta of Women", author: "Congress of the Philippines", publisher: "Philippine Commission on Women", date: "August 14, 2009", url: "https://pcw.gov.ph/magna-carta-of-women/" },
    { title: "Republic Act No. 11313 — Safe Spaces Act", author: "Congress of the Philippines", publisher: "The Lawphil Project, Arellano Law Foundation", date: "April 17, 2019", url: "https://lawphil.net/statutes/repacts/ra2019/ra_11313_2019.html" },
  ] },
  { id: "images", title: "Images and visual material", intro: "Current visuals are generated with project code and CSS rather than third-party photographs or illustrations.", items: [], reviewNote: "The public asset folders currently contain no published image, model, or texture files. Record creator, source URL, and license here before adding third-party media." },
  { id: "fonts", title: "Fonts", intro: "Font files are bundled locally; visitors do not request them from Google Fonts or another font CDN.", items: [
    { title: "Inter", author: "The Inter Project Authors", publisher: "Fontsource package", url: "https://fontsource.org/fonts/inter", license: "SIL Open Font License 1.1" },
    { title: "Space Grotesk", author: "The Space Grotesk Project Authors", publisher: "Fontsource package", url: "https://fontsource.org/fonts/space-grotesk", license: "SIL Open Font License 1.1" },
  ] },
  { id: "assets", title: "Third-party software and assets", intro: "Core libraries used to build interactions and interface elements.", items: [
    { title: "Lucide React", publisher: "Lucide Contributors", url: "https://lucide.dev/", license: "ISC License" },
    { title: "Three.js", publisher: "Three.js Authors", url: "https://threejs.org/", license: "MIT License" },
    { title: "Motion", publisher: "Motion contributors", url: "https://motion.dev/", license: "MIT License" },
    { title: "GSAP", publisher: "GreenSock", url: "https://gsap.com/licensing/", license: "GSAP Standard License; owner must confirm deployment use remains within current terms." },
  ] },
];
