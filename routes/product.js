const express = require("express");
const productController = require("../controller/product");
const router = express.Router();
router
  .get("/", productController.getAllProducts)
  // Read GET /product/:id
  .get("/:id", productController.getProduct)
  // create POST /products
  .post("/", productController.createProduct)
  //Update PUT/product/:id
  .put("/:id", productController.replaceProduct)
  // Update PATCH /product/:id
  .patch("/:id", productController.updateProduct)
  // Delete Delete /product:id
  .delete("/:id", productController.deleteProduct);

exports.router = router;
