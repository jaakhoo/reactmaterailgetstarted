import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Protect(props) {
  const CMP = props.CMP;
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("token")) {
    } else {
      navigate("/login");
    }
  }, []);

  return (
    <div>
      <CMP />
    </div>
  );
}

export default Protect;
