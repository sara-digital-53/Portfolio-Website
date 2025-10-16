"use client";
import Image from "next/image";
import { notFound } from "next/navigation";
import { projectsData } from "../projectsData";
import SiteHeader from "@/components/site-header"
import FooterCta from "@/components/footer-cta"

interface ProjectPageProps {
  params: Promise<{
    slug: string
  }>
}

export default async  function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) return notFound();

  return (
  <main className="w-full">
    <SiteHeader />
    <div className="min-h-screen bg-white px-6 md:px-16 py-12 text-gray-800">

      {/* Project meta section */}
      <div className="flex flex-col items-center mb-16">
        {/* Right-aligned details */}
        <div className="w-full flex justify-end text-sm text-gray-600 uppercase tracking-wider space-y-1 mb-6">
        <div>
          <p>
            <span className="font-semibold text-gray-800">Industry:</span>{" "}
            {project.industry}
          </p>
          <p>
            <span className="font-semibold text-gray-800">Year:</span>{" "}
            {project.year}
          </p>
          <p>
            <span className="font-semibold text-gray-800">Client:</span>{" "}
            {project.client}
          </p>
          </div>
        </div>

        {/* Title */}
        

        {/* Main Image */}
        <div className="flex grid grid-cols-1 sm:grid-cols-2 justify-center items-center w-full">
          

          <Image
            src={project.mainImage}
            alt={project.title}
            width={800}
            height={500}
            className="object-cover "
          />
          
          <h1 className="text-3xl md:text-4xl font-bold uppercase mb-6 text-center">
          {project.title}
        </h1>
        </div>
      </div>

      {/* Sub images */}
      <div className="grid grid-cols-2 gap-6 mb-12">
        {project.subImages.map((img, idx) => (
          <Image
            key={idx}
            src={img}
            alt={`${project.title} preview ${idx + 1}`}
            width={600}
            height={400}
            className="object-cover w-full"
          />
        ))}
      </div>

      {/* Case Study Content */}
      <div className="bg-neutral-50 p-8 space-y-10 shadow-sm">
        {/* About */}
        <div>
          <h3 className="text-lg font-semibold mb-2">ABOUT PROJECT</h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            {project.about}
          </p>
          {project.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 px-4 py-2 bg-black text-white rounded-full text-sm hover:opacity-80 transition"
            >
              View Live
            </a>
          )}
        </div>

        {/* Objectives */}
        <div>
          <h3 className="text-lg font-semibold mb-2">OBJECTIVES</h3>
          <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
            {project.objectives.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Approach */}
        <div>
          <h3 className="text-lg font-semibold mb-2">APPROACH & SOLUTIONS</h3>
          <ul className="list-disc list-inside text-sm text-gray-700 space-y-2">
            {project.approach.map((step, idx) => (
              <li
                key={idx}
                dangerouslySetInnerHTML={{
                  __html: step.replace(/\*\*(.*?)\*\*/g, "<b>$1</b>"),
                }}
              />
            ))}
          </ul>
        </div>

        {/* Results */}
        <div>
          <h3 className="text-lg font-semibold mb-2">RESULTS</h3>
          <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
            {project.results.map((res, idx) => (
              <li key={idx}>{res}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
    <FooterCta />
    </main>
  );
}
