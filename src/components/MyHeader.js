import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../Assets/images/surfsecrets_logo.png";
import { fAuth } from "../config/fbConfig";

class MyHeader extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  handleSubmit = (e) => {
    e.preventDefault();
    fAuth.signOut();
  };

  render() {
    return (
      <div className="header">
        <img className="logo" alt="surf secrets logo" src={logo}></img>
        <Link to="/Signup">
          <button className="button">SIGNUP</button>
        </Link>
        <Link to="/Login">
          <button className="button">LOGIN</button>
        </Link>
        <button className="button" onClick={this.handleSubmit}>
          LOGOUT
        </button>
      </div>
    );
  }
}

export default MyHeader;
