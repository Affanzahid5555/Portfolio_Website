import { useEffect, useState } from 'react'
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
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 30 })

  useEffect(() => {
    const onScroll = () => {
      const sections = ['home', ...links.map((item) => item.id)]
      const current = sections.reduce((selected, id) => {
        const element = document.getElementById(id)
        return element && element.getBoundingClientRect().top <= 140 ? id : selected
      }, 'home')
      setActive(current)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <motion.div className="scroll-progress" style={{ scaleX }} aria-hidden />
      <header className="site-header">
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
      </header>
    </>
  )
}

export default Sidebar
