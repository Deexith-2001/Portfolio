'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { skillCategories } from '@/data/skills'

function SkillRow({
  category,
  index,
}: {
  category: (typeof skillCategories)[0]
  index: number
}) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
      className="grid sm:grid-cols-[220px_1fr] gap-3 sm:gap-8 py-6 border-t border-ink/10"
    >
      <div className="flex items-start gap-3">
        <span className="font-mono text-lg text-accent/80 leading-none pt-0.5">{category.icon}</span>
        <div>
          <h3 className="font-display text-lg text-ink/85">{category.name}</h3>
          <p className="text-xs text-ink/35 mt-0.5">{category.description}</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-x-2 gap-y-2 content-start">
        {category.skills.map((skill, i) => (
          <span key={skill} className="text-sm text-ink/55">
            {skill}
            {i < category.skills.length - 1 && <span className="text-ink/15 ml-2">/</span>}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="skills" className="section-pad px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-16"
        >
          <span className="font-mono text-xs text-ink/35 uppercase tracking-widest">02 — Skills</span>
          <div className="h-px flex-1 bg-ink/10" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mb-4"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-semibold leading-tight mb-3">
            Tech Stack
          </h2>
          <p className="text-ink/40 text-lg max-w-xl">
            Tools and technologies I use to build production-grade software.
          </p>
        </motion.div>

        <div>
          {skillCategories.map((category, i) => (
            <SkillRow key={category.id} category={category} index={i} />
          ))}
          <div className="border-t border-ink/10" />
        </div>
      </div>
    </section>
  )
}
