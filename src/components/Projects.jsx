import { motion } from 'framer-motion'
import { FiArrowUpRight } from 'react-icons/fi'
import lilihoImage from '../assets/project-screens/liliho.png'
import asianGrocerImage from '../assets/project-screens/asian-grocer.png'
import detectorMapsImage from '../assets/project-screens/detector-maps.png'
import vumiTravelImage from '../assets/project-screens/vumi-travel.png'
import empowerIdImage from '../assets/project-screens/empowerid.png'
import punctualImage from '../assets/project-screens/punctual.png'
import jtAllenImage from '../assets/project-screens/jt-allen.png'
import boarderlineImage from '../assets/project-screens/boarderline.png'
import freshaImage from '../assets/project-screens/fresha.png'
import ishoutImage from '../assets/project-screens/ishout.png'
import entryClubImage from '../assets/images/assets/entry-club.png'
import hrImage from '../assets/images/assets/image-copy.png'

const projects = [
  {
    title: 'LiliHo',
    type: 'AI hospitality platform',
    description: 'AI guest communication for vacation rentals, connecting PMS data, property knowledge, WhatsApp, automated guest journeys, and a unified inbox across 150+ languages.',
    tags: ['AI Automation', 'PMS Integration', 'WhatsApp'],
    link: 'https://liliho.com/en/', image: lilihoImage, featured: true,
  },
  {
    title: 'Asian Grocer Online',
    type: 'iOS commerce app',
    description: 'A fast mobile shopping experience for 20,000+ Asian grocery and home products, with product discovery, secure checkout, order history, delivery scheduling, and real-time courier tracking.',
    tags: ['Mobile Commerce', 'iOS', 'Logistics'],
    link: 'https://apps.apple.com/au/app/asian-grocer-online/id6749350863', image: asianGrocerImage, featured: true,
  },
  {
    title: 'EntryClub',
    type: 'Multi-tenant fitness SaaS',
    description: 'A multi-branch fitness platform covering member management, memberships, class bookings, QR check-ins, POS and payments, WhatsApp workflows, analytics, and companion mobile experiences.',
    tags: ['Next.js', 'NestJS', 'React Native'],
    image: entryClubImage,
  },
  {
    title: '360HR',
    type: 'Recruitment & HR SaaS',
    description: 'A B2B job portal and applicant tracking system with job discovery, hiring pipelines, recruiter analytics, secure role-based access, HR documents, compliance workflows, and billing.',
    tags: ['React', 'Node.js', 'MongoDB'],
    link: 'https://360hr.cloud/landing', image: hrImage,
  },
  {
    title: 'Detector Maps',
    type: 'Mapping & exploration',
    description: 'A web and mobile mapping product for finding promising gold, coin, and relic locations using LiDAR, geology, mining claims, GPS trails, offline maps, and AI summaries.',
    tags: ['Maps', 'Mobile', 'AI'],
    link: 'https://detectormaps.com/', image: detectorMapsImage,
  },
  {
    title: 'VUMI Travel VIP',
    type: 'Travel insurance app',
    description: 'A multilingual insurance companion for policy documents, digital ID cards, claims, telemedicine, nearby healthcare providers, notifications, and in-app assistance calls.',
    tags: ['Insurance', 'Mobile', 'Healthcare'],
    link: 'https://apps.apple.com/us/app/vumi-travel-vip/id1415110061', image: vumiTravelImage,
  },
  {
    title: 'EmpowerID',
    type: 'Enterprise identity platform',
    description: 'Identity governance for employees, contractors, applications, and AI agents, with SSO, MFA, lifecycle automation, privileged access controls, and compliance trails.',
    tags: ['Identity', 'Security', 'Enterprise'],
    link: 'https://empowerid.com/', image: empowerIdImage,
  },
  {
    title: 'Punctual',
    type: 'AI booking platform',
    description: 'Business operations for service teams, combining an always-on AI receptionist, appointment booking, WhatsApp automation, reminders, payments, calendars, and reporting.',
    tags: ['AI Voice', 'Scheduling', 'Payments'],
    link: 'https://punctual.pt/en', image: punctualImage,
  },
  {
    title: 'JT Allen',
    type: 'Real estate experience',
    description: 'A refined digital experience for a Sydney real estate agency, covering property sales and rentals, appraisals, listings, local expertise, and tailored client enquiries.',
    tags: ['Real Estate', 'Listings', 'Lead Generation'],
    link: 'https://jtallen.com.au/', image: jtAllenImage,
  },
  {
    title: 'The Boarderline',
    type: 'Advisory marketplace',
    description: 'An on-demand expert network where founders can discover advisors and book focused video consultations across growth, brand, finance, fundraising, and operations.',
    tags: ['Marketplace', 'Video', 'Advisory'],
    link: 'https://theboarderline.co/', image: boarderlineImage,
  },
  {
    title: 'Fresha',
    type: 'Beauty & wellness marketplace',
    description: 'An appointment marketplace and business platform for discovering services, booking professionals, managing teams and inventory, processing payments, and retaining customers.',
    tags: ['Marketplace', 'Booking', 'Payments'],
    link: 'https://www.fresha.com/', image: freshaImage,
  },
  {
    title: 'iShout',
    type: 'Influencer marketing platform',
    description: 'AI-assisted influencer discovery and campaign operations, bringing creator matching, approvals, collaboration workflows, launches, and performance analytics into one product.',
    tags: ['Creator Economy', 'AI Matching', 'Analytics'],
    link: 'https://ishout.ae/', image: ishoutImage,
  },
]

const Projects = () => (
  <section id="projects" className="content-section section-shell projects-section">
    <div className="section-heading split-heading">
      <div>
        <span className="section-index">03 / Selected work</span>
        <h2>Products in the wild.<br /><em>Built for real people.</em></h2>
      </div>
      <p className="heading-note">A mix of AI, mobile, SaaS, commerce, recruiting, mapping, and enterprise products.</p>
    </div>

    <div className="project-grid">
      {projects.map((project, index) => {
        const Card = project.link ? motion.a : motion.article
        const domain = project.link ? new URL(project.link).hostname.replace('www.', '') : 'Private product case study'
        const linkProps = project.link ? { href: project.link, target: '_blank', rel: 'noopener noreferrer' } : {}
        return (
          <Card className={`project-card ${project.featured ? 'project-featured' : ''} ${project.link ? '' : 'project-card-static'}`} {...linkProps} key={project.title} initial={{ opacity: 0, y: 36 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ delay: Math.min(index * 0.04, 0.2), duration: 0.55 }}>
            <div className="project-visual">
              <div className="browser-bar" aria-hidden>
                <span className="browser-dots"><i /><i /><i /></span>
                <span className="browser-domain">{domain}</span>
              </div>
              <img src={project.image} alt={`${project.title} website preview`} loading="lazy" />
              <span className="project-type-chip">{project.type}</span>
            </div>
            <div className="project-content">
              <div className="project-title-row"><h3>{project.title}</h3>{project.link && <FiArrowUpRight />}</div>
              <p>{project.description}</p>
              <div className="tag-list">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
            </div>
          </Card>
        )
      })}
    </div>
  </section>
)

export default Projects
