const CODE_HTML = `<span class="keyword">const</span> me = {<br/>&nbsp;&nbsp;<span class="prop">stack</span>: [<span class="string">"Python"</span>, <span class="string">"Next.js"</span>],<br/>&nbsp;&nbsp;<span class="prop">ai</span>: <span class="string">"OpenAI + NLP"</span>,<br/>&nbsp;&nbsp;<span class="prop">microservices</span>: <span class="num-lit">27</span>,<br/>&nbsp;&nbsp;<span class="prop">cgpa</span>: <span class="num-lit">7.58</span><br/>};`

export default function About() {
  return (
    <section id="about">
      <div className="reveal">
        <div className="section-label">Who I Am</div>
        <h2 className="section-title">
          Building Systems<br />that <span className="grad">Actually Ship</span>
        </h2>
        <p className="about-text">
          I&apos;m a <strong>Computer Science graduate (B.Tech, 2025)</strong> from WITS, Warangal,
          with a passion for building robust backend systems and intelligent applications.
          I thrive at the intersection of software engineering and AI.
        </p>
        <p className="about-text">
          At Jaagruk Bharat, I&apos;ve been deep in production — designing microservice architectures,
          scraping and integrating large government datasets, and shipping an AI chatbot
          with full payment flow — all in <strong>Next.js + TypeScript</strong>.
        </p>

        <div className="info-grid">
          <div className="info-item">
            <span className="info-key">Email</span>
            <span className="info-val">
              <a href="mailto:Deexithmsd13@gmail.com">Deexithmsd13@gmail.com</a>
            </span>
          </div>
          <div className="info-item">
            <span className="info-key">Phone</span>
            <span className="info-val">+91 77807 46802</span>
          </div>
          <div className="info-item">
            <span className="info-key">Education</span>
            <span className="info-val">B.Tech CSE, WITS 2025</span>
          </div>
          <div className="info-item">
            <span className="info-key">Status</span>
            <span className="info-val" style={{ color: 'var(--green)' }}>● Available Now</span>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
          <a href="mailto:Deexithmsd13@gmail.com" className="btn-primary"  style={{ padding: '12px 26px', fontSize: '0.82rem' }}>Email Me</a>
          <a href="#" className="btn-secondary" style={{ padding: '12px 26px', fontSize: '0.82rem' }}>Download CV</a>
        </div>
      </div>

      <div className="about-visual reveal">
        {/* Main card */}
        <div className="about-card-3d card-main">
          <div className="avatar-ring">
            <div className="avatar-inner">SD</div>
          </div>
          <div style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '2px' }}>
            Sai Deexith Musham
          </div>
          <div style={{ fontSize: '0.78rem', color: 'var(--cyan)', marginBottom: '18px', fontFamily: "'Space Mono',monospace" }}>
            Python Dev · Full-Stack · AI
          </div>
          <div style={{ fontSize: '0.82rem', color: 'var(--text-dim)', lineHeight: 1.7, marginBottom: '6px' }}>
            🏢 Jaagruk Bharat (Intern)
          </div>
          <div style={{ fontSize: '0.82rem', color: 'var(--text-dim)', lineHeight: 1.7, marginBottom: '6px' }}>
            🎓 B.Tech CSE — WITS 2025
          </div>
          <div style={{ fontSize: '0.82rem', color: 'var(--green)', lineHeight: 1.7 }}>
            ● Open to work
          </div>
          <div className="code-snippet" dangerouslySetInnerHTML={{ __html: CODE_HTML }} />
        </div>

        {/* Accent card 1 */}
        <div className="about-card-3d card-accent-1">
          <div style={{ fontSize: '0.68rem', color: 'var(--text-dim)', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '6px' }}>
            Currently at
          </div>
          <div style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text)' }}>
            Jaagruk Bharat
          </div>
          <div style={{ marginTop: '8px', display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
            <div className="skill-tag tag-cyan"   style={{ fontSize: '0.62rem', padding: '2px 9px' }}>Next.js</div>
            <div className="skill-tag tag-purple" style={{ fontSize: '0.62rem', padding: '2px 9px' }}>TypeScript</div>
          </div>
        </div>

        {/* Accent card 2 */}
        <div className="about-card-3d card-accent-2">
          <div style={{ fontSize: '0.68rem', color: 'var(--text-dim)', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '4px' }}>
            Backend
          </div>
          <div style={{ fontSize: '0.78rem', color: 'var(--cyan)', fontFamily: "'Space Mono',monospace" }}>
            FastAPI · Flask · PostgreSQL
          </div>
        </div>
      </div>
    </section>
  )
}
