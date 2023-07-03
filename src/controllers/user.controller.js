const { userService } = require('../services');

const create = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  const { type, message } = await userService.create(displayName, email, password, image);

  if (type) return res.status(type).json({ message });

  res.status(201).json({ token: message });
};

const findAll = async (_req, res) => {
  const users = await userService.findAll();

  res.status(200).json(users);
};

const findById = async (req, res) => {
  const { id } = req.params;
  const user = await userService.findById(id);

  if (!user) return res.status(404).json({ message: 'User does not exist' });

  res.status(200).json(user);
};

module.exports = { create, findAll, findById };
