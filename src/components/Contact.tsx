'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Mail, Github, Linkedin, MessageCircle, ExternalLink, ArrowRight } from 'lucide-react'

const contactLinks = [
  {
    icon: <Mail className="w-5 h-5" />,
    label: 'Email',
    value: 'Deexithmsd13@gmail.com',
    href: 'mailto:Deexithmsd13@gmail.com',
    description: 'Best for professional enquiries',
    color: 'blue',
  },
  {
    icon: <Linkedin className="w-5 h-5" />,
    label: 'LinkedIn',
    value: 'linkedin.com/in/sai-deexith-musham',
    href: 'https://linkedin.com/in/sai-deexith-musham',
    description: 'Connect professionally',
    color: 'blue',
  },
  {
    icon: <Github className="w-5 h-5" />,
    label: 'GitHub',
    value: 'github.com/Deexith-2001',
    href: 'https://github.com/Deexith-2001',
    description: 'See my open source work',
    color: 'purple',
  },
  {
    icon: <MessageCircle className="w-5 h-5" />,
    label: 'WhatsApp',
    value: '+91 77807 46802',
    href: 'https://wa.me/917780746802',
    description: 'Quick messages welcome',
    color: 'green',
  },
]

const colorMap: Record<string, { icon: string; border: string; hover: string }> = {
  blue: {
    icon: 'text-blue-400 group-hover:text-blue-300',
    border: 'group-hover:border-blue-500/25',
    hover: 'group-hover:bg-blue-500/5',
  },
  purple: {
    icon: 'text-purple-400 group-hover:text-purple-300',
    border: 'group-hover:border-purple-500/25',
    hover: 'group-hover:bg-purple-500/5',
  },
  green: {
    icon: 'text-green-400 group-hover:text-green-300',
    border: 'group-hover:border-green-500/25',
    hover: 'group-hover:bg-green-500/5',
  },
}

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="contact" className="section-pad px-6 relative">
      {/* Background orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="orb w-[500px] h-[500px] bg-blue-500/[0.06] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        <div className="orb w-[300px] h-[300px] bg-purple-500/[0.05] top-1/4 right-1/4" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-16"
        >
          <span className="section-number">06 — Contact</span>
          <div className="h-px flex-1 bg-white/[0.06]" />
        </motion.div>

        {/* Main CTA block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="glass-card rounded-3xl border border-white/[0.07] overflow-hidden mb-8"
          style={{
            background: 'linear-gradient(135deg, rgba(79,130,255,0.04) 0%, rgba(155,109,255,0.03) 100%)',
          }}
        >
          <div className="h-px bg-gradient-to-r from-blue-500/40 via-purple-500/20 to-transparent" />
          <div className="p-10 sm:p-14 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="max-w-xl">
              <h2 className="text-4xl sm:text-5xl font-display font-bold leading-tight mb-4">
                Let&apos;s build something{' '}
                <span className="italic gradient-text">great together.</span>
              </h2>
              <p className="text-white/50 text-lg leading-relaxed">
                I&apos;m actively looking for Software Engineer and Full Stack Developer roles. Open to full-time,
                contract, and freelance work. I respond within 24 hours.
              </p>
              <div className="flex items-center gap-2 mt-5">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-400" />
                </span>
                <span className="text-sm text-green-400/80 font-medium">Available for new opportunities</span>
              </div>
            </div>
            <a
              href="mailto:Deexithmsd13@gmail.com"
              className="group flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 text-white text-base font-semibold hover:from-blue-500 hover:to-purple-500 transition-all duration-300 shadow-xl shadow-blue-500/20 whitespace-nowrap flex-shrink-0"
            >
              <Mail className="w-5 h-5" />
              Send a Message
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </a>
          </div>
        </motion.div>

        {/* Contact links grid */}
        <div className="grid sm:grid-cols-2 gap-4">
          {contactLinks.map((link, i) => {
            const c = colorMap[link.color]
            return (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.25 + i * 0.07 }}
                className={`group glass-card rounded-2xl border border-white/[0.07] p-5 flex items-center gap-4 ${c.border} ${c.hover} hover:-translate-y-0.5 transition-all duration-300`}
              >
                <div className={`p-2.5 rounded-xl bg-white/[0.04] ${c.icon} transition-colors duration-200`}>
                  {link.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs font-mono text-white/25 uppercase tracking-widest mb-0.5">
                    {link.label}
                  </div>
                  <div className="text-sm text-white/65 font-medium truncate group-hover:text-white/85 transition-colors">
                    {link.value}
                  </div>
                  <div className="text-xs text-white/30 mt-0.5">{link.description}</div>
                </div>
                <ExternalLink className="w-4 h-4 text-white/20 group-hover:text-white/50 transition-colors flex-shrink-0" />
              </motion.a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
