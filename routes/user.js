const express = require("express");
const userController = require("../controller/user");
const router = express.Router();
router
  .get("/", userController.getAllUsers)
  // Read GET /product/:id
  .get("/:id", userController.getUser)
  // create POST /products
  .post("/", userController.createUsers)
  //Update PUT/product/:id
  .put("/:id", userController.replaceUser)
  // Update PATCH /product/:id
  .patch("/:id", userController.updateUser)
  // Delete Delete /product:id
  .delete("/:id", userController.deleteUser);

exports.router = router;
