//====================================================//Require
import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
=======

import { useNavigate } from "react-router-dom";
import axios from "axios";

//CSS File
import "./Header.css";


const Header = () => {
  return (
    <div className="HeaderMainDiv">
      <div className="Logo">
        <img className="logoPic" src="https://i.ibb.co/FsHnLVc/logo.png" />
      </div>
      <div className="NavigationBar">
        <div className="option">
          <Link to="/Home" alt="Home">
            Home
          </Link>
        </div>
        <div className="option">
          <Link to="/About" alt="About">
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
      </div>
    </div>
  );
};

export default Header;
=======

const Header = () => {
  return (
    <div>Header</div>
  )
}

export default Header

