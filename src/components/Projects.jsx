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
import gensaiImage from '../assets/project-screens/gensai.png'
import siteStreamBrand from '../assets/project-screens/sitestream-brand.png'
import siteStreamEvents from '../assets/project-screens/sitestream-events.png'
import siteStreamSites from '../assets/project-screens/sitestream-sites.png'
import betterManRecovery from '../assets/project-screens/betterman-recovery.png'
import betterManFitness from '../assets/project-screens/betterman-fitness.png'
import betterManCourses from '../assets/project-screens/betterman-courses.png'
import frenchRivieraImage from '../assets/project-screens/french-riviera-travel.jpg'

const projects = [
  {
    title: 'Gensai.ai',
    type: 'AI voice & RAG platform',
    built: 'Built Twilio calling flows and chat APIs, AWS Polly speech synthesis, and a RAG pipeline backed by vector-database retrieval for grounded business answers.',
    outcome: 'Enabled custom voice agents, chatbots, and answer engines to respond from company knowledge, automate enquiries, and escalate unsupported requests safely.',
    tags: ['RAG', 'Twilio', 'AWS Polly', 'Vector DB', 'Chat API'],
    link: 'https://gensai.ai/en', image: gensaiImage, imageAlt: 'Gensai.ai AI agency website preview', featured: true,
  },
  {
    title: 'LiliHo',
    type: 'AI hospitality platform',
    built: 'Built AI guest-communication workflows that connect PMS data, property knowledge, WhatsApp, automated journeys, and a shared operations inbox.',
    outcome: 'Gives hospitality teams one place to support guests consistently across 150+ languages and every stage of a stay.',
    tags: ['AI Automation', 'PMS Integration', 'WhatsApp'],
    link: 'https://liliho.com/en/', image: lilihoImage, featured: true,
  },
  {
    title: 'Asian Grocer Online',
    type: 'iOS commerce app',
    built: 'Built the iOS commerce journey across product discovery, secure checkout, order history, delivery scheduling, and real-time courier tracking.',
    outcome: 'Lets customers browse 20,000+ grocery and home products and move from search to scheduled delivery in one app.',
    tags: ['Mobile Commerce', 'iOS', 'Logistics'],
    link: 'https://apps.apple.com/au/app/asian-grocer-online/id6749350863', image: asianGrocerImage, featured: true,
  },
  {
    title: 'SiteStream',
    type: 'Mobile security monitoring',
    built: 'Built a mobile monitoring experience for live camera access, recorded motion events, clip management, two-way audio, and switching between multiple security sites.',
    outcome: 'Gives teams remote visibility and control over solar-powered mobile security skids across construction sites, work zones, and temporary locations.',
    tags: ['Mobile', 'Live Video', 'Cloud Storage', 'Multi-Site'],
    link: 'https://play.google.com/store/apps/details?id=com.redskyeng.sitestream&hl=en',
    images: [
      { src: siteStreamBrand, alt: 'SiteStream mobile app branding' },
      { src: siteStreamEvents, alt: 'SiteStream recorded motion event screen' },
      { src: siteStreamSites, alt: 'SiteStream multi-site management screen' },
    ],
    featured: true,
  },
  {
    title: 'BetterMan',
    type: 'Men’s health & habit app',
    built: 'Built a personal-development experience around daily habits and streaks, guided breathing and meditation, fitness routines, structured courses, and progress milestones.',
    outcome: 'Helps men build healthier routines and mindset through practical recovery tools, coaching content, and consistent progress tracking in one mobile app.',
    tags: ['Health & Fitness', 'Habit Tracking', 'Courses', 'Mobile'],
    link: 'https://play.google.com/store/apps/details?id=com.naturaljackson.betterman&hl=en',
    images: [
      { src: betterManRecovery, alt: 'BetterMan recovery streak and support screen' },
      { src: betterManFitness, alt: 'BetterMan guided fitness program screen' },
      { src: betterManCourses, alt: 'BetterMan personal development course screen' },
    ],
    featured: true,
  },
  {
    title: 'French Riviera Travel',
    type: 'Travel & tourism platform',
    built: 'Built responsive destination pages, reusable UI components, and structured content sections for travel guides, experiences, accommodation, and editorial content across the French Riviera.',
    outcome: 'Created a fast, SEO-friendly browsing experience that helps travelers discover South of France destinations smoothly across desktop and mobile.',
    tags: ['Responsive Web', 'SEO', 'Content Platform', 'Travel'],
    link: 'https://frenchriviera.travel/',
    image: frenchRivieraImage,
    imageAlt: 'French Riviera Travel destination platform preview',
  },
  {
    title: 'EntryClub',
    type: 'Multi-tenant fitness SaaS',
    built: 'Built multi-tenant web and mobile workflows for memberships, class bookings, QR check-ins, POS, payments, WhatsApp, and branch-level analytics.',
    outcome: 'Gives multi-branch fitness operators a single system for member experiences and everyday club operations.',
    tags: ['Next.js', 'NestJS', 'React Native'],
    image: entryClubImage,
  },
  {
    title: '360HR',
    type: 'Recruitment & HR SaaS',
    built: 'Built a B2B job portal and ATS spanning candidate search, hiring pipelines, recruiter analytics, role-based access, documents, compliance, and billing.',
    outcome: 'Creates a structured path from job discovery to hiring while keeping recruiter and HR operations in one product.',
    tags: ['React', 'Node.js', 'MongoDB'],
    link: 'https://360hr.cloud/landing', image: hrImage,
  },
  {
    title: 'Detector Maps',
    type: 'Mapping & exploration',
    built: 'Built web and mobile mapping workflows that combine LiDAR, geology, mining claims, GPS trails, offline maps, and AI-assisted summaries.',
    outcome: 'Turns fragmented spatial data into a practical field tool for researching and revisiting promising search locations.',
    tags: ['Maps', 'Mobile', 'AI'],
    link: 'https://detectormaps.com/', image: detectorMapsImage,
  },
  {
    title: 'VUMI Travel VIP',
    type: 'Travel insurance app',
    built: 'Built multilingual mobile flows for policy documents, digital ID cards, claims, telemedicine, provider search, notifications, and assistance calls.',
    outcome: 'Keeps essential insurance and healthcare support accessible to travellers from a single mobile companion.',
    tags: ['Insurance', 'Mobile', 'Healthcare'],
    link: 'https://apps.apple.com/us/app/vumi-travel-vip/id1415110061', image: vumiTravelImage,
  },
  {
    title: 'EmpowerID',
    type: 'Enterprise identity platform',
    built: 'Built enterprise identity workflows for SSO, MFA, lifecycle automation, privileged access, and auditable governance across people, apps, and AI agents.',
    outcome: 'Gives security teams consistent control over access while reducing manual identity administration and compliance gaps.',
    tags: ['Identity', 'Security', 'Enterprise'],
    link: 'https://empowerid.com/', image: empowerIdImage,
  },
  {
    title: 'Punctual',
    type: 'AI booking platform',
    built: 'Built service-business workflows around an AI receptionist, appointment booking, WhatsApp automation, reminders, payments, calendars, and reporting.',
    outcome: 'Keeps bookings and customer communication moving around the clock while reducing repetitive front-desk work.',
    tags: ['AI Voice', 'Scheduling', 'Payments'],
    link: 'https://punctual.pt/en', image: punctualImage,
  },
  {
    title: 'JT Allen',
    type: 'Real estate experience',
    built: 'Built a refined property experience spanning sales and rental listings, appraisals, local expertise, and tailored buyer, seller, and tenant enquiries.',
    outcome: 'Makes it easier for prospective clients to discover relevant properties and reach the right agency team with useful context.',
    tags: ['Real Estate', 'Listings', 'Lead Generation'],
    link: 'https://jtallen.com.au/', image: jtAllenImage,
  },
  {
    title: 'The Boarderline',
    type: 'Advisory marketplace',
    built: 'Built an expert marketplace for advisor discovery, profile evaluation, availability, and focused video-consultation bookings.',
    outcome: 'Shortens the path between founders and specialist advice across growth, brand, finance, fundraising, and operations.',
    tags: ['Marketplace', 'Video', 'Advisory'],
    link: 'https://theboarderline.co/', image: boarderlineImage,
  },
  {
    title: 'Fresha',
    type: 'Beauty & wellness marketplace',
    built: 'Built marketplace and business workflows for service discovery, appointment booking, team and inventory management, payments, and customer retention.',
    outcome: 'Connects the customer booking journey with the operational tools beauty and wellness teams use to run their businesses.',
    tags: ['Marketplace', 'Booking', 'Payments'],
    link: 'https://www.fresha.com/', image: freshaImage,
  },
  {
    title: 'iShout',
    type: 'Influencer marketing platform',
    built: 'Built AI-assisted creator discovery and campaign workflows across matching, approvals, collaboration, launches, and performance analytics.',
    outcome: 'Replaces fragmented campaign coordination with one workflow for brands, teams, and creators from discovery through reporting.',
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
      <p className="heading-note">What I built, the problem it solved, and the product outcome—across AI, mobile, SaaS, commerce, and enterprise work.</p>
    </div>

    <div className="project-grid">
      {projects.map((project, index) => {
        const Card = project.link ? motion.a : motion.article
        const domain = project.link ? new URL(project.link).hostname.replace('www.', '') : 'Private product case study'
        const linkProps = project.link ? { href: project.link, target: '_blank', rel: 'noopener noreferrer' } : {}
        return (
          <Card className={`project-card ${project.featured ? 'project-featured' : ''} ${project.link ? '' : 'project-card-static'}`} {...linkProps} key={project.title} initial={{ opacity: 0, y: 70, x: index % 2 === 0 ? -28 : 28, scale: 0.94 }} whileInView={{ opacity: 1, y: 0, x: 0, scale: 1 }} whileHover={{ y: -8 }} viewport={{ once: true, amount: 0.12 }} transition={{ delay: Math.min(index * 0.035, 0.18), type: 'spring', stiffness: 72, damping: 17 }}>
            <div className="project-visual">
              <div className="browser-bar" aria-hidden>
                <span className="browser-dots"><i /><i /><i /></span>
                <span className="browser-domain">{domain}</span>
              </div>
              {project.images ? (
                <div className="project-gallery">
                  {project.images.map((image) => <img src={image.src} alt={image.alt} loading="lazy" key={image.src} />)}
                </div>
              ) : (
                <img src={project.image} alt={project.imageAlt || `${project.title} website preview`} loading="lazy" />
              )}
              <span className="project-type-chip">{project.type}</span>
            </div>
            <div className="project-content">
              <div className="project-title-row"><h3>{project.title}</h3>{project.link && <FiArrowUpRight />}</div>
              <dl className="project-summary">
                <div><dt>Built</dt><dd>{project.built}</dd></div>
                <div><dt>Outcome</dt><dd>{project.outcome}</dd></div>
              </dl>
              <div className="tag-list">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
            </div>
          </Card>
        )
      })}
    </div>
  </section>
)

export default Projects
