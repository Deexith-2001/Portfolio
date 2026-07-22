'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { MapPin, Mail, BookOpen } from 'lucide-react'

function FadeUp({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  )
}

const focusAreas = ['Backend Systems', 'Full Stack Dev', 'AI Applications', 'System Design']

const facts = [
  { icon: <MapPin className="w-3.5 h-3.5" />, label: 'Warangal, India' },
  { icon: <Mail className="w-3.5 h-3.5" />, label: 'Deexithmsd13@gmail.com' },
  { icon: <BookOpen className="w-3.5 h-3.5" />, label: 'B.Tech CSE · WITS 2025' },
]

export default function About() {
  return (
    <section id="about" className="section-pad px-6">
      <div className="max-w-4xl mx-auto">
        <FadeUp>
          <div className="flex items-center gap-4 mb-16">
            <span className="font-mono text-xs text-ink/35 uppercase tracking-widest">01 — About</span>
            <div className="h-px flex-1 bg-ink/10" />
          </div>
        </FadeUp>

        <div className="grid md:grid-cols-[1fr_260px] gap-16 items-start">
          {/* Story */}
          <div className="space-y-8">
            <FadeUp delay={0.05}>
              <h2 className="font-display text-3xl sm:text-4xl font-semibold leading-tight text-balance">
                I build systems that <span className="italic text-accent">actually ship.</span>
              </h2>
            </FadeUp>

            <FadeUp delay={0.1}>
              <p className="text-ink/60 text-lg leading-relaxed">
                Computer Science graduate from WITS, Warangal (B.Tech 2025). I work at the intersection
                of backend engineering and applied AI — building software that runs quietly, scales
                reliably, and solves real problems for real people.
              </p>
            </FadeUp>

            <FadeUp delay={0.15}>
              <p className="text-ink/60 text-lg leading-relaxed">
                At Jaagruk Bharat, I architected 29 config microservices, engineered a NestJS + Prisma
                backend replica system, and shipped an AI chatbot with an in-chat Cashfree payment flow —
                all in production, serving real users across India.
              </p>
            </FadeUp>

            <FadeUp delay={0.2}>
              <p className="text-ink/60 text-lg leading-relaxed">
                Outside of work, I built <span className="text-ink/85 font-medium">JobAgent</span> — a
                personal AI agent that uses Gemini and Claude together to search, match, and track job
                opportunities end to end.
              </p>
            </FadeUp>

            <FadeUp delay={0.25}>
              <p className="text-ink/60 text-lg leading-relaxed">
                I care about clean API contracts, readable code, and systems that the next engineer
                can actually maintain. Good software is invisible — users only notice it when it breaks.
              </p>
            </FadeUp>

            <FadeUp delay={0.3}>
              <div className="flex flex-wrap gap-x-6 gap-y-2 pt-2 font-mono text-xs uppercase tracking-widest text-ink/40">
                {focusAreas.map((label, i) => (
                  <span key={label} className="flex items-center gap-2">
                    {i > 0 && <span className="text-ink/15">·</span>}
                    {label}
                  </span>
                ))}
              </div>
            </FadeUp>

            <FadeUp delay={0.35}>
              <div className="flex flex-wrap gap-3 pt-4">
                <a
                  href="mailto:Deexithmsd13@gmail.com"
                  className="flex items-center gap-2 px-5 py-2.5 bg-accent text-paper text-sm font-medium hover:bg-accent-light transition-colors duration-200"
                >
                  <Mail className="w-4 h-4" />
                  Email Me
                </a>
                <a
                  href="https://github.com/Deexith-2001"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 border border-ink/15 text-ink/70 text-sm font-medium hover:text-ink hover:border-ink/30 transition-colors duration-200"
                >
                  GitHub Profile
                </a>
              </div>
            </FadeUp>
          </div>

          {/* Fact sheet */}
          <FadeUp delay={0.15}>
            <div className="border-t border-ink/10 pt-6">
              <h3 className="font-display text-lg mb-1">Sai Deexith Musham</h3>
              <p className="text-sm text-ink/40 mb-5">Full-Stack Engineer · AI &amp; Backend Systems</p>

              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 border border-ink/15 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                <span className="text-xs text-ink/60 font-mono">Open to work</span>
              </div>

              <div className="space-y-3 border-t border-ink/10 pt-5">
                {facts.map(({ icon, label }) => (
                  <div key={label} className="flex items-center gap-3 text-sm text-ink/45">
                    <span className="text-ink/25">{icon}</span>
                    {label}
                  </div>
                ))}
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  )
}
