import React, { Component } from "react";
import { fAuth, fDb } from "../config/fbConfig";

const logo = require("./moon.PNG");

class ProfilePage extends Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      loggedIn: false,
    };
  }

  fDbCall() {
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
      });
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
    this.fDbCall();
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
          <img src={logo} alt="logo" className="logo" />
          <h1>{this.state.username}</h1>
          <h4>Member Since</h4>
          <h6>20 April 2020</h6>
          <h4>Profile Views</h4>
          <h6>238</h6>
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
