import { motion } from 'framer-motion'
import { FiExternalLink, FiArrowUpRight } from 'react-icons/fi'
import entryClubImg from '../assets/images/assets/entry-club.png'
import tawabiqImg from '../assets/images/assets/tawabiq.png'
import hrImg from '../assets/images/assets/image-copy.png'
import healthcareImg from '../assets/images/assets/Artificial-image.jpg'
import ishoutImg from '../assets/images/assets/ishout.png'
import codingImg from '../assets/images/assets/coding-image.jpg'
import webAppImg from '../assets/images/assets/Web-app-development.jpg'

const projects = [
  {
    title: 'Entry Club',
    description:
      'Multi tenant fitness SaaS with Next.js, NestJS, and React Native. Member management, QR check in, WhatsApp, OAuth, and payment gateways.',
    image: entryClubImg,
    tech: ['Next.js', 'NestJS', 'React Native'],
    link: null,
    badge: 'Upwork',
  },
  {
    title: 'Tawabiq',
    description:
      'Real estate marketplace and management platform: public search with maps, broker CRM, and enterprise admin with SSR and moderation.',
    image: tawabiqImg,
    tech: ['Next.js', 'NestJS', 'PostgreSQL'],
    link: null,
    badge: 'Upwork',
  },
  {
    title: '360HR',
    description:
      'B2B recruiting and HR SaaS with role based dashboards, pipelines, interview scheduling, and a career portal.',
    image: hrImg,
    tech: ['React', 'Node.js', 'MongoDB'],
    link: 'https://360hr.io/',
    badge: 'Upwork',
  },
  {
    title: 'HealthCare Companion',
    description:
      'Published React Native healthcare app (Play Store & App Store) with Firebase, XP streaks, and in app purchases.',
    image: healthcareImg,
    tech: ['React Native', 'Firebase'],
    link: null,
  },
  {
    title: 'LiliHo',
    description:
      'AI guest communication for vacation rentals across WhatsApp and other channels in 150+ languages.',
    image: webAppImg,
    tech: ['AI / LLM', 'Full Stack'],
    link: 'https://liliho.com/',
  },
  {
    title: 'AI Calling Bot',
    description:
      'Voice automation with RAG, vector search, STT/TTS, and LLM APIs for multi turn calls.',
    image: codingImg,
    tech: ['Python', 'RAG', 'LLM'],
    link: 'https://ultranivo.com/',
  },
  {
    title: 'Ishout',
    description:
      'Full stack platform for a UAE creative branding and digital marketing agency.',
    image: ishoutImg,
    tech: ['Next.js', 'Full Stack'],
    link: 'https://ishout.ae/',
  },
]

const Projects = () => {
  return (
    <section id="projects" className="bc-section">
      <motion.h2
        className="bc-section-label"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.4 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        Projects
      </motion.h2>

      <ul className="bc-project-list">
        {projects.map((project, index) => {
          const Tag = project.link ? motion.a : motion.div
          const linkProps = project.link
            ? {
                href: project.link,
                target: '_blank',
                rel: 'noopener noreferrer',
              }
            : {}

          return (
            <motion.li
              key={project.title}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ delay: Math.min(index * 0.05, 0.25), duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            >
              <Tag
                className="bc-project-card"
                {...linkProps}
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <div className="bc-project-media">
                  <img src={project.image} alt="" loading="lazy" />
                </div>
                <div className="bc-project-body">
                  <h3>
                    {project.title}
                    {project.link && <FiArrowUpRight className="bc-ext" aria-hidden />}
                    {!project.link && project.badge && (
                      <span className="bc-badge">{project.badge}</span>
                    )}
                  </h3>
                  <p>{project.description}</p>
                  <ul className="bc-tech-list">
                    {project.tech.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                </div>
                {project.link && (
                  <span className="bc-project-link-icon" aria-hidden>
                    <FiExternalLink />
                  </span>
                )}
              </Tag>
            </motion.li>
          )
        })}
      </ul>
    </section>
  )
}

export default Projects
