"use client"
import { useEffect } from "react"
import gsap from "gsap"

export default function HeroBanner() {
  useEffect(() => {
    gsap.to("#blob1", { duration: 6, scale: 1.1, yoyo: true, repeat: -1, ease: "sine.inOut" })
    gsap.to("#blob2", { duration: 8, x: 20, yoyo: true, repeat: -1, ease: "sine.inOut" })
  }, [])

  return (
    <section className="flex items-center justify-center min-h-screen bg-slate-900 relative overflow-hidden">
      <svg
        viewBox="0 0 1200 500"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0 w-full h-full"
      >
        <defs>
          <linearGradient id="grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#0ea5e9" />
            <stop offset="100%" stopColor="#6366f1" />
          </linearGradient>
        </defs>

        <rect width="1200" height="500" fill="url(#grad)" />

        <circle id="blob1" cx="250" cy="150" r="180" fill="#22d3ee" opacity="0.25" />
        <circle id="blob2" cx="950" cy="350" r="160" fill="#8b5cf6" opacity="0.25" />
      </svg>

      <div className="relative z-10 text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold text-white drop-shadow-lg">
          Hi3els Labs
        </h1>
        <p className="mt-4 text-xl md:text-2xl text-slate-200">
          Crafting premium digital experiences 🚀
        </p>
      </div>
    </section>
  )
}
