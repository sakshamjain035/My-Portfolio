import Navbar from "@/components/ui/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import AiEngineSection from "@/components/sections/AiEngineSection";
import AiAuditTool from "@/components/sections/AiAuditTool";
import SkillsSection from "@/components/sections/SkillsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import FaqSection from "@/components/sections/FaqSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/ui/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#050711] text-slate-100 flex flex-col">
      <Navbar />
      <HeroSection />
      <AiEngineSection />
      <AiAuditTool />
      <SkillsSection />
      <ProjectsSection />
      <FaqSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
