//====================================================//Require
const connection = require("../database/db");
const bcrypt = require("bcrypt");
//====================================================//CreateNewTeacher

const CreateNewTeacher = async (req, res) => {
  let { firstName, lastName, phone, email, password, roleId } = req.body;
  const query = `INSERT INTO teacher (firstName,lastName,phone,email,password,roleId) VALUES (?,?,?,?,?,?)`;
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

module.exports = {
  CreateNewTeacher,
  GetAllTeacher,
  GetTeacherById,
  DeleteTeacherById,
};
