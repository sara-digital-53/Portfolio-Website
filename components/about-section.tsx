export default function AboutSection() {
  return (
    <section id="about" aria-labelledby="about-heading" className="mx-auto px-6 py-10 md:py-14 lg:py-16">
      <div className="rounded-3xl border bg-muted p-6 md:p-8 lg:p-10">
        <header>
          <p id="about-heading" className="eyebrow text-foreground">
            ABOUT
          </p>
          <p className="mt-2 text-foreground text-base md:text-lg lg:text-xl">
            Design has always been more than just a job - It&apos;s a passion
          </p>
        </header>

        {/* Centered image */}
        <div className="mt-8 flex justify-center">
          <img
            src="/images/design-mode/unsplash_hGV2TfOh0ns_dqx4ss(1).png"
            alt="Workspace desk with laptop and monitor"
            className="w-[520px] max-w-full h-auto rounded-md md:rounded-lg object-cover"
          />
        </div>

        {/* Closing statement */}
        <p className="mt-8 text-right text-foreground font-semibold text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto">
          Designing &amp; Developing High-Quality websites is what I am really passionate about
        </p>
      </div>
    </section>
  )
}

export { AboutSection }
