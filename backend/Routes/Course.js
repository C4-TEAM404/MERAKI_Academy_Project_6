//====================================================//Require
const express = require("express");
const courseRouter = express.Router();

//====================================================//Require Functions
const { CreateNewCourse } = require("../controllers/Course");

courseRouter.post("/new", CreateNewCourse);

//====================================================// module.exports
module.exports = courseRouter;
