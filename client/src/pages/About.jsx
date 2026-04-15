import { motion } from 'framer-motion'
import { Heart, Target, Eye, Award, Users, TrendingUp } from 'lucide-react'
import { pageTransition, staggerContainer, fadeUp, fadeLeft, fadeRight } from '../animations/variants'
import { SectionHeading } from '../components/shared/SectionHeading'

const team = [
  { name: 'Dr. Emily Carter', role: 'Chief Medical Officer', initials: 'EC', bg: 'from-violet-400 to-purple-500', bio: '20+ years in clinical nursing and healthcare administration.' },
  { name: 'James Okafor',     role: 'Head of Operations',    initials: 'JO', bg: 'from-emerald-400 to-teal-500',  bio: 'Former hospital operations director, passionate about accessible care.' },
  { name: 'Priya Sharma',     role: 'Lead Nurse Educator',   initials: 'PS', bg: 'from-amber-400 to-orange-500',  bio: 'Nurse practitioner specializing in home care best practices.' },
  { name: 'Liam Chen',        role: 'CTO',                   initials: 'LC', bg: 'from-sky-400 to-blue-500',      bio: 'Building technology that brings care closer to every home.' },
]

const milestones = [
  { year: '2019', title: 'Founded',             desc: 'CareHome started with 10 nurses and a big dream — premium care, at home.' },
  { year: '2020', title: 'First 1,000 Patients', desc: 'Grew rapidly as home care demand surged during the pandemic.' },
  { year: '2021', title: '15 Cities',            desc: 'Expanded to major metro areas with 200+ verified nurses on the platform.' },
  { year: '2022', title: 'Award-Winning',        desc: 'Recognized as "Best Home Healthcare Platform" by HealthTech Review.' },
  { year: '2023', title: '10,000 Patients',      desc: 'Reached a milestone of 10,000 families served across the country.' },
  { year: '2024', title: 'Growing Strong',       desc: '500+ nurses, 25 cities, and continuing to expand access to premium care.' },
]

const values = [
  { icon: Heart,      title: 'Compassion',   desc: 'Every care decision is made with the patient\'s dignity and wellbeing at its center.' },
  { icon: Award,      title: 'Excellence',   desc: 'We set the highest standards for nursing quality and never stop improving.' },
  { icon: Users,      title: 'Accessibility',desc: 'Premium care should be available to every family, not just those with connections.' },
  { icon: TrendingUp, title: 'Innovation',   desc: 'We use technology to remove barriers between patients and the care they need.' },
]

export default function About() {
  return (
    <motion.div {...pageTransition}>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-hero-gradient">
        <div className="container-xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={staggerContainer} initial="hidden" animate="visible">
              <motion.span variants={fadeUp} className="section-label">Our Story</motion.span>
              <motion.h1 variants={fadeUp} className="font-display text-5xl md:text-6xl text-gray-900 mt-3 mb-5">
                Care that feels like family
              </motion.h1>
              <motion.p variants={fadeUp} className="section-subtitle mb-6">
                CareHome was founded on a simple belief: everyone deserves professional nursing care in the comfort of their own home — without the complexity, waiting rooms, or hospital anxiety.
              </motion.p>
              <motion.p variants={fadeUp} className="text-gray-500 leading-relaxed">
                We built a platform that connects families with the most qualified, compassionate nurses — verified, insured, and available 24/7. From post-op recovery to elder care, we're making premium home healthcare the new standard.
              </motion.p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { value: '500+', label: 'Nurses',    bg: 'bg-violet-gradient' },
                { value: '10k+', label: 'Patients',  bg: 'bg-dark-gradient' },
                { value: '4.9★', label: 'Rating',    bg: 'bg-dark-gradient' },
                { value: '25+',  label: 'Cities',    bg: 'bg-violet-gradient' },
              ].map((stat) => (
                <div key={stat.label} className={`${stat.bg} rounded-3xl p-6 text-white text-center`}>
                  <div className="font-display text-4xl font-bold mb-1">{stat.value}</div>
                  <div className="font-heading font-medium text-white/80 text-sm">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-pad bg-white">
        <div className="container-xl">
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { icon: Target, title: 'Our Mission',  color: 'violet', text: 'To make professional nursing care accessible, affordable, and compassionate — delivered with the convenience and comfort of being at home. We eliminate barriers between patients and the quality care they deserve.' },
              { icon: Eye,    title: 'Our Vision',   color: 'emerald', text: 'A world where every person, regardless of circumstance, has access to a trusted healthcare professional whenever they need one — right where they feel safest: at home.' },
            ].map((item) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="card p-8"
              >
                <div className={`w-14 h-14 rounded-3xl ${item.color === 'violet' ? 'bg-violet-100' : 'bg-emerald-50'} flex items-center justify-center mb-5`}>
                  <item.icon className={`w-7 h-7 ${item.color === 'violet' ? 'text-violet-600' : 'text-emerald-600'}`} />
                </div>
                <h3 className="font-heading font-bold text-2xl text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-500 leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-pad bg-cream-50">
        <div className="container-xl">
          <SectionHeading label="Our Journey" title="How we got here" center />
          <div className="mt-12 relative max-w-2xl mx-auto">
            {/* Vertical line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200">
              <motion.div
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                className="w-full h-full bg-violet-gradient origin-top"
              />
            </div>

            <div className="space-y-8">
              {milestones.map((m, i) => (
                <motion.div
                  key={m.year}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="flex gap-6 pl-0"
                >
                  {/* Dot */}
                  <div className="relative shrink-0">
                    <div className="w-16 h-16 rounded-2xl bg-violet-600 flex items-center justify-center text-white font-heading font-bold text-sm shadow-violet-sm">
                      {m.year}
                    </div>
                  </div>
                  <div className="pt-3">
                    <h4 className="font-heading font-bold text-gray-900 mb-1">{m.title}</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">{m.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-pad bg-white">
        <div className="container-xl">
          <SectionHeading label="Our Values" title="What drives us every day" center />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {values.map((v) => (
              <motion.div key={v.title} variants={fadeUp} className="card p-6 text-center hover:shadow-medium transition-shadow">
                <div className="w-12 h-12 rounded-2xl bg-violet-100 flex items-center justify-center mx-auto mb-4">
                  <v.icon className="w-6 h-6 text-violet-600" />
                </div>
                <h3 className="font-heading font-bold text-gray-900 mb-2">{v.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team */}
      <section className="section-pad bg-cream-50">
        <div className="container-xl">
          <SectionHeading label="Our Team" title="The people behind the care" center />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {team.map((member) => (
              <motion.div
                key={member.name}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="card p-6 text-center hover:shadow-medium transition-shadow"
              >
                <div className={`w-16 h-16 rounded-3xl bg-gradient-to-br ${member.bg} flex items-center justify-center text-white font-heading font-bold text-lg shadow-soft mx-auto mb-4`}>
                  {member.initials}
                </div>
                <h3 className="font-heading font-bold text-gray-900">{member.name}</h3>
                <p className="text-violet-600 font-heading font-medium text-xs mb-2">{member.role}</p>
                <p className="text-gray-500 text-xs leading-relaxed">{member.bio}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}
