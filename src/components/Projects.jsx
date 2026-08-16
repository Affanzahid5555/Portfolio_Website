import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { FiExternalLink } from 'react-icons/fi'
import SectionMeta from './SectionMeta'
import dentalicImg from '../assets/images/assets/image.png'
import hrImg from '../assets/images/assets/image-copy.png'
import bitrixImg from '../assets/images/assets/bitrix.png'
import tmobileImg from '../assets/images/assets/tmobile.png'
import reveriaImg from '../assets/images/assets/reveria.png'
import instantBoxesImg from '../assets/images/assets/instant-custom-boxes.png'
import healthcareImg from '../assets/images/assets/Artificial-image.jpg'
import entryClubImg from '../assets/images/assets/entry-club.png'
import tawabiqImg from '../assets/images/assets/tawabiq.png'
import ishoutImg from '../assets/images/assets/ishout.png'

const ProjectCard = ({ project, index, isMobile }) => (
  <motion.div
    className="card"
    initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1, duration: 0.7 }}
    whileHover={isMobile ? {} : { y: -16, scale: 1.02 }}
    style={{
      padding: 0,
      overflow: 'hidden',
      border: project.featured
        ? `1px solid ${project.accentColor}50`
        : '1px solid rgba(var(--glow-rgb), 0.1)',
      boxShadow: project.featured
        ? `0 0 30px ${project.accentColor}20`
        : 'none',
    }}
  >
    <div
      style={{
        height: '210px',
        background: project.gradient,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(0, 0, 0, 0.12)',
          zIndex: 1,
        }}
      />

      <div
        style={{
          position: 'relative',
          zIndex: 2,
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <img
          src={project.image}
          alt={project.title}
          style={{
            width: '100%',
            height: '100%',
            objectFit: project.imageFit || 'contain',
            display: 'block',
          }}
        />
      </div>

      {project.badge && (
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 + 0.3, type: 'spring', stiffness: 300 }}
          style={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            background: 'rgba(0, 0, 0, 0.55)',
            backdropFilter: 'blur(12px)',
            padding: '6px 14px',
            borderRadius: '20px',
            fontSize: '0.78rem',
            fontWeight: 700,
            color: '#fff',
            zIndex: 3,
            border: '1px solid rgba(255,255,255,0.2)',
          }}
        >
          {project.badge}
        </motion.div>
      )}
    </div>

    <div className="project-content" style={{ padding: '32px' }}>
      <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '12px' }}>
        {project.title}
      </h3>
      <p style={{ color: 'var(--gray)', lineHeight: 1.75, marginBottom: '22px', fontSize: '0.97rem' }}>
        {project.description}
      </p>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: project.link ? '28px' : 0 }}>
        {project.tags.map((tag, i) => (
          <motion.span
            key={i}
            whileHover={isMobile ? {} : { y: -3, scale: 1.05 }}
            style={{
              padding: '5px 13px',
              background: `${project.accentColor}14`,
              border: `1px solid ${project.accentColor}35`,
              borderRadius: '20px',
              fontSize: '0.8rem',
              color: project.accentColor,
              fontWeight: 600,
              cursor: 'default',
              transition: 'all 0.2s ease',
            }}
          >
            {tag}
          </motion.span>
        ))}
      </div>

      {project.link && project.link !== '#' && (
        <motion.a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
          whileHover={isMobile ? {} : { scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          style={{
            display: 'flex',
            justifyContent: 'center',
            fontSize: '0.92rem',
            padding: '11px 20px',
            background: project.gradient,
            boxShadow: `0 8px 24px ${project.accentColor}35`,
          }}
        >
          <FiExternalLink style={{ marginRight: '6px' }} /> Live Demo
        </motion.a>
      )}
    </div>
  </motion.div>
)

const Projects = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const liveProjects = [
    {
      title: 'HealthCare Companion',
      description:
        'Published cross-platform React Native healthcare app (Google Play & Apple App Store) with Firebase Auth, Firestore, and FCM, plus an admin panel. Guided onboarding into health courses, XP/streaks, achievement badges, progress dashboards, Sign in with Apple, and in-app purchases via Google Play Billing and Apple Pay.',
      image: healthcareImg,
      tags: ['Healthcare', 'React Native', 'Firebase', 'Published'],
      featured: true,
      badge: '⭐ Featured',
      gradient: 'linear-gradient(135deg, #0f766e 0%, #14b8a6 100%)',
      accentColor: '#14b8a6',
    },
    {
      title: 'Dentalic',
      description: 'Dental management SaaS to streamline clinic operations—from patient scheduling to billing. Boost efficiency, improve patient care, and simplify administrative tasks.',
      image: dentalicImg,
      tags: ['Digital Health', 'Web App', 'SaaS'],
      link: 'https://mongid.com/en/dentalic',
      featured: false,
      gradient: 'linear-gradient(135deg, #1e293b 0%, #475569 100%)',
      accentColor: '#64748b',
    },
    {
      title: '360HR',
      description:
        'B2B HR and recruiting SaaS—role-based dashboards for recruiters, HR, and candidates, with job postings, pipelines, interview scheduling, onboarding, attendance, and a career portal tying recruiting and HR ops into one system.',
      image: hrImg,
      tags: ['HR & SaaS', 'React', 'Node.js', 'Cloud'],
      link: 'https://360hr.cloud/',
      featured: false,
      gradient: 'linear-gradient(135deg, #1e40af 0%, #2563eb 100%)',
      accentColor: '#3b82f6',
    },
    {
      title: 'Bitrix24 Tasks & Projects',
      description:
        'CRM-style modules—task management, collaboration, user roles, reporting, and workflow automation—with scalable admin and business interfaces for operational tracking.',
      image: bitrixImg,
      tags: ['Task Management', 'Web Platform'],
      link: 'https://www.bitrix24.com/',
      featured: false,
      gradient: 'linear-gradient(135deg, #485563 0%, #29323c 100%)',
      accentColor: '#485563',
    },
    {
      title: 'T-Mobile',
      description:
        'Real-time collaborative task management—live sync, multi-user support, and role-based access with React.js and Node.js; responsive UI and APIs for collaborative workflows.',
      image: tmobileImg,
      tags: ['Telecom & Digital', 'Enterprise'],
      link: 'https://www.t-mobile.com/',
      featured: false,
      gradient: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 100%)',
      accentColor: '#4338ca',
    },
    {
      title: 'French Riviera Travel',
      description:
        'Travel content platform—destination guides, attractions, blogs, and accommodation-related content—with responsive pages and smoother navigation for discovery.',
      image: reveriaImg,
      tags: ['Travel & Tourism', 'Web Platform'],
      link: 'https://frenchriviera.travel/',
      featured: false,
      gradient: 'linear-gradient(135deg, #0c4a6e 0%, #155e75 100%)',
      accentColor: '#0891b2',
    },
    {
      title: 'Instant Custom Boxes',
      description:
        'Custom packaging e-commerce—responsive sections for product categories, quote requests, and landing pages; improved browsing, customization flows, and inquiry-based ordering.',
      image: instantBoxesImg,
      tags: ['Packaging & E-Commerce', 'Web App'],
      link: 'https://www.instantcustomboxes.com/',
      featured: false,
      gradient: 'linear-gradient(135deg, #44403c 0%, #57534e 100%)',
      accentColor: '#78716c',
    },
  ]

  const companyProjects = [
    {
      title: 'Entry Club',
      description:
        'Complete fitness management platform built for Saudi Arabia—streamline operations, delight members, and grow the business. Multi-tenant web and mobile with Next.js, NestJS, and React Native: member management, class scheduling, QR check-in, WhatsApp integration, multi-location support, and PDPL-compliant access.',
      image: entryClubImg,
      imageFit: 'cover',
      tags: ['Fitness SaaS', 'Next.js', 'NestJS', 'React Native'],
      featured: true,
      badge: 'Company Project',
      gradient: 'linear-gradient(135deg, #1e1b4b 0%, #4f46e5 100%)',
      accentColor: '#818cf8',
    },
    {
      title: 'Ishout',
      description:
        'Smarter campaigns, powered by AI—an influencer marketing platform where brands brief goals, audience, and deliverables in minutes, then Ishout AI matches the most relevant creators instantly. Campaign workflows, creator collaboration, analytics, and role-based access for brands activating at scale.',
      image: ishoutImg,
      imageFit: 'cover',
      tags: ['Influencer Marketing', 'AI Matching', 'Next.js', 'SaaS'],
      featured: true,
      badge: 'Company Project',
      gradient: 'linear-gradient(135deg, #831843 0%, #db2777 100%)',
      accentColor: '#ec4899',
    },
    {
      title: 'Tawabiq',
      description:
        'Complete real estate platform with three connected experiences: a public marketplace (search, favorites, map/geolocation), a broker management system (leads, appointments, commissions, transactions), and an enterprise admin panel with role-based dashboards, listing approvals, content moderation, reporting, and audit logs.',
      image: tawabiqImg,
      imageFit: 'cover',
      tags: ['Real Estate', 'Next.js', 'NestJS', 'PostgreSQL'],
      featured: true,
      badge: 'Company Project',
      gradient: 'linear-gradient(135deg, #0f766e 0%, #14b8a6 100%)',
      accentColor: '#0d9488',
    },
  ]

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(370px, 1fr))',
    gap: '36px',
    marginTop: '40px',
  }

  return (
    <section id="projects" className="section" style={{ position: 'relative' }}>
      <div className="section-num">04</div>
      <div className="glow" style={{ top: '10%', right: '-300px', background: 'radial-gradient(circle,rgba(var(--glow-rgb),0.2) 0%,transparent 70%)' }} />

      <SectionMeta label="04 — Projects" />

      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Featured Projects
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
        Selected work with live demos where available
      </motion.p>

      <div className="projects-grid" style={{ ...gridStyle, marginTop: '60px' }}>
        {liveProjects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} isMobile={isMobile} />
        ))}
      </div>

      <motion.h3
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        style={{
          fontSize: '1.85rem',
          fontWeight: 700,
          marginTop: '88px',
          marginBottom: '12px',
        }}
      >
        Company Projects
      </motion.h3>

      <motion.div
        className="section-divider"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.1 }}
      />

      <motion.p
        className="section-subtitle"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        Production platforms delivered for clients—private deployments, no public URL
      </motion.p>

      <div className="projects-grid" style={gridStyle}>
        {companyProjects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} isMobile={isMobile} />
        ))}
      </div>
    </section>
  )
}

export default Projects
