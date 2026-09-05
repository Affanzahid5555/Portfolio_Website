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
import codingImg from '../assets/images/assets/coding-image.jpg'
import webAppImg from '../assets/images/assets/Web-app-development.jpg'

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

  // Upwork portfolio showcase (matches profile + CV)
  const upworkProjects = [
    {
      title: 'Entry Club',
      description:
        'Multi-tenant fitness SaaS platform built end to end with Next.js, NestJS, and React Native. Member management, class scheduling, QR check in, WhatsApp integration, OAuth, payment gateways, multi location support, and PDPL compliant access.',
      image: entryClubImg,
      imageFit: 'cover',
      tags: ['Fitness SaaS', 'Next.js', 'NestJS', 'React Native'],
      featured: true,
      badge: 'Upwork Portfolio',
      gradient: 'linear-gradient(135deg, #1e1b4b 0%, #4f46e5 100%)',
      accentColor: '#818cf8',
    },
    {
      title: 'Tawabiq',
      description:
        'Real estate marketplace and management platform with AI ready full stack architecture. Public marketplace with map and geolocation search, broker CRM (leads, appointments, commissions), and enterprise admin with SSR, moderation, reporting, and audit logs.',
      image: tawabiqImg,
      imageFit: 'cover',
      tags: ['Real Estate', 'Next.js', 'NestJS', 'PostgreSQL', 'AI Features'],
      featured: true,
      badge: 'Upwork Portfolio',
      gradient: 'linear-gradient(135deg, #0f766e 0%, #14b8a6 100%)',
      accentColor: '#0d9488',
    },
    {
      title: '360HR',
      description:
        'B2B recruiting and HR management SaaS with role based dashboards for recruiters, HR, and candidates. Job postings, pipelines, interview scheduling, onboarding, attendance, and a career portal tying recruiting and HR ops into one system.',
      image: hrImg,
      tags: ['HR & SaaS', 'React', 'Node.js', 'MongoDB'],
      link: 'https://360hr.io/',
      featured: true,
      badge: 'Upwork Portfolio',
      gradient: 'linear-gradient(135deg, #1e40af 0%, #2563eb 100%)',
      accentColor: '#3b82f6',
    },
  ]

  const liveProjects = [
    {
      title: 'HealthCare Companion',
      description:
        'Published cross platform React Native healthcare app (Google Play and Apple App Store) with Firebase Auth, Firestore, and FCM, plus an admin panel. Guided onboarding into health courses, XP and streaks, achievement badges, Sign in with Apple, and in app purchases.',
      image: healthcareImg,
      tags: ['Healthcare', 'React Native', 'Firebase', 'Published'],
      featured: true,
      badge: 'Published',
      gradient: 'linear-gradient(135deg, #0f766e 0%, #14b8a6 100%)',
      accentColor: '#14b8a6',
    },
    {
      title: 'Ishout',
      description:
        'Full stack platform for a UAE creative branding and digital marketing agency, covering frontend, backend, and content presentation. Live at ishout.ae.',
      image: ishoutImg,
      imageFit: 'cover',
      tags: ['Agency Platform', 'Next.js', 'Full Stack'],
      link: 'https://ishout.ae/',
      featured: false,
      gradient: 'linear-gradient(135deg, #831843 0%, #db2777 100%)',
      accentColor: '#ec4899',
    },
    {
      title: 'LiliHo',
      description:
        'AI guest communication platform for vacation rentals. Automates WhatsApp and other channels in 150+ languages with PMS integrations and a unified inbox for property teams.',
      image: webAppImg,
      imageFit: 'cover',
      tags: ['AI / LLM', 'WhatsApp', 'Full Stack'],
      link: 'https://liliho.com/',
      featured: true,
      badge: 'AI Platform',
      gradient: 'linear-gradient(135deg, #0c4a6e 0%, #0369a1 100%)',
      accentColor: '#38bdf8',
    },
    {
      title: 'AI Calling Bot',
      description:
        'Voice automation with RAG pipelines, vector search, STT/TTS, and LLM APIs for multi turn automated voice conversations. Live at ultranivo.com.',
      image: codingImg,
      imageFit: 'cover',
      tags: ['AI', 'Python', 'RAG', 'Voice'],
      link: 'https://ultranivo.com/',
      featured: true,
      badge: 'AI Project',
      gradient: 'linear-gradient(135deg, #14532d 0%, #16a34a 100%)',
      accentColor: '#22c55e',
    },
    {
      title: 'Vumi',
      description:
        'Cross platform React Native social app with professional feed, short form reels, real time messaging, Stripe style checkout, authentication, and Firebase push notifications. Available on the App Store as Vumi Agent Central.',
      image: healthcareImg,
      tags: ['React Native', 'Node.js', 'Firebase', 'Stripe'],
      featured: false,
      gradient: 'linear-gradient(135deg, #312e81 0%, #6366f1 100%)',
      accentColor: '#818cf8',
    },
    {
      title: 'Dentalic',
      description: 'Dental management SaaS to streamline clinic operations from patient scheduling to billing. Boost efficiency, improve patient care, and simplify administrative tasks.',
      image: dentalicImg,
      tags: ['Digital Health', 'Web App', 'SaaS'],
      link: 'https://mongid.com/en/dentalic',
      featured: false,
      gradient: 'linear-gradient(135deg, #1e293b 0%, #475569 100%)',
      accentColor: '#64748b',
    },
    {
      title: 'French Riviera Travel',
      description:
        'Travel content platform with destination guides, attractions, blogs, and accommodation related content. Responsive pages and smoother navigation for discovery.',
      image: reveriaImg,
      tags: ['Travel & Tourism', 'Next.js'],
      link: 'https://frenchriviera.travel/',
      featured: false,
      gradient: 'linear-gradient(135deg, #0c4a6e 0%, #155e75 100%)',
      accentColor: '#0891b2',
    },
    {
      title: 'Instant Custom Boxes',
      description:
        'Custom packaging e commerce with responsive sections for product categories, quote requests, and landing pages. Improved browsing, customization flows, and inquiry based ordering.',
      image: instantBoxesImg,
      tags: ['Packaging & E Commerce', 'React.js'],
      link: 'https://www.instantcustomboxes.com/',
      featured: false,
      gradient: 'linear-gradient(135deg, #44403c 0%, #57534e 100%)',
      accentColor: '#78716c',
    },
    {
      title: 'Bitrix24 Tasks & Projects',
      description:
        'CRM style modules for task management, collaboration, user roles, reporting, and workflow automation with scalable admin and business interfaces.',
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
        'Real time collaborative task management with live sync, multi user support, and role based access using React.js and Node.js.',
      image: tmobileImg,
      tags: ['Telecom & Digital', 'Enterprise'],
      link: 'https://www.t-mobile.com/',
      featured: false,
      gradient: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 100%)',
      accentColor: '#4338ca',
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
        Same showcase clients see on my Upwork profile, plus selected live work
      </motion.p>

      <motion.h3
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        style={{
          fontSize: '1.85rem',
          fontWeight: 700,
          marginTop: '60px',
          marginBottom: '12px',
        }}
      >
        Upwork Portfolio
      </motion.h3>

      <motion.div
        className="section-divider"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.1 }}
      />

      <div className="projects-grid" style={gridStyle}>
        {upworkProjects.map((project, index) => (
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
        More Selected Work
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
        Additional projects from my CV with live demos where available
      </motion.p>

      <div className="projects-grid" style={gridStyle}>
        {liveProjects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} isMobile={isMobile} />
        ))}
      </div>
    </section>
  )
}

export default Projects
