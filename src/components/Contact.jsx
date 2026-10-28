import { motion } from 'framer-motion'
import { FiArrowUpRight, FiLinkedin, FiMail } from 'react-icons/fi'
import { SiWhatsapp } from 'react-icons/si'

const Contact = () => (
  <section id="contact" className="contact-section">
    <div className="section-shell contact-inner">
      <span className="section-index">04 / Let&apos;s build</span>
      <motion.h2 initial={{ opacity: 0, y: 34 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.65 }}>
        HAVE A PRODUCT<br />THAT SHOULD <em>EXIST?</em>
      </motion.h2>
      <div className="contact-row">
        <p>Bring the ambitious brief. I&apos;ll bring product thinking, engineering discipline, and the energy to ship it properly.</p>
        <a className="contact-button" href="mailto:zahidaffan72@gmail.com"><span>Start a project</span><FiArrowUpRight /></a>
      </div>

      <footer className="site-footer">
        <a href="mailto:zahidaffan72@gmail.com"><FiMail /> Email</a>
        <a href="https://wa.me/923314906039" target="_blank" rel="noopener noreferrer"><SiWhatsapp /> WhatsApp</a>
        <a href="https://www.linkedin.com/in/affan-zahid" target="_blank" rel="noopener noreferrer"><FiLinkedin /> LinkedIn</a>
        <span>© {new Date().getFullYear()} Affan Zahid</span>
      </footer>
    </div>
  </section>
)

export default Contact
