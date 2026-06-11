import { useEffect } from 'react'

export function useTyped(ref, words) {
  useEffect(() => {
    if (!ref.current) return
    const el = ref.current
    el.classList.add('typed')
    let wi = 0, ci = 0, del = false
    let timerId

    function tick() {
      const w = words[wi]
      if (!del) {
        el.textContent = w.slice(0, ++ci)
        if (ci === w.length) {
          del = true
          timerId = setTimeout(tick, 1900)
          return
        }
      } else {
        el.textContent = w.slice(0, --ci)
        if (ci === 0) {
          del = false
          wi = (wi + 1) % words.length
        }
      }
      timerId = setTimeout(tick, del ? 55 : 95)
    }

    tick()
    return () => clearTimeout(timerId)
  }, [ref, words])
}
