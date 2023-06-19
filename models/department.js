const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const Department = sequelize.define('departments', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
});


module.exports = Department;