import { motion } from 'framer-motion'
import { Users, Star, MapPin, Clock } from 'lucide-react'
import { useCountUp } from '../hooks/useCountUp'
import { staggerContainer, fadeUp } from '../animations/variants'

const stats = [
  { icon: Users,  value: 500,  suffix: '+',    label: 'Verified Nurses',    sub: 'Licensed & insured' },
  { icon: Star,   value: 10,   suffix: 'k+',   label: 'Patients Served',    sub: 'Across all specialties' },
  { icon: MapPin, value: 25,   suffix: '+',    label: 'Cities Covered',     sub: 'And growing fast' },
  { icon: Clock,  value: 30,   suffix: 'min',  label: 'Avg. Response Time', sub: 'Day or night' },
]

function StatItem({ stat }) {
  const { count, ref } = useCountUp(stat.value, 2000)
  return (
    <div ref={ref} className="text-center">
      <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center mx-auto mb-4">
        <stat.icon className="w-6 h-6 text-violet-300" />
      </div>
      <div className="font-display text-5xl font-bold text-white mb-1">
        {count}{stat.suffix}
      </div>
      <div className="font-heading font-semibold text-white/90 text-base mb-1">{stat.label}</div>
      <div className="text-white/50 text-sm">{stat.sub}</div>
    </div>
  )
}

export function Stats() {
  return (
    <section className="py-20 bg-dark-gradient relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-violet-600 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-violet-800 blur-3xl" />
      </div>

      <div className="container-xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-heading font-semibold bg-white/10 text-white/80 uppercase tracking-widest mb-4">
            Our Impact
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-white font-bold">
            Numbers that speak for themselves
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12"
        >
          {stats.map((s) => (
            <motion.div key={s.label} variants={fadeUp}>
              <StatItem stat={s} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
