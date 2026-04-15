import { useEffect, useRef, useState } from 'react'

export function useCountUp(target, duration = 2000, startOnMount = false) {
  const [count, setCount] = useState(0)
  const [started, setStarted] = useState(startOnMount)
  const ref = useRef(null)

  // IntersectionObserver to trigger when element enters viewport
  useEffect(() => {
    if (startOnMount) return
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true) },
      { threshold: 0.5 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [startOnMount])

  useEffect(() => {
    if (!started) return
    let startTime = null
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      // Ease out
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * target))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [started, target, duration])

  return { count, ref }
}
