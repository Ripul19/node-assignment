const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const Value = sequelize.define('values', {
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
    deptName: {
        type: Sequelize.STRING,
        allowNull: false
    }
});


module.exports = Value;