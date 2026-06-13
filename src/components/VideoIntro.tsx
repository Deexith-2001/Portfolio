'use client'

import { useEffect, useRef, useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Volume2, VolumeX, X, Play, ChevronRight } from 'lucide-react'

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? ''
const VIDEO_SRC = `${BASE}/intro.mp4`

const SECTIONS = ['#about', '#skills', '#projects', '#experience', '#contact']
const SCROLL_PAUSE = 2400

export default function VideoIntro() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [visible, setVisible] = useState(true)
  const [playing, setPlaying] = useState(false)
  const [muted, setMuted] = useState(true)
  const [progress, setProgress] = useState(0)
  const [duration, setDuration] = useState(0)
  const [showPlay, setShowPlay] = useState(true)
  const [exiting, setExiting] = useState(false)
  const [scrollLabel, setScrollLabel] = useState('')
  const [videoError, setVideoError] = useState(false)

  // Skip if already played this session
  useEffect(() => {
    if (sessionStorage.getItem('intro-played')) {
      setVisible(false)
    }
  }, [])

  const startTour = useCallback(() => {
    sessionStorage.setItem('intro-played', '1')
    setExiting(true)
    setTimeout(() => {
      setVisible(false)
      document.body.style.overflow = ''
      let i = 0
      const next = () => {
        if (i >= SECTIONS.length) { setScrollLabel(''); return }
        const el = document.querySelector(SECTIONS[i]) as HTMLElement
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' })
          setScrollLabel(SECTIONS[i].replace('#', ''))
        }
        i++
        setTimeout(next, SCROLL_PAUSE)
      }
      setTimeout(next, 500)
    }, 700)
  }, [])

  const skip = useCallback(() => {
    sessionStorage.setItem('intro-played', '1')
    setExiting(true)
    setTimeout(() => {
      setVisible(false)
      document.body.style.overflow = ''
    }, 700)
  }, [])

  // Start video on user click (satisfies browser autoplay policy)
  const handlePlay = useCallback(() => {
    const v = videoRef.current
    if (!v) return
    v.play().then(() => {
      setPlaying(true)
      setShowPlay(false)
    }).catch(() => {
      // Fallback: retry muted
      v.muted = true
      v.play().then(() => { setPlaying(true); setShowPlay(false) })
    })
  }, [])

  const toggleMute = useCallback(() => {
    const v = videoRef.current
    if (!v) return
    v.muted = !v.muted
    setMuted(v.muted)
  }, [])

  const handleTimeUpdate = useCallback(() => {
    const v = videoRef.current
    if (!v || !v.duration) return
    setProgress((v.currentTime / v.duration) * 100)
  }, [])

  const handleLoadedMetadata = useCallback(() => {
    const v = videoRef.current
    if (v) setDuration(v.duration)
  }, [])

  const handleEnded = useCallback(() => {
    startTour()
  }, [startTour])

  const handleSeek = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const v = videoRef.current
    if (!v || !v.duration) return
    const rect = e.currentTarget.getBoundingClientRect()
    const ratio = (e.clientX - rect.left) / rect.width
    v.currentTime = ratio * v.duration
    setProgress(ratio * 100)
  }, [])

  const formatTime = (s: number) => {
    const m = Math.floor(s / 60)
    const sec = Math.floor(s % 60)
    return `${m}:${sec.toString().padStart(2, '0')}`
  }

  if (!visible) {
    return (
      <AnimatePresence>
        {scrollLabel && (
          <motion.div
            key="label"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[9989] flex items-center gap-2 px-5 py-2.5 rounded-full bg-[rgba(5,5,5,0.85)] border border-white/[0.08] backdrop-blur-xl"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            <span className="text-white/55 text-sm font-mono capitalize">{scrollLabel}</span>
          </motion.div>
        )}
      </AnimatePresence>
    )
  }

  return (
    <AnimatePresence>
      <motion.div
        key="intro"
        initial={{ opacity: 0 }}
        animate={{ opacity: exiting ? 0 : 1 }}
        transition={{ duration: 0.7 }}
        className="fixed inset-0 z-[9990] bg-black flex flex-col items-center justify-center overflow-hidden"
      >
        {/* ── Video ── */}
        {!videoError ? (
          <video
            ref={videoRef}
            src={VIDEO_SRC}
            muted={muted}
            playsInline
            preload="auto"
            onTimeUpdate={handleTimeUpdate}
            onLoadedMetadata={handleLoadedMetadata}
            onEnded={handleEnded}
            onError={() => setVideoError(true)}
            className="absolute inset-0 w-full h-full object-cover"
            style={{ opacity: playing ? 1 : 0.15, transition: 'opacity 0.6s' }}
          />
        ) : (
          /* Fallback if no video file yet */
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-6">
            <div className="orb w-[600px] h-[600px] bg-blue-500/10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" style={{ position: 'absolute' }} />
            <p className="text-white/20 font-mono text-sm z-10">
              Add <span className="text-white/50">public/intro.mp4</span> to enable the video intro
            </p>
          </div>
        )}

        {/* ── Cinematic letterbox bars ── */}
        <div className="absolute top-0 left-0 right-0 h-[10vh] bg-black z-10 pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-[10vh] bg-black z-10 pointer-events-none" />

        {/* ── Top bar ── */}
        <div className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-6 py-4 h-[10vh]">
          {/* Name / brand */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex items-center gap-3"
          >
            <div className="w-8 h-8 rounded-lg border border-white/15 flex items-center justify-center bg-white/[0.05]">
              <span className="font-mono text-xs font-semibold text-white/60">SD</span>
            </div>
            <div>
              <p className="text-white/80 text-sm font-semibold tracking-wide">Sai Deexith</p>
              <p className="text-white/35 text-xs font-mono">Backend Engineer · AI Builder</p>
            </div>
          </motion.div>

          {/* Skip */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            onClick={skip}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl border border-white/[0.1] bg-black/40 text-white/40 text-sm hover:text-white/80 hover:border-white/20 transition-all duration-200 backdrop-blur-sm"
          >
            <X className="w-3.5 h-3.5" />
            Skip
          </motion.button>
        </div>

        {/* ── Center play button (before play) ── */}
        <AnimatePresence>
          {showPlay && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="relative z-20 flex flex-col items-center gap-5"
            >
              {/* Glow */}
              <div className="absolute inset-[-60px] rounded-full bg-blue-500/10 blur-3xl pointer-events-none" />

              <p className="text-white/50 text-sm font-mono uppercase tracking-[0.25em]">
                Personal Introduction
              </p>

              <button
                onClick={handlePlay}
                className="group relative w-20 h-20 rounded-full border-2 border-white/20 flex items-center justify-center bg-white/5 hover:bg-white/10 hover:border-white/40 transition-all duration-300"
              >
                <motion.div
                  animate={{ scale: [1, 1.15, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute inset-[-10px] rounded-full border border-white/10"
                />
                <Play className="w-8 h-8 text-white ml-1 group-hover:scale-110 transition-transform" fill="white" />
              </button>

              <p className="text-white/30 text-sm">
                Click to watch · {videoError ? '–' : duration > 0 ? formatTime(duration) : '...'}
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── Bottom controls ── */}
        <div className="absolute bottom-0 left-0 right-0 z-20 flex flex-col px-6 pb-4 gap-3 h-[10vh] justify-end">
          {/* Progress bar */}
          {playing && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-center gap-3"
            >
              <span className="text-white/25 text-xs font-mono w-10 text-right">
                {videoRef.current ? formatTime(videoRef.current.currentTime) : '0:00'}
              </span>
              <div
                className="flex-1 h-0.5 bg-white/10 rounded-full cursor-pointer group relative"
                onClick={handleSeek}
              >
                <div
                  className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full relative transition-all duration-100"
                  style={{ width: `${progress}%` }}
                >
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-white opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
              <span className="text-white/25 text-xs font-mono w-10">
                {formatTime(duration)}
              </span>
            </motion.div>
          )}

          {/* Controls row */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              {playing && (
                <button
                  onClick={toggleMute}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-white/[0.08] bg-black/30 text-white/50 text-xs hover:text-white/80 hover:border-white/15 transition-all duration-200 backdrop-blur-sm"
                >
                  {muted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
                  {muted ? 'Unmute' : 'Mute'}
                </button>
              )}
            </div>

            {playing && (
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
                onClick={startTour}
                className="group flex items-center gap-2 px-4 py-1.5 rounded-lg bg-gradient-to-r from-blue-600/80 to-purple-600/80 text-white text-xs font-semibold hover:from-blue-500 hover:to-purple-500 transition-all duration-300"
              >
                Explore Portfolio
                <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </motion.button>
            )}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
