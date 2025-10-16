"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

interface ScrollHeadingProps {
  textLines: string[]
}

export function ScrollRevealHeading({ textLines }: ScrollHeadingProps) {
  const sectionRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    const section = sectionRef.current
    const fillLayer = section.querySelector<HTMLHeadingElement>("h2:nth-of-type(3)")

    if (!fillLayer) return

    // Animate the --reveal CSS variable from 0% to 100% as user scrolls
    gsap.fromTo(
      fillLayer,
      { clipPath: "inset(0 100% 0 0)" },
      {
        clipPath: "inset(0 0% 0 0)",
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top 90%",
          end: "bottom 20%",
          scrub: true, // smooth scrubbing, tied to scroll
        },
      }
    )

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill())
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      className="mx-auto w-full max-w-[1400px] px-6 py-16 md:py-24 lg:py-28"
    >
      <div className="relative">
        {/* Outline */}
        <h2
          className="text-center font-semibold leading-[1.08] tracking-tight text-transparent"
          style={{ WebkitTextStroke: "2px #000", fontSize: "clamp(44px, 8vw, 120px)" }}
          aria-hidden="true"
        >
          {textLines.map((line, i) => (
            <span key={i} className="block">
              {line}
            </span>
          ))}
        </h2>

        {/* White mask */}
        <h2
          className="absolute inset-0 text-center font-semibold leading-[1.08] tracking-tight text-white pointer-events-none select-none"
          style={{ fontSize: "clamp(44px, 8vw, 120px)" }}
          aria-hidden="true"
        >
          {textLines.map((line, i) => (
            <span key={i} className="block">
              {line}
            </span>
          ))}
        </h2>

        {/* Fill layer */}
        <h2
          className="absolute inset-0 text-center font-semibold leading-[1.08] tracking-tight text-black pointer-events-none select-none"
          style={{ fontSize: "clamp(44px, 8vw, 120px)", clipPath: "inset(0 100% 0 0)" }}
          aria-hidden="true"
        >
          {textLines.map((line, i) => (
            <span key={i} className="block">
              {line}
            </span>
          ))}
        </h2>

        <p className="sr-only">{textLines.join(" ")}</p>
      </div>
    </section>
  )
}

export default ScrollRevealHeading
