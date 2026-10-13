import { HeroSection } from "@/components/sections/HeroSection";
import { Manifesto } from "@/components/sections/Manifesto";
import { RouteIndex } from "@/components/sections/RouteIndex";
import { KineticBand } from "@/components/sections/KineticBand";
import { TwoWorlds } from "@/components/sections/TwoWorlds";
import { BreakLabels } from "@/components/sections/BreakLabels";

export default function Home() { return <main><HeroSection /><KineticBand /><Manifesto /><BreakLabels /><TwoWorlds /><RouteIndex /></main>; }
