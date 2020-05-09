import React, { Component } from "react";
import axios from "axios";
import Post from "../components/post/Post";
import StaticProfile from "../components/profile/StaticProfile";

import { connect } from "react-redux";
import { getUserData } from "../redux/actions/dataActions";

class User extends Component<any, any> {
  state = {
    profile: null,
  };

  componentDidMount() {
    const url = window.location.href;
    const handle = url.slice(28);
    this.props.getUserData(handle);
    axios
      .get(`/user/${handle}`)
      .then((res) => {
        this.setState({
          profile: res.data.user,
        });
      })
      .catch((err) => console.log(err));
  }

  render() {
    const { posts, loading } = this.props.data;

    const postsMarkup = loading ? (
      <p>Loading data...</p>
    ) : posts === null ? (
      <p>No Posts from this User</p>
    ) : (
      posts.map((post: any) => <Post key={post.postId} post={post} />)
    );

    return (
      <div>
        <h1>Posts</h1>
        <h2>{postsMarkup}</h2>
        {this.state.profile === null ? (
          <p>Loading Profile...</p>
        ) : (
          <StaticProfile profile={this.state.profile} />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state: any) => ({
  data: state.data,
});

export default connect(mapStateToProps, { getUserData })(User);
