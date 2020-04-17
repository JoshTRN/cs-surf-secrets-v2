import React from "react";
import { Link } from "@reach/router";

import logo from "../Assets/images/surfsecrets_logo.png";

function MyHeader() {
  return (
    <div className="header">
      <img className="logo" src={logo}></img>
      <Link to="Signup" className="nav-link">
        SIGNUP
      </Link>
      <button className="button">LOGIN</button>
    </div>
  );
}

export default MyHeader;
