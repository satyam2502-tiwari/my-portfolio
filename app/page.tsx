import HeroSection from "@/components/sections/HeroSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ExperienceSection from "@/components/sections/ExperienceSection";

export default function HomePage() {
  return (
    <main id="main-content" className="flex-1">
      <HeroSection />
      <ProjectsSection />
      <ExperienceSection />
    </main>
  );
}
