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

const findAll = () => User.findAll({ attributes: { exclude: ['password'] } });

const findById = (id) => User.findByPk(id, { attributes: { exclude: ['password'] } });

const deleteUser = async (userId) => User.destroy({ where: { id: userId } });

module.exports = { create, findAll, findById, deleteUser };
