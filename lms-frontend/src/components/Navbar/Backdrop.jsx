import React from "react";
import "./Navbar.css";

function Backdrop({ close }) {
  return <div onClick={close} className="Backdrop"></div>;
}

export default Backdrop;
