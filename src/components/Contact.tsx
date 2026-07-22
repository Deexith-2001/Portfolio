'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Mail, Github, Linkedin, MessageCircle, ArrowRight } from 'lucide-react'

const contactLinks = [
  {
    icon: <Mail className="w-4 h-4" />,
    label: 'Email',
    value: 'Deexithmsd13@gmail.com',
    href: 'mailto:Deexithmsd13@gmail.com',
  },
  {
    icon: <Linkedin className="w-4 h-4" />,
    label: 'LinkedIn',
    value: 'linkedin.com/in/sai-deexith-musham',
    href: 'https://linkedin.com/in/sai-deexith-musham',
  },
  {
    icon: <Github className="w-4 h-4" />,
    label: 'GitHub',
    value: 'github.com/Deexith-2001',
    href: 'https://github.com/Deexith-2001',
  },
  {
    icon: <MessageCircle className="w-4 h-4" />,
    label: 'WhatsApp',
    value: '+91 77807 46802',
    href: 'https://wa.me/917780746802',
  },
]

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="contact" className="section-pad px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-16"
        >
          <span className="font-mono text-xs text-ink/35 uppercase tracking-widest">05 — Contact</span>
          <div className="h-px flex-1 bg-ink/10" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-semibold leading-tight mb-5 max-w-xl text-balance">
            Let&apos;s build something <span className="italic text-accent">great together.</span>
          </h2>
          <p className="text-ink/50 text-lg leading-relaxed max-w-xl mb-6">
            I&apos;m actively looking for Software Engineer and Full Stack Developer roles. Open to
            full-time, contract, and freelance work. I respond within 24 hours.
          </p>
          <a
            href="mailto:Deexithmsd13@gmail.com"
            className="group inline-flex items-center gap-2.5 px-6 py-3 bg-accent text-paper text-sm font-medium hover:bg-accent-light transition-colors duration-200"
          >
            <Mail className="w-4 h-4" />
            Send a Message
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" />
          </a>
        </motion.div>

        {/* Contact links */}
        <div>
          {contactLinks.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.06 }}
              className="group flex items-center justify-between gap-4 py-4 border-t border-ink/10 hover:pl-2 transition-all duration-200"
            >
              <div className="flex items-center gap-4">
                <span className="text-ink/30 group-hover:text-accent transition-colors duration-200">
                  {link.icon}
                </span>
                <div>
                  <div className="text-xs font-mono text-ink/30 uppercase tracking-widest">
                    {link.label}
                  </div>
                  <div className="text-sm text-ink/70 group-hover:text-ink transition-colors">
                    {link.value}
                  </div>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-ink/15 group-hover:text-ink/50 group-hover:translate-x-0.5 transition-all duration-200" />
            </motion.a>
          ))}
          <div className="border-t border-ink/10" />
        </div>
      </div>
    </section>
  )
}
