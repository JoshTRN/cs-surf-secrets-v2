import React from "react";
import logo from "../Assets/images/surfsecrets_logo.png";

function MyHeader() {
  return (
    <div className="header">
      <img className="logo" src={logo}></img>
      <button className="button">SIGNUP</button>
      <button className="button">LOGIN</button>
    </div>
  );
}

export default MyHeader;
