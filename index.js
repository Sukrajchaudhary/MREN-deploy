require("dotenv").config();
const express = require("express");
const cors = require("cors");
const server = express();
const mongoose = require("mongoose");
const productRouter = require("./routes/product");
const userRouter = require("./routes/user");
const path = require("path");

// dbconnection

main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(process.env.MONGO_URL);
  console.log("Connected SuccessFully");
}

// schem

// bodyParser
server.use(cors());
server.use(express.json());
server.use(express.urlencoded());
server.use(express.static(path.resolve(__dirname, process.env.PUBLIC_DIR)));
server.use("/products", productRouter.router);
server.use("/users", userRouter.router);
server.use("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "build", "index.html"));
});

server.listen(8080, () => {
  console.log("Server Running on port 8080");
});

// fGapMrJTgRxbgpBf

//mhiNsM5Mg7yFIUoA db-password
