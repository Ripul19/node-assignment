const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const finalData = sequelize.define('finalData', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
  deptId: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  roll: {
    type: Sequelize.STRING,
    allowNull: false
  },
  radioOption: {
    type: Sequelize.STRING,
    allowNull: false
  },
  brandSD: {
    type: Sequelize.STRING,
    allowNull: false
  },
  date: {
    type: Sequelize.DATE,
    allowNull: false
  },
  dayEngineer: {
    type: Sequelize.STRING,
    allowNull: false
  },
  inCharge: {
    type: Sequelize.STRING,
    allowNull: false
  },
  item: {
    type: Sequelize.STRING,
    allowNull: false
  },
  unit: {
    type: Sequelize.STRING,
    allowNull: false
  },
  code: {
    type: Sequelize.STRING,
    allowNull: false
  },
  radioOption2: {
    type: Sequelize.STRING,
    allowNull: false
  },
  shiftTime: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

module.exports = finalData;