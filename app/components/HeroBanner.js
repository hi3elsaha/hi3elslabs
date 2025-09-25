"use client"
import { useEffect } from "react"
import gsap from "gsap"

export default function HeroBanner() {
  useEffect(() => {
    // Blob animation
    gsap.to("#blob1", {
      duration: 6,
      scale: 1.1,
      yoyo: true,
      repeat: -1,
      ease: "sine.inOut",
    })
    gsap.to("#blob2", {
      duration: 8,
      x: 30,
      yoyo: true,
      repeat: -1,
      ease: "sine.inOut",
    })
    // Title fade-in
    gsap.from(".hero-title", {
      opacity: 0,
      y: 50,
      duration: 1.5,
      ease: "power3.out",
    })
    // Subtitle typewriter effect
    gsap.to(".hero-subtitle", {
      duration: 3,
      text: "Crafting premium digital experiences ✨",
      ease: "none",
      delay: 1,
    })
  }, [])

  return (
    <section className="relative flex items-center justify-center min-h-screen overflow-hidden bg-slate-900">
      {/* Background SVG */}
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

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4">
        <h1 className="hero-title text-5xl md:text-7xl font-extrabold text-white drop-shadow-lg">
          Hi3els Labs
        </h1>
        <p className="hero-subtitle mt-4 text-xl md:text-2xl text-slate-200"></p>
        <button className="mt-8 px-8 py-3 bg-cyan-500 text-black font-bold rounded-lg hover:scale-105 hover:bg-cyan-400 transition">
          Explore Lab
        </button>
      </div>
    </section>
  )
}
