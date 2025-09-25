"use client"

import { useEffect } from "react"
import gsap from "gsap"
import { TextPlugin } from "gsap/TextPlugin"
gsap.registerPlugin(TextPlugin)

export default function HomePage() {
  useEffect(() => {
    // Hero text animation
    gsap.fromTo(".hero-title", {opacity:0, y:50}, {opacity:1, y:0, duration:1.5, ease:"power3.out"})
    gsap.to(".hero-subtitle", {duration:3, text:"Crafting premium digital experiences ✨", ease:"none", delay:1})
    // Section reveal
    gsap.utils.toArray(".section").forEach((sec, i) => {
      gsap.from(sec, {opacity:0, y:50, duration:1, scrollTrigger:{trigger:sec, start:"top 80%"}})
    })
  }, [])

  return (
    <div className="space-y-32">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-screen text-center">
        <h1 className="hero-title text-5xl md:text-7xl font-extrabold mb-4 text-cyan-400">
          Welcome to Hi3els Lab 🚀
        </h1>
        <p className="hero-subtitle text-lg md:text-xl text-slate-300 max-w-xl"></p>
        <img src="/images/banner.jpg" alt="Banner" className="mt-8 rounded-xl shadow-2xl" />
        <button className="mt-8 px-8 py-3 bg-cyan-500 text-black font-bold rounded-lg hover:scale-105 hover:bg-cyan-400 transition">
          Explore Lab
        </button>
      </section>

      {/* About Section */}
      <section id="about" className="section max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4 text-cyan-300">About Us</h2>
        <p className="text-slate-300 leading-relaxed">
          Hi3els Lab is a creative digital studio blending storytelling, animation, and technology.  
          We believe in expressive design that feels alive, memorable, and premium.
        </p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8 text-cyan-300">Projects</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-slate-800 rounded-lg p-6 hover:scale-105 transition shadow-lg">
            <img src="/images/products/product1.png" alt="Project 1" className="rounded mb-4" />
            <h3 className="font-semibold text-lg">Project One</h3>
            <p className="text-slate-400 text-sm">Interactive branding with animation.</p>
          </div>
          <div className="bg-slate-800 rounded-lg p-6 hover:scale-105 transition shadow-lg">
            <img src="/images/products/product2.png" alt="Project 2" className="rounded mb-4" />
            <h3 className="font-semibold text-lg">Project Two</h3>
            <p className="text-slate-400 text-sm">Premium web experience with GSAP.</p>
          </div>
          <div className="bg-slate-800 rounded-lg p-6 hover:scale-105 transition shadow-lg">
            <img src="/images/team/member1.png" alt="Project 3" className="rounded mb-4" />
            <h3 className="font-semibold text-lg">Project Three</h3>
            <p className="text-slate-400 text-sm">Storytelling through expressive design.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4 text-cyan-300">Contact Us</h2>
        <form className="bg-slate-800 p-6 rounded-lg shadow-lg space-y-4">
          <input type="text" placeholder="Your Name" className="w-full p-3 rounded bg-slate-900 text-white" />
          <input type="email" placeholder="Your Email" className="w-full p-3 rounded bg-slate-900 text-white" />
          <textarea placeholder="Your Message" className="w-full p-3 rounded bg-slate-900 text-white"></textarea>
          <button className="px-6 py-3 bg-cyan-500 text-black font-bold rounded-lg hover:scale-105 hover:bg-cyan-400 transition">
            Send Message
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-6 text-center text-slate-400">
        <p>© {new Date().getFullYear()} Hi3els Lab. All rights reserved.</p>
      </footer>
    </div>
  )
}
