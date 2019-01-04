const Sequelize = require('sequelize');
const { database } = require('./database');

const User = database.define('user', {
  email: {
    type: Sequelize.STRING
  },
  password: {
    type: Sequelize.STRING
  }
})

module.exports = { User };
