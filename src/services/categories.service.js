const { Categories } = require('../models');

const create = async (name) => {
  if (!name) return { type: 400, message: '"name" is required' };

  const category = await Categories.create(name);

  return { type: null, message: category };
};

module.exports = { create };
