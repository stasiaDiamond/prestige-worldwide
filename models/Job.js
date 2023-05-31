const { DataTypes } = require('sequelize');
const sequelize = require('../database'); 
const JobCategory = require('./JobCategory');

const Job = sequelize.define('Job', {
  job_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  category_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  client_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  notes: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

Job.belongsTo(JobCategory, { foreignKey: 'category_id' });
JobCategory.hasMany(Job, { foreignKey: 'category_id' });

module.exports = Job;
