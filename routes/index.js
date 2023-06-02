const express = require('express');
const app = express();

// Parse JSON request bodies
app.use(express.json());

// Import routes
const invoiceRoutes = require('./invoiceRoutes');
const jobRoutes = require('./jobRoutes');
const receiptRoutes = require('./receiptRoutes');
const userRoutes = require('./userRoutes');
const jobCategoryRoutes = require('./jobCategoryRoutes');

// Use routes
app.use('/', invoiceRoutes);
app.use('/', jobRoutes);
app.use('/', receiptRoutes);
app.use('/', userRoutes);
app.use('/', jobCategoryRoutes);

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
