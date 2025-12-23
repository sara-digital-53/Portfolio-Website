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
              href="/projects/dashboard-website-template"
              aria-label="Dashboard Website Template Project"
              className="group block overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="aspect-[1/1] overflow-hidden relative">
                <Image
                  src="/dashboard-website-template.jpg"
                  alt="Dashboard Website Template Project"
                  fill
                  className="object-cover transform-gpu transition-transform duration-500 ease-out group-hover:scale-105 will-change-transform"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
            </Link>

            {/* Project 2 */}
            <Link
              href="/projects/ecommerce-website-template"
              aria-label="Ecommerce Website Template Project"
              className="group block overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="aspect-[1/1] overflow-hidden relative">
                <Image
                  src="/Ecomm-Website-Template.jpg"
                  alt="Ecommerce Website Template Project"
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
