import { motion } from 'framer-motion'

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: false, amount: 0.2 },
  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
}

const About = () => {
  const skills = [
    'React', 'Next.js', 'React Native', 'TypeScript', 'Node.js', 'NestJS',
    'PostgreSQL', 'MongoDB', 'Firebase', 'AWS', 'OpenAI API', 'REST APIs',
  ]

  return (
    <section id="about" className="bc-section">
      <motion.h2 className="bc-section-label" {...fadeUp}>
        About
      </motion.h2>

      <motion.div className="bc-prose" {...fadeUp}>
        <p>
          Hi, I&apos;m Affan, a full stack developer based in Lahore. I like shipping
          clean, scalable products end to end: from requirement gathering through
          production. Most of my work sits at the intersection of solid engineering
          and clear UI, with a focus on performance, SEO, and maintainable code.
        </p>
        <p>
          Currently I&apos;m a Software Engineer at{' '}
          <strong>Techtimize</strong>, building production React, Next.js, and NestJS
          platforms for international clients, including multi tenant SaaS,
          payments, and AI assisted workflows. Previously I built a production React
          Native social app at <strong>Euphoria XR</strong> and led MERN development
          for the B2B recruiting platform at <strong>360HR</strong>.
        </p>
        <p>
          On Upwork I showcase work like{' '}
          <a href="#projects">Entry Club</a> (multi tenant fitness SaaS),{' '}
          <a href="#projects">Tawabiq</a> (real estate marketplace), and{' '}
          <a href="#projects">360HR</a>, plus published apps and AI products. Open to
          contracts at 30+ hrs/week.
        </p>
        <p className="bc-muted">
          Education: B.S. Computer Science, University of Lahore (2020 to 2024).
          Certifications: Professional React Native & Node.js (2023), Full Stack Web
          & Mobile Development (2022).
        </p>
      </motion.div>

      <ul className="bc-skill-cloud">
        {skills.map((skill, i) => (
          <motion.li
            key={skill}
            initial={{ opacity: 0, y: 14, scale: 0.94 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ delay: i * 0.04, duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  )
}

export default About
