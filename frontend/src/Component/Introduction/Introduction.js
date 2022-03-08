//====================================================//Require
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

//CSS File
import "./Introduction.css";

const Introduction = () => {
  return (
    <div className="introMainDiv">
      <div className="Part1">
        <div className="part1Message">
          <div className="Message1">
            <div>
              <h1>HEX</h1> Training Organization
            </div>
            <div className="Message2">
              <br />
              we proviet best education system for you amet mauris lobortis
              mauris inceptos eget. Urna imperdiet.
            </div>
            <div className="Part1Btn">
              <button className="Part1Btn1">Our Courses</button>
              <button className="Part1Btn2">Contact Us </button>
            </div>
          </div>
        </div>
      </div>
      <div className="Part2">Part2</div>
      <div className="Part3">Part3</div>
      <div className="Part4">Part4</div>
      <div className="Part5">Part5</div>
    </div>
  );
};

export default Introduction;
