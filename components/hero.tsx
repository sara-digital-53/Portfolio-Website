"use client"
import SeamlessMarquee from "@/components/SeamlessMarquee"

export default function Hero() {
  return (
    <main className="w-full">
      {/* Top hero grid */}
      <section className="mx-auto px-4 sm:px-10 pt-6 pb-8 lg:pb-14 sm:my-5">
        <div className="mt-8 grid gap-10 md:grid-cols-12 items-center md:items-end">
          {/* Portrait */}
          <div className="order-1 md:order-2 md:col-span-4 ">
            <div className="w-full flex justify-start md:justify-end">
              <img
                src="/profile-image.jpg"
                alt="Portrait photograph"
                className="h-40 w-40 md:h-60 md:w-60 object-cover rounded-2xl shadow-[0_0_0_0_rgba(0,0,0,0)]"
              />
            </div>
          </div>

          {/* Intro copy */}
          <div className="order-2 md:order-1 md:col-span-8 ">
            <h1
              className="text-foreground text-pretty tracking-[-0.01em] leading-[1.2] w-full"
              style={{ fontSize: "clamp(22px, 3vw, 36px)" }}
            >
              {
                "Hello, I'm a designer & a full-stack developer with 5+ years of experience --- based in India, working remote."
              }
            </h1>
          </div>
        </div>
      </section>

      {/* Oversized bottom headline */}

      <SeamlessMarquee />
    </main>
  )
}
