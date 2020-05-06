import React, { Component } from "react";
import { Link } from "@reach/router";

import { connect } from "react-redux";
import { loginUser } from "../redux/actions/userActions";
class LoginPage extends Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      email: "",
      password: "",
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
    const userData = {
      email: this.state.email,
      password: this.state.password,
    };
    this.props.loginUser(userData);
  };

  /*

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
  }; */

  render() {
    const { errors } = this.state;
    return (
      <div className="signup">
        <h4>Login</h4>
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
          {errors.general && <p>{errors.general}</p>}
          <button className="button" type="submit">
            LOGIN
          </button>
          <br />
          <small>
            Don't have an account? sign up <Link to="/signup">Here</Link>
          </small>
        </form>
      </div>
    );
  }
}

/* LoginPage.propTypes = {
  loginUser: PropTypes.func.isRequired,
  user: PropTypes.func.isRequired,
  UI: PropTypes.func.isRequired,
}; */

const mapStateToProps = (state: any) => ({
  user: state.user,
  UI: state.UI,
});

const mapActionsToProps = {
  loginUser,
};

export default connect(mapStateToProps, mapActionsToProps)(LoginPage);
