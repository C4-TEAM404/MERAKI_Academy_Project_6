import "./App.css";
import React, { useState, useEffect, createContext } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Login from "./Component/Login/Login";
import Register_Student from "./Component/Register_Student/Register_Student";
import Header from "./Component/Header/Header";
import Footer from "./Component/Footer/Footer";
import Introduction from "./Component/Introduction/Introduction";
import Register_Teacher from "./Component/Register_Teacher/Register_Teacher";
import Course_Details from "./Component/Course_Details/Course_Details";
import Create_Course from "./Component/Create_Course/Create_Course";

function App() {
  const [login, setLogin] = useState({});
  const [courseId, setCourseId] = useState({});
  return (
    <div className="App">
      <Header />
      <UserContext.Provider value={{ login, setLogin, courseId, setCourseId }}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register_Student />} />
          <Route path="/registerteacher" element={<Register_Teacher />} />
          <Route path="/" element={<Introduction />} />
          <Route path="/coursedescryption" element={<Course_Details />} />
          <Route path="/createcourse" element={<Create_Course />} />
        </Routes>
        <Footer />
      </UserContext.Provider>
    </div>
  );
}

export default App;
export const UserContext = createContext();
