import { Router } from 'express'
import { generateDetails } from '../controllers/aiController.js'
const router = Router()
router.post('/generate', generateDetails)
export default router
