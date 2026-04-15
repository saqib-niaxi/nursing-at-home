import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Heart } from 'lucide-react'
import { Button } from '../ui/Button'

const links = [
  { label: 'Home',     to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'About',    to: '/about' },
  { label: 'Contact',  to: '/contact' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0,   opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'navbar-glass' : 'bg-transparent'
      }`}
    >
      <div className="container-xl">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-xl bg-violet-600 flex items-center justify-center shadow-violet-sm group-hover:shadow-violet-glow transition-shadow">
              <Heart className="w-5 h-5 text-white" fill="currentColor" />
            </div>
            <span className="font-heading font-bold text-gray-900 text-lg">
              Care<span className="text-violet-600">Home</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === '/'}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-xl font-heading font-medium text-sm transition-all duration-200 ${
                    isActive
                      ? 'bg-violet-100 text-violet-700'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link to="/contact">
              <Button variant="violet" className="text-sm px-5 py-2.5">
                Book a Nurse
              </Button>
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 rounded-xl text-gray-700 hover:bg-gray-100 transition-colors"
            onClick={() => setOpen(!open)}
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{   opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden navbar-glass border-t border-black/[0.06]"
          >
            <div className="container-xl py-4 flex flex-col gap-1">
              {links.map((l) => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  end={l.to === '/'}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `px-4 py-3 rounded-xl font-heading font-medium transition-all duration-200 ${
                      isActive
                        ? 'bg-violet-100 text-violet-700'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`
                  }
                >
                  {l.label}
                </NavLink>
              ))}
              <Link to="/contact" onClick={() => setOpen(false)} className="mt-2">
                <Button variant="violet" className="w-full justify-center text-sm">
                  Book a Nurse
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
