const { verifyToken } = require('../utils/jwt');

module.exports = ({ headers }, res, next) => {
  const { token } = headers.authorization;
  console.log(token);
  if (!token) return res.status(401).json({ message: 'Token not found' });

  try {
    verifyToken(token);
  } catch (err) {
    res.status(401).json({ message: 'Expired or invalid token' });
  }

  next();
};
