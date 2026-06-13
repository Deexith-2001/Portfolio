'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { skillCategories } from '@/data/skills'

const accentMap: Record<string, { border: string; glow: string; text: string; bg: string }> = {
  blue: {
    border: 'group-hover:border-blue-500/30',
    glow: 'group-hover:shadow-blue-500/10',
    text: 'text-blue-400',
    bg: 'bg-blue-500/5',
  },
  purple: {
    border: 'group-hover:border-purple-500/30',
    glow: 'group-hover:shadow-purple-500/10',
    text: 'text-purple-400',
    bg: 'bg-purple-500/5',
  },
  indigo: {
    border: 'group-hover:border-indigo-500/30',
    glow: 'group-hover:shadow-indigo-500/10',
    text: 'text-indigo-400',
    bg: 'bg-indigo-500/5',
  },
  teal: {
    border: 'group-hover:border-teal-500/30',
    glow: 'group-hover:shadow-teal-500/10',
    text: 'text-teal-400',
    bg: 'bg-teal-500/5',
  },
  violet: {
    border: 'group-hover:border-violet-500/30',
    glow: 'group-hover:shadow-violet-500/10',
    text: 'text-violet-400',
    bg: 'bg-violet-500/5',
  },
  amber: {
    border: 'group-hover:border-amber-500/30',
    glow: 'group-hover:shadow-amber-500/10',
    text: 'text-amber-400',
    bg: 'bg-amber-500/5',
  },
  slate: {
    border: 'group-hover:border-slate-400/30',
    glow: 'group-hover:shadow-slate-400/10',
    text: 'text-slate-400',
    bg: 'bg-slate-500/5',
  },
}

function SkillCard({
  category,
  index,
}: {
  category: (typeof skillCategories)[0]
  index: number
}) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const accent = accentMap[category.accentColor] || accentMap.blue

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] }}
      className={`group glass-card rounded-2xl p-6 border border-white/[0.07] transition-all duration-400
        ${accent.border} hover:bg-white/[0.05] hover:-translate-y-1
        hover:shadow-xl ${accent.glow} cursor-default`}
    >
      <div className="flex items-start justify-between mb-5">
        <div>
          <span className={`font-mono text-2xl ${accent.text} block mb-2 group-hover:scale-110 transition-transform duration-300`}>
            {category.icon}
          </span>
          <h3 className="font-semibold text-white/85 text-base">{category.name}</h3>
          <p className="text-xs text-white/35 mt-0.5">{category.description}</p>
        </div>
        <span className={`font-mono text-xs px-2 py-1 rounded-lg ${accent.bg} ${accent.text} border border-current/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
          {category.skills.length}
        </span>
      </div>

      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill, i) => (
          <motion.span
            key={skill}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: index * 0.07 + i * 0.04, duration: 0.3 }}
            className="text-xs px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/[0.06] text-white/50 group-hover:text-white/65 group-hover:border-white/[0.1] transition-all duration-200"
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.div>
  )
}

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="skills" className="section-pad px-6 relative">
      {/* Background orb */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="orb w-[400px] h-[400px] bg-purple-500/[0.05] top-1/2 -translate-y-1/2 right-0" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section label */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-16"
        >
          <span className="section-number">02 — Skills</span>
          <div className="h-px flex-1 bg-white/[0.06]" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-display font-bold leading-tight mb-4">
            My Tech Stack
          </h2>
          <p className="text-white/40 text-lg max-w-xl">
            Tools and technologies I use to build production-grade software.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {skillCategories.map((category, i) => (
            <SkillCard key={category.id} category={category} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
