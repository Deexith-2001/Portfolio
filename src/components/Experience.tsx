'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { timeline } from '@/data/experience'

const certs = [
  { name: 'Software Development Intern', issuer: 'HackerRank' },
  { name: 'Python (Basic)', issuer: 'HackerRank' },
]

function TimelineRow({ item, index }: { item: (typeof timeline)[0]; index: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="border-t border-ink/10 py-8"
    >
      <div className="flex flex-wrap items-baseline justify-between gap-2 mb-3">
        <h3 className="font-display text-xl text-ink/90">{item.role}</h3>
        <span className="font-mono text-xs text-ink/35">{item.period}</span>
      </div>
      <div className="flex flex-wrap items-center gap-2 mb-4 text-sm">
        <span className="text-ink/70 font-medium">{item.company}</span>
        <span className="text-ink/20">·</span>
        <span className="text-ink/40">{item.type}</span>
        {item.isPresent && (
          <span className="ml-1 flex items-center gap-1.5 text-xs text-accent font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            Current
          </span>
        )}
      </div>

      <p className="text-ink/50 text-sm leading-relaxed mb-5 max-w-xl">{item.description}</p>

      <ul className="space-y-2 mb-5">
        {item.achievements.map((achievement, i) => (
          <li key={i} className="flex items-start gap-3 text-sm text-ink/55 leading-relaxed">
            <span className="text-ink/25 mt-1.5 w-1 h-1 rounded-full bg-current flex-shrink-0" />
            {achievement}
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-x-2 gap-y-2">
        {item.technologies.map((tech, i) => (
          <span key={tech} className="text-xs font-mono text-ink/35">
            {tech}
            {i < item.technologies.length - 1 && <span className="text-ink/15 ml-2">/</span>}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

export default function Experience() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="experience" className="section-pad px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-16"
        >
          <span className="font-mono text-xs text-ink/35 uppercase tracking-widest">04 — Experience</span>
          <div className="h-px flex-1 bg-ink/10" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mb-4"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-semibold leading-tight mb-3">
            Experience &amp; Education
          </h2>
          <p className="text-ink/40 text-lg max-w-xl">
            Where I&apos;ve worked and what I&apos;ve built.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-16">
          {/* Timeline */}
          <div className="lg:col-span-2">
            {timeline.map((item, i) => (
              <TimelineRow key={item.id} item={item} index={i} />
            ))}
            <div className="border-t border-ink/10" />
          </div>

          {/* Sidebar */}
          <div className="space-y-8 lg:pt-0">
            <div className="border-t border-ink/10 pt-6">
              <h3 className="font-mono text-xs text-ink/35 uppercase tracking-widest mb-4">
                Certifications
              </h3>
              <div className="space-y-3">
                {certs.map((cert) => (
                  <div key={cert.name}>
                    <p className="text-sm text-ink/65 font-medium leading-tight">{cert.name}</p>
                    <p className="text-xs text-ink/35 mt-0.5">{cert.issuer}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-ink/10 pt-6">
              <h3 className="font-mono text-xs text-ink/35 uppercase tracking-widest mb-4">
                Education
              </h3>
              <p className="text-ink/75 font-medium text-sm">B.Tech — Computer Science</p>
              <p className="text-ink/40 text-sm mt-1">Warangal Institute of Technology and Science</p>
              <p className="text-xs font-mono text-ink/30 mt-3">2021–2025 · CGPA 7.58</p>
            </div>

            <div className="border-t border-ink/10 pt-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                <span className="text-sm font-medium text-ink/70">Available now</span>
              </div>
              <p className="text-xs text-ink/40 leading-relaxed mb-4">
                Looking for full-time Software Engineer or Backend roles. Open to remote, hybrid, or on-site.
              </p>
              <a
                href="mailto:Deexithmsd13@gmail.com"
                className="inline-block text-sm text-accent hover:text-accent-light transition-colors font-mono"
              >
                Reach Out →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
