//====================================================//Require
import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../../App";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Swal from "sweetalert2";
import "bootstrap/dist/css/bootstrap.min.css";

//CSS File
import "./Login.css";

const Login = () => {
  //====================================================//useState
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //====================================================//useContext
  const { login, setLogin } = useContext(UserContext);
  const history = useNavigate();
  //====================================================//useEffect
  const ChangeDir = () => {
    history("/Course");
  };
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

      if (res.data.success) {
        setEmail("");
        setPassword("");
        const result = {
          token: res.data.token,
          isLoggedIn: true,
          userId: res.data.userId[0].id,
          firstName: res.data.userId[0].firstName,
          lastName: res.data.userId[0].lastName,
          roleId: res.data.role,
          profileImage: res.data.userId[0].profileImage,
        };
        setLogin(result);
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 1500,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
          },
        });

        Toast.fire({
          icon: "success",
          title: "Login successfully",
        });
        const myTimeout = setTimeout(ChangeDir, 500);

        localStorage.setItem("token", result.token);
        localStorage.setItem("isLoggedIn", result.isLoggedIn);
        localStorage.setItem("userId", result.userId);
        localStorage.setItem("roleId", result.roleId);
        localStorage.setItem("profileImage", result.profileImage);
      } else throw Error;
    } catch (error) {
      if (!error.response.data.success) {
        return console.log(error);
      }
    }
  };
  //====================================================//Return
  return (
    <div className="loginMainDiv">
      <div className="formLoginDiv">
        <Form onSubmit={submitHandler} className="d-grid gap-2">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label class="text-start">Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={emailHandler}
            />
            <Form.Text class="text-start">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={passowrdHandler}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="outline-primary" type="submit" size="lg">
            Login
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Login;
