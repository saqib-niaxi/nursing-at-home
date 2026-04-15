import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Stethoscope, Heart, Baby, Bandage, Syringe, Leaf, ChevronDown, Check, ArrowRight } from 'lucide-react'
import { pageTransition, staggerContainer, fadeUp } from '../animations/variants'
import { SectionHeading } from '../components/shared/SectionHeading'
import { Button } from '../components/ui/Button'

const categories = ['All', 'In-Home', 'Specialized', 'Emergency']

const services = [
  { icon: Stethoscope, title: 'Post-Op Care',    category: 'In-Home',     desc: 'Professional recovery support after any surgical procedure, including wound care, medication management, vital monitoring, and daily progress assessments.',     price: '$45', highlights: ['Wound dressing', 'Medication reminders', 'Vital monitoring', 'Daily assessments'] },
  { icon: Heart,       title: 'Elder Care',       category: 'In-Home',     desc: 'Compassionate daily care for seniors — personal hygiene, mobility assistance, companionship, and health supervision to maintain dignity and independence.',   price: '$38', highlights: ['Personal hygiene', 'Mobility assistance', 'Companionship', 'Meal support'] },
  { icon: Baby,        title: 'Pediatric Care',   category: 'Specialized', desc: 'Specialist nursing for children with acute or chronic conditions, delivered with patience, expertise, and a gentle approach that puts young patients at ease.', price: '$55', highlights: ['Newborn care', 'Chronic illness mgmt', 'Post-hospital discharge', 'Parent education'] },
  { icon: Bandage,     title: 'Wound Care',       category: 'Specialized', desc: 'Expert assessment, cleaning, and dressing of wounds — from surgical incisions to diabetic ulcers — with evidence-based protocols to prevent infection.',     price: '$42', highlights: ['Wound assessment', 'Sterile dressing', 'Infection prevention', 'Healing monitoring'] },
  { icon: Syringe,     title: 'IV Therapy',       category: 'Specialized', desc: 'Safe intravenous medication, hydration, and nutrition therapy administered at home by certified professionals with full clinical-grade equipment.',           price: '$65', highlights: ['IV antibiotics', 'Hydration therapy', 'Nutritional support', 'Blood draws'] },
  { icon: Leaf,        title: 'Palliative Care',  category: 'In-Home',     desc: 'Sensitive end-of-life and chronic illness care focused on comfort, pain management, emotional support, and maintaining quality of life.',                      price: '$50', highlights: ['Pain management', 'Comfort measures', 'Family counseling', 'Spiritual support'] },
  { icon: Stethoscope, title: 'Diabetes Care',    category: 'Specialized', desc: 'Ongoing management of diabetes including glucose monitoring, insulin administration, dietary guidance, and complication prevention.',                          price: '$40', highlights: ['Glucose monitoring', 'Insulin management', 'Diet counseling', 'Foot care'] },
  { icon: Heart,       title: 'Cardiac Care',     category: 'Emergency',   desc: 'Post-cardiac event monitoring and rehabilitation support, medication compliance, and early detection of complications during recovery at home.',               price: '$55', highlights: ['Cardiac monitoring', 'Medication review', 'Exercise guidance', 'Risk assessment'] },
]

const pricing = [
  { plan: 'Basic', price: '38', period: '/hr', features: ['1 nurse per visit', 'Standard care services', 'Email support', 'Basic health monitoring', 'Booking within 24hrs'], highlight: false },
  { plan: 'Standard', price: '52', period: '/hr', features: ['1 specialist nurse', 'All Basic features', 'Phone support 8am–8pm', 'Detailed care reports', 'Priority booking', 'Medication management'], highlight: true },
  { plan: 'Premium', price: '75', period: '/hr', features: ['Senior specialist nurse', 'All Standard features', '24/7 phone support', 'Weekly care reviews', 'Same-day booking', 'Family progress updates', 'Care plan customization'], highlight: false },
]

const faqs = [
  { q: 'How quickly can a nurse arrive?', a: 'In most areas we can have a nurse at your home within 30–60 minutes for urgent needs. Standard bookings can be scheduled same-day or in advance.' },
  { q: 'Are your nurses licensed and insured?', a: 'Yes. Every nurse on our platform holds a current state nursing license, has passed background checks, and carries full professional liability insurance.' },
  { q: 'What if I need to cancel or reschedule?', a: 'You can cancel or reschedule up to 2 hours before your appointment at no charge. We understand care needs can change.' },
  { q: 'Does insurance cover home nursing?', a: 'Many insurance plans cover home nursing care. We provide detailed invoices and care notes to support your insurance claims.' },
  { q: 'How do I know which service I need?', a: 'Not sure? Call us or use our contact form and our care coordinator will assess your needs and recommend the right service.' },
]

