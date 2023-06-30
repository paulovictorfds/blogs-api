const { User } = require('../models');
const { createToken } = require('../utils/jwt');
const { validateUser } = require('./validations/validateInputValues');

const create = async (displayName, email, password, image) => {
  const error = validateUser({ displayName, email, password, image });
  if (error.type) return error;

  try {
    const user = await User.create({ displayName, email, password, image });
    return { type: null, message: createToken({ id: user.id }) };
  } catch (e) {
    return { type: 409, message: 'User already registered' };
  }
};

const findAll = async () => {
  const users = await User.findAll({ attributes: { exclude: ['password'] } });

  return { type: null, message: users };
};

const findById = async (id) => {
  const user = await User.findByPk(id, { attributes: { exclude: ['password'] } });

  if (!user) return { type: 404, message: 'User does not exist' };

  return { type: null, message: user };
};

module.exports = { create, findAll, findById };
