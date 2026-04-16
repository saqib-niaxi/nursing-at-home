import { Link } from 'react-router-dom'
import { Heart, Phone, Mail, MapPin, Share2, Rss, Globe, ArrowRight } from 'lucide-react'

const services = ['Post-Op Care', 'Elder Care', 'Pediatric Care', 'Wound Care', 'IV Therapy', 'Palliative Care']
const company  = ['About Us', 'Our Team', 'Careers', 'Blog', 'Press']

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100">

      {/* Top CTA strip */}
      <div className="border-b border-gray-100 bg-cream-50">
        <div className="container-xl py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-5 bg-white rounded-3xl px-8 py-6 shadow-soft border border-violet-100">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-violet-100 flex items-center justify-center shrink-0">
                <Heart className="w-6 h-6 text-violet-600" fill="currentColor" />
              </div>
              <div>
                <p className="font-heading font-bold text-gray-900 text-lg">Need care today?</p>
                <p className="text-gray-400 text-sm mt-0.5">A verified nurse can be at your door in 30 minutes.</p>
              </div>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-violet-600 hover:bg-violet-700 text-white font-heading font-semibold px-6 py-3 rounded-xl shadow-violet-sm hover:shadow-violet-glow transition-all duration-200 active:scale-95 shrink-0"
            >
              Book Now <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="container-xl py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2.5 mb-4 group">
              <div className="w-10 h-10 rounded-2xl bg-violet-600 flex items-center justify-center shadow-violet-sm group-hover:shadow-violet-glow transition-shadow">
                <Heart className="w-5 h-5 text-white" fill="currentColor" />
              </div>
              <span className="font-heading font-bold text-gray-900 text-xl">
                Home<span className="text-violet-600">Care</span>
              </span>
            </Link>

            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Premium nursing care delivered to your doorstep. Professional, compassionate, available 24/7.
            </p>

            <div className="flex gap-2.5">
              {[Share2, Rss, Globe].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-xl bg-gray-100 hover:bg-violet-600 flex items-center justify-center transition-all duration-200 group"
                >
                  <Icon className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-bold text-gray-900 text-sm uppercase tracking-wider mb-5">Services</h4>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s}>
                  <Link
                    to="/services"
                    className="text-sm text-gray-500 hover:text-violet-600 transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-violet-300 group-hover:bg-violet-600 transition-colors shrink-0" />
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-heading font-bold text-gray-900 text-sm uppercase tracking-wider mb-5">Company</h4>
            <ul className="space-y-3">
              {company.map((c) => (
                <li key={c}>
                  <Link
                    to="/about"
                    className="text-sm text-gray-500 hover:text-violet-600 transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-violet-300 group-hover:bg-violet-600 transition-colors shrink-0" />
                    {c}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold text-gray-900 text-sm uppercase tracking-wider mb-5">Contact</h4>
            <ul className="space-y-4">
              {[
                { Icon: Phone, text: '+92 320 2067666',         href: 'tel:+923202067666' },
                { Icon: Mail,  text: 'hello@homecare.com',        href: 'mailto:hello@homecare.com' },
                { Icon: MapPin,text: '123 Healthcare Blvd, NY',  href: '#' },
              ].map(({ Icon, text, href }) => (
                <li key={text}>
                  <a href={href} className="flex items-center gap-3 group">
                    <div className="w-8 h-8 rounded-xl bg-violet-50 group-hover:bg-violet-100 flex items-center justify-center shrink-0 transition-colors">
                      <Icon className="w-4 h-4 text-violet-600" />
                    </div>
                    <span className="text-sm text-gray-500 group-hover:text-gray-800 transition-colors">{text}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-100">
        <div className="container-xl py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-gray-400">
          <div className="flex items-center gap-1.5">
            <Heart className="w-3.5 h-3.5 text-violet-400" fill="currentColor" />
            <p>© {new Date().getFullYear()} HomeCare. All rights reserved.</p>
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-violet-600 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-violet-600 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
