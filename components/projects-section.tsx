"use client"

import Image from "next/image"
import Link from "next/link"

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="mx-auto px-6 py-10 md:py-14 lg:py-16"
    >
      <div className="rounded-3xl border bg-muted p-6 md:p-8 lg:p-10">
        <header>
          <p id="projects-heading" className="eyebrow text-foreground">
            PROJECTS
          </p>
          <p className="mt-2 text-foreground text-base md:text-lg lg:text-xl">
            Explore my portfolio of creative solutions
          </p>
        </header>

        <div className="mt-8 md:mt-10 grid gap-6 md:gap-8 md:grid-cols-2">
          {/* Project 1 */}
          <Link
            href="/projects/dashboard-website-template"
            aria-label="Project 1"
            className="group block overflow-hidden bg-white shadow-sm"
          >
            <div className="aspect-[1/1] overflow-hidden">
              <Image
                src="/dashboard-website-template.jpg"
                alt="Dashboard Website Template Project"
                width={800}
                height={800}
                className="h-full w-full object-cover transform-gpu transition-transform duration-500 ease-out group-hover:scale-105 will-change-transform"
                priority
              />
            </div>
          </Link>

          {/* Project 2 */}
          <Link
            href="/projects/ecommerce-website-template"
            aria-label="Project 2"
            className="group block overflow-hidden bg-white shadow-sm"
          >
            <div className="aspect-[1/1] overflow-hidden">
              <Image
                src="/Ecomm-Website-Template.jpg"
                alt="Ecommerce Website Template Project"
                width={800}
                height={800}
                className="h-full w-full object-cover transform-gpu transition-transform duration-500 ease-out group-hover:scale-105 will-change-transform"
              />
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}
