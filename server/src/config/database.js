// config/database.js
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('furniture', 'root', 'Shubh@24', {
  host: 'localhost',
  dialect: 'mysql', // Use 'postgres', 'sqlite', or 'mssql' if needed
});

module.exports = sequelize;
