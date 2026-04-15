import 'dotenv/config'
import app from './src/app.js'

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`\n🚀 CareHome API running on http://localhost:${PORT}`)
  console.log(`   Health: http://localhost:${PORT}/api/health\n`)
})
