'use client'

import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { projects } from '@/data/projects'
import { ExternalLink, Github, ChevronDown, ChevronUp } from 'lucide-react'

const accentStyles: Record<string, { badge: string; border: string; glow: string; tag: string }> = {
  blue: {
    badge: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
    border: 'hover:border-blue-500/25',
    glow: 'hover:shadow-blue-500/5',
    tag: 'bg-blue-500/5 text-blue-400/70 border-blue-500/10',
  },
  purple: {
    badge: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
    border: 'hover:border-purple-500/25',
    glow: 'hover:shadow-purple-500/5',
    tag: 'bg-purple-500/5 text-purple-400/70 border-purple-500/10',
  },
  green: {
    badge: 'bg-green-500/10 text-green-400 border-green-500/20',
    border: 'hover:border-green-500/25',
    glow: 'hover:shadow-green-500/5',
    tag: 'bg-green-500/5 text-green-400/70 border-green-500/10',
  },
  amber: {
    badge: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
    border: 'hover:border-amber-500/25',
    glow: 'hover:shadow-amber-500/5',
    tag: 'bg-amber-500/5 text-amber-400/70 border-amber-500/10',
  },
  teal: {
    badge: 'bg-teal-500/10 text-teal-400 border-teal-500/20',
    border: 'hover:border-teal-500/25',
    glow: 'hover:shadow-teal-500/5',
    tag: 'bg-teal-500/5 text-teal-400/70 border-teal-500/10',
  },
}

function FeaturedProject({ project, index }: { project: (typeof projects)[0]; index: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [expanded, setExpanded] = useState(false)
  const accent = accentStyles[project.accentColor] || accentStyles.blue

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className={`glass-card rounded-3xl border border-white/[0.08] overflow-hidden transition-all duration-400 hover:-translate-y-1 hover:shadow-2xl ${accent.border} ${accent.glow}`}
    >
      {/* Header */}
      <div className="p-8 sm:p-10">
        <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
          <div className="flex flex-wrap items-center gap-2">
            <span className={`text-xs px-2.5 py-1 rounded-lg border font-mono ${accent.badge}`}>
              {project.badge}
            </span>
            <span className="text-xs px-2.5 py-1 rounded-lg border border-white/[0.06] text-white/30 font-mono">
              {project.category}
            </span>
            <span className="text-xs text-white/25 font-mono">{project.year}</span>
          </div>
          <div className="flex items-center gap-2">
            {project.links?.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl border border-white/[0.07] bg-white/[0.03] text-white/40 hover:text-white/80 hover:border-white/[0.14] transition-all duration-200"
              >
                <Github className="w-4 h-4" />
              </a>
            )}
            {project.links?.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl border border-white/[0.07] bg-white/[0.03] text-white/40 hover:text-white/80 hover:border-white/[0.14] transition-all duration-200"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>

        <h3 className="text-2xl sm:text-3xl font-display font-bold text-white/90 mb-3 leading-tight">
          {project.title}
        </h3>
        <p className="text-white/50 text-base leading-relaxed mb-6">{project.subtitle}</p>

        {/* Case study grid */}
        <div className="grid sm:grid-cols-3 gap-4 mb-6">
          {[
            { label: 'Problem', text: project.problem },
            { label: 'Solution', text: project.solution },
            { label: 'Outcome', text: project.outcome },
          ].map(({ label, text }) => (
            <div
              key={label}
              className="bg-white/[0.025] rounded-2xl p-4 border border-white/[0.05]"
            >
              <span className="text-[10px] font-mono text-white/25 uppercase tracking-widest block mb-2">
                {label}
              </span>
              <p className={`text-sm text-white/55 leading-relaxed ${!expanded ? 'line-clamp-3' : ''}`}>
                {text}
              </p>
            </div>
          ))}
        </div>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className={`text-xs px-2.5 py-1 rounded-lg border font-mono ${accent.tag}`}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Expand toggle */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-1.5 text-xs text-white/30 hover:text-white/60 transition-colors duration-200 font-mono"
        >
          {expanded ? (
            <>
              <ChevronUp className="w-3 h-3" /> Show less
            </>
          ) : (
            <>
              <ChevronDown className="w-3 h-3" /> Full case study
            </>
          )}
        </button>
      </div>
    </motion.article>
  )
}

function ProjectCard({ project, index }: { project: (typeof projects)[0]; index: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const accent = accentStyles[project.accentColor] || accentStyles.blue

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className={`group glass-card rounded-2xl border border-white/[0.07] p-6 flex flex-col gap-4 transition-all duration-400 hover:-translate-y-1 hover:bg-white/[0.05] hover:shadow-xl ${accent.border} ${accent.glow}`}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex flex-wrap items-center gap-2">
          {project.badge && (
            <span className={`text-xs px-2 py-0.5 rounded-md border font-mono ${accent.badge}`}>
              {project.badge}
            </span>
          )}
        </div>
        <div className="flex items-center gap-1.5 flex-shrink-0">
          {project.links?.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-lg text-white/30 hover:text-white/70 transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
            </a>
          )}
          {project.links?.live && (
            <a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-lg text-white/30 hover:text-white/70 transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      </div>

      <div className="flex-1">
        <h3 className="font-semibold text-white/85 text-lg leading-tight mb-2 group-hover:text-white transition-colors duration-200">
          {project.title}
        </h3>
        <p className="text-white/40 text-sm leading-relaxed line-clamp-3">{project.subtitle}</p>
      </div>

      <div>
        <div className="text-[10px] font-mono text-white/25 uppercase tracking-widest mb-2">Outcome</div>
        <p className="text-xs text-white/40 leading-relaxed line-clamp-2">{project.outcome}</p>
      </div>

      <div className="flex flex-wrap gap-1.5">
        {project.technologies.slice(0, 4).map((tech) => (
          <span
            key={tech}
            className={`text-[11px] px-2 py-0.5 rounded-md border font-mono ${accent.tag}`}
          >
            {tech}
          </span>
        ))}
        {project.technologies.length > 4 && (
          <span className="text-[11px] px-2 py-0.5 rounded-md border border-white/[0.05] text-white/25 font-mono">
            +{project.technologies.length - 4}
          </span>
        )}
      </div>
    </motion.article>
  )
}

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const featured = projects.filter((p) => p.featured)
  const rest = projects.filter((p) => !p.featured)

  return (
    <section id="projects" className="section-pad px-6 relative">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="orb w-[500px] h-[500px] bg-blue-500/[0.04] top-0 left-1/2 -translate-x-1/2" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-16"
        >
          <span className="section-number">03 — Projects</span>
          <div className="h-px flex-1 bg-white/[0.06]" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap items-end justify-between gap-4 mb-12"
        >
          <div>
            <h2 className="text-4xl sm:text-5xl font-display font-bold leading-tight mb-4">
              Selected Work
            </h2>
            <p className="text-white/40 text-lg max-w-xl">
              Each project is a case study in solving real problems with software.
            </p>
          </div>
          <a
            href="https://github.com/Deexith-2001"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-white/40 hover:text-white/70 border border-white/[0.07] px-4 py-2 rounded-xl hover:border-white/[0.12] transition-all duration-200 font-mono"
          >
            <Github className="w-4 h-4" />
            View GitHub
          </a>
        </motion.div>

        {/* Featured projects */}
        <div className="space-y-6 mb-10">
          {featured.map((project, i) => (
            <FeaturedProject key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* Grid projects */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {rest.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
