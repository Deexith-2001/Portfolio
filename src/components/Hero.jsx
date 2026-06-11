import { useRef } from 'react'
import { useTyped } from '../hooks/useTyped'

const WORDS = [
  'Musham.',
  'a Python Dev.',
  'a Backend Engineer.',
  'an AI Builder.',
  'a Full-Stack Dev.',
]

export default function Hero() {
  const typedRef = useRef(null)
  useTyped(typedRef, WORDS)

  return (
    <section id="hero">
      <div className="hero-content">
        <div className="hero-tag">
          <span></span> Open to Full-time &amp; Freelance
        </div>
        <h1 className="hero-name">
          <span className="line1">Sai Deexith</span>
          <span className="line2" ref={typedRef}></span>
        </h1>
        <div className="hero-roles">
          <span className="role-tag">Python Developer</span>
          <span className="role-dot">•</span>
          <span className="role-tag">Full-Stack Engineer</span>
          <span className="role-dot">•</span>
          <span className="role-tag">AI &amp; Backend Systems</span>
        </div>
        <p className="hero-desc">
          B.Tech CSE graduate with hands-on experience building{' '}
          <strong>production-grade backend systems</strong>,{' '}
          <strong>AI-powered applications</strong>, and microservice architectures.
          Currently interning at <strong>Jaagruk Bharat</strong> — architected 27 config
          microservices, built an AI chatbot assistant, and integrated government scheme
          data pipelines.
        </p>
        <div className="hero-actions">
          <a href="#projects" className="btn-primary">View Projects</a>
          <a href="mailto:Deexithmsd13@gmail.com" className="btn-secondary">Get In Touch</a>
        </div>
      </div>

      <div className="hero-right">
        <div className="stat-card">
          <span className="stat-num">27</span>
          <span className="stat-label">Microservices Deployed</span>
        </div>
        <div className="stat-card">
          <span className="stat-num">5</span>
          <span className="stat-label">Projects Built</span>
        </div>
        <div className="stat-card">
          <span className="stat-num">7.58</span>
          <span className="stat-label">CGPA / 10</span>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="scroll-line"></div>
        Scroll to explore
      </div>
    </section>
  )
}
