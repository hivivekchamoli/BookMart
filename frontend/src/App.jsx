import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./home/Home";
import Courses from "./courses/Courses";
import Signup from "./components/Signup";
import Login from "./components/Login";

function App() {
  return (
    <div className="min-h-screen dark:bg-slate-900 dark:text-white">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<Courses />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;