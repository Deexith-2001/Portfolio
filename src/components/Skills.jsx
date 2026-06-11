import { skills } from '../data/skills'
import { useTilt } from '../hooks/useTilt'

export default function Skills() {
  const tilt = useTilt()

  return (
    <section id="skills">
      <div className="skills-header reveal">
        <div className="section-label" style={{ justifyContent: 'center' }}>Technical Arsenal</div>
        <h2 className="section-title" style={{ textAlign: 'center' }}>
          My <span className="grad">Tech Stack</span>
        </h2>
        <p style={{ textAlign: 'center', color: 'var(--text-dim)', maxWidth: '480px', margin: '12px auto 0', lineHeight: 1.8, fontSize: '0.95rem' }}>
          From AI-powered backends to full-stack web platforms — tools I use to build things that work in production.
        </p>
      </div>

      <div className="skills-grid">
        {skills.map(cat => (
          <div
            key={cat.name}
            className="skill-category reveal"
            {...tilt}
          >
            <div className="skill-icon">{cat.icon}</div>
            <div className="skill-category-name">{cat.name}</div>
            <div className="skill-tags">
              {cat.tags.map(tag => (
                <span key={tag.label} className={`skill-tag tag-${tag.color}`}>
                  {tag.label}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
