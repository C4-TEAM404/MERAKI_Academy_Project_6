//====================================================//Require
const express = require("express");
const courseRouter = express.Router();

//====================================================//Require Functions
const {
  CreateNewCourse,
  GetAllCourses,
  GetCourseByCategory,
} = require("../controllers/Course");

courseRouter.post("/new", CreateNewCourse);
courseRouter.get("/getall", GetAllCourses);
courseRouter.get("/getByC", GetCourseByCategory);

//====================================================// module.exports
module.exports = courseRouter;
