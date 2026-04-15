import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { lazy, Suspense } from 'react'

const Home    = lazy(() => import('./pages/Home'))
const Services = lazy(() => import('./pages/Services'))
const About   = lazy(() => import('./pages/About'))
const Contact = lazy(() => import('./pages/Contact'))
const NotFound = lazy(() => import('./pages/NotFound'))

function PageLoader() {
  return (
    <div className="min-h-screen bg-cream-50 flex items-center justify-center">
      <div className="w-10 h-10 rounded-full border-2 border-violet-200 border-t-violet-600 animate-spin" />
    </div>
  )
}

export function AppRouter() {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait">
      <Suspense fallback={<PageLoader />}>
        <Routes location={location} key={location.pathname}>
          <Route path="/"         element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about"    element={<About />} />
          <Route path="/contact"  element={<Contact />} />
          <Route path="*"         element={<NotFound />} />
        </Routes>
      </Suspense>
    </AnimatePresence>
  )
}
