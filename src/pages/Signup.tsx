import React, { Component } from "react";

import { fAuth, fDb } from "../config/fbConfig";

const monthNames = [
  "JAN",
  "FEB",
  "MAR",
  "APR",
  "MAY",
  "JUN",
  "JUL",
  "AUG",
  "SEP",
  "OCT",
  "NOV",
  "DEC",
];

class Signup extends Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  // 5:30:00 - combine these event handlers

  handleEmailChange = (event: any) => {
    this.setState({
      email: event.target.value,
    });
  };

  handlePasswordChange = (event: any) => {
    this.setState({
      password: event.target.value,
    });
  };

  handleUsernameChange = (event: any) => {
    this.setState({
      username: event.target.value,
    });
  };

  handleSubmit = (e: any) => {
    e.preventDefault();
    alert(
      `Email: ${this.state.email} Password: ${this.state.password} Username: ${this.state.username}`
    );
    const email = this.state.email;
    const password = this.state.password;
    const username = this.state.username;
    fAuth
      .createUserWithEmailAndPassword(email, password)
      .then((cred) => {
        let d8 = new Date();
        return fDb
          .collection("users")
          .doc(cred?.user?.uid)
          .set({
            username: username,
            memberSince: `${d8.getDate()} ${
              monthNames[d8.getMonth()]
            } ${d8.getFullYear()}`,
          });
      })
      .then(() => {
        // reset form
        this.setState({
          username: "",
          email: "",
          password: "",
        });
      });
  };

  render() {
    return (
      <div className="signup">
        <h4>Sign up</h4>
        <form className="signup-form" onSubmit={this.handleSubmit}>
          <div>
            <label>Email Address</label>
            <input
              className="input"
              type="email"
              value={this.state.email}
              onChange={this.handleEmailChange}
            />
          </div>
          <div>
            <label>Password</label>
            <input
              className="input"
              type="password"
              value={this.state.password}
              onChange={this.handlePasswordChange}
            />
          </div>
          <div>
            <label>Username</label>
            <input
              className="input"
              type="text"
              value={this.state.username}
              onChange={this.handleUsernameChange}
            />
          </div>
          <button className="button" type="submit">
            SIGNUP
          </button>
        </form>
      </div>
    );
  }
}

export default Signup;
