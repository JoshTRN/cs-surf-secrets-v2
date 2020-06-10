import React, { Component, Fragment } from "react";
import { Link } from "@reach/router";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <Fragment>
          <ul>
            <Link to="/" className="nav-link">
              SUPPORT
            </Link>
            <Link to="profile" className="nav-link">
              DONATE
            </Link>
          </ul>
        </Fragment>
      </div>
    );
  }
}

export default Footer;
