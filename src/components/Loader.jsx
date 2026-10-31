import { useState, useEffect } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

const Loader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0)
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    let start = null
    let frame
    let completionTimer
    const duration = reduceMotion ? 120 : 1250
    const tick = (t) => {
      if (!start) start = t
      const p = Math.min(Math.round(((t - start) / duration) * 100), 100)
      setProgress(p)
      if (p < 100) frame = requestAnimationFrame(tick)
      else completionTimer = window.setTimeout(onComplete, reduceMotion ? 40 : 260)
    }
    frame = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(frame)
      window.clearTimeout(completionTimer)
    }
  }, [onComplete, reduceMotion])

  return (
    <motion.div
      className="site-loader"
      exit={reduceMotion ? { opacity: 0 } : { y: '-100%' }}
      transition={{ duration: reduceMotion ? 0.15 : 0.72, ease: [0.76, 0, 0.24, 1] }}
    >
      <div className="loader-brand">
        <span>AZ.</span>
        <small>Full Stack Developer</small>
      </div>
      <div className="loader-meter" aria-hidden="true">
        <motion.span animate={{ scaleX: progress / 100 }} transition={{ ease: 'linear', duration: 0.08 }} />
      </div>
      <div className="loader-count" aria-live="polite">{String(progress).padStart(2, '0')}<small>%</small></div>
      <span className="loader-state">{progress < 100 ? 'Building the experience' : 'Ready'}</span>
    </motion.div>
  )
}

export default Loader
