import { motion } from 'framer-motion'
import { clsx } from 'clsx'

const variants = {
  primary: 'btn-primary',
  outline: 'btn-outline',
  violet:  'btn-violet',
  ghost:   'inline-flex items-center gap-2 text-gray-700 hover:text-gray-900 font-heading font-semibold px-4 py-2 rounded-xl hover:bg-gray-100 transition-all duration-200 active:scale-[0.97]',
}

export function Button({ variant = 'primary', className, children, loading, ...props }) {
  return (
    <motion.button
      whileTap={{ scale: 0.97 }}
      className={clsx(variants[variant], className)}
      disabled={loading}
      {...props}
    >
      {loading && (
        <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
        </svg>
      )}
      {children}
    </motion.button>
  )
}
