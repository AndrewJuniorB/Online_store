const {Sequelize} = require('sequelize');

module.exports = new Sequelize(
  // configurations
  process.env.DB_NAME,     // database name Online_store
  process.env.DB_USER,     // Our database user
  process.env.DB_PASSWORD, // Database password

  {
    dialect: 'postgres',
    host: process.env.DB_HOST, // Database locoalhost
    port: process.env.DB_PORT  // default postgres port
  }

);