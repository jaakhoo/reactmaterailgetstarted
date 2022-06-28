import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./Page/LoginPage";
import Dashboard from "./Page/Dashboard";
import Header from "./Component/Header";
import Forgotpass from "./Page/Forgotpass";
import Register from "./Page/Register";
import MfaSetup from "./Page/MfaSetup";
import Protect from "./Component/Protect";
import UseCase from "./Page/UseCase";
import DemoReport from "./Page/DemoReport";
import Feedback from "./Page/Feedback";
function Rout() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/dashboard" element={<Protect CMP={Dashboard} />} />
          <Route path="/forgot" element={<Forgotpass />} />
          <Route path="/register" element={<Register />} />
          <Route path="/mfasetup" element={<MfaSetup />} />
          <Route path="/addusecase" element={<Protect CMP={UseCase} />} />
          <Route path="/demoreport" element={<Protect CMP={DemoReport} />} />
          <Route path="/feedback" element={<Protect CMP={Feedback} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default Rout;
