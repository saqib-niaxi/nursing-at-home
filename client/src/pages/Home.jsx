import { motion } from 'framer-motion'
import { pageTransition } from '../animations/variants'
import { Hero }          from '../sections/Hero'
import { HowItWorks }    from '../sections/HowItWorks'
import { ServicesGrid }  from '../sections/ServicesGrid'
import { FeaturedNurses } from '../sections/FeaturedNurses'
import { Stats }         from '../sections/Stats'
import { Testimonials }  from '../sections/Testimonials'
import { TrustSafety }   from '../sections/TrustSafety'
import { CTABanner }     from '../sections/CTABanner'

export default function Home() {
  return (
    <motion.div {...pageTransition}>
      <Hero />
      <HowItWorks />
      <ServicesGrid />
      <FeaturedNurses />
      <Stats />
      <Testimonials />
      <TrustSafety />
      <CTABanner />
    </motion.div>
  )
}
