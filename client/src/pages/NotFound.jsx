import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { pageTransition } from '../animations/variants'
import { Button } from '../components/ui/Button'

export default function NotFound() {
  return (
    <motion.div {...pageTransition} className="min-h-screen bg-hero-gradient flex items-center justify-center">
      <div className="text-center px-4">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          className="font-display text-9xl font-bold text-violet-100 mb-4"
        >
          404
        </motion.div>
        <h1 className="font-display text-3xl text-gray-900 mb-3">Page not found</h1>
        <p className="text-gray-500 mb-8">The page you're looking for doesn't exist or has been moved.</p>
        <Link to="/">
          <Button variant="violet" className="gap-2">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Button>
        </Link>
      </div>
    </motion.div>
  )
}
