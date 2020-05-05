import React, { Component } from "react";
import axios from "axios";
import Post from "../components/Post";

class HomePage extends Component<{}, { posts?: any }> {
  /* constructor(props: any) {
    super(props);

    this.state = {
      loggedIn: false,
      data: [
        {
          title: "title",
          content: "content",
        },
      ],
    };
  } */

  state: any = {
    posts: null,
  };

  componentDidMount() {
    axios
      .get("/posts")
      .then((res) => {
        console.log(res.data);
        this.setState({
          posts: res.data,
        });
      })
      .catch((err) => console.log(err));
    /*     fDb
      .collection("posts")
      .get()
      .then((snapshot) => {
        const data = snapshot.docs.map((doc) => doc.data());
        this.setState({
          data: this.state.data.concat(data),
        });
      }); */
  }

  /* authEvent = fAuth.onAuthStateChanged((user) => {
    this.setState({
      loggedIn: user ? true : false,
    });
  }); */

  render() {
    let recentPostsMarkup = this.state.posts ? (
      this.state.posts.map((post: any) => <Post post={post} />)
    ) : (
      <p>Loading...</p>
    );
    return (
      <div>
        {/* Conditional rendering when logged in/not */}
        <h1>Posts</h1>
        <h2>{recentPostsMarkup}</h2>
        {/* {this.state.posts.map(({ title, content }: any) => (
          <Posts key={title} title={title} content={content} />
        ))} */}
      </div>
    );
  }
}

export default HomePage;
