const Sequelize = require('sequelize');

//add the password in pass field
const sequelize = new Sequelize('nodejs-assignment', 'root', 'Khurana1222@', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = sequelize;