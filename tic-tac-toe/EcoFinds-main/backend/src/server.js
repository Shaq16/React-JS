import express from 'express'
import cors from 'cors'
import 'dotenv/config'

import authRoutes from './routes/auth.js'
import productRoutes from './routes/products.js'
import aiRoutes from './routes/ai.js'

const app = express()
const PORT = process.env.PORT || 4000

app.use(cors())
app.use(express.json()) // replaces bodyParser.json()

// Health check
app.get('/api/health', (req, res) => res.json({ ok: true }))

// Routes
app.use('/api/auth', authRoutes)
app.use('/api/products', productRoutes)
app.use('/api/ai', aiRoutes)

app.listen(PORT, () => console.log(`✅ Backend running on http://localhost:${PORT}`))
