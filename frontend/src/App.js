import "./App.css";
import React, { useState, useEffect, createContext } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Login from "./Component/Login/Login";
import Register_Student from "./Component/Register_Student/Register_Student";
import Header from "./Component/Header/Header";
import Footer from "./Component/Footer/Footer";
import Introduction from "./Component/Introduction/Introduction";
import Register_Teacher from "./Component/Register_Teacher/Register_Teacher";

function App() {
  const [login, setLogin] = useState({});
  return (
    <div className="App">
      <Header />
      <UserContext.Provider value={{ login, setLogin }}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register_Student />} />
          <Route path="/registerteacher" element={<Register_Teacher />} />
          <Route path="/" element={<Introduction />} />
        </Routes>
        <Footer />
      </UserContext.Provider>
    </div>
  );
}

export default App;
export const UserContext = createContext();
