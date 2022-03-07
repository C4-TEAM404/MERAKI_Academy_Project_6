//====================================================//Require
const express = require("express");
const studentRouter = express.Router();

//====================================================//Require Functions
const {
  CreateNewStudent,
  GetAllStudents,
  GetStudentById,
  DeleteStudentById,
} = require("../controllers/Student");

studentRouter.post("/new", CreateNewStudent);
studentRouter.get("/getall", GetAllStudents);
studentRouter.get("/getbyid", GetStudentById);
studentRouter.delete("/deletebyid/:id", DeleteStudentById);

//====================================================// module.exports
module.exports = studentRouter;
