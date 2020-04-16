import React, { Component } from "react";
import firebase, { fAuth, fDb } from "../config/fbConfig";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedIn: false,
    };
  }

  authEvent = fAuth.onAuthStateChanged((user) => {
    if (user) {
      this.setState({
        loggedIn: true,
      });
    } else {
      this.setState({
        loggedIn: false,
      });
    }
  });

  render() {
    if (this.state.loggedIn == true) {
      return (
        <div>
          {/* Conditional rendering when logged in/not */}
          <h1>Posts</h1>
        </div>
      );
    } else {
      return (
        <div>
          {/* Conditional rendering when logged in/not */}
          <h1>Login to see posts</h1>
        </div>
      );
    }
  }
}

export default Home;
