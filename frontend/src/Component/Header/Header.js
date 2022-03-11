//====================================================//Require
import React, { useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

//CSS File
import "./Header.css";

const Header = () => {
  return (
    <div className="HeaderMainDiv">
      {/* <div className="Logo">
        <img className="logoPic" src="https://i.ibb.co/FsHnLVc/logo.png" />
      </div>
      <div className="NavigationBar">
        <div className="option">
          <Link to="/" alt="Home">
            Home
          </Link>
        </div>
        <div className="option">
          <Link to="/" alt="About">
            About
          </Link>
        </div>
        <div className="option">
          <Link to="/Course" alt="Course">
            Course
          </Link>
        </div>
        <div className="option">
          <Link to="/Login" alt="Login">
            Login
          </Link>
        </div>
        <div className="option">
          <Link to="/Register" alt="Register">
            Register
          </Link>
        </div>
      </div> */}
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
                <Nav.Link href="home">Home</Nav.Link>
                <Nav.Link href="home">About</Nav.Link>
                <Nav.Link href="Course">Coures</Nav.Link>
                <Nav.Link href="login">login</Nav.Link>
                <Nav.Link href="Register">Register</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    </div>
  );
};

export default Header;
