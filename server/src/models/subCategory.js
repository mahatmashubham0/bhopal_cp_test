// models/subCategory.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Adjust path as needed
const Category = require('./category');

const SubCategory = sequelize.define('SubCategory', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  categoryId: {
    type: DataTypes.INTEGER,
    references: {
      model: Category,
      key: 'id',
    },
  },
}, {
  timestamps: true,
});

SubCategory.belongsTo(Category, { foreignKey: 'categoryId' });

module.exports = SubCategory;
