import Cursor     from './components/Cursor'
import Nav        from './components/Nav'
import Hero       from './components/Hero'
import About      from './components/About'
import Skills     from './components/Skills'
import Projects   from './components/Projects'
import Experience from './components/Experience'
import Contact    from './components/Contact'
import Footer     from './components/Footer'
import Background from './three/Background'
import { useScrollReveal } from './hooks/useScrollReveal'

export default function App() {
  useScrollReveal()

  return (
    <>
      <Cursor />
      <Background />
      <div className="grid-lines" />
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </>
  )
}
