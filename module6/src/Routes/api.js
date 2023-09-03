const express = require("express");
const router = express.Router();

const blogController = require("../Controllers/blogController");
const blogDetailsController = require("../Controllers/blogDetailsController");
const commentController = require("../Controllers/commentController");
const messageController = require("../Controllers/messageController");
const portfolioController = require("../Controllers/portfolioController");
const productController = require("../Controllers/productController");
const profitController = require("../Controllers/profitController");
const projectController = require("../Controllers/projectController");
const serviceController = require("../Controllers/serviceController");
const titleController = require("../Controllers/titleController");

// blog routes ===
router.get("/blogs/create", blogController.create);
router.get("/blogs/read", blogController.read);
router.get("/blogs/delete", blogController.delete);
router.get("/blogs/update", blogController.update);

// blog details routes=== 
router.get("/blogDetail/create", blogDetailsController.create);
router.get("/blogDetail/read", blogDetailsController.read);
router.get("/blogDetail/delete", blogDetailsController.delete);
router.get("/blogDetail/update", blogDetailsController.update);

// comment routes=== 
router.get("/comment/create", commentController.create);
router.get("/comment/read", commentController.read);
router.get("/comment/delete", commentController.delete);
router.get("/comment/update", commentController.update);

// message routes=== 
router.get("/message/create", messageController.create);
router.get("/message/read", messageController.read);
router.get("/message/delete", messageController.delete);
router.get("/message/update", messageController.update);

// portfolio  routes===
router.get("/portfolio/create", portfolioController.create);
router.get("/portfolio/read", portfolioController.read);
router.get("/portfolio/delete", portfolioController.delete);
router.get("/portfolio/update", portfolioController.update);

// product routes===
router.get("/product/create", productController.create);
router.get("/product/read", productController.read);
router.get("/product/delete", productController.delete);
router.get("/product/update", productController.update);

// profit routes===
router.get("/profit/create", profitController.create);
router.get("/profit/read", profitController.read);
router.get("/profit/delete", profitController.delete);
router.get("/profit/update", profitController.update);

// project routes===
router.get("/project/create", projectController.create);
router.get("/project/read", projectController.read);
router.get("/project/delete", projectController.delete);
router.get("/project/update", projectController.update);

// service routes===
router.get("/service/create", serviceController.create);
router.get("/service/read", serviceController.read);
router.get("/service/delete", serviceController.delete);
router.get("/service/update", serviceController.update);

// title routes===
router.get("/title/create", titleController.create);
router.get("/title/read", titleController.read);
router.get("/title/delete", titleController.delete);
router.get("/title/update", titleController.update);


module.exports = router;
