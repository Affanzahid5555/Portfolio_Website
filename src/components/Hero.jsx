import { motion } from 'framer-motion'
import { FiArrowDownRight, FiArrowUpRight, FiLinkedin } from 'react-icons/fi'
import profileImage from '../assets/images/profile.jpeg'

const reveal = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay = 0) => ({ opacity: 1, y: 0, transition: { delay, duration: 0.7, ease: [0.22, 1, 0.36, 1] } }),
}

const Hero = () => (
  <section id="home" className="hero section-shell">
    <div className="hero-grid">
      <div className="hero-copy">
        <motion.div className="eyebrow" variants={reveal} initial="hidden" animate="visible" custom={0.05}>
          <span className="status-dot" />
          Full Stack Developer · Web · Mobile · AI
        </motion.div>

        <h1 className="hero-title" aria-label="I build digital products">
          <span className="title-line"><motion.span initial={{ y: '110%' }} animate={{ y: 0 }} transition={{ delay: 0.12, duration: 0.85, ease: [0.76, 0, 0.24, 1] }}>I BUILD</motion.span></span>
          <span className="title-line"><motion.span initial={{ y: '110%' }} animate={{ y: 0 }} transition={{ delay: 0.22, duration: 0.85, ease: [0.76, 0, 0.24, 1] }}>DIGITAL</motion.span></span>
          <span className="title-line accent-line"><motion.span initial={{ y: '110%' }} animate={{ y: 0 }} transition={{ delay: 0.32, duration: 0.85, ease: [0.76, 0, 0.24, 1] }}>PRODUCTS.</motion.span></span>
        </h1>

        <motion.div className="hero-bottom" variants={reveal} initial="hidden" animate="visible" custom={0.48}>
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

      <motion.aside className="hero-portrait-wrap" initial={{ opacity: 0, scale: 0.92, rotate: 3 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ delay: 0.42, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}>
        <div className="portrait-sticker">Open to great products</div>
        <div className="hero-portrait"><img src={profileImage} alt="Affan Zahid" /></div>
        <div className="portrait-footer">
          <span>Affan Zahid</span>
          <div>
            <a href="https://www.linkedin.com/in/affan-zahid" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FiLinkedin /></a>
          </div>
        </div>
      </motion.aside>
    </div>

    <motion.div className="proof-strip" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.68, duration: 0.65 }}>
      <div><strong>3.5s → 1.5s</strong><span>Product load time</span></div>
      <div><strong>3s → 0.8s</strong><span>Candidate search</span></div>
      <div><strong>App Store + Play Store</strong><span>Production releases</span></div>
    </motion.div>
  </section>
)

export default Hero
