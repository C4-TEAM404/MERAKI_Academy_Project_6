//====================================================//Require

import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";

//CSS File
import "./Register_Student.css";

const Register_Student = () => {
  const history = useNavigate();
  //====================================================//useState

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [profileImage, setProfileImage] = useState(
    "https://media.istockphoto.com/vectors/avatar-person-user-icon-blue-version-vector-id1216255414?k=20&m=1216255414&s=170667a&w=0&h=I2yRx9b3GZl57PqZb0OumlZOVqMbyRNxmPEZ0NwxksM="
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
      const res = await axios.post("http://localhost:5000/student/new", {
        firstName,
        lastName,
        phone,
        email,
        password,
        profileImage,
        roleId: 3,
      });
      console.log(res, "-------------------");
      setFirstName("");
      setLastName("");
      setPhone("");
      setEmail("");
      setPassword("");
      setProfileImage(
        "https://media.istockphoto.com/vectors/avatar-person-user-icon-blue-version-vector-id1216255414?k=20&m=1216255414&s=170667a&w=0&h=I2yRx9b3GZl57PqZb0OumlZOVqMbyRNxmPEZ0NwxksM="
      );
    } catch (err) {
      throw new Error(err);
    }
  };

  return (
    <div className="register_student-pageDiv">
      <div className="register_student-mainDiv">
        <section class=" border-0">
          <div class="container h-100 border-0">
            <div class="row d-flex justify-content-center align-items-center h-100 border-0">
              <div class="col-lg-12 col-xl-11 border-0">
                <div class="card text-black border-0">
                  <div class="card-body p-md-5 border-0">
                    <div class="row justify-content-center border-0">
                      <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1 border-0">
                        <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4 border-0">
                          Sign up
                        </p>

                        <form class="mx-1 mx-md-4" onSubmit={submit_Handler}>
                          <div class="d-flex flex-row align-items-center mb-4">
                            <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                            <div class="form-outline flex-fill mb-0">
                              <input
                                type="text"
                                id="form3Example1c"
                                class="form-control"
                                required
                                onChange={firstName_handler}
                                value={firstName}
                              />
                              <label class="form-label" for="form3Example1c">
                                First Name{" "}
                              </label>
                            </div>
                          </div>
                          <div class="d-flex flex-row align-items-center mb-4">
                            <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                            <div class="form-outline flex-fill mb-0">
                              <input
                                type="text"
                                id="form3Example1c"
                                class="form-control"
                                required
                                onChange={lastName_handler}
                                value={lastName}
                              />
                              <label class="form-label" for="form3Example1c">
                                Last Name
                              </label>
                            </div>
                          </div>
                          <div class="d-flex flex-row align-items-center mb-4">
                            <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                            <div class="form-outline flex-fill mb-0">
                              <input
                                type="text"
                                id="form3Example1c"
                                class="form-control"
                                required
                                onChange={phone_handler}
                                value={phone}
                              />
                              <label class="form-label" for="form3Example1c">
                                Phone{" "}
                              </label>
                            </div>
                          </div>

                          <div class="d-flex flex-row align-items-center mb-4">
                            <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                            <div class="form-outline flex-fill mb-0">
                              <input
                                type="email"
                                id="form3Example3c"
                                class="form-control"
                                required
                                onChange={email_handler}
                                value={email}
                              />
                              <label class="form-label" for="form3Example3c">
                                Your Email
                              </label>
                            </div>
                          </div>

                          <div class="d-flex flex-row align-items-center mb-4">
                            <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                            <div class="form-outline flex-fill mb-0">
                              <input
                                type="password"
                                id="form3Example4c"
                                class="form-control"
                                required
                                onChange={password_handler}
                                value={password}
                              />
                              <label class="form-label" for="form3Example4c">
                                Password
                              </label>
                            </div>
                          </div>
                          <div class="d-flex flex-row align-items-center mb-4">
                            <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                            <div class="form-outline flex-fill mb-0">
                              <input
                                type="file"
                                class="form-control"
                                id="customFile"
                                onChange={loading}
                              />

                              <label class="form-label" for="form3Example4c">
                                Upload Profile Image
                              </label>
                            </div>
                          </div>

                          <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                            <button
                              type="submit"
                              class="btn btn-primary btn-lg"
                            >
                              Register
                            </button>
                          </div>
                        </form>
                      </div>
                      <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                        <img
                          src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                          class="img-fluid"
                          alt="Sample image"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* 

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
            <div className="linkto_teacher_register">
              <Link to="/registerteacher" alt="Register_Teacher">
                Register as a Teacher
              </Link>
            </div>
            <div className="submit_button_div">
              <button className="submit_button">Register</button>
            </div>
          </form>
        </div> */}
      </div>

      {/* <div className="show_Image">
        <img
          src={profileImage}
          alt="Profile_Picture"
          className="show_Image_img"
        />
      </div> */}
    </div>
  );
};

export default Register_Student;
