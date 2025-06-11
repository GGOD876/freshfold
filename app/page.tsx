"use client"

import { Header } from "@/components/landing/Header"
import Hero from "@/components/landing/Hero"
import Features from "@/components/landing/Features"
import FAQ from "@/components/landing/Faq"
import Footer from "@/components/landing/Footer"
import HowItWorks from "@/components/landing/HowItWorks"
import Pricing from "@/components/landing/Pricing"

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-white transition-colors duration-300 ease-in-out">
      <Header />
      <Hero />
      <Features />
      <HowItWorks />
      <Pricing />
      <FAQ />
      <Footer />
    </main>
  )
}
