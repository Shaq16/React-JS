export const login = async (req, res) => {
  const { email } = req.body
  // TODO: replace with real auth logic
  return res.json({ token: 'demo-token', email })
}

export const signup = async (req, res) => {
  const { email } = req.body
  // TODO: replace with real signup logic
  return res.json({ ok: true, email })
}
