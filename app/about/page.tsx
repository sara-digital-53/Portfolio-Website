"use client"
import SiteHeader from "@/components/site-header"
import FooterCta from "@/components/footer-cta"

export default function AboutPage() {
  return (
    <main className="w-full">
      <SiteHeader />
      {/* Intro Section */}
      <section className="mx-auto px-6 py-10 md:py-14 lg:py-16 bg-white">
        <div className="text-center max-w-3xl mx-auto">
          <h1
            className="font-extrabold text-foreground leading-tight tracking-tight"
            style={{ fontSize: "clamp(32px, 5vw, 54px)" }}
          >
            Crafting Digital Experiences that Inspire and Perform
          </h1>
          <p className="mt-4 text-base md:text-lg lg:text-xl text-muted-foreground">
            I’m a passionate <strong>UI/UX Designer</strong> and <strong>Full-Stack Web Developer</strong> with over
            5 years of experience designing and developing seamless digital experiences for businesses and brands.
          </p>
        </div>

        <div className="mt-8 flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1400&auto=format&fit=crop"
            alt="Creative designer workspace with laptop and sketches"
            className="rounded-3xl object-cover w-full max-w-[900px] h-auto shadow-sm"
          />
        </div>
      </section>

      {/* Approach Section */}
      <section className="mx-auto px-6 py-10 md:py-14 lg:py-16">
        <div className="rounded-3xl border p-6 md:p-8 lg:p-10">
          <header>
            <p className="eyebrow text-foreground">APPROACH</p>
            <p className="mt-2 text-foreground text-base md:text-lg lg:text-xl">
              Designing with empathy, developing with precision
            </p>
          </header>

          <div className="mt-8 grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-foreground text-lg md:text-xl leading-relaxed">
                I believe great design is born from empathy — understanding users deeply and translating those insights
                into intuitive, meaningful interfaces. My process combines{" "}
                <strong>user-centered design</strong> with <strong>clean, scalable development</strong> so that every
                product not only looks great but works flawlessly.
              </p>
              <p className="mt-4 text-muted-foreground">
                From interactive prototypes to production-ready code, I ensure every detail reflects the brand’s purpose
                and user’s needs.
              </p>
            </div>

            <div className="flex justify-center">
                <img
                  src="https://images.unsplash.com/photo-1581090700227-1e37b190418e?q=80&w=1000&auto=format&fit=crop"
                  alt="Designer sketching wireframes during the UI/UX process"
                  className="rounded-2xl object-cover w-full max-w-[460px] h-auto shadow-sm"
                />
            </div>

          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="mx-auto px-6 py-10 md:py-14 lg:py-16">
        <div className="rounded-3xl border  p-6 md:p-8 lg:p-10">
          <header>
            <p className="eyebrow text-foreground">EXPERIENCE</p>
            <p className="mt-2 text-foreground text-base md:text-lg lg:text-xl">
              5+ years building digital products that connect design and technology
            </p>
          </header>

          <div className="mt-8 grid md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1 flex justify-center">
              <img
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1000&auto=format&fit=crop"
                alt="Developer coding interface on modern workstation"
                className="rounded-2xl object-cover w-full max-w-[460px] h-auto shadow-sm"
              />
            </div>

            <div className="order-1 md:order-2">
              <p className="text-foreground text-lg md:text-xl leading-relaxed">
                Over the years, I’ve designed and developed <strong>brand websites, web applications, and interactive
                experiences</strong> for a variety of businesses — from small startups to established enterprises.
              </p>
              <p className="mt-4 text-muted-foreground">
                My skillset spans from crafting smooth user journeys and prototypes in Figma to coding responsive
                front-end interfaces and robust back-end architectures using{" "}
                <strong>Next.js, Node.js, MongoDB</strong>, and modern frameworks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="mx-auto px-6 py-10 md:py-14 lg:py-16 ">
        <div className="rounded-3xl border bg-background p-6 md:p-8 lg:p-10 text-center">
          <header>
            <p className="eyebrow text-foreground">PHILOSOPHY</p>
          </header>
          <p className="mt-6 text-foreground text-xl md:text-2xl lg:text-3xl font-semibold leading-relaxed max-w-3xl mx-auto">
            My goal is simple — to blend{" "}
            <span className="text-muted-foreground font-normal">design, development, and storytelling</span> into
            experiences that people love to use and businesses love to own.
          </p>

          <div className="mt-8 flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1400&auto=format&fit=crop"
              alt="Creative workspace with sunlight and minimal desk setup"
              className="rounded-3xl object-cover w-full max-w-[900px] h-auto shadow-sm"
            />
          </div>
        </div>
      </section>
      <FooterCta />
    </main>
  )
}
