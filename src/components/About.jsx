const SNIPPET = [
  { line: '// sai-deexith.js',         cls: 'hl-cm' },
  { line: '',                           cls: '' },
  { line: 'const developer = {',        cls: '' },
  { line: '  name: "Sai Deexith",',     cls: '', k: 'name',    v: '"Sai Deexith"' },
  { line: '  grad: "B.Tech CSE 2025",', cls: '', k: 'grad',    v: '"B.Tech CSE 2025"' },
  { line: '  cgpa: 7.58,',              cls: '', k: 'cgpa',    v: '7.58', num: true },
  { line: '  role: "Full-Stack + AI",', cls: '', k: 'role',    v: '"Full-Stack + AI"' },
  { line: '  loves: ["Python",',        cls: '', k: 'loves',   v: '["Python",' },
  { line: '         "Systems",',        cls: '' },
  { line: '         "AI/ML"],',         cls: '' },
  { line: '  status: "open-to-work",',  cls: '', k: 'status',  v: '"open-to-work"' },
  { line: '};',                         cls: '' },
]

export default function About() {
  return (
    <section id="about">
      <div className="reveal">
        <div className="section-comment">// 01 — about-me</div>
        <h2 className="section-title">
          I build systems<br />that <span className="accent">actually ship</span>
        </h2>
        <p className="about-body">
          I&apos;m a <strong>Computer Science graduate (B.Tech, 2025)</strong> from WITS, Warangal.
          I thrive at the intersection of backend engineering and applied AI — designing systems
          that are clean under the hood and impactful at the surface.
        </p>
        <p className="about-body">
          At <strong>Jaagruk Bharat</strong>, I go deep into production every day — architecting
          microservice configs, scraping and normalising large-scale government datasets, and shipping
          an AI chatbot with a complete in-chat payment flow, all in <strong>Next.js + TypeScript</strong>.
          Before that, I built full-stack Python projects covering AI recommendations, booking
          platforms, and data management systems.
        </p>
        <p className="about-body">
          I care about clean API contracts, readable code, and systems that are genuinely
          maintainable by the next developer. I&apos;m equally comfortable working solo
          or pairing on a fast-moving team.
        </p>

        <div className="about-meta">
          <div className="meta-item">
            <span className="meta-key">Email</span>
            <span className="meta-val">
              <a href="mailto:Deexithmsd13@gmail.com">Deexithmsd13@gmail.com</a>
            </span>
          </div>
          <div className="meta-item">
            <span className="meta-key">Phone</span>
            <span className="meta-val">+91 77807 46802</span>
          </div>
          <div className="meta-item">
            <span className="meta-key">Education</span>
            <span className="meta-val">B.Tech CSE · WITS 2025</span>
          </div>
          <div className="meta-item">
            <span className="meta-key">Status</span>
            <span className="meta-val available">Available Now</span>
          </div>
          <div className="meta-item">
            <span className="meta-key">Location</span>
            <span className="meta-val">Warangal, India 🇮🇳</span>
          </div>
          <div className="meta-item">
            <span className="meta-key">GitHub</span>
            <span className="meta-val">
              <a href="https://github.com/Deexith-2001" target="_blank" rel="noreferrer">
                @Deexith-2001
              </a>
            </span>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <a href="mailto:Deexithmsd13@gmail.com" className="btn-primary">
            Email Me →
          </a>
          <a href="#" className="btn-secondary">
            Download CV
          </a>
        </div>
      </div>

      {/* Right column — profile card */}
      <div className="about-card reveal">
        <div className="about-card-header">
          <div className="avatar">SD</div>
          <div>
            <div className="about-card-name">Sai Deexith Musham</div>
            <div className="about-card-role">Python Dev · Full-Stack · AI Builder</div>
          </div>
        </div>

        <div className="about-card-body">
          <div className="about-card-row">
            <span className="row-icon">🏢</span>
            <span className="row-label">Work</span>
            <span>Jaagruk Bharat — Software Intern</span>
          </div>
          <div className="about-card-row">
            <span className="row-icon">🎓</span>
            <span className="row-label">Degree</span>
            <span>B.Tech CSE · WITS · 7.58 GPA</span>
          </div>
          <div className="about-card-row">
            <span className="row-icon">📍</span>
            <span className="row-label">Location</span>
            <span>Warangal, Telangana, India</span>
          </div>
          <div className="about-card-row">
            <span className="row-icon">⚡</span>
            <span className="row-label">Primary</span>
            <span>Python · FastAPI · Next.js</span>
          </div>
          <div className="about-card-row">
            <span className="row-icon">🤖</span>
            <span className="row-label">AI/ML</span>
            <span>OpenAI API · NLP · Prompt Eng.</span>
          </div>
          <div className="about-card-row">
            <span className="row-icon">🟢</span>
            <span className="row-label">Status</span>
            <span style={{ color: 'var(--green)', fontWeight: 600 }}>Open to work</span>
          </div>
        </div>

        <div className="about-card-snippet">
          <span className="hl-cm">{'// developer.json'}</span>{'\n'}
          <span className="hl-kw">const </span>
          <span className="hl-fn">me</span> = {'{'}{'\n'}
          {'  '}<span className="hl-str">stack</span>: [<span className="hl-str">"Python"</span>, <span className="hl-str">"Next.js"</span>],{'\n'}
          {'  '}<span className="hl-str">services</span>: <span className="hl-num">27</span>,{'\n'}
          {'  '}<span className="hl-str">ai</span>: <span className="hl-str">"OpenAI + NLP"</span>,{'\n'}
          {'  '}<span className="hl-str">open</span>: <span className="hl-num">true</span>{'\n'}
          {'}'};
        </div>
      </div>
    </section>
  )
}
