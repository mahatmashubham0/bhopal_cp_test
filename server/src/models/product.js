// models/product.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Adjust path as needed
const Category = require('./category');
const SubCategory = require('./subCategory');

const Product = sequelize.define('Product', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  categoryId: {
    type: DataTypes.INTEGER,
    references: {
      model: Category,
      key: 'id',
    },
  },
  subCategoryId: {
    type: DataTypes.INTEGER,
    references: {
      model: SubCategory,
      key: 'id',
    },
  },
}, {
  timestamps: true,
});

Product.belongsTo(Category, { foreignKey: 'categoryId' });
Product.belongsTo(SubCategory, { foreignKey: 'subCategoryId' });

module.exports = Product;
