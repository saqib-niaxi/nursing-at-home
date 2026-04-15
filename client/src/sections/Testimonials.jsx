import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'
import { SectionHeading } from '../components/shared/SectionHeading'
import { staggerContainer, fadeUp } from '../animations/variants'

const testimonials = [
  {
    name: 'Patricia Williams',
    role: 'Post-surgery patient',
    quote: 'After my hip replacement, Sarah was an absolute lifesaver. She was professional, caring, and made my recovery so much smoother. I couldn\'t have managed without her.',
    rating: 5,
    service: 'Post-Op Care',
    avatar: 'PW',
    bg: 'from-violet-400 to-purple-500',
  },
  {
    name: 'Robert Chen',
    role: 'Son of elder care patient',
    quote: 'James has been caring for my 82-year-old mother for 6 months. He treats her like family. We finally have peace of mind knowing she\'s in expert hands.',
    rating: 5,
    service: 'Elder Care',
    avatar: 'RC',
    bg: 'from-emerald-400 to-teal-500',
  },
  {
    name: 'Amara Johnson',
    role: 'Mother of pediatric patient',
    quote: 'Priya is incredible with children. My son has diabetes and she manages his care with so much patience and expertise. We feel genuinely cared for.',
    rating: 5,
    service: 'Pediatric Care',
    avatar: 'AJ',
    bg: 'from-amber-400 to-orange-500',
  },
  {
    name: 'Michael Torres',
    role: 'IV therapy patient',
    quote: 'I was nervous about home IV therapy but David made it completely stress-free. Punctual, professional, and so gentle. Will book again without hesitation.',
    rating: 5,
    service: 'IV Therapy',
    avatar: 'MT',
    bg: 'from-sky-400 to-blue-500',
  },
  {
    name: 'Linda O\'Brien',
    role: 'Wound care patient',
    quote: 'My chronic wound healed faster than my doctor expected. Maria\'s expertise and the convenience of home visits made all the difference in my recovery.',
    rating: 5,
    service: 'Wound Care',
    avatar: 'LO',
    bg: 'from-rose-400 to-pink-500',
  },
]

function StarRating({ count }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className="text-gold-400 text-sm">★</span>
      ))}
    </div>
  )
}

export function Testimonials() {
  return (
    <section className="section-pad bg-cream-100">
      <div className="container-xl">
        <SectionHeading
          label="Testimonials"
          title="Trusted by thousands of families"
          subtitle="Real stories from real patients — this is why we do what we do."
          center
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="mt-12 columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6"
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.name}
              variants={fadeUp}
              className="break-inside-avoid card p-6 hover:shadow-medium transition-shadow duration-300"
            >
              <Quote className="w-8 h-8 text-violet-200 mb-4" fill="currentColor" />

              <p className="text-gray-600 text-sm leading-relaxed mb-5 italic">"{t.quote}"</p>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${t.bg} flex items-center justify-center text-white font-heading font-bold text-xs shadow-soft`}>
                    {t.avatar}
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-gray-900 text-sm">{t.name}</p>
                    <p className="text-gray-400 text-xs">{t.role}</p>
                  </div>
                </div>
                <div className="text-right">
                  <StarRating count={t.rating} />
                  <span className="text-xs text-violet-600 font-heading font-medium mt-0.5 block">{t.service}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
