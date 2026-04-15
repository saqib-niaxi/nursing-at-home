import { motion } from 'framer-motion'
import { Search, CalendarCheck, HeartHandshake } from 'lucide-react'
import { SectionHeading } from '../components/shared/SectionHeading'
import { staggerContainer, fadeLeft, fadeRight, fadeUp } from '../animations/variants'

const steps = [
  {
    number: '01',
    icon: Search,
    title: 'Find Your Nurse',
    desc: 'Browse our network of verified, licensed nurses. Filter by specialty, availability, location, and patient reviews to find your perfect match.',
    color: 'bg-violet-100 text-violet-600',
    direction: 'left',
  },
  {
    number: '02',
    icon: CalendarCheck,
    title: 'Book Instantly',
    desc: 'Choose your preferred date and time. Fill in a quick form about your care needs and submit your booking request in under 2 minutes.',
    color: 'bg-gold-100 text-gold-400',
    direction: 'up',
  },
  {
    number: '03',
    icon: HeartHandshake,
    title: 'Receive Expert Care',
    desc: 'Your nurse arrives at your home, fully equipped and ready to provide compassionate, professional care tailored to your needs.',
    color: 'bg-emerald-50 text-emerald-600',
    direction: 'right',
  },
]

export function HowItWorks() {
  return (
    <section className="section-pad bg-white">
      <div className="container-xl">
        <SectionHeading
          label="How It Works"
          title="Care in 3 simple steps"
          subtitle="Getting professional nursing care at home has never been easier. From search to care — we've made every step effortless."
          center
        />

        <div className="mt-16 relative">
          {/* Connector line */}
          <div className="hidden lg:block absolute top-14 left-[22%] right-[22%] h-0.5 bg-gray-100">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
              className="h-full bg-violet-gradient origin-left"
            />
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="grid md:grid-cols-3 gap-8"
          >
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                variants={
                  step.direction === 'left'  ? fadeLeft  :
                  step.direction === 'right' ? fadeRight : fadeUp
                }
                className="flex flex-col items-center text-center group"
              >
                {/* Step number + icon */}
                <div className="relative mb-6">
                  <div className={`w-28 h-28 rounded-4xl ${step.color.split(' ')[0]} flex items-center justify-center shadow-soft group-hover:shadow-medium transition-shadow duration-300`}>
                    <step.icon className={`w-10 h-10 ${step.color.split(' ')[1]}`} />
                  </div>
                  <span className="absolute -top-2 -right-2 w-8 h-8 rounded-xl bg-gray-900 text-white text-xs font-heading font-bold flex items-center justify-center shadow-card">
                    {step.number}
                  </span>
                </div>
                <h3 className="font-heading font-bold text-xl text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
