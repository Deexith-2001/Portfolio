'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        })
      },
      { threshold: 0.4 }
    )
    links.forEach(({ href }) => {
      const el = document.querySelector(href)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-colors duration-300 ${
          scrolled ? 'bg-paper/95 border-b border-ink/10' : ''
        }`}
      >
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <a href="#" className="font-display text-lg italic text-ink/85">
            S. Deexith
          </a>

          <nav className="hidden md:flex items-center gap-8 font-mono text-xs uppercase tracking-widest">
            {links.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className={`transition-colors duration-200 ${
                  activeSection === href.slice(1)
                    ? 'text-accent'
                    : 'text-ink/40 hover:text-ink/80'
                }`}
              >
                {label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="mailto:Deexithmsd13@gmail.com"
              className="hidden md:inline-flex items-center text-xs font-mono uppercase tracking-widest px-4 py-2 border border-ink/15 text-ink/70 hover:text-ink hover:border-ink/30 transition-colors duration-200"
            >
              Hire Me
            </a>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden flex flex-col gap-1.5 p-2"
              aria-label="Toggle menu"
            >
              <span className={`block w-5 h-px bg-ink/60 transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
              <span className={`block w-5 h-px bg-ink/60 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-5 h-px bg-ink/60 transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[64px] left-0 right-0 z-40 bg-paper border-b border-ink/10 px-6 py-6 md:hidden"
          >
            <nav className="flex flex-col gap-5 font-mono text-sm uppercase tracking-widest">
              {links.map(({ href, label }) => (
                <a
                  key={href}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="text-ink/60 hover:text-ink transition-colors"
                >
                  {label}
                </a>
              ))}
              <a
                href="mailto:Deexithmsd13@gmail.com"
                className="mt-2 text-center py-3 border border-ink/15 text-ink/80"
              >
                Hire Me
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
