const { loginService } = require('../services');

module.exports = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }

  const { type, message } = await loginService(email, password);
  console.log(type, message);

  if (type) return res.status(type).json({ message });

  res.status(200).json({ token: message });
};
