import { motion } from 'framer-motion'
import { FiArrowUpRight } from 'react-icons/fi'

const roles = [
  {
    period: 'Oct 2025 — Sep 2026',
    company: 'Techtimize',
    title: 'Full Stack Developer',
    summary: 'Delivered production web and mobile features, designed clear microservice-style APIs, and integrated Meta and Google services for client products.',
    impact: '30% faster feature delivery',
    tags: ['Web & Mobile', 'API Design', 'Microservices', 'Client Delivery'],
  },
  {
    period: 'Jun 2024 — Oct 2025',
    company: 'Euphoria XR',
    title: 'Full Stack Developer',
    summary: 'Shipped cross-platform products to both major app stores, built payment and cloud integrations, and created real-time AI voice experiences.',
    impact: 'Load time cut to 1.5s',
    tags: ['React Native', 'Firebase', 'Twilio', 'AWS Polly'],
  },
  {
    period: 'Aug 2024 — Jan 2026',
    company: '360HR',
    title: 'Full Stack Developer · Part-Time',
    summary: 'Built a B2B recruitment platform with hiring pipelines, analytics, secure role-based APIs, compliance integrations, and billing workflows.',
    impact: 'Candidate search cut to 0.8s',
    tags: ['React', 'Node.js', 'MongoDB', 'RBAC'],
    link: 'https://360hr.io/',
  },
]

const Experience = () => (
  <section id="experience" className="content-section section-shell">
    <div className="section-heading split-heading">
      <div>
        <span className="section-index">02 / Experience</span>
        <h2>Built in teams.<br /><em>Proven in production.</em></h2>
      </div>
    </div>

    <div className="experience-list">
      {roles.map((role, index) => {
        const Card = role.link ? motion.a : motion.article
        const linkProps = role.link ? { href: role.link, target: '_blank', rel: 'noopener noreferrer' } : {}
        return (
          <Card className="experience-card" key={role.company} {...linkProps} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ delay: index * 0.07, duration: 0.55 }}>
            <div className="experience-meta"><span className="experience-number">0{index + 1}</span><span>{role.period}</span></div>
            <div className="experience-main">
              <h3>{role.company}{role.link && <FiArrowUpRight />}</h3>
              <span className="experience-title">{role.title}</span>
              <p>{role.summary}</p>
              <div className="tag-list">{role.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
            </div>
            <div className="impact-pill">{role.impact}</div>
          </Card>
        )
      })}
    </div>
  </section>
)

export default Experience
