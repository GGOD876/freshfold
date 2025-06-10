// app/page.tsx (or pages/index.tsx for older Next.js versions)

"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Logo from "@/public/logo.png"
import HeroImage from "@/public/hero.png"

export default function LandingPage() {
  const { resolvedTheme, setTheme } = useTheme()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <main className="min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-white transition-colors duration-300 ease-in-out">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur border-b border-gray-200 dark:border-slate-700 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image src={Logo} alt="FreshFold Logo" className="w-10 h-10" />
            <span className="font-bold text-xl text-blue-600 dark:text-blue-400">FreshFold</span>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <Link href="#features" className="hover:text-blue-500 transition-colors">
              Features
            </Link>
            <Link href="#how-it-works" className="hover:text-blue-500 transition-colors">
              How It Works
            </Link>
            <Link href="#pricing" className="hover:text-blue-500 transition-colors">
              Pricing
            </Link>
            <Link href="#faq" className="hover:text-blue-500 transition-colors">
              FAQ
            </Link>
            <Button onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")} variant="ghost">
              {resolvedTheme === "dark" ? "☀️" : "🌙"}
            </Button>
            <Link href="/login" className="text-blue-600 dark:text-blue-400 hover:underline">
              Sign In
            </Link>
          </nav>

          {/* Mobile Hamburger */}
          <button className="md:hidden text-xl" aria-label="Toggle Menu" onClick={() => setMenuOpen(!menuOpen)}>
            ☰
          </button>
        </div>

        {/* Mobile Dropdown */}
        {menuOpen && (
          <div className="md:hidden px-4 pb-4 space-y-3">
            <Link href="#features" onClick={() => setMenuOpen(false)} className="block">
              Features
            </Link>
            <Link href="#how-it-works" onClick={() => setMenuOpen(false)} className="block">
              How It Works
            </Link>
            <Link href="#pricing" onClick={() => setMenuOpen(false)} className="block">
              Pricing
            </Link>
            <Link href="#faq" onClick={() => setMenuOpen(false)} className="block">
              FAQ
            </Link>
            <Link href="/login" onClick={() => setMenuOpen(false)} className="block text-blue-600 dark:text-blue-400">
              Sign In
            </Link>
            <Button onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")} variant="ghost" className="w-full">
              Toggle {resolvedTheme === "dark" ? "Light" : "Dark"}
            </Button>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight transition-all duration-700">
          Laundry & Dry Cleaning <br /> <span className="text-blue-500">Made Easy</span>
        </h1>
        <p className="max-w-xl mx-auto text-lg text-gray-600 dark:text-gray-300 mb-6 transition-colors duration-300">
          FreshFold offers fast, reliable pickup and delivery laundry services. Track orders, schedule pickups, and get fresh clothes – all from your phone.
        </p>
        <div className="flex justify-center gap-4">
          <Link href="/signup">
            <Button variant="default" className="px-6 py-3 text-base">
              Get Started
            </Button>
          </Link>
          <Link href="/login">
            <Button variant="secondary" className="px-6 py-3 text-base">
              Sign In
            </Button>
          </Link>
        </div>
        <Image src={HeroImage} alt="FreshFold Hero" className="mt-12 w-full max-w-4xl mx-auto rounded-xl shadow-xl animate-fade-in" priority />
      </section>

      {/* Features Section */}
      <section id="features" className="bg-gray-100 dark:bg-slate-800 py-20 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Why Choose FreshFold?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Real-Time Tracking", desc: "Know exactly where your laundry is at all times." },
              { title: "Eco-Friendly Cleaning", desc: "We use safe, sustainable, and gentle detergents." },
              { title: "Next-Day Delivery", desc: "Fast and flexible delivery times to fit your schedule." },
            ].map((item, idx) => (
              <div key={idx} className="p-6 bg-white dark:bg-slate-900 rounded-xl shadow transition-transform duration-300 hover:scale-[1.02]">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 px-4 bg-white dark:bg-slate-900 transition-colors duration-300">
        <div className="max-w-5xl mx-auto text-center space-y-12">
          <h2 className="text-3xl font-bold">How FreshFold Works</h2>
          <div className="grid md:grid-cols-3 gap-12 text-left">
            {[
              ["📦 Schedule Pickup", "Pick a time that works for you."],
              ["🧼 We Clean", "Your clothes are washed, folded or dry cleaned."],
              ["🚚 Delivery", "Get your clean clothes delivered to your door."],
            ].map(([title, desc], i) => (
              <div key={i}>
                <h3 className="text-xl font-semibold">{title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 bg-gray-100 dark:bg-slate-800 transition-colors duration-300">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Transparent Pricing</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-10">Only pay for what you use — no hidden fees.</p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              ["Wash & Fold", "$1.99 / lb"],
              ["Dry Cleaning", "From $5 / item"],
              ["Monthly Plan", "$49 / mo"],
            ].map(([type, price], i) => (
              <div key={i} className="bg-white dark:bg-slate-900 rounded-xl p-6 shadow">
                <h3 className="text-xl font-semibold">{type}</h3>
                <p className="text-2xl font-bold mt-2">{price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 px-4 bg-white dark:bg-slate-900 transition-colors duration-300">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
          {[
            ["How long does delivery take?", "Typically within 24 hours for most locations."],
            ["Can I schedule recurring pickups?", "Yes! Choose weekly or biweekly from your account."],
            ["Do you offer ironing?", "Yes, ironing is available as a separate service."],
          ].map(([q, a], i) => (
            <div key={i} className="text-left">
              <h3 className="font-semibold">{q}</h3>
              <p className="text-gray-600 dark:text-gray-400">{a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 dark:bg-slate-800 text-center py-6 text-sm text-gray-600 dark:text-gray-400">
        © {new Date().getFullYear()} FreshFold. All rights reserved.
      </footer>
    </main>
  )
}
