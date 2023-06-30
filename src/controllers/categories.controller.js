const { categoriesService } = require('../services');

const create = async (req, res) => {
  const { name } = req.body;
  console.log(name);
  const { type, message } = await categoriesService.create(name);

  if (type) return res.status(type).json({ message });

  res.status(201).json({ token: message });
};

module.exports = { create };
