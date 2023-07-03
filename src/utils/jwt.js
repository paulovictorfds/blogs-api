const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;

const jwtConfig = { expiresIn: '5d', algorithm: 'HS256' };

const createToken = (payload) => jwt.sign(payload, JWT_SECRET, jwtConfig);

const verifyToken = (token) => jwt.verify(token, JWT_SECRET);

module.exports = { createToken, verifyToken };
