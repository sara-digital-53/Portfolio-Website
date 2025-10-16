import SiteHeader from "@/components/site-header"
import Hero from "@/components/hero"
import { AboutSection } from "@/components/about-section"

import ProjectsSection from "@/components/projects-section"
import SkillsSection from "@/components/skills-section"
import FooterCTA from "@/components/footer-cta"
import ScrollRevealHeading from "@/components/ScrollRevealingHeading"

export default function Page() {
  return (
    <div className="min-h-dvh bg-[#ffffff]">
      <SiteHeader />
      <Hero />
      <AboutSection />
      <ScrollRevealHeading
  textLines={["Designs that feel like art!!!", "Art that Converts"]}
/>
      <ProjectsSection />
      <ScrollRevealHeading
  textLines={["What I Love is What I", "Provide!!!"]}
/>
      <SkillsSection />
      <FooterCTA />
    </div>
  )
}
