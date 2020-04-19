import React, { Component } from "react";
import { fAuth, fDb } from "../config/fbConfig";

class ProfilePage extends Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      loggedIn: false,
    };
  }

  componentDidMount() {
    fDb
      .collection("users")
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          const data = doc.data();
          this.setState({
            username: data.username,
          });
        });

        /* this.setState({
          data: data[0],
          /* this.state.data.concat(data), */
        /* }); */
      });
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
          <h1>Logged in as {this.state.username}</h1>
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
