const { BlogPost, PostCategory, User, Category } = require('../models');

const create = async (title, content, categoryIds, userId) => {
  if (!title || !content || !categoryIds) {
    return { type: 400, message: 'Some required fields are missing' };
  }

  try {
    const newPost = await BlogPost.create({ title, content, userId });
    await PostCategory.bulkCreate(
      categoryIds.map((categoryId) => ({ postId: newPost.id, categoryId })),
    );

    return { type: null, message: newPost.dataValues };
  } catch (e) {
    return { type: 400, message: 'one or more "categoryIds" not found' };
  }
};

const findAll = async () => {
  const posts = await BlogPost.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });

  return { type: 200, message: posts };
};

module.exports = { create, findAll };
