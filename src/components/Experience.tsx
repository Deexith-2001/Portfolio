'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { timeline } from '@/data/experience'
import { Briefcase, GraduationCap, CheckCircle2, Award } from 'lucide-react'

const certs = [
  { name: 'Software Engineering Certificate', issuer: 'HackerRank' },
  { name: 'Python (Basic) Certificate', issuer: 'HackerRank' },
]

function TimelineCard({ item, index }: { item: (typeof timeline)[0]; index: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
      className="relative pl-12"
    >
      {/* Dot */}
      <div className={`absolute left-0 top-6 flex items-center justify-center w-9 h-9 rounded-full border-2 ${
        item.isPresent
          ? 'border-blue-500 bg-blue-500/10'
          : 'border-white/15 bg-white/[0.04]'
      }`}>
        {index === 0 ? (
          <Briefcase className={`w-4 h-4 ${item.isPresent ? 'text-blue-400' : 'text-white/30'}`} />
        ) : (
          <GraduationCap className="w-4 h-4 text-white/30" />
        )}
      </div>

      {/* Card */}
      <div className={`glass-card rounded-3xl border overflow-hidden transition-all duration-400 hover:-translate-y-1 ${
        item.isPresent ? 'border-blue-500/20' : 'border-white/[0.07]'
      }`}>
        {item.isPresent && (
          <div className="h-px bg-gradient-to-r from-blue-500/50 via-purple-500/30 to-transparent" />
        )}
        <div className="p-7 sm:p-8">
          <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="font-mono text-xs text-white/30">{item.period}</span>
                {item.isPresent && (
                  <span className="flex items-center gap-1 text-xs px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                    Current
                  </span>
                )}
              </div>
              <h3 className="text-xl font-semibold text-white/90 leading-tight">{item.role}</h3>
              <div className="flex flex-wrap items-center gap-3 mt-1.5">
                <span className="text-white/55 font-medium">{item.company}</span>
                <span className="text-white/25 text-sm">·</span>
                <span className="text-white/35 text-sm">{item.type}</span>
              </div>
            </div>
          </div>

          <p className="text-white/45 text-sm leading-relaxed mb-6">{item.description}</p>

          <div className="space-y-2.5 mb-6">
            {item.achievements.map((achievement, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.15 + i * 0.06, duration: 0.4 }}
                className="flex items-start gap-3"
              >
                <CheckCircle2 className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                  item.isPresent ? 'text-blue-400/60' : 'text-white/25'
                }`} />
                <span className="text-sm text-white/55 leading-relaxed">{achievement}</span>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-wrap gap-2">
            {item.technologies.map((tech) => (
              <span
                key={tech}
                className={`text-xs px-2.5 py-1 rounded-lg border font-mono ${
                  item.isPresent
                    ? 'bg-blue-500/5 text-blue-400/70 border-blue-500/15'
                    : 'bg-white/[0.03] text-white/40 border-white/[0.07]'
                }`}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function Experience() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="experience" className="section-pad px-6 relative">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="orb w-[400px] h-[400px] bg-indigo-500/[0.04] top-1/2 left-0 -translate-y-1/2" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-16"
        >
          <span className="section-number">04 — Experience</span>
          <div className="h-px flex-1 bg-white/[0.06]" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-display font-bold leading-tight mb-4">
            Experience & Education
          </h2>
          <p className="text-white/40 text-lg max-w-xl">
            Where I've worked and what I've built.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Timeline */}
          <div className="lg:col-span-2">
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-[18px] top-10 bottom-10 w-px bg-white/[0.06]" />
              <div className="space-y-8">
                {timeline.map((item, i) => (
                  <TimelineCard key={item.id} item={item} index={i} />
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-5">
            {/* Certs */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="glass-card rounded-2xl p-6"
            >
              <h3 className="text-sm font-mono text-white/30 uppercase tracking-widest mb-5">
                Certifications
              </h3>
              <div className="space-y-3">
                {certs.map((cert) => (
                  <div key={cert.name} className="flex items-start gap-3">
                    <Award className="w-4 h-4 text-amber-400/60 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-white/65 font-medium leading-tight">{cert.name}</p>
                      <p className="text-xs text-white/30 mt-0.5">{cert.issuer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Education card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="glass-card rounded-2xl p-6"
            >
              <h3 className="text-sm font-mono text-white/30 uppercase tracking-widest mb-5">
                Education
              </h3>
              <div className="space-y-2">
                <p className="text-white/75 font-semibold text-sm">B.Tech — Computer Science</p>
                <p className="text-white/40 text-sm">Warangal Institute of Technology and Science</p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {['2021–2025', 'CGPA: 7.58', 'CSE'].map((tag) => (
                    <span key={tag} className="text-xs px-2 py-0.5 rounded-md bg-white/[0.03] border border-white/[0.06] text-white/35 font-mono">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact quick */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="glass-card rounded-2xl p-6 border border-blue-500/10"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-sm font-medium text-white/60">Available now</span>
              </div>
              <p className="text-xs text-white/35 leading-relaxed mb-4">
                Looking for full-time Software Engineer or Backend roles. Open to remote, hybrid, or on-site.
              </p>
              <a
                href="mailto:Deexithmsd13@gmail.com"
                className="block text-center py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-semibold hover:from-blue-500 hover:to-purple-500 transition-all duration-300"
              >
                Reach Out
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
