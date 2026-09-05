import { motion } from 'framer-motion'
import { FiAward, FiCalendar } from 'react-icons/fi'
import SectionMeta from './SectionMeta'

const certifications = [
  {
    title: 'Professional React Native & Node.js Developer Certification',
    provider: 'Train With Hady',
    issued: 'November 2023',
    color: '#059669',
  },
  {
    title: 'Full-Stack Web & Mobile Development Certification',
    provider: 'Udemy (Meta / University of Michigan / Google / IBM)',
    issued: 'December 2022',
    color: '#0ea5e9',
  },
]

const Certifications = () => {
  return (
    <section id="certifications" className="section" style={{ position: 'relative' }}>
      <div className="section-num">04</div>
      <div className="glow" style={{ top: '30%', right: '-280px', background: 'radial-gradient(circle,rgba(var(--glow-rgb),0.18) 0%,transparent 70%)' }} />

      <SectionMeta label="04 — Certifications" />

      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Certifications
      </motion.h2>

      <motion.div
        className="section-divider"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
      />

      <motion.p
        className="section-subtitle"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        Credentials also listed on my Upwork profile
      </motion.p>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '28px',
          marginTop: '56px',
        }}
      >
        {certifications.map((cert, index) => (
          <motion.div
            key={cert.title}
            className="card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.12, duration: 0.65 }}
            whileHover={{ y: -8 }}
            style={{
              padding: '32px',
              borderLeft: `3px solid ${cert.color}`,
            }}
          >
            <div
              style={{
                width: '54px',
                height: '54px',
                borderRadius: '14px',
                background: `linear-gradient(135deg, ${cert.color}, ${cert.color}aa)`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.45rem',
                color: '#fff',
                marginBottom: '20px',
                boxShadow: `0 10px 28px ${cert.color}40`,
              }}
            >
              <FiAward />
            </div>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '10px', lineHeight: 1.4 }}>
              {cert.title}
            </h3>
            <p style={{ color: 'var(--gray)', fontSize: '0.95rem', marginBottom: '14px', lineHeight: 1.6 }}>
              {cert.provider}
            </p>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                color: cert.color,
                fontSize: '0.85rem',
                fontWeight: 600,
              }}
            >
              <FiCalendar size={14} />
              Issued {cert.issued}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Certifications
