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
module.exports = { CreateNewTeacher };
