import { projects } from '../data/projects'

const LANG_META = {
  TypeScript: { cls: 'lang-ts',   label: 'TypeScript' },
  Python:     { cls: 'lang-py',   label: 'Python'     },
  HTML:       { cls: 'lang-html', label: 'HTML/CSS'   },
  JS:         { cls: 'lang-js',   label: 'JavaScript' },
}

export default function Projects() {
  return (
    <section id="projects">
      <div className="projects-header reveal">
        <div>
          <div className="section-comment">// 03 — work</div>
          <h2 className="section-title">
            Featured <span className="accent">Projects</span>
          </h2>
        </div>
        <a
          href="https://github.com/Deexith-2001"
          target="_blank" rel="noreferrer"
          className="btn-secondary"
          style={{ fontSize: '0.8rem', height: '38px', padding: '0 18px' }}
        >
          ⭐ GitHub Profile →
        </a>
      </div>

      <div className="projects-grid">
        {projects.map(p => (
          <div key={p.id} className={`project-card${p.featured ? ' featured' : ''} reveal`}>
            <div className="project-card-top">
              <div>
                <div className="project-num">{p.num}</div>
                <h3 className="project-title">{p.title}</h3>
              </div>
              {p.badge && (
                <span className={`project-badge badge-${p.badgeType}`}>{p.badge}</span>
              )}
            </div>

            <p className="project-desc" dangerouslySetInnerHTML={{ __html: p.desc }} />

            <div className="project-stack">
              {p.stack.map(s => (
                <span key={s} className="stack-tag">{s}</span>
              ))}
            </div>

            <div className="project-footer">
              <div className="project-lang">
                {p.lang && (
                  <>
                    <span className={`lang-dot ${LANG_META[p.lang]?.cls || 'lang-py'}`} />
                    {LANG_META[p.lang]?.label || p.lang}
                  </>
                )}
              </div>

              <div className="project-links">
                {p.status && (
                  <span className="proj-status-live">{p.statusLabel || 'In Production'}</span>
                )}
                {p.links && p.links.map(l => (
                  <a
                    key={l.label}
                    href={l.href}
                    target="_blank" rel="noreferrer"
                    className={`proj-link proj-link-${l.type}`}
                  >
                    {l.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
