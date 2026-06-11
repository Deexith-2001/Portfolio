import { skills } from '../data/skills'

export default function Skills() {
  return (
    <section id="skills">
      <div className="skills-header reveal">
        <div className="section-comment">// 02 — technical-stack</div>
        <h2 className="section-title">
          My <span className="accent">Tech Stack</span>
        </h2>
        <p style={{ color: 'var(--fg-3)', fontSize: '0.98rem', lineHeight: 1.8, maxWidth: '540px' }}>
          Tools and technologies I use to build production-grade systems — from AI backends
          to full-stack web platforms to data pipelines.
        </p>
      </div>

      <div className="skills-grid">
        {skills.map(cat => (
          <div key={cat.name} className="skill-category reveal">
            <div className="skill-icon">{cat.icon}</div>
            <div className="skill-category-name">
              {cat.name}
              <span className="skill-count">{cat.tags.length}</span>
            </div>
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
