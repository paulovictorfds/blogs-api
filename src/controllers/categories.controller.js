const { categoriesService } = require('../services');

const create = async (req, res) => {
  const { name } = req.body;

  if (!name) return res.status(400).json({ message: '"name" is required' });

  const category = await categoriesService.create(name);

  res.status(201).json(category);
};

const findAll = async (_req, res) => {
  const categories = await categoriesService.findAll();

  res.status(200).json(categories);
};

module.exports = { create, findAll };
