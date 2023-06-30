const { verifyToken } = require('../utils/jwt');

const authenticateToken = (req, res, next) => {
  const { token } = req.headers.authorization;
  if (!token) return res.status(401).json({ message: 'Token not found' });

  const verifiedToken = verifyToken(token);
  if (!verifiedToken) return res.status(401).json({ message: 'Expired or invalid token' });

  next();
};

module.exports = { authenticateToken };
