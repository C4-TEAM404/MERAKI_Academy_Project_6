//====================================================//Require
const connection = require("../database/db");
const bcrypt = require("bcrypt");
//====================================================//CreateNewTeacher

const CreateNewTeacher = async (req, res) => {
  let { firstName, lastName, phone, email, password, profileImage, roleId } =
    req.body;
  const query = `INSERT INTO teacher (firstName,lastName,phone,email,password,profileImage,roleId) VALUES (?,?,?,?,?,?,?)`;
  password = await bcrypt.hash(password, 10);
  const data = [
    firstName,
    lastName,
    phone,
    email,
    password,
    profileImage,
    roleId,
  ];
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
//====================================================//GetAllTeacher
const GetAllTeacher = async (req, res) => {
  const query = `SELECT * FROM teacher Where is_deleted=0`;
  connection.query(query, (err, result) => {
    if (!err) {
      return res.status(200).json({
        success: true,
        massage: `All the Teachers`,
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
//====================================================//GetTeacherById

const GetTeacherById = async (req, res) => {
  const id = req.body.id;
  const query = `SELECT * FROM teacher Where id=? AND is_deleted=0`;
  const data = [id];
  connection.query(query, data, (err, result) => {
    if (!err) {
      return res.status(200).json({
        success: true,
        massage: `Teacher information`,
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

//====================================================//DeleteTeacherById

const DeleteTeacherById = (req, res) => {
  const id = req.params.id;
  const query = `UPDATE teacher SET is_deleted=1  WHERE id=?`;
  const data = [id];
  connection.query(query, data, (err, result) => {
    if (!err) {
      return res.status(200).json({
        success: true,
        message: `Succeeded to delete teacher with id => ${id}`,
        result: result,
      });
    } else {
      return res.status(404).json({
        success: false,
        message: `The teacher => ${id} is not found`,
      });
    }
  });
};

//====================================================//UpdateTeacherById

const UpdateTeacherById = (req, res) => {
  userId = req.token.userId;
  const { firstName, lastName, phone, email, password, profileImage } =
    req.body;
  const query = `SELECT password FROM teacher WHERE id= ?`;
  const data = [userId];
  connection.query(query, data, async (err, result) => {
    if (!err) {
      const CheckPassword = await bcrypt.compare(password, result[0].password);
      if (CheckPassword) {
        const query = `UPDATE teacher SET firstName=?, lastName=? , phone=?, email=?,profileImage=? WHERE id= ?`;
        const data = [firstName, lastName, phone, email, profileImage, userId];
        connection.query(query, data, (err, result) => {
          if (!err) {
            return res.status(201).json({
              success: true,
              massage: `Teacher updated`,
              results: result,
            });
          } else {
            return res.status(500).json({
              success: false,
              massage: "Server Error",
              err: err,
            });
          }
        });
      } else {
        return res.status(404).json({
          success: false,
          message: "Your Password is Wrong",
        });
      }
    }
  });
};

//====================================================//GetTeacher_CourseById

const GetTeacher_CourseById = (req, res) => {
  const id = req.body.id;
  const query = `select * from course WHERE is_deleted=0 and teacher_Id=?`;
  const data = [id];
  connection.query(query, data, (err, result) => {
    if (!err) {
      return res.status(200).json({
        success: true,
        message: `Succeeded to get teacher_course with id => ${id}`,
        result: result,
      });
    } else {
      return res.status(404).json({
        success: false,
        message: `The teacher_course => ${id} is not found`,
      });
    }
  });
};

module.exports = {
  CreateNewTeacher,
  GetAllTeacher,
  GetTeacherById,
  DeleteTeacherById,
  UpdateTeacherById,
  GetTeacher_CourseById,
};
