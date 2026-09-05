import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Loader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0)
  const [exiting, setExiting] = useState(false)

  useEffect(() => {
    let start = null
    const duration = 1600
    const tick = (t) => {
      if (!start) start = t
      const p = Math.min(Math.round(((t - start) / duration) * 100), 100)
      setProgress(p)
      if (p < 100) requestAnimationFrame(tick)
      else {
        setTimeout(() => {
          setExiting(true)
          setTimeout(onComplete, 550)
        }, 200)
      }
    }
    requestAnimationFrame(tick)
  }, [onComplete])

  return (
    <AnimatePresence>
      {!exiting && (
        <motion.div
          key="loader"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.55 }}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 999999,
            background: '#ffffff',
            color: '#0f172a',
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            padding: 'clamp(24px, 5vw, 48px)',
            fontFamily: 'Inter, system-ui, sans-serif',
          }}
        >
          <div>
            <div style={{ fontSize: '0.75rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#64748b', marginBottom: 12 }}>
              Affan Zahid
            </div>
            <div style={{ fontSize: 'clamp(3rem, 10vw, 5rem)', fontWeight: 700, letterSpacing: '-0.05em', lineHeight: 1 }}>
              {String(progress).padStart(2, '0')}
            </div>
          </div>
          <div style={{ fontSize: '0.8rem', color: '#0f766e', fontWeight: 600 }}>
            {progress < 100 ? 'Loading' : 'Ready'}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Loader
