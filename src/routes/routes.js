const express = require("express");
const controller = require("../controllers/controllers");
const data = require("../controllers/users/data");

const Router = express();

Router.get("/", controller);

Router.get("/data", data);

module.exports = Router;
