const { userService } = require('../services');

const create = async (req, res) => {
  const { displayName, email, password, image } = req.body;

  const { type, message } = await userService.create(displayName, email, password, image);

  if (type) return res.status(type).json({ message });

  res.status(201).json({ token: message });
};

module.exports = { create };
