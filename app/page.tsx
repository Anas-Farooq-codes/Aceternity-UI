import { navItems } from "@/data";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import { FloatingNav } from "@/components/Ui/FloatingNavbar";
import RecentProjects from "@/components/RecentProjects";
import { FeaturesSectionDemo } from "@/components/FeaturesSectionDemo";
import { CanvasRevealEffectDemo } from "@/components/CanvasRevealEffectDemo";
import  Clients from "@/components/Clients";
import {LayoutGridDemo} from "@/components/LayoutGridDemo";

export default function Home() {
  return (
    <main className="relative bg-black flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full"></div>
      <FloatingNav navItems={navItems}/>
      <Hero/>
      <Experience/>
      <RecentProjects/>
      <FeaturesSectionDemo/>
      <CanvasRevealEffectDemo/>
      <Clients/>
      <LayoutGridDemo/>
    </main>
  );
}
