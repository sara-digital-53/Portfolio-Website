"use client"

export default function FooterCTA() {
  return (
    <footer id="contact" aria-labelledby="footer-heading" className="w-full">
      <div className="mx-auto px-6 py-14 md:py-20">
        {/* Top row: headline + CTA */}
        <div className="grid items-center gap-10 md:gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h2
              id="footer-heading"
              className="text-foreground heading-display text-balance"
              style={{ fontSize: "clamp(40px, 8vw, 88px)" }}
            >
              {"Let’s Connect"}
            </h2>

            <p className="mt-2 text-foreground text-base md:text-lg lg:text-xl">
              Curios about what we can create together, Let’s bring something extraordinary to life!
            </p>

            {/* Social icons */}
            <div className="mt-6 flex items-center gap-4">
              {/* LinkedIn */}
              <a
                href="https://linkedin.com/in/haider-soni-03018026a/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-foreground text-foreground transition-all duration-200 hover:scale-[1.06] hover:bg-foreground hover:text-background"
              >
                {/* Filled LinkedIn glyph */}
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8.5h4V23h-4V8.5zM8.5 8.5h3.8v2h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.09V23h-4v-5.94c0-1.41-.02-3.22-1.96-3.22-1.96 0-2.26 1.53-2.26 3.12V23h-4V8.5z" />
                </svg>
              </a>

              {/* Dribbble */}
              <a
                href="https://dribbble.com/HYBS786"
                target="_blank"
                rel="noreferrer"
                aria-label="Dribbble"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-foreground text-foreground transition-all duration-200 hover:scale-[1.06] hover:bg-foreground hover:text-background"
              >
                {/* Outline basketball glyph */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <circle cx="12" cy="12" r="9" />
                  <path d="M3.6 9.6c3.6 0 9 .3 12.6 4.8M7.5 3.9c2.7 3 5.4 7.2 7.2 16.2M20.4 9.6c-4.2 0-8.4 1.2-12.6 7.5" />
                </svg>
              </a>
            </div>
          </div>

          {/* CTA button */}
          <div className="lg:col-span-5 flex lg:justify-end">
            <a
              href="mailto:haidersoni47@gmail.com"
              className="group inline-flex items-center gap-3 rounded-full bg-foreground text-background pl-2 pr-5 py-2.5 md:pl-3 md:pr-6 md:py-3 shadow-[0_6px_30px_-10px_rgba(0,0,0,0.4)] transition-transform duration-200 hover:translate-x-[2px]"
              aria-label="Get in touch"
            >
              <span className="inline-flex h-8 w-8 md:h-9 md:w-9 items-center justify-center rounded-full bg-background/15 ring-1 ring-background/25 transition-all duration-200 group-hover:bg-background/20">
                {/* Double chevrons that nudge on hover */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="h-4 w-4 translate-x-0 transition-transform duration-200 group-hover:translate-x-[2px]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M8 5l8 7-8 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <span className="text-sm md:text-base font-medium">Get in Touch</span>
            </a>
          </div>
        </div>

        {/* Bottom row */}
        <div className="mt-14 flex flex-col items-center md:items-start justify-between gap-6 text-sm text-foreground/80 md:flex-row md:items-center">
          {/* Contact links with subtle underline animation (like nav) */}
          <div className="flex flex-wrap items-center justify-center gap-8">
            <a href="mailto:haidersoni47@gmail.com" className="group relative inline-block">
              <span className="relative z-10">haidersoni47@gmail.com</span>
              <span className="absolute left-0 -bottom-0.5 h-[2px] w-0 bg-foreground transition-all duration-300 group-hover:w-full" />
            </a>

            <a href="tel:+919131103353" className="group relative inline-block">
              <span className="relative z-10">+91-9131103353</span>
              <span className="absolute left-0 -bottom-0.5 h-[2px] w-0 bg-foreground transition-all duration-300 group-hover:w-full" />
            </a>
          </div>

          <p className="text-center text-muted-foreground">All rights reserved, Haider ©2025</p>
        </div>
      </div>
    </footer>
  )
}
