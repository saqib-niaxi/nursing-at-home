import { motion } from 'framer-motion'
import { ShieldCheck, BadgeCheck, Heart, HeadphonesIcon } from 'lucide-react'
import { SectionHeading } from '../components/shared/SectionHeading'
import { staggerContainer, fadeUp } from '../animations/variants'

const items = [
  {
    icon: ShieldCheck,
    title: 'Background Verified',
    desc: 'Every nurse undergoes rigorous criminal background checks, reference verification, and identity confirmation before joining our network.',
    color: 'violet',
  },
  {
    icon: BadgeCheck,
    title: 'Licensed Professionals',
    desc: 'All our caregivers hold current state nursing licenses and maintain up-to-date certifications in their areas of specialty.',
    color: 'emerald',
  },
  {
    icon: Heart,
    title: 'Fully Insured',
    desc: 'Our nurses carry full professional liability insurance so you and your family are always protected during every visit.',
    color: 'rose',
  },
  {
    icon: HeadphonesIcon,
    title: '24/7 Support',
    desc: 'Our care coordination team is available around the clock — any time you need guidance, scheduling help, or have a concern.',
    color: 'amber',
  },
]

const colorConfig = {
  violet:  { bg: 'bg-violet-100',  icon: 'text-violet-600',  border: 'hover:border-violet-200' },
  emerald: { bg: 'bg-emerald-50',  icon: 'text-emerald-600', border: 'hover:border-emerald-200' },
  rose:    { bg: 'bg-rose-50',     icon: 'text-rose-500',    border: 'hover:border-rose-200' },
  amber:   { bg: 'bg-amber-50',    icon: 'text-amber-500',   border: 'hover:border-amber-200' },
}

export function TrustSafety() {
  return (
    <section className="section-pad bg-white">
      <div className="container-xl">
        <SectionHeading
          label="Trust & Safety"
          title="Your safety is our top priority"
          subtitle="We've built multiple layers of trust and safety so you can focus on healing — not worrying."
          center
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {items.map((item) => {
            const c = colorConfig[item.color]
            return (
              <motion.div
                key={item.title}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className={`card p-6 text-center border border-gray-100 ${c.border} transition-colors duration-300 hover:shadow-medium`}
              >
                <div className={`w-14 h-14 rounded-3xl ${c.bg} flex items-center justify-center mx-auto mb-4`}>
                  <item.icon className={`w-7 h-7 ${c.icon}`} />
                </div>
                <h3 className="font-heading font-bold text-gray-900 text-base mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
