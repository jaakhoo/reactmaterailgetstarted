import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Protect(props) {
  const CMP = props.CMP;
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("Token")) {
    } else {
      navigate("/");
    }
  }, []);

  return <div></div>;
}

export default Protect;
