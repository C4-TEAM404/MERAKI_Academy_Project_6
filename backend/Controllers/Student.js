//====================================================//Require
const connection = require("../database/db");
const bcrypt = require("bcrypt");

//====================================================//CreateNewStudent

const CreateNewStudent = async (req, res) => {
  let { firstName, lastName, phone, email, password, roleId } = req.body;
  const query = `INSERT INTO student (firstName,lastName,phone,email,password,roleId) VALUES (?,?,?,?,?,?)`;
  password = await bcrypt.hash(password, 10);
  const data = [firstName, lastName, phone, email, password, roleId];
  connection.query(query, data, (err, result) => {
    if (!err) {
      return res.status(200).json({
        success: true,
        message: "SignUp Successfully",
        result: result,
      });
    } else {
      return res.status(409).json({
        success: false,
        message: " This account already exists",
      });
    }
  });
};
//====================================================//GetAllStudents
const GetAllStudents = async (req, res) => {
  const query = `SELECT * FROM student Where is_deleted=0`;
  connection.query(query, (err, result) => {
    if (!err) {
      return res.status(200).json({
        success: true,
        massage: `All the Students`,
        results: result,
      });
    } else {
      return res.status(500).json({
        success: false,
        massage: "server error",
        err: err,
      });
    }
  });
};
//====================================================//GetStudentById

const GetStudentById = async (req, res) => {
  const id = req.body.id;
  const query = `SELECT * FROM student Where id=? AND is_deleted=0`;
  const data = [id];
  connection.query(query, data, (err, result) => {
    if (!err) {
      return res.status(200).json({
        success: true,
        massage: `Student information`,
        results: result,
      });
    } else {
      return res.status(500).json({
        success: false,
        massage: "server error",
        err: err,
      });
    }
  });
};

module.exports = { CreateNewStudent, GetAllStudents, GetStudentById };
