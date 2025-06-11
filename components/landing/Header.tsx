"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import Logo from "@/public/logo.png"
import { Moon, Sun, Menu, X } from "lucide-react"
import { useTheme } from "next-themes"

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { resolvedTheme, setTheme } = useTheme()

  // Prevent hydration mismatch
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark")
  }

  const handleScroll = (id: string) => {
    const el = document.getElementById(id)
    const header = document.querySelector("header")

    if (el && header) {
      const headerHeight = header.getBoundingClientRect().height
      const y = el.getBoundingClientRect().top + window.scrollY - headerHeight
      window.scrollTo({ top: y, behavior: "smooth" })
    }
  }

  return (
    <>
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur border-b border-gray-200 dark:border-gray-700 transition-all">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image src={Logo} alt="FreshFold Logo" width={40} height={40} />
            <span className="text-xl font-bold text-slate-900 dark:text-white">FreshFold</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            <button
              onClick={() => handleScroll("features")}
              className="text-sm text-slate-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Features
            </button>
            <button
              onClick={() => handleScroll("how-it-works")}
              className="text-sm text-slate-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              How It Works
            </button>
            <button
              onClick={() => handleScroll("pricing")}
              className="text-sm text-slate-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Pricing
            </button>
            <button
              onClick={() => handleScroll("faq")}
              className="text-sm text-slate-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              FAQ
            </button>

            {/* Theme Toggle */}
            {mounted && (
              <button
                onClick={toggleTheme}
                aria-label="Toggle Theme"
                className="p-2 rounded-full text-slate-600 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                {resolvedTheme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
            )}

            <Link href="/login" className="ml-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-md transition-colors">
              Sign In
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 rounded-md text-slate-700 dark:text-gray-200" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle Menu">
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-white dark:bg-slate-900 ${
            menuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}>
          <nav className="flex flex-col px-4 pb-4 gap-4 pt-2">
            <button onClick={() => handleScroll("features")} className="text-left text-sm font-medium text-slate-800 dark:text-gray-200">
              Features
            </button>
            <button onClick={() => handleScroll("how-it-works")} className="text-left text-sm font-medium text-slate-800 dark:text-gray-200">
              How It Works
            </button>
            <button onClick={() => handleScroll("pricing")} className="text-left text-sm font-medium text-slate-800 dark:text-gray-200">
              Pricing
            </button>
            <button onClick={() => handleScroll("faq")} className="text-left text-sm font-medium text-slate-800 dark:text-gray-200">
              FAQ
            </button>
            {mounted && (
              <button onClick={toggleTheme} className="text-left text-sm font-medium text-slate-800 dark:text-gray-200 flex items-center gap-2">
                {resolvedTheme === "dark" ? "☀️ Light Mode" : "🌙 Dark Mode"}
              </button>
            )}
            <Link href="/login" className="mt-2 text-center bg-blue-600 text-white py-2 rounded-md text-sm font-medium">
              Sign In
            </Link>
          </nav>
        </div>
      </header>
    </>
  )
}
