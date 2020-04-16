import React from "react";
import { Link } from "react-router-dom";

function MyHeader() {
  return (
    <div className="nav">
      <ul>
        <Link to="/">
          <li className="nav-link">HOME</li>
        </Link>
        <Link to="/profile">
          <li className="nav-link">PROFILE</li>
        </Link>
      </ul>
    </div>
  );
}

export default MyHeader;
