import { useEffect, useRef } from 'react'

export default function Nav() {
  const navRef = useRef(null)

  useEffect(() => {
    const nav = navRef.current
    const onScroll = () => {
      nav.style.padding = window.scrollY > 50 ? '12px 60px' : '20px 60px'
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav ref={navRef}>
      <a href="#hero" className="nav-logo">&lt;SDM /&gt;</a>
      <ul className="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <a href="mailto:Deexithmsd13@gmail.com" className="nav-cta">Hire Me</a>
    </nav>
  )
}
