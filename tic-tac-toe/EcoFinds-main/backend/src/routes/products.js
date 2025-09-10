import { Router } from 'express'
import { getProduct, listProducts, createListing } from '../controllers/productController.js'
const router = Router()
router.get('/', listProducts)
router.get('/', getProduct)
router.post('/sell', createListing)
export default router
