const { Category } = require('../models');

const create = async (name) => Category.create({ name });

const findAll = async () => Category.findAll({ attributes: { exclude: ['password'] } });

module.exports = { create, findAll };
