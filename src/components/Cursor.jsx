import { useEffect, useRef } from 'react'

export default function Cursor() {
  const cursorRef = useRef(null)
  const ringRef   = useRef(null)

  useEffect(() => {
    const cursor = cursorRef.current
    const ring   = ringRef.current
    let mx = 0, my = 0, rx = 0, ry = 0

    const onMove = e => { mx = e.clientX; my = e.clientY }
    document.addEventListener('mousemove', onMove)

    let animId
    const anim = () => {
      cursor.style.left = mx + 'px'
      cursor.style.top  = my + 'px'
      rx += (mx - rx) * 0.12
      ry += (my - ry) * 0.12
      ring.style.left = rx + 'px'
      ring.style.top  = ry + 'px'
      animId = requestAnimationFrame(anim)
    }
    animId = requestAnimationFrame(anim)

    const addHover    = () => { cursor.classList.add('hover');    ring.classList.add('hover') }
    const removeHover = () => { cursor.classList.remove('hover'); ring.classList.remove('hover') }

    const onOver = e => {
      if (e.target.closest('a,button,.project-card,.skill-category,.stat-card,.cert-card')) addHover()
    }
    const onOut = e => {
      if (e.target.closest('a,button,.project-card,.skill-category,.stat-card,.cert-card')) removeHover()
    }
    document.addEventListener('mouseover',  onOver)
    document.addEventListener('mouseout',   onOut)

    return () => {
      cancelAnimationFrame(animId)
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseover',  onOver)
      document.removeEventListener('mouseout',   onOut)
    }
  }, [])

  return (
    <>
      <div className="cursor"      ref={cursorRef} />
      <div className="cursor-ring" ref={ringRef}   />
    </>
  )
}
