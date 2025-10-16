"use client"

import React, { useState } from "react"
import Link from "next/link"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

function GridFilledIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" {...props}>
      <rect x="3" y="3" width="8" height="8" rx="1.5" fill="currentColor" />
      <rect x="13" y="3" width="8" height="8" rx="1.5" fill="currentColor" />
      <rect x="3" y="13" width="8" height="8" rx="1.5" fill="currentColor" />
      <rect x="13" y="13" width="8" height="8" rx="1.5" fill="currentColor" />
    </svg>
  )
}

function GridOutlineIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" {...props}>
      <rect x="3" y="3" width="8" height="8" rx="1.5" fill="none" stroke="currentColor" strokeWidth="2" />
      <rect x="13" y="3" width="8" height="8" rx="1.5" fill="none" stroke="currentColor" strokeWidth="2" />
      <rect x="3" y="13" width="8" height="8" rx="1.5" fill="none" stroke="currentColor" strokeWidth="2" />
      <rect x="13" y="13" width="8" height="8" rx="1.5" fill="none" stroke="currentColor" strokeWidth="2" />
    </svg>
  )
}

export default function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="w-full">
      <div className="mx-auto py-6 px-4 sm:px-10 flex items-center justify-between">
        {/* Logo / Home */}
        <Link href="/" className="text-foreground font-semibold tracking-tight text-lg" aria-label="Home">
          HAIDER
        </Link>

        {/* Desktop Nav */}
        <nav aria-label="Primary" className="hidden sm:flex items-center gap-8">
          <Link href="/about" className="text-foreground hover:opacity-70 transition-opacity">
            About
          </Link>
          <Link href="/projects" className="text-foreground hover:opacity-70 transition-opacity">
            Projects
          </Link>
          <Link href="/skills" className="text-foreground hover:opacity-70 transition-opacity">
            Skills
          </Link>
          <Link
            href="mailto:haidersoni47@gmail.com"
            className="rounded-full bg-foreground text-background px-5 py-2 font-medium hover:opacity-90 transition-opacity"
          >
            Contact
          </Link>
        </nav>

        {/* Mobile Menu */}
        <div className="sm:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button
                aria-label={open ? "Close menu" : "Open menu"}
                className="inline-flex h-10 w-10 items-center justify-center rounded-md text-foreground hover:bg-foreground/5"
              >
                {open ? <GridOutlineIcon /> : <GridFilledIcon />}
              </button>
            </SheetTrigger>

            <SheetContent side="top" className="bg-background text-foreground">
              <div className="px-6 pt-12 pb-6 flex justify-center items-end flex-col gap-5">
                <Link href="/about" onClick={() => setOpen(false)} className="text-lg">
                  About
                </Link>
                <Link href="/projects" onClick={() => setOpen(false)} className="text-lg">
                  Projects
                </Link>
                <Link href="/skills" onClick={() => setOpen(false)} className="text-lg">
                  Skills
                </Link>
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="mt-2 inline-flex w-max rounded-full bg-foreground text-background px-5 py-2 font-medium"
                >
                  Contact
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
