'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, ExternalLink, Mail } from 'lucide-react'

const roles = ['Backend Engineer', 'Full Stack Developer', 'AI Builder', 'Systems Architect']

function TypingRole() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setStarted(true), 1600)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (!started) return
    const full = roles[roleIndex]

    if (!deleting && displayed === full) {
      const t = setTimeout(() => setDeleting(true), 2400)
      return () => clearTimeout(t)
    }
    if (deleting && displayed === '') {
      setDeleting(false)
      setRoleIndex((i) => (i + 1) % roles.length)
      return
    }
    const speed = deleting ? 40 : 80
    const t = setTimeout(() => {
      setDisplayed((prev) =>
        deleting ? prev.slice(0, -1) : full.slice(0, prev.length + 1)
      )
    }, speed)
    return () => clearTimeout(t)
  }, [displayed, deleting, roleIndex, started])

  return (
    <span className="font-mono text-blue-400 text-xl sm:text-2xl font-medium tracking-wide">
      {displayed}
      <span className="animate-pulse text-blue-300">|</span>
    </span>
  )
}

const nameFirst = 'SAI'.split('')
const nameLast = 'DEEXITH'.split('')

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6">
      {/* Background orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="orb w-[700px] h-[700px] bg-blue-500/[0.07] top-[-200px] left-1/2 -translate-x-1/3" />
        <div className="orb w-[500px] h-[500px] bg-purple-600/[0.06] bottom-[-100px] right-[-100px]" />
        <div className="orb w-[300px] h-[300px] bg-blue-400/[0.05] bottom-1/4 left-[-80px]" />
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
            backgroundSize: '72px 72px',
          }}
        />
        {/* Center spotlight */}
        <div className="absolute inset-0 bg-gradient-radial from-blue-500/[0.04] via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-5xl mx-auto">
        {/* Availability tag */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-white/[0.08] bg-white/[0.03] mb-10"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
          </span>
          <span className="text-sm text-white/50 tracking-wider">Available for opportunities · 2026</span>
        </motion.div>

        {/* Name */}
        <h1 className="font-display font-black leading-none tracking-tight mb-8 select-none" style={{ fontSize: 'clamp(3.5rem, 12vw, 9rem)' }}>
          <span className="flex flex-wrap justify-center gap-x-[0.2em]">
            {/* SAI */}
            <span className="flex">
              {nameFirst.map((char, i) => (
                <motion.span
                  key={`f-${i}`}
                  initial={{ opacity: 0, y: 60, rotateX: 20 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{
                    duration: 0.7,
                    delay: 0.5 + i * 0.06,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="inline-block"
                  style={{
                    background: 'linear-gradient(180deg, #ffffff 0%, #c0c0c0 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  {char}
                </motion.span>
              ))}
            </span>
            {/* DEEXITH */}
            <span className="flex">
              {nameLast.map((char, i) => (
                <motion.span
                  key={`l-${i}`}
                  initial={{ opacity: 0, y: 60, rotateX: 20 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{
                    duration: 0.7,
                    delay: 0.68 + i * 0.06,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="inline-block gradient-text"
                >
                  {char}
                </motion.span>
              ))}
            </span>
          </span>
        </h1>

        {/* Role typing */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.4 }}
          className="flex items-center gap-3 mb-8"
        >
          <span className="text-white/20 font-mono text-lg">→</span>
          <TypingRole />
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-white/45 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto mb-12 text-balance"
        >
          Building scalable systems, intelligent applications, and products that solve real-world problems.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.85, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center gap-4 mb-20"
        >
          <a
            href="#projects"
            className="group flex items-center gap-2.5 px-7 py-3.5 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-semibold hover:from-blue-500 hover:to-purple-500 transition-all duration-300 shadow-lg shadow-blue-500/20"
          >
            Explore My Work
            <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
          </a>
          <a
            href="#contact"
            className="flex items-center gap-2.5 px-7 py-3.5 rounded-2xl border border-white/[0.08] bg-white/[0.03] text-white/65 text-sm font-semibold hover:text-white hover:bg-white/[0.07] hover:border-white/[0.14] transition-all duration-200"
          >
            <Mail className="w-4 h-4" />
            Contact Me
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 2.1 }}
          className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6"
        >
          {[
            { value: '27+', label: 'Microservices' },
            { value: '6+', label: 'Projects Shipped' },
            { value: '7.58', label: 'CGPA / 10' },
            { value: '1+', label: 'Years Exp' },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.1 + i * 0.08 }}
              className="text-center"
            >
              <div className="text-3xl font-display font-bold text-white/90 leading-none">
                {stat.value}
              </div>
              <div className="text-xs text-white/30 mt-1.5 uppercase tracking-widest font-mono">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 2.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/20"
      >
        <span className="text-[10px] uppercase tracking-[0.25em] font-mono">Scroll</span>
        <ArrowDown className="w-4 h-4 animate-bounce" />
      </motion.div>
    </section>
  )
}
