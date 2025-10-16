"use client"

import { useMemo, useState, useEffect, useRef } from "react"

type Skill = {
  title: string
  img: string
  alt: string
}

const skills: Skill[] = [
  { title: "UI/UX DESIGN", img: "https://res.cloudinary.com/dcwniwn2m/image/upload/v1760610782/unsplash_zvmZiw3vdsQ_iaff9k.png", alt: "UI/UX design wireframing on a tablet" },
  { title: "WEBSITE DEVELOPMENT", img: "https://res.cloudinary.com/dcwniwn2m/image/upload/v1760610781/unsplash_m_HRfLhgABo_umgzcj.png", alt: "Laptop and monitor with code editor" },
  { title: "GRAPHIC DESIGN", img: "https://res.cloudinary.com/dcwniwn2m/image/upload/v1760610781/unsplash_NmSPbe0bDtc_nisze2.png", alt: "Design books and printed layouts" },
]

export default function SkillsSection() {
  const [hovered, setHovered] = useState<number | null>(null)
  const [imagePos, setImagePos] = useState<{ top: string; left: string }>({ top: "50%", left: "50%" })
  const containerRef = useRef<HTMLDivElement>(null) // entire card
  const stageRef = useRef<HTMLDivElement>(null) // the stage area (position reference)
  const buttonsRef = useRef<HTMLElement[]>([]) // keep refs to buttons

  // Precompute opacity classes
  const opacities = useMemo(
    () => skills.map((_, i) => (hovered === null ? "opacity-100" : hovered === i ? "opacity-100" : "opacity-30")),
    [hovered],
  )

  // Keep buttonsRef updated
  useEffect(
    () => {
      const container = containerRef.current
      if (!container) return
      const nodeList = container.querySelectorAll<HTMLElement>(".skill-button")
      buttonsRef.current = Array.from(nodeList)
    },
    [
      /* runs after mount */
    ],
  )

  // Recompute image position whenever hovered changes or on resize
  useEffect(() => {
    const computePos = () => {
      if (hovered === null) {
        setImagePos({ top: "50%", left: "50%" })
        return
      }
      const stage = stageRef.current
      const btn = buttonsRef.current[hovered]
      if (!stage || !btn) {
        setImagePos({ top: "50%", left: "50%" })
        return
      }

      const btnRect = btn.getBoundingClientRect()
      const stageRect = stage.getBoundingClientRect()

      // center of the button relative to the stage
      const top = btnRect.top - stageRect.top + btnRect.height / 2
      const left = btnRect.left - stageRect.left + btnRect.width / 2

      // clamp values to stay inside stage (optional)
      const clampedTop = Math.max(0, Math.min(stageRect.height, top))
      const clampedLeft = Math.max(0, Math.min(stageRect.width, left))

      setImagePos({ top: `${clampedTop}px`, left: `${clampedLeft}px` })
    }

    // compute immediately (cover fonts/resizes)
    computePos()

    // recompute on resize and scroll (in case layout shifts)
    const ro = new ResizeObserver(computePos)
    if (stageRef.current) ro.observe(stageRef.current)
    window.addEventListener("resize", computePos)
    window.addEventListener("scroll", computePos, true)

    return () => {
      ro.disconnect()
      window.removeEventListener("resize", computePos)
      window.removeEventListener("scroll", computePos, true)
    }
  }, [hovered])

  return (
    <section id="skills" className="mx-auto px-6 py-12 md:py-14 lg:py-16">
      <div
        ref={containerRef}
        className="relative overflow-hidden rounded-3xl bg-[rgb(247,247,247)] p-6 md:p-8 lg:p-10 ring-1 ring-black/10"
      >
        <header className="mb-10 md:mb-14">
          <p className="eyebrow text-foreground">SKILLS</p>
          <p className="mt-2 text-foreground text-base md:text-lg lg:text-xl">
            A comprehensive look to what I offer...
          </p>
        </header>

        {/* Stage area: use this as the positioning reference for the images */}
        <div ref={stageRef} className="relative min-h-[240px] sm:min-h-[280px] md:min-h-[320px] lg:min-h-[360px] ">
          {/* Hover image layer: sits above non-hovered texts (z-49) but below hovered text (z-50) */}
          <div className="pointer-events-none absolute inset-0 z-49">
            {skills.map((s, i) => {
              const isVisible = hovered === i
              return (
                <img
                  key={s.title}
                  src={s.img || "/placeholder.svg"}
                  alt={s.alt}
                  // base classes
                  className={[
                    "absolute rounded-xl shadow-xl object-cover transition-all duration-450 ease-[cubic-bezier(0.22,1,0.36,1)]",
                    "w-[70%] max-w-[400px] aspect-square",
                    // visibility & subtle transform
                    isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95",
                  ].join(" ")}
                  style={{
                    // precise center based on hovered button (only meaningful for hovered image)
                    top: imagePos.top,
                    left: imagePos.left,
                    transform: `translate(-50%, -50%) rotate(${isVisible ? (i % 2 === 1 ? -4 : 4) : 0}deg)`,
                    transformOrigin: "center center",
                    // ensure image is above faded text but below hovered text:
                    zIndex: isVisible ? 99 : 0,
                    // animation when visible
                    animation: isVisible
                      ? `${i % 2 === 1 ? "popInCCW" : "popInCW"} 650ms cubic-bezier(0.22,1,0.36,1) both`
                      : undefined,
                  }}
                />
              )
            })}
          </div>

          {/* Skills text list */}
          <div className="relative z-auto flex flex-col items-center gap-6 md:gap-8">
            {skills.map((s, i) => {
              const isHovered = hovered === i
              const isFaded = hovered !== null && !isHovered
              return (
                <button
                  key={s.title}
                  type="button"
                  // skill-button used to gather live button refs
                  className={[
                    "skill-button relative select-none outline-none transition-all duration-300",
                    "text-center",
                    hovered === i ? "z-[100]" : "z-[10]",
                  ].join(" ")}
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                  onFocus={() => setHovered(i)}
                  onBlur={() => setHovered(null)}
                  aria-label={s.title}
                >
                  <span
                    className="block text-foreground font-semibold italic tracking-tight leading-none transition-transform duration-300"
                    style={{
                      fontSize: "clamp(28px, 6vw, 56px)",
                      opacity: isFaded ? 0.25 : 1,
                      transform: isFaded ? "translateY(8px)" : "translateY(0)",
                      WebkitFontSmoothing: "antialiased",
                    }}
                  >
                    {s.title}
                  </span>
                </button>
              )
            })}
          </div>
        </div>
      </div>

      {/* Inline keyframes */}
      <style jsx>{`
        @keyframes popInCW {
          0% {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.9) rotate(0deg);
          }
          60% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1.05) rotate(3deg);
          }
          100% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1) rotate(4deg);
          }
        }
        @keyframes popInCCW {
          0% {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.9) rotate(0deg);
          }
          60% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1.05) rotate(-3deg);
          }
          100% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1) rotate(-4deg);
          }
        }
      `}</style>
    </section>
  )
}
