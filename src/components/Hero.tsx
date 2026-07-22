'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Mail } from 'lucide-react'

const stats = [
  { value: '29+', label: 'Microservices' },
  { value: '8', label: 'Projects Shipped' },
  { value: '500+', label: 'Daily AI Queries' },
  { value: '1+', label: 'Years Exp.' },
]

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  )
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 pt-32 pb-20">
      <div className="max-w-3xl mx-auto w-full">
        <FadeIn delay={0}>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent mb-6">
            Available for opportunities · 2026
          </p>
        </FadeIn>

        <FadeIn delay={0.08}>
          <h1 className="font-display font-semibold leading-[1.05] mb-6 text-balance" style={{ fontSize: 'clamp(2.5rem, 7vw, 4.5rem)' }}>
            Sai Deexith Musham
          </h1>
        </FadeIn>

        <FadeIn delay={0.14}>
          <p className="font-mono text-base sm:text-lg text-ink/60 mb-2">
            Full-Stack Engineer — AI &amp; Backend Systems
          </p>
        </FadeIn>

        <FadeIn delay={0.18}>
          <div className="w-16 h-px bg-ink/20 my-7" />
        </FadeIn>

        <FadeIn delay={0.22}>
          <p className="text-ink/60 text-lg leading-relaxed max-w-xl mb-10 text-balance">
            I build and ship production systems — currently architecting backend
            microservices, AI chatbots, and autonomous agents at Jaagruk Bharat.
          </p>
        </FadeIn>

        <FadeIn delay={0.28}>
          <div className="flex flex-wrap items-center gap-4 mb-16">
            <a
              href="#projects"
              className="group flex items-center gap-2 px-6 py-3 bg-accent text-paper text-sm font-medium hover:bg-accent-light transition-colors duration-200"
            >
              View Selected Work
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" />
            </a>
            <a
              href="#contact"
              className="flex items-center gap-2 px-6 py-3 border border-ink/15 text-ink/70 text-sm font-medium hover:text-ink hover:border-ink/30 transition-colors duration-200"
            >
              <Mail className="w-4 h-4" />
              Get in Touch
            </a>
          </div>
        </FadeIn>

        <FadeIn delay={0.34}>
          <div className="flex flex-wrap gap-x-10 gap-y-5 border-t border-ink/10 pt-8">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="font-display text-2xl text-ink/90 leading-none mb-1.5">
                  {stat.value}
                </div>
                <div className="text-xs text-ink/35 uppercase tracking-widest font-mono">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
