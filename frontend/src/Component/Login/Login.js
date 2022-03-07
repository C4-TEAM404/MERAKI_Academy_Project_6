//====================================================//Require
import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../../App";

//CSS File
import "./Login.css";

const Login = () => {
  //====================================================//useState
  // const useeContext = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //====================================================//useEffect
  const { login, setLogin } = useContext(UserContext);
  const history = useNavigate();
  //====================================================//useEffect

  const emailHandler = (e) => {
    setEmail(e.target.value);
  };
  const passowrdHandler = (e) => {
    setPassword(e.target.value);
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:5000/login/", {
        email,
        password,
      });
      console.log(res);
      setEmail("");
      setPassword("");
      const result = {
        token: res.data.token,
        isLoggedIn: true,
        userId: res.data.userId[0].id,
        roleId: res.data.role,
        profileImage: res.data.userId[0].profileImage,
      };
      localStorage.setItem("token", result.token);
      localStorage.setItem("isLoggedIn", result.isLoggedIn);
      localStorage.setItem("userId", result.userId);
      localStorage.setItem("roleId", result.roleId);
      localStorage.setItem("profileImage", result.profileImage);
      setLogin(result);
      history("/register");
    } catch (err) {
      console.log(err);
    }
  };
  //====================================================//Return
  return (
    <div className="loginMainDiv">
      <div className="formLoginDiv">
        <form className="formLogin" onSubmit={submitHandler}>
          <input
            value={email}
            className="emailLogin"
            type="email"
            placeholder="Email"
            onChange={emailHandler}
          />

          <input
            value={password}
            className="passwordLogin"
            type="password"
            placeholder="Password"
            onChange={passowrdHandler}
          />

          <button type="submit"> Login </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
