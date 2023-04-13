const fs = require("fs");
const index = fs.readFileSync("index.html", "utf-8");
const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
const users = data.users;

exports.createUsers = (req, res) => {
  console.log(req.body);
  users.push(req.body);
  res.status(201).json(req.body);
};

exports.getAllUsers = (req, res) => {
  res.json(users);
};

exports.replaceUser = (req, res) => {
  const id = +req.params.id;
  const userIndex = users.findIndex((p) => p.id == id);
  users.splice(userIndex, 1, { ...req.body, id: id });

  res.status(201).json();
};
exports.getUser = (req, res) => {
  const id = +req.params.id;
  const user = users.find((p) => p.id == id);
  res.status(200).json(user);
};
exports.deleteUser = (req, res) => {
  const id = +req.params.id;
  const userIndex = users.findIndex((p) => p.id == id);
  const user = users[userIndex];
  users.splice(userIndex, 1, id);
  res.status(201).json(user);
};

exports.updateUser = (req, res) => {
  const id = +req.params.id;
  const userIndex = users.findIndex((p) => p.id == id);
  const user = users[userIndex];
  users.splice(userIndex, 1, { ...user, ...req.body });

  res.status(201).json();
};
