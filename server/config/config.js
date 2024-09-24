require('dotenv').config();

module.exports = {
  development: {
    username: 'root',
    password: '',
    database: 'avia',
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
  },
  test: {
    username: 'root',
    password: null,
    database: 'database_test',
    host: '127.0.0.1',
    dialect: 'mysql'
  },
  production: {
    username: process.env.MYSQLUSER,
    password: process.env.MYSQLPASSWORD,
    database: process.env.MYSQLDATABASE,
    host: process.env.MYSQLHOST,
    dialect: 'mysql',
    port: process.env.MYSQLPORT || 3306
  }
};