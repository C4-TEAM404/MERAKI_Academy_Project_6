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
} = require("../controllers/Student");

const { authentication } = require("../Middleware/authentication");

studentRouter.post("/new", CreateNewStudent);
studentRouter.get("/getall", GetAllStudents);
studentRouter.get("/getbyid", GetStudentById);
studentRouter.delete("/deletebyid/:id", DeleteStudentById);
studentRouter.put("/updatebyid", authentication, UpdateStudentById);

//====================================================// module.exports
module.exports = studentRouter;
