import React, { Component } from "react";
import { fAuth, fDb } from "../config/fbConfig";
import Posts from "../components/Posts";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedIn: false,
      data: [
        {
          title: "titeeel",
          content: "coneetn",
        },
      ],
    };
  }

  componentDidMount() {
    fDb
      .collection("posts")
      .get()
      .then((snapshot) => {
        const data = snapshot.docs.map((doc) => doc.data());
        this.setState({
          data: this.state.data.concat(data),
        });
      });
  }

  authEvent = fAuth.onAuthStateChanged((user) => {
    this.setState({
      loggedIn: user ? true : false,
    });
  });

  render() {
    if (this.state.loggedIn) {
      return (
        <div>
          {/* Conditional rendering when logged in/not */}
          <h1>Posts</h1>
          {this.state.data.map(({ title, content }) => (
            <Posts key={title} title={title} content={content} />
          ))}
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
