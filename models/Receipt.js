const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); 

const Receipt = sequelize.define('Receipt', {
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

// Receipt.sync({ force: true })
//   .then(() => {
//     console.log('Receipt table created successfully.');
//   })
//   .catch((error) => {
//     console.error('Error creating Receipt table:', error);
//   });
  
module.exports = Receipt;
