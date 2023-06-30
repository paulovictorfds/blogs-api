const { userService } = require('../services');

const create = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  const { type, message } = await userService.create(displayName, email, password, image);

  if (type) return res.status(type).json({ message });

  res.status(201).json({ token: message });
};

const findAll = async (_req, res) => {
  const { type, message } = await userService.findAll();

  if (type) return res.status(type).json({ message });

  res.status(200).json(message);
};

const findById = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await userService.findById(id);

  if (type) return res.status(type).json({ message });

  res.status(200).json(message);
};

module.exports = { create, findAll, findById };
