const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); 
const JobCategory = require('../models/JobCategory');

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

// Job.sync({ force: true })
//   .then(() => {
//     console.log('Job table created successfully.');
//   })
//   .catch((error) => {
//     console.error('Error creating Job table:', error);
//   });

module.exports = Job;
