const jwt = require('jsonwebtoken');

const jwtPassword = process.env.JWT_SECRET;

const jwtConfig = { expiresIn: '5d' };

const createToken = (payload) => jwt.sign(payload, jwtPassword, jwtConfig);
const verifyToken = (token) => jwt.verify(token, jwtPassword);

module.exports = { createToken, verifyToken };
