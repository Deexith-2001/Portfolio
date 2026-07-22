'use client'

import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { projects } from '@/data/projects'
import { ExternalLink, Github, Plus } from 'lucide-react'

function ProjectRow({ project, index }: { project: (typeof projects)[0]; index: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [open, setOpen] = useState(false)

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: Math.min(index * 0.05, 0.3), ease: [0.16, 1, 0.3, 1] }}
      className="border-t border-ink/10"
    >
      <button
        onClick={() => setOpen(!open)}
        className="group w-full flex items-start sm:items-center gap-4 sm:gap-6 py-6 text-left"
      >
        <span className="font-mono text-sm text-ink/25 pt-1 sm:pt-0 w-6 flex-shrink-0">
          {String(index + 1).padStart(2, '0')}
        </span>

        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <h3 className="font-display text-lg sm:text-xl text-ink/90 group-hover:text-accent transition-colors duration-200">
              {project.title}
            </h3>
            <span className="font-mono text-xs text-ink/30">{project.year}</span>
          </div>
          <p className="text-sm text-ink/45 mt-1 leading-relaxed">{project.subtitle}</p>
        </div>

        <span className="flex-shrink-0 text-ink/30 group-hover:text-ink/70 transition-all duration-200 mt-1 sm:mt-0">
          <Plus className={`w-4 h-4 transition-transform duration-300 ${open ? 'rotate-45' : ''}`} />
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="pl-10 pb-8 max-w-2xl">
              <div className="flex flex-wrap items-center gap-3 mb-5">
                {project.badge && (
                  <span className="font-mono text-xs uppercase tracking-widest text-accent">
                    {project.badge}
                  </span>
                )}
                <span className="font-mono text-xs uppercase tracking-widest text-ink/30">
                  {project.category}
                </span>
              </div>

              <div className="space-y-4 mb-6">
                {[
                  { label: 'Problem', text: project.problem },
                  { label: 'Solution', text: project.solution },
                  { label: 'Outcome', text: project.outcome },
                ].map(({ label, text }) => (
                  <div key={label}>
                    <span className="text-[11px] font-mono text-ink/30 uppercase tracking-widest block mb-1.5">
                      {label}
                    </span>
                    <p className="text-sm text-ink/55 leading-relaxed">{text}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-x-2 gap-y-2 mb-5">
                {project.technologies.map((tech, i) => (
                  <span key={tech} className="text-xs font-mono text-ink/40">
                    {tech}
                    {i < project.technologies.length - 1 && <span className="text-ink/15 ml-2">/</span>}
                  </span>
                ))}
              </div>

              {project.links && (
                <div className="flex items-center gap-4">
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs text-ink/45 hover:text-ink transition-colors"
                    >
                      <Github className="w-3.5 h-3.5" /> GitHub
                    </a>
                  )}
                  {project.links.live && (
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs text-ink/45 hover:text-ink transition-colors"
                    >
                      <ExternalLink className="w-3.5 h-3.5" /> Live
                    </a>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  )
}

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="projects" className="section-pad px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-16"
        >
          <span className="font-mono text-xs text-ink/35 uppercase tracking-widest">03 — Projects</span>
          <div className="h-px flex-1 bg-ink/10" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="flex flex-wrap items-end justify-between gap-4 mb-8"
        >
          <div>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold leading-tight mb-3">
              Selected Work
            </h2>
            <p className="text-ink/40 text-lg max-w-xl">
              Eight case studies in solving real problems with software.
            </p>
          </div>
          <a
            href="https://github.com/Deexith-2001"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-ink/45 hover:text-ink transition-colors duration-200 font-mono"
          >
            <Github className="w-4 h-4" />
            View GitHub
          </a>
        </motion.div>

        <div>
          {projects.map((project, i) => (
            <ProjectRow key={project.id} project={project} index={i} />
          ))}
          <div className="border-t border-ink/10" />
        </div>
      </div>
    </section>
  )
}
