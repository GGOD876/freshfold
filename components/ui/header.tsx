"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import Logo from "@/public/logo.png"
import { Moon, Sun, Menu, X } from "lucide-react"
import { useTheme } from "next-themes"

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <>
      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 transition-all">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image src={Logo} alt="FreshFold Logo" width={40} height={40} />
            <span className="text-xl font-bold text-slate-900 dark:text-white">FreshFold</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/about">About</NavLink>
            <NavLink href="/features">Features</NavLink>
            <NavLink href="/contact">Contact</NavLink>

            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle dark mode"
              className="p-2 rounded-full text-slate-600 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300">
              <span className="block transition-transform duration-300 ease-in-out">
                {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </span>
            </button>

            <Link
              href="/login"
              className="ml-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-md transition-colors duration-300">
              Sign In
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md text-slate-700 dark:text-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen(prev => !prev)}>
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* MOBILE DRAWER */}
      <div
        className={`fixed inset-0 z-40 bg-black/30 backdrop-blur-sm transition-opacity duration-300 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMenuOpen(false)}
        aria-hidden={!menuOpen}
      />

      <aside
        className={`fixed top-0 right-0 h-full w-64 bg-white dark:bg-slate-900 shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}>
        <nav className="flex flex-col p-6 gap-6">
          <NavLink href="/" onClick={() => setMenuOpen(false)}>
            Home
          </NavLink>
          <NavLink href="/about" onClick={() => setMenuOpen(false)}>
            About
          </NavLink>
          <NavLink href="/features" onClick={() => setMenuOpen(false)}>
            Features
          </NavLink>
          <NavLink href="/contact" onClick={() => setMenuOpen(false)}>
            Contact
          </NavLink>
          <Link href="/login" className="mt-4 inline-block text-center bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md transition-all">
            Sign In
          </Link>
        </nav>
      </aside>
    </>
  )
}

function NavLink({ href, children, ...props }: { href: string; children: React.ReactNode } & React.HTMLProps<HTMLAnchorElement>) {
  return (
    <Link
      href={href}
      className="relative text-slate-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
      {...props}>
      <span className="relative z-10">{children}</span>
      {/* Underline hover animation */}
      <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
    </Link>
  )
}
