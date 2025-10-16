"use client"

import SiteHeader from "@/components/site-header"
import FooterCta from "@/components/footer-cta"

export default function SkillsPage() {
  return (
    <main className="w-full">
      <SiteHeader />

      {/* Intro Section */}
      <section className="mx-auto px-6 py-10 md:py-14 lg:py-16 bg-white text-center">
        <div className="max-w-3xl mx-auto">
          <h1
            className="font-extrabold text-foreground leading-tight tracking-tight"
            style={{ fontSize: "clamp(32px, 5vw, 54px)" }}
          >
            My Skillset — Bridging Design & Development
          </h1>
          <p className="mt-4 text-base md:text-lg lg:text-xl text-muted-foreground">
            A versatile blend of creative design and technical expertise, empowering me to craft digital experiences that are visually stunning, performant, and user-focused.
          </p>
        </div>
      </section>

      {/* Web Development Skills */}
      <section className="mx-auto px-6 py-10 md:py-14 lg:py-16">
        <div className="rounded-3xl border p-6 md:p-8 lg:p-10 bg-black/4">
          <header className="text-center mb-8">
            <p className="eyebrow text-foreground">WEB DEVELOPMENT</p>
            <p className="mt-2 text-foreground text-base md:text-lg lg:text-xl">
              Tools & technologies I use to bring digital ideas to life
            </p>
          </header>

          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {[
              "HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js",
              "Node.js", "Express", "MongoDB", "GSAP"
            ].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 rounded-full bg-background border text-foreground text-sm md:text-base font-medium hover:bg-foreground hover:text-background transition-colors duration-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Design Skills */}
      <section className="mx-auto px-6 py-10 md:py-14 lg:py-16 bg-white">
        <div className="rounded-3xl border p-6 md:p-8 lg:p-10">
          <header className="text-center mb-8">
            <p className="eyebrow text-foreground">WEB & GRAPHIC DESIGN</p>
            <p className="mt-2 text-foreground text-base md:text-lg lg:text-xl">
              Designing intuitive, meaningful, and visually refined interfaces
            </p>
          </header>

          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {[
              "Figma", "Adobe XD", "Framer", "Photoshop", "Illustrator"
            ].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 rounded-full bg-muted border text-foreground text-sm md:text-base font-medium hover:bg-foreground hover:text-background transition-colors duration-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Other Skills */}
      <section className="mx-auto px-6 py-10 md:py-14 lg:py-16">
        <div className="rounded-3xl border p-6 md:p-8 lg:p-10 bg-black/4">
          <header className="text-center mb-8">
            <p className="eyebrow text-foreground">OTHER SKILLS</p>
            <p className="mt-2 text-foreground text-base md:text-lg lg:text-xl">
              Complementary skills that shape my holistic problem-solving mindset
            </p>
          </header>

          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {[
              "C++", "Python", "AI", "Problem Solving"
            ].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 rounded-full bg-background border text-foreground text-sm md:text-base font-medium hover:bg-foreground hover:text-background transition-colors duration-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      <FooterCta />
    </main>
  )
}
