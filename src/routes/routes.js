const express = require("express");

const createUser = require("../controllers/users/createUser");
const { getUsers, getUser } = require("../controllers/users/getUser");
const updateUser = require("../controllers/users/updateUser");
const deleteUser = require("../controllers/users/deleteUser");

const Router = express();

Router.post("/create/user", createUser);
Router.get("/users", getUsers);
Router.get("/user/:userId", getUser);
Router.put("/user/:userId", updateUser);
Router.delete("/user/:userId", deleteUser);

module.exports = Router;
