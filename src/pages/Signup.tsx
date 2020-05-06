import React, { Component } from "react";

import { Link } from "@reach/router";

import { connect } from "react-redux";
import { signupUser } from "../redux/actions/userActions";

class SignupPage extends Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      email: "",
      password: "",
      confirmPassword: "",
      handle: "",
      // add Loading animation
      errors: {},
    };
  }

  handleChange = (e: any) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  componentWillReceiveProps(nextProps: any) {
    if (nextProps.UI.errors) {
      this.setState({ errors: nextProps.UI.errors });
    }
  }

  handleSubmit = (e: any) => {
    e.preventDefault();
    const newUserData = {
      email: this.state.email,
      password: this.state.password,
      confirmPassword: this.state.confirmPassword,
      handle: this.state.handle,
    };
    this.props.signupUser(newUserData);
  };

  render() {
    const { errors } = this.state;
    return (
      <div className="signup">
        <h4>Signup</h4>
        <form noValidate className="signup-form" onSubmit={this.handleSubmit}>
          <div>
            <label>Email Address</label>
            <input
              className="input"
              id="email"
              name="email"
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
            {errors.email && <p>{errors.email}</p>}
          </div>
          <div>
            <label>Password</label>
            <input
              className="input"
              id="password"
              name="password"
              type="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
            {errors.password && <p>{errors.password}</p>}
          </div>
          <div>
            <label>Confirm Password</label>
            <input
              className="input"
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              value={this.state.confirmPassword}
              onChange={this.handleChange}
            />
            {errors.confirmPassword && <p>{errors.confirmPassword}</p>}
          </div>
          <div>
            <label>Username</label>
            <input
              className="input"
              id="handle"
              name="handle"
              type="text"
              value={this.state.handle}
              onChange={this.handleChange}
            />
            {errors.handle && <p>{errors.handle}</p>}
          </div>
          {errors.general && <p>{errors.general}</p>}
          <button className="button" type="submit">
            Signup
          </button>
          <br />
          <small>
            Already have an account? Login <Link to="/login">Here</Link>
          </small>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => ({
  user: state.user,
  UI: state.UI,
});

export default connect(mapStateToProps, { signupUser })(SignupPage);
