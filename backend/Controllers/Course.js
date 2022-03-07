//====================================================//Require
const connection = require("../database/db");
const bcrypt = require("bcrypt");
//====================================================//CreateNewCourse

const CreateNewCourse = async (req, res) => {
  let {
    Title,
    Description,
    Price,
    Language,
    Schedule,
    Author,
    Requirements,
    Category,
    roleId,
  } = req.body;
  const query = `INSERT INTO course (Title,Description,Price,Language,Schedule,Author,Requirements,Category,roleId) VALUES (?,?,?,?,?,?,?,?,?)
  `;
  const data = [
    Title,
    Description,
    Price,
    Language,
    Schedule,
    Author,
    Requirements,
    Category,
    roleId,
  ];
  console.log(Title);
  connection.query(query, data, (err, result) => {
    console.log("result", result);
    if (!err) {
      return res.status(200).json({
        success: true,
        message: "Create Course Successfully",
        result: result,
      });
    } else {
      return res.status(409).json({
        success: false,
        message: " This Course already exists",
      });
    }
  });
};
module.exports = { CreateNewCourse };
