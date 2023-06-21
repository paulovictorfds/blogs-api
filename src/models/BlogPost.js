module.exports = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define(
    'BlogPost',
    {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      title: DataTypes.STRING,
      content: DataTypes.STRING,
      userId: DataTypes.INTEGER,
      published: DataTypes.DATE,
      updated: DataTypes.DATE,
    },
    {
      tableName: 'blog_posts',
    }
  );

  return BlogPost;
};
