import { useEffect, useState } from 'react'

const CursorSpotlight = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const [visible, setVisible] = useState(false)
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)')
    const update = () => setEnabled(finePointer.matches)
    update()
    finePointer.addEventListener('change', update)
    return () => finePointer.removeEventListener('change', update)
  }, [])

  useEffect(() => {
    if (!enabled) return undefined

    const onMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY })
      setVisible(true)
    }
    const onLeave = () => setVisible(false)

    window.addEventListener('mousemove', onMove, { passive: true })
    document.documentElement.addEventListener('mouseleave', onLeave)

    return () => {
      window.removeEventListener('mousemove', onMove)
      document.documentElement.removeEventListener('mouseleave', onLeave)
    }
  }, [enabled])

  if (!enabled) return null

  return (
    <div
      className={`bc-cursor-spotlight${visible ? ' is-visible' : ''}`}
      style={{
        background: `radial-gradient(600px circle at ${pos.x}px ${pos.y}px, rgba(15, 23, 42, 0.12), transparent 40%)`,
      }}
      aria-hidden
    />
  )
}

export default CursorSpotlight
