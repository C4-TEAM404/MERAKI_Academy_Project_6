//====================================================//Require
import React, { useState, useContext } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../App";

//CSS File
import "./Header.css";

const Header = () => {
  const { login } = useContext(UserContext);
  return (
    <div className="HeaderMainDiv">
      <>
        <Navbar
          collapseOnSelect
          expand="lg"
          bg="white"
          variant="light"
          style={{ width: "100%" }}
        >
          <Container>
            <Navbar.Brand href="home">
              <img
                src="https://i.ibb.co/ZhmywL6/logo.png"
                height="70"
                alt=""
                loading="lazy"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav bgColor='dark'">
              <Nav className="ms-auto gap-5 navbar navbar-light bg-lignt ">
                <Link to="/home" alt="home">
                  Home
                </Link>
                <Link
                  to="#about"
                  alt="About"
                  onClick={(event) => (window.location.href = "#About")}
                >
                  {" "}
                  About
                </Link>
                <Link to="/Course" alt="Course">
                  Course
                </Link>
                <Link to="/login" alt="login">
                  login
                </Link>
                <Link to="/SRegister" alt="Register">
                  Register
                </Link>
                {login.roleId == 2 && (
                  <Link to="/createcourse" alt="createcourse">
                    Create Course
                  </Link>
                )}

                <Link to="/teacherpage" alt="teacherpage">
                  MyPage
                </Link>

              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    </div>
  );
};

export default Header;
