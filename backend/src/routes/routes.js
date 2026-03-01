const express = require("express");

const createUser = require("../controllers/users/createUser");
const { getUsers, getUser } = require("../controllers/users/getUser");
const updateUser = require("../controllers/users/updateUser");
const deleteUser = require("../controllers/users/deleteUser");
const createAddress = require("../controllers/address/createAddress");
const loginUser = require("../controllers/users/loginUser");
const authorization = require("../middleware/authorization");

const Router = express();
Router.get("/",(req, res)=>{
    res.send("hello")
})

Router.post("/create/user", createUser);
Router.get("/users", getUsers);
Router.get("/user/:userId", authorization, getUser);
Router.put("/user/:userId", authorization, updateUser);
Router.delete("/user/:userId", authorization, deleteUser);

Router.post("/login", loginUser);

//address
Router.post("/user/:userId/create/address", createAddress);

module.exports = Router;
