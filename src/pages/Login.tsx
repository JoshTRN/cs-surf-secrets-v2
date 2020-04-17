import React, { Component } from "react";

import firebase, { fAuth, fDb } from "../config/fbConfig";

class LoginPage extends Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

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

  handleSubmit = (e: any) => {
    e.preventDefault();
    alert(`${this.state.email}${this.state.password}`);
    const email = this.state.email;
    const password = this.state.password;
    fAuth.signInWithEmailAndPassword(email, password).then((cred) => {
      this.setState({
        email: "",
        password: "",
      });
    });
  };

  render() {
    return (
      <div className="signup">
        <h4>Login</h4>
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
          <button className="button" type="submit">
            LOGIN
          </button>
        </form>
      </div>
    );
  }
}

export default LoginPage;
