import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./Page/LoginPage";
import Dashboard from "./Page/Dashboard";
import Header from "./Component/Header";
import Forgotpass from "./Page/Forgotpass";
import Register from "./Page/Register";
function Rout() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/forgot" element={<Forgotpass />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
}

export default Rout;
