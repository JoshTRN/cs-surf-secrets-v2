import React from "react";
import { Link } from "react-router-dom";

function MyHeader() {
  return (
    <div className="nav">
      <ul>
        <li>
          <Link to="/">
            <a className="nav-link">HOME</a>
          </Link>
        </li>
        <Link to="/profile">
          <li>
            <a className="nav-link">PROFILE</a>
          </li>
        </Link>
      </ul>
    </div>
  );
}

export default MyHeader;
