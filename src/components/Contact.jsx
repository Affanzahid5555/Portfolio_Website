import { motion } from 'framer-motion'

const Contact = () => {
  return (
    <section id="contact" className="bc-section bc-section-last">
      <motion.h2
        className="bc-section-label"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.4 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        Contact
      </motion.h2>

      <motion.div
        className="bc-prose"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.25 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      >
        <p>
          Looking for a full stack developer for web, mobile, or AI features?
          I&apos;m available for Upwork contracts and freelance work (30+ hrs/week).
        </p>
        <p>
          Email me at{' '}
          <a href="mailto:zahidaffan72@gmail.com">zahidaffan72@gmail.com</a>
          {' '}or hire me on{' '}
          <a
            href="https://www.upwork.com/freelancers/~01dabd00704ad7f10b?mp_source=share"
            target="_blank"
            rel="noopener noreferrer"
          >
            Upwork
          </a>
          .
        </p>
      </motion.div>

      <footer className="bc-footer">
        <p>
          Built with React & Framer Motion. Inspired by clean, content-first portfolios.
          Designed for clients who want clarity over clutter.
        </p>
      </footer>
    </section>
  )
}

export default Contact
