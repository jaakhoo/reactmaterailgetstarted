import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./Page/LoginPage";

function Rout() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="" element={<LoginPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default Rout;