function FAQItem({ faq }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border border-gray-200 rounded-2xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
      >
        <span className="font-heading font-semibold text-gray-900 text-sm">{faq.q}</span>
        <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }}>
          <ChevronDown className="w-4 h-4 text-gray-500 shrink-0" />
        </motion.div>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{   height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <p className="px-5 pb-5 text-gray-500 text-sm leading-relaxed">{faq.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function Services() {
  const [active, setActive] = useState('All')
  const filtered = active === 'All' ? services : services.filter((s) => s.category === active)

  return (
    <motion.div {...pageTransition}>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-hero-gradient">
        <div className="container-xl text-center">
          <motion.span variants={fadeUp} initial="hidden" animate="visible" className="section-label">
            What We Offer
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-5xl md:text-6xl text-gray-900 mt-3 mb-4"
          >
            Expert care for every need
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="section-subtitle mx-auto"
          >
            From post-op recovery to elder care — our specialist nurses cover the full spectrum of home healthcare.
          </motion.p>
        </div>
      </section>

      {/* Filter + Cards */}
      <section className="section-pad bg-white">
        <div className="container-xl">
          {/* Filter bar */}
          <div className="flex flex-wrap gap-2 mb-10 relative">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`relative px-5 py-2 rounded-xl font-heading font-medium text-sm transition-all duration-200 ${
                  active === cat
                    ? 'bg-gray-900 text-white shadow-card'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Cards */}
          <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            <AnimatePresence mode="popLayout">
              {filtered.map((svc) => (
                <motion.div
                  key={svc.title}
                  layout
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{   opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.25 }}
                  whileHover={{ y: -6 }}
                  className="card p-5 hover:shadow-medium border border-gray-100 hover:border-violet-100 transition-colors"
                >
                  <div className="w-10 h-10 rounded-2xl bg-violet-100 flex items-center justify-center mb-3">
                    <svc.icon className="w-5 h-5 text-violet-600" />
                  </div>
                  <span className="badge bg-gray-100 text-gray-500 text-[10px] mb-2">{svc.category}</span>
                  <h3 className="font-heading font-bold text-gray-900 mb-2">{svc.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed mb-3 line-clamp-3">{svc.desc}</p>
                  <ul className="space-y-1.5 mb-4">
                    {svc.highlights.map((h) => (
                      <li key={h} className="flex items-center gap-2 text-xs text-gray-600">
                        <Check className="w-3 h-3 text-violet-500 shrink-0" /> {h}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                    <span className="font-heading font-bold text-gray-900">From {svc.price}/hr</span>
                    <Link to={`/contact?service=${encodeURIComponent(svc.title)}`}>
                      <Button variant="violet" className="text-xs px-3 py-1.5">Book</Button>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section-pad bg-cream-50">
        <div className="container-xl">
          <SectionHeading label="Pricing" title="Simple, transparent pricing" subtitle="No hidden fees. No surprises. Pay only for the care you receive." center />
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {pricing.map((p) => (
              <motion.div
                key={p.plan}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={`card p-7 relative ${p.highlight ? 'ring-2 ring-violet-600 shadow-violet-glow' : ''}`}
              >
                {p.highlight && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 badge-violet text-[10px] px-4">Most Popular</span>
                )}
                <h3 className="font-heading font-bold text-gray-900 text-xl mb-1">{p.plan}</h3>
                <div className="flex items-end gap-1 mb-6">
                  <span className="font-display text-5xl font-bold text-gray-900">${p.price}</span>
                  <span className="text-gray-400 mb-2">{p.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
                      <div className="w-4 h-4 rounded-full bg-violet-100 flex items-center justify-center shrink-0">
                        <Check className="w-2.5 h-2.5 text-violet-600" />
                      </div>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link to="/contact">
                  <Button variant={p.highlight ? 'violet' : 'outline'} className="w-full justify-center">
                    Get Started <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-pad bg-white">
        <div className="container-xl max-w-3xl">
          <SectionHeading label="FAQ" title="Frequently asked questions" center />
          <div className="mt-10 space-y-3">
            {faqs.map((faq) => <FAQItem key={faq.q} faq={faq} />)}
          </div>
        </div>
      </section>
    </motion.div>
  )
}
