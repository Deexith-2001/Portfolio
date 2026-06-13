'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { MapPin, Mail, BookOpen, Cpu, Code2, Zap } from 'lucide-react'

const journey = [
  {
    year: '2021',
    event: 'Started B.Tech CSE',
    detail: 'Chose computer science to understand how software shapes the world',
  },
  {
    year: '2022–23',
    event: 'Learned Backend Engineering',
    detail: 'Python, APIs, databases — fell in love with systems that process, transform, and serve data',
  },
  {
    year: '2024',
    event: 'Built first AI applications',
    detail: 'AgriBot assistant, crop advisor — discovered how LLMs can solve domain-specific problems',
  },
  {
    year: '2025',
    event: 'Graduated & went professional',
    detail: 'B.Tech CSE from WITS with 7.58 CGPA. Ready to build production-grade software',
  },
  {
    year: '2026',
    event: 'Jaagruk Bharat Intern',
    detail: '27 microservices, AI chatbot, government data pipelines — all in production',
  },
]

function FadeUp({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  )
}

export default function About() {
  const sectionRef = useRef(null)
  const inView = useInView(sectionRef, { once: true, margin: '-100px' })

  return (
    <section id="about" className="section-pad px-6 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <FadeUp>
          <div className="flex items-center gap-4 mb-16">
            <span className="section-number">01 — About</span>
            <div className="h-px flex-1 bg-white/[0.06]" />
          </div>
        </FadeUp>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left: Story */}
          <div className="space-y-10">
            <FadeUp delay={0.1}>
              <h2 className="text-4xl sm:text-5xl font-display font-bold leading-tight text-balance">
                I build systems that{' '}
                <span className="italic gradient-text">actually ship.</span>
              </h2>
            </FadeUp>

            <FadeUp delay={0.2}>
              <p className="text-white/55 text-lg leading-relaxed">
                Computer Science graduate from WITS, Warangal (B.Tech 2025). I work at the intersection
                of backend engineering and applied AI — building the kind of software that runs quietly,
                scales reliably, and solves real problems for real people.
              </p>
            </FadeUp>

            <FadeUp delay={0.3}>
              <p className="text-white/55 text-lg leading-relaxed">
                At Jaagruk Bharat, I architected 27 config microservices, shipped an AI chatbot with
                in-chat payment flow, and built a government data pipeline — all in Next.js + TypeScript,
                all in production, all serving thousands of users across India.
              </p>
            </FadeUp>

            <FadeUp delay={0.4}>
              <p className="text-white/55 text-lg leading-relaxed">
                I care about clean API contracts, readable code, and systems that the next engineer
                can actually maintain. Good software is invisible — users only notice it when it breaks.
              </p>
            </FadeUp>

            {/* Focus areas */}
            <FadeUp delay={0.5}>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: <Cpu className="w-4 h-4" />, label: 'Backend Systems' },
                  { icon: <Code2 className="w-4 h-4" />, label: 'Full Stack Dev' },
                  { icon: <Zap className="w-4 h-4" />, label: 'AI Applications' },
                  { icon: <BookOpen className="w-4 h-4" />, label: 'System Design' },
                ].map(({ icon, label }) => (
                  <div
                    key={label}
                    className="flex items-center gap-2.5 px-4 py-3 rounded-xl glass-card glass-card-hover transition-all duration-300"
                  >
                    <span className="text-blue-400">{icon}</span>
                    <span className="text-white/65 text-sm font-medium">{label}</span>
                  </div>
                ))}
              </div>
            </FadeUp>

            {/* Actions */}
            <FadeUp delay={0.6}>
              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href="mailto:Deexithmsd13@gmail.com"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-semibold hover:from-blue-500 hover:to-purple-500 transition-all duration-300"
                >
                  <Mail className="w-4 h-4" />
                  Email Me
                </a>
                <a
                  href="https://github.com/Deexith-2001"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-white/[0.08] bg-white/[0.03] text-white/65 text-sm font-semibold hover:text-white hover:bg-white/[0.07] transition-all duration-200"
                >
                  GitHub Profile
                </a>
              </div>
            </FadeUp>
          </div>

          {/* Right: Profile + Timeline */}
          <div className="space-y-6">
            {/* Profile card */}
            <FadeUp delay={0.15}>
              <div className="glass-card rounded-3xl p-8 relative overflow-hidden">
                {/* Glow */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/[0.06] rounded-full blur-3xl pointer-events-none" />
                <div className="flex items-start gap-5 mb-7">
                  {/* Avatar */}
                  <div className="w-16 h-16 rounded-2xl flex-shrink-0 flex items-center justify-center font-display font-bold text-2xl relative overflow-hidden"
                    style={{ background: 'linear-gradient(135deg, #4f82ff, #9b6dff)' }}>
                    <span className="text-white">SD</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white/90 text-lg">Sai Deexith Musham</h3>
                    <p className="text-sm text-white/40 mt-0.5">Backend Engineer · Full Stack · AI Builder</p>
                    <div className="mt-2 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-green-500/10 border border-green-500/20">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                      <span className="text-xs text-green-400 font-medium">Open to work</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  {[
                    { icon: <MapPin className="w-3.5 h-3.5" />, label: 'Warangal, India' },
                    { icon: <Mail className="w-3.5 h-3.5" />, label: 'Deexithmsd13@gmail.com' },
                    { icon: <BookOpen className="w-3.5 h-3.5" />, label: 'B.Tech CSE · WITS 2025' },
                  ].map(({ icon, label }) => (
                    <div key={label} className="flex items-center gap-3 text-sm text-white/40">
                      <span className="text-white/25">{icon}</span>
                      {label}
                    </div>
                  ))}
                </div>
              </div>
            </FadeUp>

            {/* Career timeline */}
            <FadeUp delay={0.25}>
              <div className="glass-card rounded-3xl p-8">
                <h3 className="text-sm font-mono text-white/30 uppercase tracking-widest mb-6">
                  Career Journey
                </h3>
                <div className="relative">
                  {/* Line */}
                  <div className="absolute left-[7px] top-2 bottom-2 w-px bg-white/[0.06]" />
                  <div className="space-y-6">
                    {journey.map((item, i) => (
                      <motion.div
                        key={item.year}
                        ref={sectionRef}
                        initial={{ opacity: 0, x: -10 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                        className="pl-6 relative"
                      >
                        <div className={`absolute left-0 top-1.5 w-3.5 h-3.5 rounded-full border-2 ${
                          i === journey.length - 1
                            ? 'border-blue-500 bg-blue-500/20'
                            : 'border-white/20 bg-white/5'
                        }`} />
                        <div className="flex flex-wrap items-baseline gap-2 mb-0.5">
                          <span className={`font-mono text-xs font-semibold ${
                            i === journey.length - 1 ? 'text-blue-400' : 'text-white/30'
                          }`}>
                            {item.year}
                          </span>
                          <span className="text-sm font-medium text-white/75">{item.event}</span>
                        </div>
                        <p className="text-xs text-white/35 leading-relaxed">{item.detail}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  )
}
