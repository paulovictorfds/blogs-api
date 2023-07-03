const { postService } = require('../services');

const create = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  const { id } = req.user;

  const { type, message } = await postService.create(title, content, categoryIds, id);
  console.log(message);
  if (type) return res.status(type).json({ message });

  res.status(201).json(message);
};

const findAll = async (_req, res) => {
  const { type, message } = await postService.findAll();
  res.status(type).json(message);
};

module.exports = { create, findAll };
