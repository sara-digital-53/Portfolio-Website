"use client"

import SiteHeader from "@/components/site-header"
import FooterCta from "@/components/footer-cta"
import Link from "next/link"
import Image from "next/image"

export default function ProjectsPage() {
  return (
    <main className="w-full">
      <SiteHeader />
      <section id="projects" className="mx-auto px-6 py-10 md:py-14 lg:py-16">
        <div className="rounded-3xl p-6 md:p-8 lg:p-10">
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
            <Link
              href="/projects/sara-trophies"
              aria-label="Sara Trophies Project"
              className="group block overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="aspect-[1/1] overflow-hidden relative">
                <Image
                  src="https://res.cloudinary.com/dcwniwn2m/image/upload/v1760610781/sara-trophies-project-main-image_xzibf6.png"
                  alt="Sara Trophies website showcase on laptop screen"
                  fill
                  className="object-cover transform-gpu transition-transform duration-500 ease-out group-hover:scale-105 will-change-transform"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
            </Link>

            {/* Project 2 */}
            <Link
              href="/projects/project-paints"
              aria-label="Project Paints Website"
              className="group block overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="aspect-[1/1] overflow-hidden relative">
                <Image
                  src="https://res.cloudinary.com/dcwniwn2m/image/upload/v1760610781/project-paints-project-main-image_jpqpqm.png"
                  alt="Project Paints showcase on laptop screen"
                  fill
                  className="object-cover transform-gpu transition-transform duration-500 ease-out group-hover:scale-105 will-change-transform"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </Link>
          </div>
        </div>
      </section>
      <FooterCta />
    </main>
  )
}
