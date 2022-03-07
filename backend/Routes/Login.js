//====================================================//Require
const express = require("express");
const LoginRouter = express.Router();
//====================================================//Require Functions

const {
  StudentLogin,
  TeacherLogin,
  AdminLogin,
} = require("../controllers/Login");

LoginRouter.get("/", StudentLogin, TeacherLogin, AdminLogin);

module.exports = LoginRouter;
