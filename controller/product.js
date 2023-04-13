const fs = require("fs");
// const index = fs.readFileSync("index.html", "utf-8");
// const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
// const products = data.products;
// const mongoose=require('mongoose')
const model = require("../models/product");
const { default: mongoose } = require("mongoose");
const Product = model.Product;
// CREAT POST
exports.createProduct = async (req, res) => {
  const product = new Product(req.body);
  try {
    await product.save();
    console.log("Saved!");
    res.status(200).send(product);
  } catch (err) {
    res.status(401).send(err);
  }
};

exports.getAllProducts = async (req, res) => {
  try {
    const product = await Product.find();
    res.status(200).send(product);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.getProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const product = await Product.findById(id);
    res.status(200).send(product);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.replaceProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const product = await Product.findOneAndReplace({ _id: id }, req.body, {
      new: true,
    });
    res.status(201).json(product);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const product = await Product.findByIdAndUpdate({ _id: id }, req.body, {
      new: true,
    });
    res.status(200).json({ product, success: "Data Updated SuccessFully" });
  } catch (error) {
    res.status(400).json({ error: error, message: "Some Error Occured" });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const product = await Product.findByIdAndDelete({ _id: id });
    res.status(200).json({ product, message: "Deleted SuccessFully" });
  } catch (error) {
    res.status(400).json({ error: error, message: "Some Error Occured" });
  }
};
