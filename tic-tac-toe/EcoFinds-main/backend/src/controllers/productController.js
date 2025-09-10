import { products } from '../lib/products.js'

export const listProducts = (req, res) => {
  res.json(products)
}

export const getProduct = (req, res) => {
  const p = products.find(x => String(x.id) === String(req.params.id))
  if (!p) return res.status(404).json({ error: 'Not found' })
  res.json(p)
}

export const createListing = (req, res) => {
  const data = req.body || {}
  data.id = (products[products.length - 1]?.id || 0) + 1
  products.push(data)
  res.json({ ok: true, product: data })
}
