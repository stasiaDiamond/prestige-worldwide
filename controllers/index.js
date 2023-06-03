const express = require("express");
const userController = require("./userController");
const jobController = require("./jobController");
const receiptController = require("./receiptController");
const invoiceController = require("./invoiceController");
const jobCategoryController = require("./jobCategoryController");

const router = express.Router();

// User routes
router.get("/users", userController.getUsers);
router.get("/users/:id", userController.getUser);
router.post("/users", userController.createUser);
router.put("/users/:id", userController.updateUser);
router.delete("/users/:id", userController.deleteUser);

// Job routes
router.get("/jobs", jobController.getJobs);
router.get("/jobs/:id", jobController.getJob);
router.post("/jobs", jobController.createJob);
router.put("/jobs/:id", jobController.updateJob);
router.delete("/jobs/:id", jobController.deleteJob);

// Receipt routes
router.get("/receipts", receiptController.getReceipts);
router.get("/receipts/:id", receiptController.getReceipt);
router.post("/receipts", receiptController.createReceipt);
router.put("/receipts/:id", receiptController.updateReceipt);
router.delete("/receipts/:id", receiptController.deleteReceipt);

// Invoice routes
router.get("/invoices", invoiceController.getInvoices);
router.get("/invoices/:id", invoiceController.getInvoice);
router.post("/invoices", invoiceController.createInvoice);
router.put("/invoices/:id", invoiceController.updateInvoice);
router.delete("/invoices/:id", invoiceController.deleteInvoice);

// Job category routes
router.get("/job-categories", jobCategoryController.getJobCategories);
router.get("/job-categories/:id", jobCategoryController.getJobCategory);
router.post("/job-categories", jobCategoryController.createJobCategory);
router.put("/job-categories/:id", jobCategoryController.updateJobCategory);
router.delete("/job-categories/:id", jobCategoryController.deleteJobCategory);

module.exports = router;
