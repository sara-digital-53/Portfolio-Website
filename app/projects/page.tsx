"use client"
import SiteHeader from "@/components/site-header"
import FooterCta from "@/components/footer-cta"

export default function ProjectsPage() {
  return (
    <main className="w-full">
    <SiteHeader />
      <section id="projects" className="mx-auto px-6 py-10 md:py-14 lg:py-16">
        <div className="rounded-3xl  p-6 md:p-8 lg:p-10">
          <header className="mb-8 md:mb-10">
           <p id="projects-heading" className="eyebrow text-foreground">
            PROJECTS
          </p>
          <p className="mt-2 text-foreground text-base md:text-lg lg:text-xl">
            Explore my portfolio of creative solutions
          </p>
          </header>

          {/* Project grid */}
          <div className="grid gap-6 md:gap-8 md:grid-cols-2">
            {/* Project 1 */}
            <a
              href="/projects/sara-trophies"
              
              rel="noopener noreferrer"
              aria-label="Sara Trophies Project"
              className="group block overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="aspect-[1/1] overflow-hidden">
                <img
                  src="/images/design-mode/sara-trophies-project-main-image_xzibf6(1).png"
                  alt="Sara Trophies website showcase on laptop screen"
                  className="h-full w-full object-cover transform-gpu transition-transform duration-500 ease-out group-hover:scale-105 will-change-transform"
                />
              </div>
              
            </a>

            {/* Project 2 */}
            <a
              href="/projects/project-paints"
              
              rel="noopener noreferrer"
              aria-label="Project Paints Website"
              className="group block overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="aspect-[1/1] overflow-hidden">
                <img
                  src="/images/design-mode/project-paints-project-main-image_jpqpqm(1).png"
                  alt="Project Paints showcase on laptop screen"
                  className="h-full w-full object-cover transform-gpu transition-transform duration-500 ease-out group-hover:scale-105 will-change-transform"
                />
              </div>
              
            </a>
          </div>
        </div>
      </section>
      <FooterCta />
    </main>
  )
}
