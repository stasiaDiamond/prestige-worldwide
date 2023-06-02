const { QueryTypes } = require('sequelize');
const { sequelize } = require('../models');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    try {
      const jobs = await sequelize.query('SELECT * FROM Jobs', {
        type: QueryTypes.SELECT,
      });

      // Create invoices based on jobs
      const invoicesData = jobs.map((job) => ({
        services: job.JobCategory.name,
        date: job.date,
        address: job.address,
        client_name: job.client_name,
        work_description: 'Work description for the invoice',
        cost: job.price,
        expenses: 0, // Set expenses if applicable
        payment_due: new Date(),
        status: 'Pending', // Set the initial status
        createdAt: new Date(),
        updatedAt: new Date(),
      }));

      // Insert invoices into the database
      await queryInterface.bulkInsert('Invoices', invoicesData);

      console.log('Invoice seeds created successfully.');
    } catch (error) {
      console.error('Error creating invoice seeds:', error);
    }
  },
};
