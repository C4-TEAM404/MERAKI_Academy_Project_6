//====================================================//Require
const express = require("express");
const courseRouter = express.Router();

//====================================================//Require Functions
const {
  CreateNewCourse,
  GetAllCourses,
  GetCourseByCategory,
  GetCourseById,
  GetCourseByTitle,
  DeleteCourseById,
  UpdateCourseById,
} = require("../controllers/Course");

courseRouter.post("/new", CreateNewCourse);
courseRouter.get("/getall", GetAllCourses);
courseRouter.get("/getByC", GetCourseByCategory);
courseRouter.get("/getByid/:id", GetCourseById);
courseRouter.get("/getByT", GetCourseByTitle);
courseRouter.delete("/deletebyid/:id", DeleteCourseById);
courseRouter.put("/updatebyid/:id", UpdateCourseById);

//====================================================// module.exports
module.exports = courseRouter;
