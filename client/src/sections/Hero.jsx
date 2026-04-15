import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Shield, Star, Users } from 'lucide-react'
import { staggerContainer, fadeUp, fadeRight, scaleIn } from '../animations/variants'
import { useCountUp } from '../hooks/useCountUp'
import { Button } from '../components/ui/Button'

const heroWords = ['Professional', 'Nursing', 'Care,', 'At', 'Your', 'Home.']

const trustBadges = [
  { icon: Users,  value: 500,  suffix: '+', label: 'Verified Nurses' },
  { icon: Star,   value: 4.9,  suffix: '',  label: 'Average Rating',  float: true },
  { icon: Shield, value: 10,   suffix: 'k+',label: 'Patients Served' },
]

function TrustBadge({ item }) {
  const { count, ref } = useCountUp(item.float ? item.value * 10 : item.value, 1800)
  const display = item.float ? (count / 10).toFixed(1) : count
  return (
    <div ref={ref} className="flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-2xl px-4 py-3 shadow-soft border border-white/60">
      <div className="w-8 h-8 rounded-xl bg-violet-100 flex items-center justify-center shrink-0">
        <item.icon className="w-4 h-4 text-violet-600" />
      </div>
      <div>
        <p className="font-heading font-bold text-gray-900 text-sm leading-none">
          {display}{item.suffix}
        </p>
        <p className="text-gray-500 text-xs mt-0.5">{item.label}</p>
      </div>
    </div>
  )
}

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-hero-gradient overflow-hidden pt-20">
      {/* Decorative blobs */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-violet-100 rounded-full opacity-60 animate-blob blur-3xl" />
      <div className="absolute bottom-20 left-10 w-64 h-64 bg-gold-100 rounded-full opacity-50 animate-blob blur-3xl" style={{ animationDelay: '4s' }} />
      <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-emerald-50 rounded-full opacity-40 animate-blob blur-2xl" style={{ animationDelay: '2s' }} />

      <div className="container-xl relative z-10 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left — text */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="max-w-xl"
          >
            {/* Label pill */}
            <motion.div variants={fadeUp} className="mb-6">
              <span className="badge-violet uppercase tracking-widest text-[11px]">
                ✦ Trusted Home Healthcare
              </span>
            </motion.div>

            {/* Headline — word by word */}
            <h1 className="font-display text-5xl md:text-6xl lg:text-6xl text-gray-900 leading-tight mb-6">
              {heroWords.map((word, i) => (
                <motion.span
                  key={i}
                  variants={fadeUp}
                  custom={i}
                  transition={{ delay: i * 0.08 }}
                  className="inline-block mr-3"
                  style={i >= 4 ? { color: '#7C3AED' } : {}}
                >
                  {word}
                </motion.span>
              ))}
            </h1>

            <motion.p variants={fadeUp} className="section-subtitle mb-8">
              Connect with verified, licensed nurses who deliver compassionate care — right in the comfort of your home. Available 24/7, insured, and background-checked.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4 mb-10">
              <Link to="/contact">
                <Button variant="primary" className="gap-2 text-base px-7 py-3.5">
                  Book a Nurse <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="outline" className="text-base px-7 py-3.5">
                  View Services
                </Button>
              </Link>
            </motion.div>

            {/* Trust badges */}
            <motion.div variants={staggerContainer} className="flex flex-wrap gap-3">
              {trustBadges.map((b) => (
                <motion.div key={b.label} variants={fadeUp}>
                  <TrustBadge item={b} />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — illustration */}
          <motion.div
            variants={scaleIn}
            initial="hidden"
            animate="visible"
            className="hidden lg:flex justify-center items-center"
          >
            <div className="relative">
              {/* Main card */}
              <div className="animate-float w-72 h-72 bg-violet-gradient rounded-5xl shadow-strong flex items-center justify-center">
                <svg viewBox="0 0 200 200" className="w-48 h-48" fill="none">
                  {/* Simple nurse illustration SVG */}
                  <circle cx="100" cy="60" r="35" fill="white" opacity="0.9" />
                  <path d="M55 160 Q55 110 100 110 Q145 110 145 160" fill="white" opacity="0.9" />
                  {/* Cross on uniform */}
                  <rect x="92" y="118" width="16" height="32" rx="3" fill="#7C3AED" opacity="0.6" />
                  <rect x="84" y="126" width="32" height="16" rx="3" fill="#7C3AED" opacity="0.6" />
                  {/* Cap */}
                  <path d="M75 48 Q100 28 125 48" stroke="white" strokeWidth="4" fill="none" opacity="0.8" />
                  <rect x="88" y="44" width="24" height="6" rx="2" fill="white" opacity="0.8" />
                </svg>
              </div>

              {/* Floating info cards */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-4 -right-8 bg-white rounded-2xl shadow-medium px-4 py-3 flex items-center gap-2"
              >
                <div className="w-8 h-8 rounded-xl bg-emerald-50 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-emerald-500" />
                </div>
                <div>
                  <p className="text-xs font-heading font-semibold text-gray-900">Available Now</p>
                  <p className="text-xs text-gray-500">12 nurses nearby</p>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -bottom-4 -left-8 bg-white rounded-2xl shadow-medium px-4 py-3 flex items-center gap-2"
              >
                <div className="flex -space-x-2">
                  {['#7C3AED', '#10B981', '#F59E0B'].map((c, i) => (
                    <div key={i} className="w-7 h-7 rounded-full border-2 border-white" style={{ background: c }} />
                  ))}
                </div>
                <div>
                  <p className="text-xs font-heading font-semibold text-gray-900">Top Rated</p>
                  <div className="flex text-yellow-400 text-xs">★★★★★</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" className="w-full">
          <path d="M0 60 Q360 0 720 30 Q1080 60 1440 20 L1440 60 Z" fill="white" />
        </svg>
      </div>
    </section>
  )
}
