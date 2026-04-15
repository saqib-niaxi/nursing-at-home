import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Phone } from 'lucide-react'
import { fadeUp, staggerContainer } from '../animations/variants'

export function CTABanner() {
  return (
    <section className="section-pad bg-hero-gradient">
      <div className="container-xl">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative rounded-5xl bg-violet-gradient p-10 md:p-16 text-center overflow-hidden"
        >
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full translate-x-1/3 -translate-y-1/3" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full -translate-x-1/3 translate-y-1/3" />

          <div className="relative z-10">
            <motion.span variants={fadeUp} className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-heading font-semibold bg-white/20 text-white/90 uppercase tracking-widest mb-6">
              Get Started Today
            </motion.span>

            <motion.h2 variants={fadeUp} className="font-display text-4xl md:text-5xl text-white font-bold mb-4 text-balance">
              Ready to experience premium care at home?
            </motion.h2>

            <motion.p variants={fadeUp} className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
              Book your first visit today. A verified nurse can be at your door in as little as 30 minutes.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-4">
              {/* Primary CTA with pulse */}
              <div className="relative">
                <div className="absolute inset-0 rounded-xl bg-white opacity-20 animate-pulse-ring" />
                <Link
                  to="/contact"
                  className="relative inline-flex items-center gap-2 bg-white text-violet-700 font-heading font-bold px-8 py-4 rounded-xl shadow-strong hover:shadow-medium transition-all duration-200 active:scale-[0.97] text-base"
                >
                  Book Your First Visit <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <a
                href="tel:+923202067666"
                className="inline-flex items-center gap-2 text-white/90 hover:text-white font-heading font-semibold px-6 py-4 rounded-xl border border-white/30 hover:border-white/50 transition-all duration-200 text-base"
              >
                <Phone className="w-4 h-4" /> Call Us Now
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
