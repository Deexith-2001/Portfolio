export function useTilt() {
  const onMouseMove = e => {
    const r = e.currentTarget.getBoundingClientRect()
    const x = (e.clientX - r.left) / r.width - 0.5
    const y = (e.clientY - r.top) / r.height - 0.5
    e.currentTarget.style.transform = `translateY(-12px) rotateX(${-y * 10}deg) rotateY(${x * 10}deg)`
  }
  const onMouseLeave = e => {
    e.currentTarget.style.transform = ''
  }
  return { onMouseMove, onMouseLeave }
}
