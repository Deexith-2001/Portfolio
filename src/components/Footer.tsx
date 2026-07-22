import { Github, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-ink/10 px-6 py-10">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-5">
        <div>
          <p className="text-sm text-ink/40">
            © {year} Sai Deexith Musham
          </p>
          <p className="text-xs text-ink/20 mt-0.5 font-mono">Built with Next.js · Tailwind · Framer Motion</p>
        </div>

        <div className="flex items-center gap-5">
          {[
            { href: 'https://github.com/Deexith-2001', icon: <Github className="w-4 h-4" />, label: 'GitHub' },
            { href: 'https://linkedin.com/in/sai-deexith-musham', icon: <Linkedin className="w-4 h-4" />, label: 'LinkedIn' },
            { href: 'mailto:Deexithmsd13@gmail.com', icon: <Mail className="w-4 h-4" />, label: 'Email' },
          ].map(({ href, icon, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              aria-label={label}
              className="text-ink/30 hover:text-accent transition-colors duration-200"
            >
              {icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
