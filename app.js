var express = require("express");
var app = express();
require("./db");

var UserController = require("./user/UserController");
var AuthController = require("./auth/authController");
app.use("/api/auth", AuthController);
app.use("/users", UserController);
module.exports = app;

module.exports = app;
