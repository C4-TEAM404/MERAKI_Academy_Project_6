import "./App.css";
import React, { useState, useEffect, createContext } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Login from "./Component/Login/Login";
import Register from "./Component/Register/Register";
export const UserContext = createContext();
function App() {
  const [login, setLogin] = useState({});
  return (
    <div className="App">
      <UserContext.Provider value={{ login, setLogin }}>
        <Routes>
          <Route path="/" />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        {/* <h1>MERAKI_Academy_Project_6</h1> */}
      </UserContext.Provider>
    </div>
  );
}

export default App;
