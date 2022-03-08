//====================================================//Require

import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../../App";

//CSS File
import "./Register_Teacher.css";

const Register_Teacher = () => {
  //====================================================//useState

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [profileImage, setProfileImage] = useState(
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeBsPLKmhSxuLp7I5Ubv3rzYJMLhcFdTQmWQDoJmUDYQrQi2Ildz7pCBdFCIdq4NBYheg&usqp=CAU"
  );

  //====================================================//Functions

  const firstName_handler = (e) => {
    setFirstName(e.target.value);
  };
  const lastName_handler = (e) => {
    setLastName(e.target.value);
  };
  const phone_handler = (e) => {
    setPhone(e.target.value);
  };
  const email_handler = (e) => {
    setEmail(e.target.value);
  };
  const password_handler = (e) => {
    setPassword(e.target.value);
  };

  const loading = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "project4");

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/omarkataa/image/upload",
      {
        method: "POST",
        body: data,
      }
    );

    const file = await res.json();
    setProfileImage(file.secure_url);
    console.log(file.secure_url, profileImage);
  };

  const submit_Handler = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:5000/teacher/new", {
        firstName,
        lastName,
        phone,
        email,
        password,
        profileImage,
        roleId: 2,
      });

      console.log(res);
      setFirstName("");
      setLastName("");
      setPhone("");
      setEmail("");
      setPassword("");
      setProfileImage(
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeBsPLKmhSxuLp7I5Ubv3rzYJMLhcFdTQmWQDoJmUDYQrQi2Ildz7pCBdFCIdq4NBYheg&usqp=CAU"
      );
    } catch (err) {
      throw new Error(err);
    }
  };

  return (
    <div className="register_student-pageDiv">
      <div className="register_student-mainDiv">
        <div className="header">
          <h2 className="Register_header">Register</h2>
        </div>

        <div className="form_register_div">
          <form className="form_register" onSubmit={submit_Handler}>
            <div className="firsName_div">
              <input
                className="firsName_input"
                type="text"
                required
                onChange={firstName_handler}
                value={firstName}
                placeholder="Firat Name"
              />
            </div>

            <div className="lastName_div">
              <input
                className="lastName_input"
                type="text"
                required
                onChange={lastName_handler}
                value={lastName}
                placeholder="Last Name"
              />
            </div>
            <div className="phone_div">
              <input
                type="number"
                className="phone_input"
                required
                onChange={phone_handler}
                value={phone}
                placeholder="Phone"
              />
            </div>

            <div className="email_div">
              <input
                type="email"
                className="email_input"
                required
                onChange={email_handler}
                value={email}
                placeholder="Email"
              />
            </div>
            <div className="password_div">
              <input
                type="password"
                className="password_input"
                required
                onChange={password_handler}
                value={password}
                placeholder="Passowrd"
              />
            </div>
            <div className="profileImage_div">
              <input
                type="file"
                className="profileImage_input"
                onChange={loading}
              />
            </div>
            <div className="submit_button_div">
              <button className="submit_button">Register</button>
            </div>
          </form>
        </div>
      </div>

      <div className="show_Image">
        <img
          src={profileImage}
          alt="Profile_Picture"
          className="show_Image_img"
        />
      </div>
    </div>
  );
};

export default Register_Teacher;
