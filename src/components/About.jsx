import { motion } from 'framer-motion'
import { FiBox, FiCpu, FiSmartphone } from 'react-icons/fi'

const capabilities = [
  { number: '01', icon: <FiBox />, title: 'Full stack development', text: 'Scalable frontends, reliable APIs, data models, payments, role-based access, and the details that make software production-ready.' },
  { number: '02', icon: <FiSmartphone />, title: 'Mobile delivery', text: 'Cross-platform apps shaped around real user journeys, with store releases, cloud services, notifications, and smooth everyday performance.' },
  { number: '03', icon: <FiCpu />, title: 'AI & automation', text: 'Useful AI features, voice workflows, third-party integrations, and operational automation built around the product—not the hype.' },
]

const skills = [
  'React', 'Next.js', 'React Native', 'TypeScript', 'Node.js', 'Express', 'NestJS', 'FastAPI',
  'MongoDB', 'PostgreSQL', 'Firebase', 'AWS', 'Docker', 'REST APIs', 'Microservices', 'Payment Integrations',
]

const About = () => (
  <section id="about" className="content-section section-shell">
    <div className="section-heading">
      <span className="section-index">01 / About</span>
      <motion.h2 initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.65 }}>
        Engineering the whole product,<br /><em>not just the screens.</em>
      </motion.h2>
    </div>

    <div className="about-intro">
      <p className="about-lead">I&apos;m Affan, a full stack developer building polished web, mobile, and AI experiences people can trust and enjoy using.</p>
      <div className="about-copy">
        <p>My work spans web platforms, mobile apps, AI communication tools, B2B SaaS, payments, and enterprise workflows. I&apos;m comfortable moving from requirements and architecture to the final release—and staying close to users, designers, and clients along the way.</p>
        <p>I care about clear interfaces, thoughtful systems, fast feedback loops, and measurable improvements. The result is software that looks sharp and holds up under real-world use.</p>
      </div>
    </div>

    <div className="capability-grid">
      {capabilities.map((item, index) => (
        <motion.article className="capability-card" key={item.title} initial={{ opacity: 0, y: 34 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ delay: index * 0.08, duration: 0.55 }}>
          <div className="capability-top"><span>{item.number}</span>{item.icon}</div>
          <h3>{item.title}</h3>
          <p>{item.text}</p>
        </motion.article>
      ))}
    </div>

    <div className="skill-marquee" aria-label={`Core skills: ${skills.join(', ')}`}>
      <div className="skill-track">
        {[...skills, ...skills].map((skill, index) => <span key={`${skill}-${index}`}>{skill}<i aria-hidden>✦</i></span>)}
      </div>
    </div>
  </section>
)

export default About
