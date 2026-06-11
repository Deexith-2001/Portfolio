import { projects } from '../data/projects'
import { useTilt } from '../hooks/useTilt'

export default function Projects() {
  const tilt = useTilt()

  return (
    <section id="projects">
      <div className="projects-header reveal">
        <div>
          <div className="section-label">What I&apos;ve Built</div>
          <h2 className="section-title">Featured <span className="grad">Projects</span></h2>
        </div>
        <a
          href="https://github.com/Deexith-2001"
          target="_blank"
          rel="noreferrer"
          className="btn-secondary"
          style={{ padding: '11px 22px', fontSize: '0.8rem' }}
        >
          View All on GitHub →
        </a>
      </div>

      <div className="projects-grid">
        {projects.map(p => (
          <div key={p.id} className={`project-card ${p.col} reveal`} {...tilt}>
            <div className={`project-glow ${p.glow}`} />
            <div className="project-num">{p.num}</div>

            {p.badge && (
              <span className={`project-badge badge-${p.badgeType}`}>{p.badge}</span>
            )}

            <h3 className="project-title">{p.title}</h3>
            <p className="project-desc" dangerouslySetInnerHTML={{ __html: p.desc }} />

            <div className="project-stack">
              {p.stack.map(s => (
                <span key={s} className="stack-tag">{s}</span>
              ))}
            </div>

            <div className="project-links">
              {p.status && (
                <span style={{ fontSize: '0.8rem', color: 'var(--green)' }}>{p.status}</span>
              )}
              {p.links && p.links.map(l => (
                <a
                  key={l.label}
                  href={l.href}
                  className={`proj-link proj-link-${l.type}`}
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
