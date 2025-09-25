"use client"

import { useEffect } from "react"
import gsap from "gsap"

export default function HomePage() {
  useEffect(() => {
    gsap.fromTo(
      ".hero-text",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.5, ease: "power3.out" }
    )
  }, [])

  return (
    <section className="flex flex-col items-center justify-center min-h-screen text-center">
      <h2 className="hero-text text-4xl md:text-6xl font-extrabold mb-4">
        Welcome to Hi3els Lab 🚀
      </h2>
      <p className="text-lg md:text-xl text-slate-300 max-w-xl">
        Crafting premium digital experiences with animation, storytelling, and expressive design.
      </p>
      <img src="/images/banner.jpg" alt="Banner" className="mt-6 rounded-lg shadow-lg" />
    </section>
  )
}
