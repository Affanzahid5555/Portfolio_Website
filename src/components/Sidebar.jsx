import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import { FiMoon, FiSun } from 'react-icons/fi'
import { useTheme } from '../context/ThemeContext'

const links = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Work' },
  { id: 'contact', label: 'Contact' },
]

const Sidebar = () => {
  const { isDark, toggleTheme } = useTheme()
  const [active, setActive] = useState('home')
  const [headerVisible, setHeaderVisible] = useState(true)
  const lastScrollY = useRef(0)
  const scrollDirection = useRef('idle')
  const directionDistance = useRef(0)
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 30 })

  useEffect(() => {
    let ticking = false
    let frame
    lastScrollY.current = window.scrollY

    const onScroll = () => {
      if (ticking) return
      ticking = true

      frame = window.requestAnimationFrame(() => {
        const currentScrollY = Math.max(window.scrollY, 0)
        const delta = currentScrollY - lastScrollY.current
        const sections = ['home', ...links.map((item) => item.id)]
        const currentSection = sections.reduce((selected, id) => {
          const element = document.getElementById(id)
          return element && element.getBoundingClientRect().top <= 140 ? id : selected
        }, 'home')

        setActive(currentSection)

        if (currentScrollY <= 96) {
          setHeaderVisible(true)
          scrollDirection.current = 'idle'
          directionDistance.current = 0
        } else if (delta !== 0) {
          const nextDirection = delta > 0 ? 'down' : 'up'

          if (nextDirection !== scrollDirection.current) {
            scrollDirection.current = nextDirection
            directionDistance.current = 0
          }

          directionDistance.current += Math.abs(delta)

          if (nextDirection === 'down' && directionDistance.current >= 34) {
            setHeaderVisible(false)
            directionDistance.current = 0
          } else if (nextDirection === 'up' && directionDistance.current >= 14) {
            setHeaderVisible(true)
            directionDistance.current = 0
          }
        }

        lastScrollY.current = currentScrollY
        ticking = false
      })
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      if (frame) window.cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <>
      <motion.div className="scroll-progress" style={{ scaleX }} aria-hidden />
      <motion.header
        className={`site-header${headerVisible ? '' : ' is-hidden'}`}
        initial={{ opacity: 0, y: -70 }}
        animate={{ opacity: headerVisible ? 1 : 0, y: headerVisible ? 0 : -110 }}
        transition={{
          y: { delay: headerVisible ? 0 : 0.04, type: 'spring', stiffness: 260, damping: 30, mass: 0.75 },
          opacity: { duration: 0.2 },
        }}
        onFocusCapture={() => setHeaderVisible(true)}
      >
        <nav className="site-nav" aria-label="Primary navigation">
          <a className="wordmark" href="#home" aria-label="Affan Zahid, home">
            AZ<span>.</span>
          </a>

          <div className="site-nav-links">
            {links.map((link) => (
              <a key={link.id} href={`#${link.id}`} className={active === link.id ? 'is-active' : ''}>
                {link.label}
              </a>
            ))}
          </div>

          <div className="nav-actions">
            <button className="theme-toggle" type="button" onClick={toggleTheme} aria-label={isDark ? 'Use light theme' : 'Use dark theme'}>
              {isDark ? <FiSun /> : <FiMoon />}
            </button>
          </div>
        </nav>
      </motion.header>
    </>
  )
}

export default Sidebar
