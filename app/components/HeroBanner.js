import { useEffect } from "react";
import { gsap } from "gsap";

export default function HeroBanner() {
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.from(".hero-logo", { y: -50, opacity: 0, duration: 1 })
      .from(".hero-title", { y: 40, opacity: 0, duration: 1 }, "-=0.5")
      .from(".hero-tagline", { y: 40, opacity: 0, duration: 1 }, "-=0.5")
      .from(".hero-btn", { scale: 0.8, opacity: 0, duration: 0.8, ease: "back.out(1.7)" }, "-=0.3");
  }, []);

  return (
    <section className="h-screen flex flex-col items-center justify-center bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-600 text-white text-center relative overflow-hidden">
      {/* Logo */}
      <img src="/logo.png" alt="Hi3els Labs Logo" className="hero-logo w-24 mb-6 drop-shadow-lg" />

      {/* Title */}
      <h1 className="hero-title text-6xl font-extrabold tracking-tight drop-shadow-xl">
        Hi3els Labs
      </h1>

      {/* Tagline */}
      <p className="hero-tagline mt-4 text-2xl font-light max-w-2xl">
        Crafting <span className="font-semibold">premium digital experiences</span> ✨
      </p>

      {/* CTA Button */}
      <button className="hero-btn mt-8 px-8 py-4 bg-white text-purple-700 font-bold rounded-xl shadow-2xl hover:scale-105 hover:shadow-purple-500/50 transition">
        Explore Lab
      </button>
    </section>
  );
}
