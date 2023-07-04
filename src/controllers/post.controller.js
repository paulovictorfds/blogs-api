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
  const posts = await postService.findAll();

  res.status(200).json(posts);
};

const findById = async (req, res) => {
  const { id } = req.params;
  const post = await postService.findById(id);

  if (!post) return res.status(404).json({ message: 'Post does not exist' });

  res.status(200).json(post);
};

const update = async (req, res) => {
  const { id: postId } = req.params;
  const { id: userId } = req.user;
  const { title, content } = req.body;

  if (!title || !content) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }

  const { type, message } = await postService.update(postId, title, content, userId);

  if (type) return res.status(type).json({ message });

  res.status(200).json(await postService.findById(postId));
};

module.exports = { create, findAll, findById, update };
