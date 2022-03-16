//====================================================//Require
const express = require("express");
const studentRouter = express.Router();

//====================================================//Require Functions
const {
  CreateNewStudent,
  GetAllStudents,
  GetStudentById,
  DeleteStudentById,
  UpdateStudentById,
  GetStudent_CourseById,
} = require("../controllers/Student");

const { authentication } = require("../Middleware/authentication");

studentRouter.post("/new", CreateNewStudent);
studentRouter.get("/getall", GetAllStudents);
studentRouter.get("/getbyid", GetStudentById);
studentRouter.delete("/deletebyid/:id", DeleteStudentById);
studentRouter.put("/updatebyid", authentication, UpdateStudentById);
studentRouter.post("/getCourseById", GetStudent_CourseById);

//====================================================// module.exports
module.exports = studentRouter;
