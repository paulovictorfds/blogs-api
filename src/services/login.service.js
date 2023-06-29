const { User } = require('../models');
const { createToken } = require('../utils/jwt');

module.exports = async (email, password) => {
  const user = await User.findOne({ where: { email } });

  if (!user || user.password !== password) {
    return { type: 400, message: 'Invalid fields' };
  }

  return { type: null, message: createToken({ id: user.id }) };
};
