const Sequelize = require('sequelize');

//add the password in pass field
const sequelize = new Sequelize('nodejs-assignment', '<userid>', '<pass>', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = sequelize;