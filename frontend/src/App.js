import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect, createContext } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Login from "./Component/Login/Login";
import Register_Student from "./Component/Register_Student/Register_Student";
import Header from "./Component/Header/Header";
import Footer from "./Component/Footer/Footer";
import Register_Teacher from "./Component/Register_Teacher/Register_Teacher";
import Course_Details from "./Component/Course_Details/Course_Details";
import Create_Course from "./Component/Create_Course/Create_Course";
import Home from "./Component/Home/Home";
import Course from "./Component/Course/Course";
import Chat from "./Component/Chat/Chat";
import ClassRoom from "./Component/ClassRoom/ClassRoom";
import Payment from "./Component/Payment/Payment";

function App() {
  const [login, setLogin] = useState({});
  const [courseId, setCourseId] = useState({});

  return (
    <div className="App">
      <UserContext.Provider value={{ login, setLogin, setCourseId, courseId }}>
        <Header />
        {/* <Link to="/chat">chat</Link>
        <Link to="/video">video</Link> */}
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register_Student />} />
          <Route path="/registerteacher" element={<Register_Teacher />} />
          <Route path="/" element={<Home />} />
          <Route path="/coursedescryption" element={<Course_Details />} />
          <Route path="/createcourse" element={<Create_Course />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Course" element={<Course />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/video" element={<ClassRoom />} />
          <Route path="/Payment" element={<Payment />} />
        </Routes>
        <Footer />
      </UserContext.Provider>
    </div>
  );
}

export default App;
export const UserContext = createContext();
