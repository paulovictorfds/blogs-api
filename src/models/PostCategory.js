module.exports = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define(
    'PostCategory',
    {
      post_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
          model: 'BlogPost',
          key: 'id',
        },
      },
      category_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
          model: 'Category',
          key: 'id',
        },
      },
    },
    {
      tableName: 'posts_categories',
    }
  );

  return PostCategory;
};
