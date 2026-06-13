'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronRight } from 'lucide-react'

const SPEECH_LINES = [
  { text: "Hey — I'm Sai Deexith.", delay: 0.2 },
  { text: "Backend Engineer. Full Stack Developer.", delay: 0.8 },
  { text: "I build systems that scale.", delay: 1.4 },
  { text: "Currently at Jaagruk Bharat —", delay: 2.0 },
  { text: "27 microservices. AI chatbot. Gov data pipelines.", delay: 2.6 },
  { text: "All in production.", delay: 3.2 },
  { text: "Let me show you what I've built.", delay: 3.8 },
]

const SECTIONS = ['#about', '#skills', '#projects', '#experience', '#contact']
const SCROLL_DELAY_PER_SECTION = 2200

const PHOTO_SRC = `${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}/photo.jpg`

interface IntroOverlayProps {
  /** unused — photo is resolved from NEXT_PUBLIC_BASE_PATH automatically */
  imageSrc?: string
}

function SpeechLine({ text, startDelay }: { text: string; startDelay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 24 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: startDelay, ease: [0.16, 1, 0.3, 1] }}
      className="flex items-start gap-2"
    >
      <motion.span
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.3, delay: startDelay }}
        className="mt-2 w-2 h-px bg-blue-400 flex-shrink-0 origin-left"
      />
      <span className="text-white/85 text-lg sm:text-xl leading-relaxed font-light">{text}</span>
    </motion.div>
  )
}

export default function IntroOverlay({ imageSrc }: IntroOverlayProps) {
  const [visible, setVisible] = useState(true)
  const [scrolling, setScrolling] = useState(false)
  const [scrollLabel, setScrollLabel] = useState('')
  const [hasPlayed, setHasPlayed] = useState(false)

  useEffect(() => {
    if (typeof sessionStorage !== 'undefined') {
      if (sessionStorage.getItem('intro-played')) {
        setVisible(false)
        return
      }
    }
  }, [])

  const startScrollTour = useCallback(() => {
    if (scrolling) return
    setScrolling(true)
    document.body.style.overflow = 'hidden'

    setTimeout(() => {
      setVisible(false)
      document.body.style.overflow = ''

      if (typeof sessionStorage !== 'undefined') {
        sessionStorage.setItem('intro-played', '1')
      }

      let i = 0
      const scrollNext = () => {
        if (i >= SECTIONS.length) return
        const el = document.querySelector(SECTIONS[i]) as HTMLElement
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' })
          setScrollLabel(SECTIONS[i].replace('#', ''))
        }
        i++
        if (i < SECTIONS.length) {
          setTimeout(scrollNext, SCROLL_DELAY_PER_SECTION)
        } else {
          setTimeout(() => setScrollLabel(''), 1000)
        }
      }

      setTimeout(scrollNext, 600)
    }, 600)
  }, [scrolling])

  const skip = useCallback(() => {
    if (typeof sessionStorage !== 'undefined') {
      sessionStorage.setItem('intro-played', '1')
    }
    setVisible(false)
    document.body.style.overflow = ''
  }, [])

  // Auto-trigger tour after speech finishes
  useEffect(() => {
    if (!visible || hasPlayed) return
    const lastDelay = SPEECH_LINES[SPEECH_LINES.length - 1].delay
    const timer = setTimeout(() => {
      setHasPlayed(true)
      startScrollTour()
    }, (lastDelay + 2.2) * 1000)
    return () => clearTimeout(timer)
  }, [visible, hasPlayed, startScrollTour])

  return (
    <>
      <AnimatePresence>
        {visible && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="fixed inset-0 z-[9990] flex items-center justify-center px-6"
            style={{ background: 'rgba(3,3,3,0.97)', backdropFilter: 'blur(20px)' }}
          >
            {/* Background orbs */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="orb w-[500px] h-[500px] bg-blue-500/[0.08] top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2" />
              <div className="orb w-[350px] h-[350px] bg-purple-500/[0.06] bottom-1/4 right-1/4" />
            </div>

            {/* Skip button */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              onClick={skip}
              className="absolute top-6 right-6 flex items-center gap-2 px-4 py-2 rounded-xl border border-white/[0.08] bg-white/[0.03] text-white/40 text-sm hover:text-white/70 hover:border-white/[0.14] transition-all duration-200"
            >
              <X className="w-3.5 h-3.5" />
              Skip Intro
            </motion.button>

            {/* Main layout */}
            <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-20 max-w-5xl w-full">

              {/* Photo */}
              <motion.div
                initial={{ opacity: 0, scale: 0.85, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="flex-shrink-0 relative"
              >
                <div className="relative w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72">
                  {/* Glow ring */}
                  <div className="absolute inset-[-8px] rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/15 blur-xl" />
                  {/* Border ring */}
                  <div className="absolute inset-0 rounded-full border border-white/10" />
                  {/* Image or placeholder */}
                  <div className="w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-white/[0.08] flex items-center justify-center relative">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={PHOTO_SRC}
                      alt="Sai Deexith"
                      className="w-full h-full object-cover object-top"
                      onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none' }}
                    />
                    <span className="absolute font-display font-black text-6xl gradient-text select-none">SD</span>
                  </div>
                  {/* Pulse ring */}
                  <motion.div
                    animate={{ scale: [1, 1.06, 1], opacity: [0.3, 0.1, 0.3] }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute inset-[-16px] rounded-full border border-blue-400/20"
                  />
                </div>
              </motion.div>

              {/* Speech lines */}
              <div className="flex flex-col gap-5 max-w-lg">
                {SPEECH_LINES.map((line) => (
                  <SpeechLine key={line.text} text={line.text} startDelay={line.delay} />
                ))}

                {/* CTA to start tour */}
                <motion.button
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: SPEECH_LINES[SPEECH_LINES.length - 1].delay + 1,
                    duration: 0.5,
                  }}
                  onClick={startScrollTour}
                  className="mt-4 self-start group flex items-center gap-2.5 px-6 py-3 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-semibold hover:from-blue-500 hover:to-purple-500 transition-all duration-300 shadow-lg shadow-blue-500/20"
                >
                  Take the Tour
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </motion.button>
              </div>
            </div>

            {/* Progress dots */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2"
            >
              {SPEECH_LINES.map((line, i) => (
                <motion.div
                  key={i}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: line.delay + 0.3, duration: 0.3 }}
                  className="h-px w-6 bg-white/20 origin-left rounded-full"
                />
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scroll tour label */}
      <AnimatePresence>
        {scrollLabel && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[9989] flex items-center gap-2 px-5 py-2.5 rounded-full bg-[rgba(5,5,5,0.8)] border border-white/[0.08] backdrop-blur-xl"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            <span className="text-white/50 text-sm font-mono capitalize">{scrollLabel}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
