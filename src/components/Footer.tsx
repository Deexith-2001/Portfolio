'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/[0.05] px-6 py-10">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-5">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg border border-white/10 flex items-center justify-center bg-white/[0.03]">
            <span className="font-mono text-xs font-semibold text-white/50">SD</span>
          </div>
          <div>
            <p className="text-sm text-white/40">
              © {year} Sai Deexith Musham
            </p>
            <p className="text-xs text-white/20 mt-0.5 font-mono">Built with Next.js · Tailwind · Framer Motion</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {[
            { href: 'https://github.com/Deexith-2001', icon: <Github className="w-4 h-4" />, label: 'GitHub' },
            { href: 'https://linkedin.com/in/sai-deexith-musham', icon: <Linkedin className="w-4 h-4" />, label: 'LinkedIn' },
            { href: 'mailto:Deexithmsd13@gmail.com', icon: <Mail className="w-4 h-4" />, label: 'Email' },
          ].map(({ href, icon, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              aria-label={label}
              className="p-2.5 rounded-xl border border-white/[0.06] bg-white/[0.02] text-white/30 hover:text-white/70 hover:border-white/[0.12] hover:bg-white/[0.05] transition-all duration-200"
            >
              {icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
