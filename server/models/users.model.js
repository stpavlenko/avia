const Sequelize = require('sequelize');
const { sequelize } = require('../database');

const Users = sequelize.define(
  'Users',
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    coinsValue: {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    energyValue: {
      type: Sequelize.INTEGER,
      defaultValue: 0,
      allowNull: false
    },
    lastOnline: {
      type: Sequelize.DATE,
      allowNull: true
    },
    daysOnline: {
      type: Sequelize.INTEGER,
      defaultValue: 0,
      allowNull: false
    },
    inviterId: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
    city: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
    comment: 'Пользователи и основная инфа об их аккаунте',
  }
);

module.exports = Users;