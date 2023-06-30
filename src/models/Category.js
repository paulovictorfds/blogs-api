module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define(
    'Category',
    {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: {
        type: DataTypes.STRING,
      },
    },
    {
      tableName: 'categories',
      underscored: true,
      timestamps: false
    }
  );

  return Category;
};
