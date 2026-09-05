import { useState, useEffect, useCallback } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiMoon, FiSun, FiBriefcase } from 'react-icons/fi'
import { SiWhatsapp } from 'react-icons/si'
import { useTheme } from '../context/ThemeContext'
import { CV_CACHE_BUST, CV_URL } from '../cvAsset'

const navItems = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

const socials = [
  { href: 'https://github.com/AffanZahid804', label: 'GitHub', icon: <FiGithub /> },
  { href: 'https://www.linkedin.com/in/affan-zahid', label: 'LinkedIn', icon: <FiLinkedin /> },
  { href: 'https://www.upwork.com/freelancers/~01dabd00704ad7f10b?mp_source=share', label: 'Upwork', icon: <FiBriefcase /> },
  { href: 'mailto:zahidaffan72@gmail.com', label: 'Email', icon: <FiMail /> },
  { href: 'https://wa.me/923314906039', label: 'WhatsApp', icon: <SiWhatsapp /> },
]

const Sidebar = () => {
  const { isDark, toggleTheme } = useTheme()
  const [active, setActive] = useState('about')
  const [activeProgress, setActiveProgress] = useState(0.2)

  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 28, restDelta: 0.001 })

  const updateActiveFromScroll = useCallback(() => {
    const offset = window.innerWidth < 1024 ? 100 : 140
    let current = navItems[0].id

    navItems.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (!el) return
      const rect = el.getBoundingClientRect()
      if (rect.top <= offset) current = id
    })

    const el = document.getElementById(current)
    if (el) {
      const rect = el.getBoundingClientRect()
      const total = Math.max(el.offsetHeight - window.innerHeight * 0.3, 1)
      const scrolled = Math.min(Math.max(-rect.top + offset, 0), total)
      setActiveProgress(Math.min(Math.max(scrolled / total, 0.15), 1))
    }

    setActive(current)
  }, [])

  const go = useCallback((id) => {
    const el = document.getElementById(id)
    if (!el) return
    const offset = window.innerWidth < 1024 ? 80 : 24
    const top = window.scrollY + el.getBoundingClientRect().top - offset
    window.scrollTo({ top: Math.max(top, 0), behavior: 'smooth' })
    window.history.replaceState(null, '', `#${id}`)
    setActive(id)
  }, [])

  useEffect(() => {
    const onScroll = () => requestAnimationFrame(updateActiveFromScroll)
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })
    updateActiveFromScroll()

    const hash = window.location.hash.replace('#', '')
    if (hash && navItems.some((n) => n.id === hash)) {
      setTimeout(() => go(hash), 80)
    }

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [go, updateActiveFromScroll])

  return (
    <>
      {/* Thin top bar only — does not change layout */}
      <motion.div className="bc-scroll-progress" style={{ scaleX }} aria-hidden />

      <aside className="bc-sidebar">
        <div className="bc-sidebar-inner">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            <h1 className="bc-name">
              <a
                href="#about"
                onClick={(e) => {
                  e.preventDefault()
                  go('about')
                }}
              >
                Affan Zahid
              </a>
            </h1>
            <h2 className="bc-role">Full Stack Developer</h2>
            <p className="bc-tagline">
              I build accessible, production web and mobile apps with React, Next.js,
              React Native, Node.js, and AI features.
            </p>
          </motion.div>

          <nav className="bc-nav" aria-label="In-page">
            {navItems.map((item, i) => {
              const isActive = active === item.id
              const lineWidth = isActive ? 28 + activeProgress * 36 : 28

              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`bc-nav-link${isActive ? ' is-active' : ''}`}
                  onClick={(e) => {
                    e.preventDefault()
                    go(item.id)
                  }}
                >
                  <span className="bc-nav-index">{String(i + 1).padStart(2, '0')}</span>
                  <span
                    className="bc-nav-line"
                    style={isActive ? { width: `${lineWidth}px` } : undefined}
                  />
                  <span className="bc-nav-label">{item.label}</span>
                </a>
              )
            })}
          </nav>

          <div className="bc-sidebar-footer">
            <div className="bc-socials">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith('mailto:') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="bc-social"
                >
                  {s.icon}
                </a>
              ))}
            </div>

            <div className="bc-sidebar-actions">
              <a
                href={`${CV_URL}?v=${CV_CACHE_BUST}`}
                className="bc-resume"
                download="Affan_Zahid_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Full Résumé
              </a>
              <button
                type="button"
                className="bc-theme-btn"
                onClick={toggleTheme}
                aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
              >
                {isDark ? <FiSun size={18} /> : <FiMoon size={18} />}
              </button>
            </div>
          </div>
        </div>
      </aside>
    </>
  )
}

export default Sidebar
