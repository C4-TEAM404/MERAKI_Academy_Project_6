//====================================================//Require
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

//CSS File
import "./Introduction.css";

const Introduction = () => {
  return (
    <div className="introMainDiv">
      <div className="Part1">Part1</div>
      <div className="Part2">Part2</div>
      <div className="Part3">Part3</div>
      <div className="Part4">Part4</div>
      <div className="Part5">Part5</div>
    </div>
  );
};

export default Introduction;
