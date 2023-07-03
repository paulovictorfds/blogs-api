const { verifyToken } = require('../utils/jwt');

module.exports = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) return res.status(401).json({ message: 'Token not found' });

  try {
    req.user = verifyToken(token);
    next();
  } catch (err) {
    res.status(401).json({ message: 'Expired or invalid token' });
  }
};
