import { Link } from 'react-router-dom'
import { Heart, Phone, Mail, MapPin, Share2, Rss, Globe } from 'lucide-react'

const services = ['Post-Op Care', 'Elder Care', 'Pediatric Care', 'Wound Care', 'IV Therapy', 'Palliative Care']
const company  = ['About Us', 'Our Team', 'Careers', 'Blog', 'Press']

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="container-xl py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl bg-violet-600 flex items-center justify-center">
                <Heart className="w-5 h-5 text-white" fill="currentColor" />
              </div>
              <span className="font-heading font-bold text-white text-lg">
                Care<span className="text-violet-400">Home</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed mb-6">
              Premium nursing care delivered to your doorstep. Professional, compassionate, available 24/7.
            </p>
            <div className="flex gap-3">
              {[Share2, Rss, Globe].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-xl bg-white/5 hover:bg-violet-600 flex items-center justify-center transition-colors duration-200"
                >
                  <Icon className="w-4 h-4 text-gray-400 hover:text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s}>
                  <Link to="/services" className="text-sm hover:text-white transition-colors duration-200">
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-heading font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2.5">
              {company.map((c) => (
                <li key={c}>
                  <Link to="/about" className="text-sm hover:text-white transition-colors duration-200">
                    {c}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm">
                <Phone className="w-4 h-4 mt-0.5 text-violet-400 shrink-0" />
                <span>+92 320 2067666</span>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <Mail className="w-4 h-4 mt-0.5 text-violet-400 shrink-0" />
                <span>hello@carehome.com</span>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 text-violet-400 shrink-0" />
                <span>123 Healthcare Blvd,<br />New York, NY 10001</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
          <p>© {new Date().getFullYear()} CareHome. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
