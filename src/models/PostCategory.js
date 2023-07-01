module.exports = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define(
    'PostCategory',
    {
      postId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
          model: 'BlogPost',
          key: 'id',
        },
      },
      categoryId: {
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
      timestamps: false,
      underscored: true,
    }
  );

  PostCategory.associate = ({BlogPost, Category}) => {
    Category.belongsToMany(BlogPost, {
      through: PostCategory,
      foreignKey: 'categoryId',
      otherKey: 'postId',
      as: 'posts',
    })

    BlogPost.belongsToMany(Category, {
      through: PostCategory,
      foreignKey: 'postId',
      otherKey: 'categoryId',
      as: 'categories',
    });
  }

  return PostCategory;
};
