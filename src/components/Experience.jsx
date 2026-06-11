import { timeline, certifications, education } from '../data/experience'

export default function Experience() {
  return (
    <section id="experience">
      <div className="reveal">
        <div className="section-comment">// 04 — journey</div>
        <h2 className="section-title">
          Experience &amp; <span className="accent-v">Education</span>
        </h2>
      </div>

      <div className="exp-layout">
        {/* Left — Timeline */}
        <div>
          <div className="sidebar-label" style={{ marginBottom: '28px', fontSize: '0.72rem' }}>
            Work &amp; Education
          </div>
          <div className="timeline">
            {timeline.map(item => (
              <div key={item.id} className="timeline-item reveal">
                <div className={`timeline-dot${item.datePast ? ' dim' : ''}`} />
                <div className="timeline-meta">
                  <span className={`timeline-date${item.datePast ? ' past' : ''}`}>
                    {item.date}
                  </span>
                </div>
                <div className="timeline-role">{item.role}</div>
                <div className="timeline-company">{item.company}</div>
                <ul className="timeline-bullets">
                  {item.bullets.map((b, i) => (
                    <li key={i} dangerouslySetInnerHTML={{ __html: b }} />
                  ))}
                </ul>
                <div className="timeline-tags">
                  {item.tech.map(t => (
                    <span key={t} className="timeline-tech-tag">{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right sidebar — certs + education */}
        <div>
          <div className="sidebar-section">
            <div className="sidebar-label">Certifications</div>
            {certifications.map(cert => (
              <div key={cert.id} className="cert-card reveal">
                <div className="cert-badge-icon">{cert.icon}</div>
                <div className="cert-content">
                  <div className="cert-org">{cert.org}</div>
                  <div className="cert-name">{cert.name}</div>
                  <div className="cert-desc">{cert.desc}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="sidebar-section">
            <div className="sidebar-label">Education</div>
            <div className="edu-card reveal">
              <div className="edu-degree">{education.degree}</div>
              <div className="edu-school">{education.school}</div>
              <div className="edu-tags">
                {education.tags.map(t => (
                  <span key={t.label} className={`skill-tag tag-${t.color}`} style={{ fontSize: '0.68rem' }}>
                    {t.label}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Quick stats */}
          <div className="sidebar-section">
            <div className="sidebar-label">By the numbers</div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
              {[
                { num: '27', label: 'Microservices' },
                { num: '7',  label: 'GitHub Repos' },
                { num: '2',  label: 'Certifications' },
                { num: '4',  label: 'Years Study' },
              ].map(s => (
                <div key={s.label} className="reveal" style={{
                  background: 'var(--surface)', border: '1px solid var(--border)',
                  borderRadius: '10px', padding: '16px', textAlign: 'center',
                }}>
                  <div style={{
                    fontFamily: 'var(--font-display)', fontSize: '1.8rem',
                    fontWeight: 700, color: 'var(--blue)', lineHeight: 1,
                  }}>{s.num}</div>
                  <div style={{
                    fontFamily: 'var(--font-mono)', fontSize: '0.65rem',
                    color: 'var(--fg-4)', marginTop: '4px', textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                  }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
