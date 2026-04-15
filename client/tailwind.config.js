/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FAFAF8',
          100: '#F5F3EF',
          200: '#EDE8E0',
        },
        violet: {
          50:  '#F5F3FF',
          100: '#EDE9FE',
          200: '#DDD6FE',
          400: '#A78BFA',
          500: '#8B5CF6',
          600: '#7C3AED',
          700: '#6D28D9',
        },
        gold: {
          100: '#FEF3C7',
          300: '#FCD34D',
          400: '#D4A853',
          500: '#B8860B',
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        heading: ['"Plus Jakarta Sans"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      boxShadow: {
        soft:             '0 2px 15px -3px rgba(0,0,0,0.06), 0 10px 20px -2px rgba(0,0,0,0.04)',
        card:             '0 4px 24px rgba(0,0,0,0.06)',
        medium:           '0 8px 32px -4px rgba(0,0,0,0.1)',
        strong:           '0 20px 60px -10px rgba(0,0,0,0.18)',
        'violet-glow':    '0 0 40px rgba(124,58,237,0.15)',
        'violet-sm':      '0 0 20px rgba(124,58,237,0.12)',
        inner:            'inset 0 2px 8px rgba(0,0,0,0.05)',
      },
      backgroundImage: {
        'hero-gradient':    'linear-gradient(145deg, #FAFAF8 0%, #F3F0FF 50%, #FEF9EE 100%)',
        'section-gradient': 'linear-gradient(180deg, #FFFFFF 0%, #F5F3EF 100%)',
        'dark-gradient':    'linear-gradient(135deg, #18181B 0%, #27272A 100%)',
        'violet-gradient':  'linear-gradient(135deg, #7C3AED 0%, #A78BFA 100%)',
        'shimmer':          'linear-gradient(90deg, #f5f3ef 25%, #ede8e0 50%, #f5f3ef 75%)',
      },
      animation: {
        'float':       'float 6s ease-in-out infinite',
        'float-slow':  'float 9s ease-in-out infinite',
        'pulse-ring':  'pulseRing 2s ease-out infinite',
        'shimmer':     'shimmer 2s linear infinite',
        'spin-slow':   'spin 8s linear infinite',
        'blob':        'blob 10s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-18px)' },
        },
        pulseRing: {
          '0%':   { transform: 'scale(1)',   opacity: '0.8' },
          '100%': { transform: 'scale(1.6)', opacity: '0' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        blob: {
          '0%, 100%': { borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' },
          '50%':      { borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%' },
        },
      },
      backgroundSize: {
        '200%': '200% 100%',
        '300%': '300% 300%',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
