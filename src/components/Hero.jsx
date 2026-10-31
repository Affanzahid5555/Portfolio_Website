import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from 'framer-motion'
import { FiArrowDownRight, FiArrowUpRight, FiLinkedin } from 'react-icons/fi'
import profileImage from '../assets/images/profile.jpeg'
import FlowField from './FlowField'

const reveal = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay = 0) => ({ opacity: 1, y: 0, transition: { delay, duration: 0.7, ease: [0.22, 1, 0.36, 1] } }),
}

const titleLine = {
  hidden: { y: '115%', rotate: 2 },
  visible: (delay) => ({
    y: 0,
    rotate: 0,
    transition: { delay, duration: 0.9, ease: [0.76, 0, 0.24, 1] },
  }),
}

const Hero = () => {
  const reduceMotion = useReducedMotion()
  const pointerX = useMotionValue(0)
  const pointerY = useMotionValue(0)
  const smoothX = useSpring(pointerX, { stiffness: 90, damping: 24 })
  const smoothY = useSpring(pointerY, { stiffness: 90, damping: 24 })
  const fieldX = useTransform(smoothX, [-0.5, 0.5], [-22, 22])
  const fieldY = useTransform(smoothY, [-0.5, 0.5], [-14, 14])
  const portraitRotateY = useTransform(smoothX, [-0.5, 0.5], [-5, 5])
  const portraitRotateX = useTransform(smoothY, [-0.5, 0.5], [5, -5])

  const trackPointer = (event) => {
    if (reduceMotion) return
    const bounds = event.currentTarget.getBoundingClientRect()
    pointerX.set((event.clientX - bounds.left) / bounds.width - 0.5)
    pointerY.set((event.clientY - bounds.top) / bounds.height - 0.5)
  }

  const resetPointer = () => {
    pointerX.set(0)
    pointerY.set(0)
  }

  return (
    <section id="home" className="hero section-shell" onMouseMove={trackPointer} onMouseLeave={resetPointer}>
      <FlowField x={fieldX} y={fieldY} />
      <div className="hero-grid">
        <div className="hero-copy">
          <motion.div className="eyebrow" variants={reveal} initial="hidden" animate="visible" custom={0.12}>
            <span className="status-dot" />
            Full Stack Developer · Web · Mobile · AI
          </motion.div>

          <h1 className="hero-title" aria-label="I build digital products">
            <span className="title-line"><motion.span variants={titleLine} initial="hidden" animate="visible" custom={0.18}>I BUILD</motion.span></span>
            <span className="title-line"><motion.span variants={titleLine} initial="hidden" animate="visible" custom={0.29}>DIGITAL</motion.span></span>
            <span className="title-line accent-line"><motion.span variants={titleLine} initial="hidden" animate="visible" custom={0.4}>PRODUCTS.</motion.span></span>
          </h1>

          <motion.div className="hero-bottom" variants={reveal} initial="hidden" animate="visible" custom={0.58}>
            <p>
              I turn ambitious ideas into polished web and mobile experiences, from
              AI automation and SaaS platforms to apps shipped on the App Store.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">Explore my work <FiArrowDownRight /></a>
              <a className="button button-ghost" href="mailto:zahidaffan72@gmail.com">Start a conversation <FiArrowUpRight /></a>
            </div>
          </motion.div>
        </div>

        <motion.aside
          className="hero-portrait-wrap"
          style={reduceMotion ? undefined : { rotateX: portraitRotateX, rotateY: portraitRotateY }}
          initial={{ opacity: 0, scale: 0.84, y: 48, rotate: 4 }}
          animate={{ opacity: 1, scale: 1, y: 0, rotate: 0 }}
          transition={{ delay: 0.46, type: 'spring', stiffness: 90, damping: 16 }}
        >
          <div className="portrait-float-layer">
            <div className="portrait-sticker">Open to great products</div>
            <div className="hero-portrait"><img src={profileImage} alt="Affan Zahid" /></div>
            <div className="portrait-footer">
              <span>Affan Zahid</span>
              <div>
                <a href="https://www.linkedin.com/in/affan-zahid" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FiLinkedin /></a>
              </div>
            </div>
          </div>
        </motion.aside>
      </div>

      <motion.div className="proof-strip" initial="hidden" animate="visible" variants={{ hidden: {}, visible: { transition: { delayChildren: 0.76, staggerChildren: 0.1 } } }}>
        {[
          ['3.5s → 1.5s', 'Product load time'],
          ['3s → 0.8s', 'Candidate search'],
          ['App Store + Play Store', 'Production releases'],
        ].map(([value, label]) => (
          <motion.div key={label} variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55 } } }}>
            <strong>{value}</strong><span>{label}</span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export default Hero
