import { timeline, certifications, education } from '../data/experience'

export default function Experience() {
  return (
    <section id="experience">
      <div className="reveal" style={{ marginBottom: '60px' }}>
        <div className="section-label">My Journey</div>
        <h2 className="section-title">
          Experience, Education<br />&amp; <span className="grad">Certifications</span>
        </h2>
      </div>

      <div className="exp-grid">
        {/* Timeline */}
        <div>
          <div style={{ fontSize: '0.8rem', color: 'var(--cyan)', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '28px', fontFamily: "'Space Mono',monospace" }}>
            Work Experience
          </div>
          <div className="timeline">
            {timeline.map(item => (
              <div
                key={item.id}
                className="timeline-item reveal"
                style={item.isLast ? { paddingBottom: 0 } : {}}
              >
                <div className="timeline-dot" style={item.dotStyle} />
                <div className="timeline-date">{item.date}</div>
                <div className="timeline-role">{item.role}</div>
                <div className="timeline-company">{item.company}</div>
                <ul className="timeline-bullets">
                  {item.bullets.map((b, i) => (
                    <li key={i} dangerouslySetInnerHTML={{ __html: b }} />
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Certs + Education */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          <div>
            <div style={{ fontSize: '0.8rem', color: 'var(--cyan)', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '24px', fontFamily: "'Space Mono',monospace" }}>
              Certifications
            </div>
            <div className="cert-grid">
              {certifications.map(cert => (
                <div key={cert.id} className="cert-card reveal">
                  <div className="cert-org">{cert.org}</div>
                  <div className="cert-name">{cert.name}</div>
                  <div className="cert-desc">{cert.desc}</div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div style={{ fontSize: '0.8rem', color: 'var(--cyan)', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '20px', fontFamily: "'Space Mono',monospace" }}>
              Education
            </div>
            <div className="edu-card reveal">
              <div className="edu-degree">{education.degree}</div>
              <div className="edu-school">{education.school}</div>
              <div className="edu-meta">
                {education.tags.map(t => (
                  <span key={t.label} className={`skill-tag tag-${t.color}`} style={{ fontSize: '0.7rem' }}>
                    {t.label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
