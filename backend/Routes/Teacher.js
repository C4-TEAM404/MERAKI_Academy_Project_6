//====================================================//Require
const express = require("express");
const teacherRouter = express.Router();

//====================================================//Require Functions
const { CreateNewTeacher } = require("../controllers/Teacher");

teacherRouter.post("/new", CreateNewTeacher);

//====================================================// module.exports
module.exports = teacherRouter;
