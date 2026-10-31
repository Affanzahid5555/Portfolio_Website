import { motion, useReducedMotion } from 'framer-motion'

const lines = Array.from({ length: 18 }, (_, index) => {
  const y = 42 + index * 30
  const bend = index * 5
  return `M -180 ${y} C 90 ${-36 + bend}, 290 ${120 + bend}, 520 ${82 + bend} S 890 ${14 + bend}, 1100 ${154 + bend} S 1390 ${300 - bend}, 1700 ${80 + bend}`
})

const FlowField = ({ x, y }) => {
  const reduceMotion = useReducedMotion()

  return (
    <motion.div
      className="hero-flow-field"
      style={reduceMotion ? undefined : { x, y }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, delay: 0.15 }}
      aria-hidden="true"
    >
      <svg viewBox="0 0 1520 720" preserveAspectRatio="none" role="presentation">
        <defs>
          <linearGradient id="flow-stroke" x1="0" x2="1">
            <stop offset="0" stopColor="var(--orange)" stopOpacity="0" />
            <stop offset="0.24" stopColor="var(--orange)" stopOpacity="0.5" />
            <stop offset="0.7" stopColor="var(--orange)" stopOpacity="0.28" />
            <stop offset="1" stopColor="var(--lime)" stopOpacity="0" />
          </linearGradient>
        </defs>
        <motion.g
          initial={reduceMotion ? false : { pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.6, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
        >
          {lines.map((path, index) => (
            <motion.path
              key={path}
              className="flow-line"
              d={path}
              pathLength="1"
              style={{ '--line-index': index }}
            />
          ))}
        </motion.g>
      </svg>
    </motion.div>
  )
}

export default FlowField
