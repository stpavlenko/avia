const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');
dotenv.config();

const sequelize = new Sequelize(
  process.env.MYSQLDATABASE,
  process.env.MYSQLUSER, 
  process.env.MYSQLPASSWORD, 
  {
    host: process.env.MYSQLHOST, 
    dialect: 'mysql',
    port: process.env.MYSQLPORT || 3306,
    logging: false,
  }
);

module.exports.sequelize = sequelize;

sequelize.authenticate()
  .then(() => {
    console.log('Success: --> DB connect');
  })
  .catch(err => {
    console.error('Error: --> DB does not connect', err);
  });