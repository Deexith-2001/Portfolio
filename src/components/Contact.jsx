export default function Contact() {
  return (
    <section id="contact">
      <div className="contact-inner">
        <div className="section-comment" style={{ justifyContent: 'center' }}>// 05 — contact</div>
        <h2 className="contact-title reveal">
          Let&apos;s build<br />
          <span className="accent">something great</span>
        </h2>
        <p className="contact-desc reveal">
          I&apos;m actively looking for <strong>Software Engineer</strong> and{' '}
          <strong>Full-Stack Developer</strong> roles. Open to full-time, contract,
          and freelance work. Got a project, a job, or just want to connect? I&apos;d
          love to hear from you.
        </p>

        <div className="contact-grid reveal">
          <a href="mailto:Deexithmsd13@gmail.com" className="contact-link cl-email">
            <span>✉</span> Deexithmsd13@gmail.com
          </a>
          <a href="https://github.com/Deexith-2001" target="_blank" rel="noreferrer" className="contact-link cl-gh">
            <span>⌥</span> GitHub
          </a>
          <a href="https://linkedin.com/in/sai-deexith-musham" target="_blank" rel="noreferrer" className="contact-link cl-li">
            <span>in</span> LinkedIn
          </a>
          <a href="https://leetcode.com/u/Deexith_2001" target="_blank" rel="noreferrer" className="contact-link cl-lc">
            <span>⚡</span> LeetCode
          </a>
        </div>

        {/* Availability card */}
        <div className="reveal" style={{
          marginTop: '48px',
          display: 'inline-flex', alignItems: 'center', gap: '12px',
          padding: '14px 24px',
          background: 'var(--green-light)', border: '1px solid var(--green-border)',
          borderRadius: '12px',
          fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--green)',
        }}>
          <span style={{
            width: '8px', height: '8px', background: 'var(--green)',
            borderRadius: '50%', animation: 'pulse 2s infinite', flexShrink: 0,
          }} />
          Available for new opportunities · Response within 24h
        </div>
      </div>
    </section>
  )
}
