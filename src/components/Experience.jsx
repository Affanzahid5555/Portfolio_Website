import { motion } from 'framer-motion'
import { CV_CACHE_BUST, CV_URL } from '../cvAsset'

const jobs = [
  {
    period: '2025 to Present',
    title: 'Software Engineer',
    company: 'Techtimize',
    href: '#',
    description:
      'Own end to end delivery of full stack production web apps for business clients. NestJS and PostgreSQL microservices on AWS with React and Next.js frontends, auth, admin panels, RBAC, and Stripe. Primary client facing engineer across time zones.',
    tech: ['React', 'Next.js', 'NestJS', 'TypeScript', 'PostgreSQL', 'AWS', 'Stripe'],
  },
  {
    period: '2023 to 2026',
    title: 'MERN Stack Developer',
    company: '360HR',
    href: 'https://360hr.io/',
    description:
      'Architected an enterprise job portal and ATS on the MERN stack: job posting, candidate search, pipelines, recruiter analytics, JWT RBAC, and MongoDB performance work for large datasets.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT'],
  },
  {
    period: '2024 to 2025',
    title: 'Software Engineer',
    company: 'Euphoria XR',
    href: '#',
    description:
      'Owned a production React Native social app with location discovery, real time Socket.io chat, profiles, events, and a Node/MongoDB backend including reels based job discovery.',
    tech: ['React Native', 'Node.js', 'Socket.io', 'MongoDB'],
  },
]

const Experience = () => {
  return (
    <section id="experience" className="bc-section">
      <motion.h2
        className="bc-section-label"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.4 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        Experience
      </motion.h2>

      <ol className="bc-exp-list">
        {jobs.map((job, index) => (
          <motion.li
            key={job.company + job.period}
            initial={{ opacity: 0, y: 32, x: -8 }}
            whileInView={{ opacity: 1, y: 0, x: 0 }}
            viewport={{ once: false, amount: 0.25 }}
            transition={{ delay: index * 0.08, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <a
              className="bc-exp-card"
              href={job.href === '#' ? undefined : job.href}
              target={job.href !== '#' ? '_blank' : undefined}
              rel={job.href !== '#' ? 'noopener noreferrer' : undefined}
              onClick={job.href === '#' ? (e) => e.preventDefault() : undefined}
            >
              <div className="bc-exp-period">{job.period}</div>
              <div className="bc-exp-body">
                <h3 className="bc-exp-title">
                  {job.title} · <span>{job.company}</span>
                </h3>
                <p>{job.description}</p>
                <ul className="bc-tech-list">
                  {job.tech.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </div>
            </a>
          </motion.li>
        ))}
      </ol>

      <motion.a
        className="bc-text-link"
        href={`${CV_URL}?v=${CV_CACHE_BUST}`}
        download="Affan_Zahid_Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.45 }}
      >
        View Full Résumé →
      </motion.a>
    </section>
  )
}

export default Experience
