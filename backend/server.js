//====================================================//Require
const express = require("express");
const PORT = 5000;
const app = express();
app.use(express.json());
const cors = require("cors");
app.use(cors());
//====================================================//import database
const connection = require("./database/db");

//====================================================// Import Routers
const adminRouter = require("./Routes/Admin");
const teacherRouter = require("./Routes/Teacher");
const studentRouter = require("./Routes/Student");
const courseRouter = require("./Routes/Course");
const roleRouter = require("./Routes/Role");
const LoginRouter = require("./Routes/Login");
//====================================================// Routes Middleware
app.use("/admin", adminRouter);
app.use("/teacher", teacherRouter);
app.use("/student", studentRouter);
app.use("/course", courseRouter);
app.use("/role", roleRouter);
app.use("/login", LoginRouter);

//====================================================// Handles any other endpoints [unassigned - endpoints]
app.use("*", (req, res) => res.status(404).json("NO content at this path"));

app.listen(PORT, () => {
  console.log(`SERVER WORKING ON PORT: ${PORT}`);
});
