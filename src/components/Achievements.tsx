'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const metrics = [
  {
    value: 27,
    suffix: '+',
    label: 'Microservices Architected',
    sublabel: 'In production at Jaagruk Bharat',
    color: 'blue',
  },
  {
    value: 6,
    suffix: '+',
    label: 'Projects Shipped',
    sublabel: 'From CLI tools to AI systems',
    color: 'purple',
  },
  {
    value: 3,
    suffix: '+',
    label: 'Production Systems',
    sublabel: 'Serving real users at scale',
    color: 'indigo',
  },
  {
    value: 4,
    suffix: '',
    label: 'AI Applications Built',
    sublabel: 'Tax, legal, agri, government',
    color: 'violet',
  },
  {
    value: 7,
    suffix: '+',
    label: 'Technologies Mastered',
    sublabel: 'Across full stack + AI',
    color: 'teal',
  },
  {
    value: 2,
    suffix: '',
    label: 'Industry Certifications',
    sublabel: 'HackerRank certified',
    color: 'amber',
  },
]

const colorMap: Record<string, { text: string; bg: string; border: string; glow: string }> = {
  blue: { text: 'text-blue-400', bg: 'bg-blue-500/5', border: 'border-blue-500/15', glow: 'hover:shadow-blue-500/8' },
  purple: { text: 'text-purple-400', bg: 'bg-purple-500/5', border: 'border-purple-500/15', glow: 'hover:shadow-purple-500/8' },
  indigo: { text: 'text-indigo-400', bg: 'bg-indigo-500/5', border: 'border-indigo-500/15', glow: 'hover:shadow-indigo-500/8' },
  violet: { text: 'text-violet-400', bg: 'bg-violet-500/5', border: 'border-violet-500/15', glow: 'hover:shadow-violet-500/8' },
  teal: { text: 'text-teal-400', bg: 'bg-teal-500/5', border: 'border-teal-500/15', glow: 'hover:shadow-teal-500/8' },
  amber: { text: 'text-amber-400', bg: 'bg-amber-500/5', border: 'border-amber-500/15', glow: 'hover:shadow-amber-500/8' },
}

function CountUp({ target, suffix, inView }: { target: number; suffix: string; inView: boolean }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return
    const duration = 1400
    const steps = 40
    const increment = target / steps
    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)
    return () => clearInterval(timer)
  }, [inView, target])

  return (
    <span>
      {count}
      {suffix}
    </span>
  )
}

export default function Achievements() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="section-pad px-6 relative">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="orb w-[600px] h-[600px] bg-purple-500/[0.04] bottom-0 left-1/2 -translate-x-1/2" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-16"
        >
          <span className="section-number">05 — By the Numbers</span>
          <div className="h-px flex-1 bg-white/[0.06]" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-display font-bold leading-tight mb-4">
            Impact in Numbers
          </h2>
          <p className="text-white/40 text-lg max-w-xl">
            Concrete results from real projects and production systems.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5">
          {metrics.map((metric, i) => {
            const c = colorMap[metric.color]
            return (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                className={`glass-card rounded-2xl border ${c.border} ${c.bg} p-6 sm:p-7 hover:-translate-y-1 hover:shadow-xl ${c.glow} transition-all duration-400`}
              >
                <div className={`text-4xl sm:text-5xl font-display font-black mb-2 leading-none ${c.text}`}>
                  <CountUp target={metric.value} suffix={metric.suffix} inView={inView} />
                </div>
                <div className="text-white/70 font-semibold text-sm sm:text-base leading-tight mb-1">
                  {metric.label}
                </div>
                <div className="text-white/30 text-xs leading-relaxed">{metric.sublabel}</div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
