//====================================================//Require
const express = require("express");
const studentRouter = express.Router();

//====================================================//Require Functions
const { CreateNewStudent } = require("../controllers/Student");

studentRouter.post("/new", CreateNewStudent);
//====================================================// module.exports
module.exports = studentRouter;
