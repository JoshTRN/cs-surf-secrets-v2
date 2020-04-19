import React, { Component } from "react";
import { fAuth } from "../config/fbConfig";

class ProfilePage extends Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      loggedIn: false,
    };
  }

  authEvent = fAuth.onAuthStateChanged((user) => {
    this.setState({
      loggedIn: user ? true : false,
    });
    this.setState({
      email: user?.email,
    });
  });

  render() {
    if (this.state.loggedIn) {
      return (
        <div>
          {/* Conditional rendering when logged in/not */}
          <h1>{this.state.email}</h1>
        </div>
      );
    } else {
      return (
        <div>
          {/* Conditional rendering when logged in/not */}
          <h1>Login to see profile</h1>
        </div>
      );
    }
  }
}
export default ProfilePage;
