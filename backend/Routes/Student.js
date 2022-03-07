//====================================================//Require
const express = require("express");
const studentRouter = express.Router();

//====================================================//Require Functions
const { TestFunction } = require("../controllers/Student");

studentRouter.get("/", TestFunction);
//====================================================// module.exports
module.exports = studentRouter;
