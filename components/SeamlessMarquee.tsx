"use client"

import { useEffect, useRef } from "react"

interface SeamlessMarqueeProps {
  text?: string
  pixelsPerSecond?: number
}

export default function SeamlessMarquee({
  text = "UI/UX Designer - Product Designer - Web Developer - ",
  pixelsPerSecond = 80, // tweak speed: higher = faster
}: SeamlessMarqueeProps) {
  const viewportRef = useRef<HTMLDivElement | null>(null)
  const trackRef = useRef<HTMLDivElement | null>(null)
  const contentRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!viewportRef.current || !trackRef.current || !contentRef.current) return

    const viewport = viewportRef.current
    const track = trackRef.current
    const content = contentRef.current

    const applyMeasurements = () => {
      const contentWidth = Math.ceil(content.offsetWidth)

      track.style.setProperty("--marquee-width", `${contentWidth}px`)
      track.style.setProperty("--track-width", `${contentWidth * 2}px`)

      const duration = Math.max(4, contentWidth / pixelsPerSecond)
      track.style.setProperty("--marquee-duration", `${duration}s`)
    }

    const fontsReady =
      typeof document !== "undefined" && document.fonts ? document.fonts.ready : Promise.resolve()

    fontsReady.then(() => {
      applyMeasurements()
      const ro = new ResizeObserver(applyMeasurements)
      ro.observe(content)
      window.addEventListener("resize", applyMeasurements)

      return () => {
        ro.disconnect()
        window.removeEventListener("resize", applyMeasurements)
      }
    })
  }, [text, pixelsPerSecond])

  return (
    <section className="mx-auto px-4 sm:px-10 pb-10 md:pb-16 lg:pb-24">
      <div ref={viewportRef} className="overflow-hidden w-full py-2 md:py-3" aria-hidden="false">
        <div
          ref={trackRef}
          className="flex items-center will-change-transform"
          style={{
            width: "var(--track-width, 200%)",
            animation: "marquee-translate var(--marquee-duration, 10s) linear infinite",
          }}
        >
          {/* First copy */}
          <div className="flex-shrink-0 inline-flex whitespace-nowrap m-0 p-0" ref={contentRef}>
            <h2
              className="inline-block text-black font-extrabold tracking-tight leading-none m-0 p-0"
              style={{
                fontSize: "clamp(60px, 9vw, 128px)",
                marginRight: "0.5em", // space between loops
                whiteSpace: "nowrap",
              }}
            >
              {text}
            </h2>
          </div>

          {/* Duplicated copy */}
          <div className="flex-shrink-0 inline-flex whitespace-nowrap m-0 p-0" aria-hidden="true">
            <h2
              className="inline-block text-black font-extrabold tracking-tight leading-none m-0 p-0"
              style={{
                fontSize: "clamp(60px, 9vw, 128px)",
                marginRight: "0.5em", // same spacing here
                whiteSpace: "nowrap",
              }}
            >
              {text}
            </h2>
          </div>
        </div>

        {/* Inline keyframes */}
        <style jsx>{`
          @keyframes marquee-translate {
            from {
              transform: translate3d(0, 0, 0);
            }
            to {
              transform: translate3d(calc(var(--marquee-width) * -1), 0, 0);
            }
          }
          @media (prefers-reduced-motion: reduce) {
            .marquee-track {
              animation: none;
            }
          }
        `}</style>
      </div>
    </section>
  )
}
