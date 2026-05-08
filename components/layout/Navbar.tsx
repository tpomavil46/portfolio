'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const NAV_LINKS = [
  { label: 'About',         href: '#about' },
  { label: 'Skills',        href: '#skills' },
  { label: 'Education',     href: '#certifications' },
  { label: 'Experience',    href: '#experience' },
  { label: 'Projects',      href: '#projects' },
  { label: 'Case Studies',  href: '#case-studies' },
  { label: 'Live Platforms', href: '#live-platforms' },
  { label: 'Books',         href: '#books' },
  { label: 'Contact',       href: '#contact' },
  { label: 'Portfolio',     href: '#portfolio' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  function scrollTo(href: string) {
    const el = document.querySelector(href)
    if (el) {
      const offset = 64
      const top = el.getBoundingClientRect().top + window.scrollY - offset
      window.scrollTo({ top, behavior: 'smooth' })
    }
    setOpen(false)
  }

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0d1117]/95 backdrop-blur-md border-b border-[#30363d]'
          : 'bg-[#0d1117]/70 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <button
            onClick={() => scrollTo('#about')}
            className="text-[#e6edf3] font-semibold text-base tracking-wide hover:text-[#58a6ff] transition-colors"
          >
            Tim Pomaville
          </button>

          <ul className="hidden xl:flex items-center">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => scrollTo(link.href)}
                  className="px-3 py-2 text-xs font-medium text-[#8b949e] hover:text-[#e6edf3] hover:bg-[#161b22] rounded transition-colors tracking-wide"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          <button
            className="xl:hidden p-2 text-[#8b949e] hover:text-[#e6edf3] transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="xl:hidden bg-[#0d1117] border-b border-[#30363d]">
          <ul className="px-4 py-3 flex flex-col gap-0.5">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => scrollTo(link.href)}
                  className="w-full text-left px-4 py-2.5 text-sm text-[#8b949e] hover:text-[#e6edf3] hover:bg-[#161b22] rounded transition-colors"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}
