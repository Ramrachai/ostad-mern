const express = require("express");
const router = express.Router();

const blogController = require("../Controllers/blogController");
const commentController = require("../Controllers/commentController");
const messageController = require("../Controllers/messageController");
const portfolioController = require("../Controllers/portfolioController");
const productController = require("../Controllers/productController");

// blog routes ===
router.get("/blogs/create", blogController.create);
router.get("/blogs/read", blogController.read);
router.get("/blogs/delete", blogController.delete);
router.get("/blogs/update", blogController.update);

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


module.exports = router;
