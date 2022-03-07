//====================================================//Require
import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../../App";

//CSS File
import "./Register.css";

const Register = () => {
  const { login } = useContext(UserContext);
  console.log(login);

  return <div>Register</div>;
};

export default Register;
