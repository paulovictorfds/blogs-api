const { userSchema } = require('./schemas');

const validateUser = (user) => {
  const { error } = userSchema.validate(user);

  if (error) return { type: 400, message: error.message };

  return { type: null, message: '' };
};

const validatePost = (postData) => {
  const { error } = userSchema.validate(postData);

  if (error) return { type: 400, message: 'Some required fields are missing' };

  return { type: null, message: '' };
};

module.exports = { validateUser, validatePost };
