// Placeholder AI controller — swap with real Genkit/Gemini/OpenAI logic
export const generateDetails = async (req, res) => {
  const { title, category } = req.body || {}

  const description = `Eco-friendly ${category || 'product'}: ${title}. Durable, sustainable materials, low carbon footprint.`

  res.json({
    title,
    description,
    bullets: ['Sustainable', 'Durable', 'Recyclable']
  })
}
