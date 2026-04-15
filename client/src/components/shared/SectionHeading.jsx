import { motion } from 'framer-motion'
import { staggerContainer, fadeUp } from '../../animations/variants'

export function SectionHeading({ label, title, subtitle, center = false }) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      className={center ? 'text-center' : ''}
    >
      {label && (
        <motion.span variants={fadeUp} className="section-label">
          {label}
        </motion.span>
      )}
      <motion.h2 variants={fadeUp} className="section-title">
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p variants={fadeUp} className={`section-subtitle ${center ? 'mx-auto' : ''}`}>
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  )
}
