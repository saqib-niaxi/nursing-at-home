import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, A11y } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Star, MapPin, Clock } from 'lucide-react'
import { Link } from 'react-router-dom'
import { SectionHeading } from '../components/shared/SectionHeading'
import { Button } from '../components/ui/Button'

const nurses = [
  { name: 'Sarah Mitchell, RN',   specialty: 'Post-Op & Wound Care',   rating: 4.9, reviews: 124, location: 'New York, NY',   rate: '$45/hr', exp: '8 yrs', available: true,  avatar: 'SM', bg: 'from-violet-400 to-purple-500' },
  { name: 'James Okafor, RN',     specialty: 'Elder & Palliative Care', rating: 4.8, reviews: 98,  location: 'Brooklyn, NY',   rate: '$42/hr', exp: '6 yrs', available: true,  avatar: 'JO', bg: 'from-emerald-400 to-teal-500' },
  { name: 'Priya Sharma, NP',     specialty: 'Pediatric Care',          rating: 5.0, reviews: 87,  location: 'Queens, NY',     rate: '$55/hr', exp: '10 yrs', available: false, avatar: 'PS', bg: 'from-amber-400 to-orange-500' },
  { name: 'Maria Gonzalez, RN',   specialty: 'IV Therapy & Post-Op',    rating: 4.7, reviews: 112, location: 'Manhattan, NY',  rate: '$48/hr', exp: '7 yrs', available: true,  avatar: 'MG', bg: 'from-rose-400 to-pink-500' },
  { name: 'David Chen, RN',       specialty: 'Wound Care & Diabetes',   rating: 4.9, reviews: 143, location: 'Bronx, NY',     rate: '$44/hr', exp: '9 yrs', available: true,  avatar: 'DC', bg: 'from-sky-400 to-blue-500' },
]

function NurseCard({ nurse }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="card p-5 h-full select-none"
    >
      {/* Avatar */}
      <div className="flex items-start justify-between mb-4">
        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${nurse.bg} flex items-center justify-center text-white font-heading font-bold text-lg shadow-soft`}>
          {nurse.avatar}
        </div>
        <span className={`badge text-[10px] ${nurse.available ? 'bg-emerald-50 text-emerald-700' : 'bg-gray-100 text-gray-500'}`}>
          <span className={`w-1.5 h-1.5 rounded-full ${nurse.available ? 'bg-emerald-500' : 'bg-gray-400'}`} />
          {nurse.available ? 'Available' : 'Busy'}
        </span>
      </div>

      <h3 className="font-heading font-bold text-gray-900 text-base mb-0.5">{nurse.name}</h3>
      <p className="text-violet-600 font-heading font-medium text-xs mb-3">{nurse.specialty}</p>

      {/* Rating */}
      <div className="flex items-center gap-1 mb-3">
        <Star className="w-3.5 h-3.5 text-gold-400 fill-gold-400" />
        <span className="font-heading font-semibold text-gray-900 text-sm">{nurse.rating}</span>
        <span className="text-gray-400 text-xs">({nurse.reviews} reviews)</span>
      </div>

      {/* Meta */}
      <div className="flex items-center gap-3 mb-4 text-xs text-gray-500">
        <div className="flex items-center gap-1">
          <MapPin className="w-3 h-3" />
          <span>{nurse.location}</span>
        </div>
        <div className="flex items-center gap-1">
          <Clock className="w-3 h-3" />
          <span>{nurse.exp}</span>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <span className="font-heading font-bold text-gray-900">{nurse.rate}</span>
        <Link to={`/contact?service=${encodeURIComponent(nurse.specialty)}`}>
          <Button variant="violet" className="text-xs px-4 py-2">
            Book Now
          </Button>
        </Link>
      </div>
    </motion.div>
  )
}

export function FeaturedNurses() {
  return (
    <section className="section-pad bg-white overflow-hidden">
      <div className="container-xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeading
            label="Our Nurses"
            title="Meet our top-rated caregivers"
            subtitle="Every nurse is licensed, background-checked, and rated by real patients."
          />
          <Link to="/contact" className="shrink-0">
            <Button variant="outline">View All Nurses</Button>
          </Link>
        </div>

        <Swiper
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          grabCursor
          breakpoints={{
            640:  { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          className="pb-12"
        >
          {nurses.map((n) => (
            <SwiperSlide key={n.name}>
              <NurseCard nurse={n} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
