import { useRef } from 'react'
import { useTyped } from '../hooks/useTyped'

const WORDS = [
  'Python Developer.',
  'Backend Engineer.',
  'Full-Stack Builder.',
  'AI Systems Dev.',
  'API Architect.',
]

export default function Hero() {
  const typedRef = useRef(null)
  useTyped(typedRef, WORDS)

  return (
    <section id="hero">
      <div className="hero-content">
        <div className="hero-eyebrow">
          <span className="eyebrow-dot" />
          Open to Full-time &amp; Freelance · 2026
        </div>

        <h1 className="hero-name">
          Sai Deexith<br />
          <span className="name-underline">Musham</span>
        </h1>

        <div className="hero-prompt">
          <span className="prompt-char">$</span>
          <span ref={typedRef} id="hero-typed"></span>
        </div>

        <p className="hero-desc">
          B.Tech CSE graduate building <strong>production-grade backend systems</strong>,{' '}
          <strong>AI-powered applications</strong>, and microservice architectures.
          Currently interning at <strong>Jaagruk Bharat</strong> where I architected
          27 config microservices, shipped an AI chatbot, and integrated
          government data pipelines — all in <strong>Next.js + TypeScript</strong>.
        </p>

        <div className="hero-actions">
          <a href="#projects" className="btn-primary">
            View Projects →
          </a>
          <a href="#contact" className="btn-secondary">
            Get In Touch
          </a>
        </div>

        <div className="hero-stats">
          <div className="hero-stat">
            <span className="hero-stat-num">27<span>+</span></span>
            <span className="hero-stat-label">Microservices</span>
          </div>
          <div className="hero-stat">
            <span className="hero-stat-num">7</span>
            <span className="hero-stat-label">Projects</span>
          </div>
          <div className="hero-stat">
            <span className="hero-stat-num">7.58</span>
            <span className="hero-stat-label">CGPA / 10</span>
          </div>
          <div className="hero-stat">
            <span className="hero-stat-num">1<span>+</span></span>
            <span className="hero-stat-label">Years Exp</span>
          </div>
        </div>
      </div>

      <div className="hero-right">
        <div className="terminal-card">
          <div className="terminal-header">
            <span className="t-dot t-dot-red"   />
            <span className="t-dot t-dot-yellow" />
            <span className="t-dot t-dot-green"  />
            <span className="t-title">sai@portfolio ~ bash</span>
          </div>
          <div className="terminal-body">
            <div className="t-line">
              <span className="t-prompt">$</span>
              <span className="t-cmd"> cat developer.json</span>
            </div>
            <pre className="t-output">{`{
  `}<span className="t-key">"name"</span>{`: `}<span className="t-str">"Sai Deexith Musham"</span>{`,
  `}<span className="t-key">"role"</span>{`: `}<span className="t-str">"Full-Stack · Python · AI"</span>{`,
  `}<span className="t-key">"stack"</span>{`: [`}<span className="t-str">"Python"</span>{`, `}<span className="t-str">"Next.js"</span>{`, `}<span className="t-str">"FastAPI"</span>{`],
  `}<span className="t-key">"microservices"</span>{`: `}<span className="t-num">27</span>{`,
  `}<span className="t-key">"cgpa"</span>{`: `}<span className="t-num">7.58</span>{`,
  `}<span className="t-key">"status"</span>{`: `}<span className="t-str">"open-to-work"</span>{`
}`}</pre>

            <div className="t-line" style={{ marginTop: '8px' }}>
              <span className="t-prompt">$</span>
              <span className="t-cmd"> git log --oneline --graph</span>
            </div>
            <pre className="t-output" style={{ marginBottom: 0 }}>{`* `}<span className="t-val">a1b2c3d</span>{` feat: AI chatbot with payment flow
* `}<span className="t-val">f4e5d6c</span>{` build: 27 config microservices
* `}<span className="t-val">7g8h9i0</span>{` feat: GrowTech AgriBot NLP engine
* `}<span className="t-val">j1k2l3m</span>{` init: FastAPI tuition-portal`}</pre>

            <div className="t-line" style={{ marginTop: '10px' }}>
              <span className="t-prompt">$</span>
              <span className="t-cmd"> </span>
              <span className="t-cursor" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
