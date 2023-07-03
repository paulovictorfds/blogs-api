const { Category } = require('../models');

const create = (name) => Category.create({ name });

const findAll = () => Category.findAll({ attributes: { exclude: ['password'] } });

module.exports = { create, findAll };
