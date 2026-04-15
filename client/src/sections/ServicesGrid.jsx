import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Stethoscope, Heart, Baby, Bandage, Syringe, Leaf, ArrowRight } from 'lucide-react'
import { SectionHeading } from '../components/shared/SectionHeading'
import { staggerContainer, fadeUp } from '../animations/variants'

const services = [
  { icon: Stethoscope, title: 'Post-Op Care',     desc: 'Expert recovery support after surgery — wound care, medication management, and daily monitoring.',  color: 'violet', tag: 'Most Popular' },
  { icon: Heart,       title: 'Elder Care',        desc: 'Compassionate daily assistance for seniors — personal care, companionship, and health supervision.', color: 'rose',   tag: null },
  { icon: Baby,        title: 'Pediatric Care',    desc: 'Specialized nursing for children — from newborn care to managing chronic conditions with a gentle touch.', color: 'amber', tag: null },
  { icon: Bandage,     title: 'Wound Care',        desc: 'Professional assessment and dressing of wounds, preventing infection and promoting healing.', color: 'emerald', tag: null },
  { icon: Syringe,     title: 'IV Therapy',        desc: 'Safe and comfortable intravenous treatments administered at home by certified professionals.', color: 'sky',    tag: null },
  { icon: Leaf,        title: 'Palliative Care',   desc: 'Dignified end-of-life support focused on comfort, pain management, and emotional well-being.', color: 'purple', tag: null },
]

const colorMap = {
  violet:  { bg: 'bg-violet-100',  icon: 'text-violet-600',  hover: 'group-hover:bg-violet-600' },
  rose:    { bg: 'bg-rose-50',     icon: 'text-rose-500',    hover: 'group-hover:bg-rose-500' },
  amber:   { bg: 'bg-amber-50',    icon: 'text-amber-500',   hover: 'group-hover:bg-amber-500' },
  emerald: { bg: 'bg-emerald-50',  icon: 'text-emerald-600', hover: 'group-hover:bg-emerald-600' },
  sky:     { bg: 'bg-sky-50',      icon: 'text-sky-600',     hover: 'group-hover:bg-sky-600' },
  purple:  { bg: 'bg-purple-50',   icon: 'text-purple-600',  hover: 'group-hover:bg-purple-600' },
}

export function ServicesGrid() {
  return (
    <section className="section-pad bg-cream-50">
      <div className="container-xl">
        <SectionHeading
          label="Our Services"
          title="Comprehensive care, at home"
          subtitle="From post-operative recovery to elder care — our licensed nurses deliver expert care across every need."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((svc) => {
            const c = colorMap[svc.color]
            return (
              <motion.div
                key={svc.title}
                variants={fadeUp}
                whileHover={{ y: -8 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="group card p-6 hover:shadow-medium cursor-pointer border border-gray-100 hover:border-violet-100 transition-colors duration-300"
              >
                {/* Icon */}
                <div className={`w-12 h-12 rounded-2xl ${c.bg} flex items-center justify-center mb-4 transition-colors duration-300 ${c.hover} [&>svg]:transition-colors [&>svg]:duration-300`}>
                  <svc.icon className={`w-6 h-6 ${c.icon} group-hover:text-white transition-colors duration-300`} />
                </div>

                {/* Tag */}
                {svc.tag && (
                  <span className="badge-violet text-[10px] mb-2">{svc.tag}</span>
                )}

                <h3 className="font-heading font-bold text-gray-900 text-lg mb-2">{svc.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{svc.desc}</p>

                <Link
                  to={`/contact?service=${encodeURIComponent(svc.title)}`}
                  className="inline-flex items-center gap-1 text-violet-600 font-heading font-semibold text-sm hover:gap-2 transition-all duration-200"
                >
                  Book Now <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </motion.div>
            )
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-10 text-center"
        >
          <Link to="/services" className="btn-outline inline-flex">
            View All Services <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
