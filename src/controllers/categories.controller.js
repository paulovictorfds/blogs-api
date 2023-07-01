const { categoriesService } = require('../services');

const create = async (req, res) => {
  const { name } = req.body;

  if (!name) return res.status(400).json({ message: '"name" is required' });

  const category = await categoriesService.create(name);

  res.status(201).json(category);
};

module.exports = { create };