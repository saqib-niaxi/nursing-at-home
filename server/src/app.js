import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import rateLimit from 'express-rate-limit'
import contactRoutes from './routes/contact.routes.js'

const app = express()

// Security
app.use(helmet())
app.use(cors({
  origin: process.env.CLIENT_URL || 'http://localhost:5173',
  credentials: true,
}))

// Rate limiting
app.use('/api/contact', rateLimit({
  windowMs: 15 * 60 * 1000, // 15 min
  max: 5,
  message: { success: false, message: 'Too many requests. Please try again later.' },
  standardHeaders: true,
  legacyHeaders: false,
}))

// Body parsing
app.use(express.json({ limit: '10kb' }))

// Routes
app.use('/api/contact', contactRoutes)

app.get('/api/health', (_, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() })
})

// 404
app.use((_, res) => {
  res.status(404).json({ success: false, message: 'Route not found' })
})

// Error handler
app.use((err, _, res, __) => {
  console.error(err)
  res.status(500).json({ success: false, message: 'Internal server error' })
})

export default app
