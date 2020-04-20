import React from "react";
import { Link } from "@reach/router";

function MyNav() {
  return (
    <div className="nav">
      <ul>
        <Link to="/" className="nav-link">
          HOME
        </Link>
        <Link to="profile" className="nav-link">
          PROFILE
        </Link>
      </ul>
    </div>
  );
}

export default MyNav;
