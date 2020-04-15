import React from "react";
import { Link } from "react-router-dom";
import logo from "../Assets/images/surfsecrets_logo.png";

function MyHeader() {
  return (
    <div className="header">
      <img className="logo" src={logo}></img>
      <Link to="/Signup">
        <button className="button">SIGNUP</button>
      </Link>
      <button className="button">LOGIN</button>
    </div>
  );
}

export default MyHeader;
